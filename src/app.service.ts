import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async createUser(userData): Promise<User> {
    const result = await this.prisma.user.create({ data: userData });
    return result;
  }
  async findAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users; 
  }
}
