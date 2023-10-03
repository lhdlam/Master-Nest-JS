import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { StudentAddInput } from './student-add.input';

@InputType()
export class StudentEditInput extends PartialType(
  OmitType(StudentAddInput, ['class', 'phone']),
) {}
