import { Module } from '@nestjs/common';
import { ApiModule } from './api-module/api.module';

@Module({
  imports: [ApiModule],
})
export class AppModule {}
