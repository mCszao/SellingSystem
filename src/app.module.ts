import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/interface/user.entity';
import { createTableUser1678941849551 as migrateUser } from './migration/1678941849551-create-table-user';
import { createTableState1678944104732 as migrateState } from './migration/1678944104732-create-table-state';
import { createTableCity1678944183972 as migrateCity } from './migration/1678944183972-create-table-city';
import { createTableAdress1678944201592 as migrateAddress } from './migration/1678944201592-create-table-adress';
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
      entities: [UserEntity],
      migrations: [migrateUser],
      migrationsRun: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
