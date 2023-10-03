import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateApiGrapqlInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
