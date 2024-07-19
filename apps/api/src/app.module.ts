import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DogsController } from './dogs/dogs.controller';

@Module({
  imports: [AuthModule],
  controllers: [AppController, DogsController],
  providers: [AppService],
})
export class AppModule {}
