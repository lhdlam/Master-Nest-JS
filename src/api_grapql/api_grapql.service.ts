import { Injectable } from '@nestjs/common';
import { CreateApiGrapqlInput } from './dto/create-api_grapql.input';
import { UpdateApiGrapqlInput } from './dto/update-api_grapql.input';

@Injectable()
export class ApiGrapqlService {
  create(createApiGrapqlInput: CreateApiGrapqlInput) {
    return 'This action adds a new apiGrapql';
  }

  findAll() {
    return `This action returns all apiGrapql`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apiGrapql`;
  }

  update(id: number, updateApiGrapqlInput: UpdateApiGrapqlInput) {
    return `This action updates a #${id} apiGrapql`;
  }

  remove(id: number) {
    return `This action removes a #${id} apiGrapql`;
  }
}
