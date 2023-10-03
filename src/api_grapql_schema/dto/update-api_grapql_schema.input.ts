import { CreateApiGrapqlSchemaInput } from './create-api_grapql_schema.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateApiGrapqlSchemaInput extends PartialType(CreateApiGrapqlSchemaInput) {
  id: number;
}
