import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthService } from '../../../services/auth/auth.service';
import { AuthGuard } from '../../guards/auth.guard';
import { Public } from 'src/decorators/public.decorator';
import { SignInDto } from 'src/http/dto/auth/auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login' })
  @ApiBody({
    description: 'Credentials for user login',
    type: SignInDto,
  })
  @ApiResponse({
    status: 200,
    description: 'User authenticated successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Error: Bad Request',
  })
  @Public()
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  @ApiOperation({ summary: 'Get user profile' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'User profile retrieved successfully',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  getProfile(@Request() req) {
    return req.user;
  }
}
