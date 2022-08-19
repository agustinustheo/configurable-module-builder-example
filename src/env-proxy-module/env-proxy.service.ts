import { Inject, Injectable } from '@nestjs/common';
import { EnvProxyModuleOptions, MODULE_OPTIONS_TOKEN } from './env-proxy.module-definition';

require('dotenv').config(); // eslint-disable-line

@Injectable()
export class EnvProxyService {
  public readonly env: NodeJS.ProcessEnv;
  constructor(@Inject(MODULE_OPTIONS_TOKEN) private options: EnvProxyModuleOptions) {
    this.env = process.env;
    options.exclude.forEach(val => {
      delete this.env[val];
    });
  }
}