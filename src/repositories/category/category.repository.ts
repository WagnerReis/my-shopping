import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateCategoryDto } from 'src/http/dto/category/update-category.dto';
import { CreateCategoryDto } from 'src/http/dto/category/create-category.dto';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prismaClient: PrismaService) {}

  async delete(id: string) {
    return await this.prismaClient.category.delete({ where: { id } });
  }

  async findOne(id: string) {
    return await this.prismaClient.category.findFirst({ where: { id } });
  }

  async findAll() {
    return await this.prismaClient.category.findMany();
  }

  async update(id: string, body: UpdateCategoryDto) {
    try {
      const existingCategory = await this.prismaClient.category.findFirst({
        where: { id },
      });

      if (!existingCategory) {
        throw new HttpException('User not found.', HttpStatus.BAD_REQUEST);
      }

      return await this.prismaClient.category.update({
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

  async create(body: CreateCategoryDto) {
    try {
      const existingCategory = await this.prismaClient.category.findFirst({
        where: { name: body.name },
      });

      if (existingCategory) throw new Error('Category already exists');

      return await this.prismaClient.category.create({
        data: {
          ...body,
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
