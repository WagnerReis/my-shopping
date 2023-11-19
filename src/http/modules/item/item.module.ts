import { Module } from '@nestjs/common';
import { ItemService } from '../../../services/item/item.service';
import { ItemController } from '../../controllers/item/item.controller';
import { ItemRepository } from 'src/repositories/item/item.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ItemController],
  providers: [ItemService, ItemRepository],
})
export class ItemModule {}
