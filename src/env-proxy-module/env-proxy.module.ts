import { Global, Module } from '@nestjs/common';
import { EnvProxyService } from './env-proxy.service';

@Global()
@Module({
  providers: [EnvProxyService],
  exports: [EnvProxyService],
})
export class EnvProxyModule {}