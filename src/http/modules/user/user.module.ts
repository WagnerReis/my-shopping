import { Module } from '@nestjs/common';
import { UserService } from '../../../services/users/user.service';
import { UserController } from '../../controllers/user/user.controller';
import { UserRepository } from 'src/repositories/users/user.repository';
import { PrismaModule } from '../../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
