import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateListDto } from '../../http/dto/list/update-list.dto';
import { CreateListDto } from '../../http/dto/list/create-list.dto';

@Injectable()
export class ListRepository {
  constructor(private readonly prismaClient: PrismaService) {}

  async delete(id: string) {
    return await this.prismaClient.list.delete({ where: { id } });
  }

  async findOne(id: string) {
    return await this.prismaClient.list.findFirst({ where: { id } });
  }

  async findAll() {
    return await this.prismaClient.list.findMany();
  }

  async update(id: string, body: UpdateListDto) {
    try {
      const existingList = await this.prismaClient.list.findFirst({
        where: { id },
      });

      if (!existingList) {
        throw new HttpException('List not found.', HttpStatus.BAD_REQUEST);
      }

      return await this.prismaClient.list.update({
        where: { id },
        data: {
          title: body.title,
        },
      });
    } catch (error) {
      console.error(`Error updating user: ${error.message ?? error}`);
      throw new HttpException(
        'Error updating user.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(body: CreateListDto) {
    try {
      return await this.prismaClient.list.create({
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
