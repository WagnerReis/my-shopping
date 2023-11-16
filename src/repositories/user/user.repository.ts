import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/http/dto/user/create-user.dto';
import { UpdateUserDto } from 'src/http/dto/user/update-user.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaClient: PrismaService) {}

  async delete(id: string) {
    return await this.prismaClient.user.delete({ where: { id } });
  }

  async findOne(id: string) {
    return await this.prismaClient.user.findFirst({ where: { id } });
  }

  async findAll() {
    return await this.prismaClient.user.findMany();
  }

  async update(id: string, body: UpdateUserDto) {
    try {
      const existingUser = await this.prismaClient.user.findFirst({
        where: { id },
      });

      if (!existingUser) {
        throw new HttpException('User not found.', HttpStatus.BAD_REQUEST);
      }

      return await this.prismaClient.user.update({
        where: { id },
        data: { ...body },
      });
    } catch (error) {
      console.error(`Error updating user: ${error.message ?? error}`);
      throw new HttpException(
        'Error updating user.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(body: CreateUserDto) {
    try {
      const existingUser = await this.prismaClient.user.findFirst({
        where: { email: body.email },
      });

      if (existingUser) throw new Error('Email already exists');

      const hashedPassword = await bcrypt.hash(body.password, 10);

      return await this.prismaClient.user.create({
        data: {
          ...body,
          password: hashedPassword,
        },
      });
    } catch (error) {
      throw new HttpException(
        'Failed to create user: ' + error.message,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
