import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/interface/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'selling-system',
      host: 'localhost',
      password: 'root',
      port: 5432,
      username: 'postgres',
      synchronize: true,
      entities: [UserEntity],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
