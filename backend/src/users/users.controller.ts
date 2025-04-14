import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/user/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('/remove/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post('request-password-reset')
  async requestPasswordReset(
    @Body() requestPasswordResetDto: { email: string },
  ) {
    await this.usersService.requestPasswordReset(requestPasswordResetDto.email);
    return {
      message:
        'If an account with that email exists, a reset link has been sent',
    };
  }

  @Post('reset-password')
  async resetPassword(
    @Body() resetPasswordDto: { token: string; newPassword: string },
  ) {
    await this.usersService.resetPassword(
      resetPasswordDto.token,
      resetPasswordDto.newPassword,
    );
    return {
      message:
        'Password successfully reset. You can now login with your new password.',
    };
  }
}
