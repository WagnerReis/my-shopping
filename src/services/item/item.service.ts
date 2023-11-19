import { Injectable } from '@nestjs/common';
import { CreateItemDto } from '../../http/dto/item/create-item.dto';
import { UpdateItemDto } from '../../http/dto/item/update-item.dto';
import { ItemRepository } from '../../repositories/item/item.repository';

@Injectable()
export class ItemService {
  constructor(private readonly itemRepository: ItemRepository) {}

  async create(createItemDto: CreateItemDto) {
    return await this.itemRepository.create(createItemDto);
  }

  async findAll() {
    return this.itemRepository.findAll();
  }

  async findOne(id: string) {
    return this.itemRepository.findOne(id);
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    return this.itemRepository.update(id, updateItemDto);
  }

  async remove(id: string) {
    return this.itemRepository.delete(id);
  }
}
