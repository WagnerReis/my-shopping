import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/http/modules/prisma/prisma.module';
import { UserModule } from 'src/http/modules/user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
