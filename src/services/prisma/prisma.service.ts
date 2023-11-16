import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    try {
      await this.$connect();
      console.log('PrismaService initialized successfully!');
    } catch (error) {
      console.error('Failed to initialize PrismaService:', error);
    }
  }

  async onModuleDestroy() {
    console.log('PrismaService is finishing...');
    try {
      await this.$disconnect();
      console.log('PrismaService disconnect successfully!');
    } catch (error) {
      console.error('Failed to disconnect PrismaService:', error);
    }
  }
}
