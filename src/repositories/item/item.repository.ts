import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto } from '../../http/dto/item/create-item.dto';
import { UpdateItemDto } from '../../http/dto/item/update-item.dto';

@Injectable()
export class ItemRepository {
  constructor(private readonly prismaClient: PrismaService) {}

  async delete(id: string) {
    return await this.prismaClient.item.delete({ where: { id } });
  }

  async findOne(id: string) {
    return await this.prismaClient.item.findFirst({ where: { id } });
  }

  async findAll() {
    return await this.prismaClient.item.findMany();
  }

  async update(id: string, body: UpdateItemDto) {
    try {
      const existingItem = await this.prismaClient.item.findFirst({
        where: { id },
      });

      if (!existingItem) {
        throw new HttpException('Item not found.', HttpStatus.BAD_REQUEST);
      }

      return await this.prismaClient.item.update({
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

  async create(body: CreateItemDto) {
    try {
      return await this.prismaClient.item.create({
        data: { ...body },
      });
    } catch (error) {
      throw new HttpException(
        'Failed to create user: ' + error.message,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
