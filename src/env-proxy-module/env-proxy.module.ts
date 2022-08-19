import { Global, Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './env-proxy.module-definition';
import { EnvProxyService } from './env-proxy.service';

@Global()
@Module({
  providers: [EnvProxyService],
  exports: [EnvProxyService],
})
export class EnvProxyModule extends ConfigurableModuleClass {}