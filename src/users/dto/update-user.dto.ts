import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    // This class can be extended with additional properties if needed
    // For now, it inherits all properties from CreateUserDto as optional
}