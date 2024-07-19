import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('dogs')
export class DogsController {
  @UseGuards(AuthGuard('jwt'))
  @Get(':name')
  findOne(@Param() params: { name: string }) {
    if (params.name !== 'mila') return null;
    return `This action returns a sweet dog.`;
  }
}
