import { CreateApiGrapqlInput } from './create-api_grapql.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateApiGrapqlInput extends PartialType(CreateApiGrapqlInput) {
  @Field(() => Int)
  id: number;
}
