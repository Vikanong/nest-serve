import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // 将实体类注册到 TypeOrmModule 中
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
