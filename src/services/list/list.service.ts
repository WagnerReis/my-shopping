import { Injectable } from '@nestjs/common';
import { CreateListDto } from 'src/http/dto/list/create-list.dto';
import { UpdateListDto } from 'src/http/dto/list/update-list.dto';
import { ListRepository } from 'src/repositories/list/list.repository';

@Injectable()
export class ListService {
  constructor(private readonly listRepository: ListRepository) {}

  async create(createListDto: CreateListDto) {
    return await this.listRepository.create(createListDto);
  }

  async findAll() {
    return await this.listRepository.findAll();
  }

  async findOne(id: string) {
    return await this.listRepository.findOne(id);
  }

  async update(id: string, updateListDto: UpdateListDto) {
    return await this.listRepository.update(id, updateListDto);
  }

  async remove(id: string) {
    return await this.listRepository.delete(id);
  }
}
