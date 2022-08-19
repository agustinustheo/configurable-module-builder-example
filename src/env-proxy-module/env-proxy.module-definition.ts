import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface EnvProxyModuleOptions {
  exclude: string[];
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<EnvProxyModuleOptions>({
    moduleName: 'EnvProxy',
  })
    .build();
