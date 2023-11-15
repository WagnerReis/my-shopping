import { Module } from '@nestjs/common';
import { UserModule } from 'src/http/modules/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
