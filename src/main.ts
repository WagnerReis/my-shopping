import { NestFactory } from '@nestjs/core';
import { AppModule } from './bootstrap/app.module';
import { ValidationPipe } from './http/validation/pipe/validation.pipe';
import { setupSwagger } from './config/swagger/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  setupSwagger(app);

  await app.listen(3000);
}
bootstrap();
