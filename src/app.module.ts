import { Module } from '@nestjs/common';
import { ApiModule } from './api-module/api.module';
import { EnvProxyModule } from './env-proxy-module/env-proxy.module';

@Module({
  imports: [ApiModule, EnvProxyModule.registerAsync({
    useFactory: async () => {
      return {
        exclude: [
          "DATA"
        ]
      }
    }
  })],
})
export class AppModule {}
