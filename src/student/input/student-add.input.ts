import { InputType, Field } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

@InputType()
export class StudentAddInput {
  @Field()
  @IsNotEmpty()
  lastName: string;

  @Field()
  @IsNotEmpty()
  firstName: string;

  @Field()
  @IsNotEmpty()
  fullname: string;

  @Field()
  @IsNotEmpty()
  class: string;

  @Field()
  @IsNotEmpty()
  phone: number;
}
