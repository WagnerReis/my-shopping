import { Module } from '@nestjs/common';
import { UserService } from '../../../services/user/user.service';
import { UserController } from '../../controllers/user/user.controller';
import { UserRepository } from 'src/repositories/user/user.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
