import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../../http/dto/category/create-category.dto';
import { UpdateCategoryDto } from '../../http/dto/category/update-category.dto';
import { CategoryRepository } from 'src/repositories/category/category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryRepository.create(createCategoryDto);
  }

  async findAll() {
    return await this.categoryRepository.findAll();
  }

  async findOne(id: string) {
    return await this.categoryRepository.findOne(id);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryRepository.update(id, updateCategoryDto);
  }

  async remove(id: string) {
    return await this.categoryRepository.delete(id);
  }
}
