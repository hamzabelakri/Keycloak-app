import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {  Roles } from 'nest-keycloak-connect';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/product')
  @Roles({ roles: ['product'] })
  getpublic(): string {
    return `${this.appService.getHello()} from product`;
  }

}