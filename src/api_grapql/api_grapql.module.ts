import { Module } from '@nestjs/common';
import { ApiGrapqlService } from './api_grapql.service';
import { ApiGrapqlResolver } from './api_grapql.resolver';

@Module({
  providers: [ApiGrapqlResolver, ApiGrapqlService]
})
export class ApiGrapqlModule {}
