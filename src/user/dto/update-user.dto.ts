import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty({ message: 'id不能为空' }) // 验证是否为空
    id: number;
}
