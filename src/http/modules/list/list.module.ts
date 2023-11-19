import { Module } from '@nestjs/common';
import { ListService } from '../../../services/list/list.service';
import { ListController } from '../../controllers/list/list.controller';
import { ListRepository } from 'src/repositories/list/list.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ListController],
  providers: [ListService, ListRepository],
})
export class ListModule {}
