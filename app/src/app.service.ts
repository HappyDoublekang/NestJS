import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { data: [BigInt('1234567890123456789012345678901234567890')] };
    // return new Date();
  }
}
