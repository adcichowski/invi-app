import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthJwtGuard } from 'src/auth/guards/auth.guard';

@Controller('users')
export class UsersController {
  @Get()
  @UseGuards(AuthJwtGuard)
  findAllUsers() {
    return { hi: 'hi' };
  }
}
