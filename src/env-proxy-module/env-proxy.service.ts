import { Injectable } from '@nestjs/common';

require('dotenv').config(); // eslint-disable-line

@Injectable()
export class EnvProxyService {
  public readonly env: NodeJS.ProcessEnv;
  constructor() {
    this.env = process.env;
  }
}