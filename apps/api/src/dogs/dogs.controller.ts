import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('dogs')
export class DogsController {
  @Get()
  all() {
    return 'hi';
  }
  @Get(':name')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param() params: { name: string }) {
    if (params.name !== 'milka') return null;
    return { opinion: `This action returns a sweet dog.` };
  }
}
