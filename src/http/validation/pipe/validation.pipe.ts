import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ValidationError, validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;

    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = new metatype();
    Object.assign(object, value);

    const errors: ValidationError[] = await validate(object);

    if (errors.length > 0) {
      throw new BadRequestException(this.formatErrors(errors));
    }

    return value;
  }

  private toValidate(metatype: any): boolean {
    const types: any[] = [String, Boolean, Number, Array, Object];
    return !types.find((type) => metatype === type);
  }

  private formatErrors(errors: ValidationError[]): string {
    return errors
      .map((error) => {
        for (const constraint in error.constraints) {
          if (error.constraints.hasOwnProperty(constraint)) {
            return error.constraints[constraint];
          }
        }
      })
      .join(', ');
  }
}
