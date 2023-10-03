import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ApiGrapqlSchemaService } from './api_grapql_schema.service';
import { CreateApiGrapqlSchemaInput } from './dto/create-api_grapql_schema.input';
import { UpdateApiGrapqlSchemaInput } from './dto/update-api_grapql_schema.input';

@Resolver('ApiGrapqlSchema')
export class ApiGrapqlSchemaResolver {
  constructor(private readonly apiGrapqlSchemaService: ApiGrapqlSchemaService) {}

  @Mutation('createApiGrapqlSchema')
  create(@Args('createApiGrapqlSchemaInput') createApiGrapqlSchemaInput: CreateApiGrapqlSchemaInput) {
    return this.apiGrapqlSchemaService.create(createApiGrapqlSchemaInput);
  }

  @Query('apiGrapqlSchema')
  findAll() {
    return this.apiGrapqlSchemaService.findAll();
  }

  @Query('apiGrapqlSchema')
  findOne(@Args('id') id: number) {
    return this.apiGrapqlSchemaService.findOne(id);
  }

  @Mutation('updateApiGrapqlSchema')
  update(@Args('updateApiGrapqlSchemaInput') updateApiGrapqlSchemaInput: UpdateApiGrapqlSchemaInput) {
    return this.apiGrapqlSchemaService.update(updateApiGrapqlSchemaInput.id, updateApiGrapqlSchemaInput);
  }

  @Mutation('removeApiGrapqlSchema')
  remove(@Args('id') id: number) {
    return this.apiGrapqlSchemaService.remove(id);
  }
}
