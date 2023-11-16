import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    // 使用 @InjectRepository(User) 注入实数据库实体
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    const res = await this.userRepository.find();
    const _res = res.map(item => {
      return {
        id: item.id,
        user: item.user,
        create_time: item.create_time.getTime(),
      }
    })
    return _res
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async add(createUserDto: CreateUserDto) {
    const param = {
      user: createUserDto.user,
      create_time: new Date(),
    };
    const res = await this.userRepository.save(param);
    return res
  }
}
