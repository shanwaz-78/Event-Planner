import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { Vendor } from 'src/vendors/entities/vendor.entity';
import { EmailService } from 'src/Strategy/email.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User, Review, Vendor])],
  controllers: [UsersController],
  providers: [UsersService, EmailService],
})
export class UsersModule {}
