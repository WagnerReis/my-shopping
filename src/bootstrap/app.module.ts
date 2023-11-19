import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/http/modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/http/modules/auth/auth.module';
import { CategoryModule } from 'src/http/modules/category/category.module';
import { ListModule } from 'src/http/modules/list/list.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot(),
    CategoryModule,
    ListModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
