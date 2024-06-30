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
                    host: 'mysql-container',
                    port: 3306,
                    username: 'root',
                    password: '123456',
                    database: 'test_db',
                    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                    synchronize: true,
                    extra: {
                        insecureAuth: true,
                    },
                    driver: require('mysql2'),
                }),
            ],
        };
    }
}
