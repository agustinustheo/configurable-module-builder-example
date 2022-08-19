import { Injectable } from '@nestjs/common';
import { EnvProxyService } from '../env-proxy-module/env-proxy.service';

@Injectable()
export class ApiService {
  constructor(private readonly envProxy: EnvProxyService) {}

  getHello(): string {
    return this.envProxy.env.DATA ?? this.envProxy.env.DATA2;
  }
}
