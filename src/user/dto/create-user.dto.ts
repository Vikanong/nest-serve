import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsString } from "class-validator"; // 引入验证器

@Injectable()
export class CreateUserDto {
    @IsString({ message: '用户名必须是字符串' }) // 验证是否是字符串
    @IsNotEmpty({ message: '用户名不能为空' }) // 验证是否为空
    user: string; // 用户名
}
