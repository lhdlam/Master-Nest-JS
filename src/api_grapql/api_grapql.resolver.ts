import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ApiGrapqlService } from './api_grapql.service';
import { ApiGrapql } from './entities/api_grapql.entity';
import { CreateApiGrapqlInput } from './dto/create-api_grapql.input';
import { UpdateApiGrapqlInput } from './dto/update-api_grapql.input';

@Resolver(() => ApiGrapql)
export class ApiGrapqlResolver {
  constructor(private readonly apiGrapqlService: ApiGrapqlService) {}

  @Mutation(() => ApiGrapql)
  createApiGrapql(@Args('createApiGrapqlInput') createApiGrapqlInput: CreateApiGrapqlInput) {
    return this.apiGrapqlService.create(createApiGrapqlInput);
  }

  @Query(() => [ApiGrapql], { name: 'apiGrapql' })
  findAll() {
    return this.apiGrapqlService.findAll();
  }

  @Query(() => ApiGrapql, { name: 'apiGrapql' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.apiGrapqlService.findOne(id);
  }

  @Mutation(() => ApiGrapql)
  updateApiGrapql(@Args('updateApiGrapqlInput') updateApiGrapqlInput: UpdateApiGrapqlInput) {
    return this.apiGrapqlService.update(updateApiGrapqlInput.id, updateApiGrapqlInput);
  }

  @Mutation(() => ApiGrapql)
  removeApiGrapql(@Args('id', { type: () => Int }) id: number) {
    return this.apiGrapqlService.remove(id);
  }
}
