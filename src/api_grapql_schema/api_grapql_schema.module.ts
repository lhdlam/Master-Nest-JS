import { Module } from '@nestjs/common';
import { ApiGrapqlSchemaService } from './api_grapql_schema.service';
import { ApiGrapqlSchemaResolver } from './api_grapql_schema.resolver';

@Module({
  providers: [ApiGrapqlSchemaResolver, ApiGrapqlSchemaService]
})
export class ApiGrapqlSchemaModule {}
