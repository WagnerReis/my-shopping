import { Module } from '@nestjs/common';
import { CategoryService } from '../../../services/category/category.service';
import { CategoryController } from '../../controllers/category/category.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoryRepository } from 'src/repositories/category/category.repository';

@Module({
  imports: [PrismaModule],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
})
export class CategoryModule {}
