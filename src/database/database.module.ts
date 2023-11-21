import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({})
export class DatabaseModule {
    static forRoot(): DynamicModule {
        return {
            module: DatabaseModule,
            imports: [
                TypeOrmModule.forRoot({
                    type: 'mysql',
                    // host: 'mysql-container',
                    host: '192.168.110.207',
                    port: 3306,
                    username: 'root',
                    password: '123456',
                    database: 'test_db',
                    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                    synchronize: true,
                    extra: {
                        insecureAuth: true, // 为了向 MySQL 8 发送老的身份验证插件请求
                    },
                }),
            ],
        };
    }
}
