import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome(): String {
    const welcome = 'Bienvenido a la PostAPI :)';
    return welcome;
  }
}