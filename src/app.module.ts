import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/class/user.entity';
import { createTableUser1678941849551 as migrateUser } from './migration/1678941849551-create-table-user';
import { createTableState1678944104732 as migrateState } from './migration/1678944104732-create-table-state';
import { createTableCity1678944183972 as migrateCity } from './migration/1678944183972-create-table-city';
import { createTableAdress1678944201592 as migrateAddress } from './migration/1678944201592-create-table-adress';
import { insertIntoState1679115176970 as migrateInsertState } from './migration/1679115176970-insert-into-state';
import { insertIntoCity1679115185576 as migrateInsertCity } from './migration/1679115185576-insert-into-city';
import { StateModule } from './state/state.module';
import { StateEntity } from './state/class/state.entity';
import { CityModule } from './city/city.module';
import { cityEntity } from './city/class/city.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.development.env.local',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'selling-system',
      host: 'localhost',
      password: 'root',
      port: 5432,
      username: 'postgres',
      entities: [UserEntity, StateEntity, cityEntity],
      migrations: [
        migrateUser,
        migrateState,
        migrateCity,
        migrateAddress,
        migrateInsertState,
        migrateInsertCity,
      ],
      migrationsRun: true,
    }),
    UserModule,
    StateModule,
    CityModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
