import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository, MoreThan } from 'typeorm';
import { Vendor } from '../vendors/entities/vendor.entity';
import { Review } from '../reviews/entities/review.entity';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { EmailService } from '../Strategy/email.strategy';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Vendor)
    private readonly vendorsRepository: Repository<Vendor>,
    @InjectRepository(Review)
    private readonly reviewsRepository: Repository<Review>,
    private readonly emailService: EmailService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return await this.usersRepository.save(user);
  }

  async findAll(includeDeleted: boolean = false): Promise<User[]> {
    if (includeDeleted) {
      return await this.usersRepository.find({
        withDeleted: true,
        relations: ['vendors', 'reviews'],
      });
    }
    return await this.usersRepository.find({
      relations: ['vendors', 'reviews'],
    });
  }

  async findOne(id: number, includeDeleted: boolean = false): Promise<User> {
    const options = includeDeleted ? { withDeleted: true } : {};
    const user = await this.usersRepository.findOne({
      where: { userId: id },
      relations: ['vendors', 'reviews'],
      ...options,
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({
      where: { email },
      relations: ['vendors', 'reviews'],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    const updated = this.usersRepository.merge(user, updateUserDto);

    if (updateUserDto.password) {
      updated.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    return await this.usersRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);

    await this.vendorsRepository.update(
      { user: { userId: id } },
      { user: null },
    );

    const result = await this.usersRepository.softDelete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }

  async requestPasswordReset(email: string): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { email } });

    if (!user) {
      return;
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 3600000);

    await this.setPasswordResetToken(user.userId, resetToken, resetTokenExpiry);
    await this.emailService.sendPasswordResetEmail(user.email, resetToken);
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    const user = await this.usersRepository.findOne({
      where: {
        resetPasswordToken: token,
        resetPasswordExpiry: MoreThan(new Date()),
      },
    });

    if (!user) {
      throw new NotFoundException('Invalid or expired reset token');
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordToken = null;
    user.resetPasswordExpiry = null;

    await this.usersRepository.save(user);
  }

  async setPasswordResetToken(
    userId: number,
    token: string,
    expiry: Date,
  ): Promise<void> {
    await this.usersRepository.update(userId, {
      resetPasswordToken: token,
      resetPasswordExpiry: expiry,
    });
  }

  async clearPasswordResetToken(userId: number): Promise<void> {
    await this.usersRepository.update(userId, {
      resetPasswordToken: null,
      resetPasswordExpiry: null,
    });
  }
}
