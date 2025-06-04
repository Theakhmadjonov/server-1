import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(1);
    return 'Hello to Server-1';
  }
}
