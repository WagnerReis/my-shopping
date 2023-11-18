import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/http/modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/http/modules/auth/auth.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
