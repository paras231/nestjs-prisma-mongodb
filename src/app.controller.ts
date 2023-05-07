import {
  Controller,
  Post,
  Get,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User as UserModel} from '@prisma/client';

@Controller('user')
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}
@Post('register')
  async signupUser(
    @Body() userData: { name?: string; email: string; birthYear?: number}
  ): Promise<UserModel> {
    return this.appService.createUser(userData);
  }
  @Get('all/users')
  async getAllusers():Promise<UserModel[]>{
   return this.appService.findAllUsers()
  }
}