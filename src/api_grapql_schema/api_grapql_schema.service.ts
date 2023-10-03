import { Injectable } from '@nestjs/common';
import { CreateApiGrapqlSchemaInput } from './dto/create-api_grapql_schema.input';
import { UpdateApiGrapqlSchemaInput } from './dto/update-api_grapql_schema.input';

@Injectable()
export class ApiGrapqlSchemaService {
  create(createApiGrapqlSchemaInput: CreateApiGrapqlSchemaInput) {
    return 'This action adds a new apiGrapqlSchema';
  }

  findAll() {
    return `This action returns all apiGrapqlSchema`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apiGrapqlSchema`;
  }

  update(id: number, updateApiGrapqlSchemaInput: UpdateApiGrapqlSchemaInput) {
    return `This action updates a #${id} apiGrapqlSchema`;
  }

  remove(id: number) {
    return `This action removes a #${id} apiGrapqlSchema`;
  }
}
