import { Module } from '@nestjs/common';
import { AuthService } from '../../../services/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '../../controllers/auth/auth.controller';
import { UserModule } from '../user/user.module';
import { jwtConstants } from 'src/helpers/auth/contants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../../guards/auth.guard';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60000s' },
    }),
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
