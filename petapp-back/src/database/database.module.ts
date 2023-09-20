import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          type: 'postgres',
          host: configService.postgres.host,
          port: configService.postgres.port,
          username: configService.postgres.user,
          password: configService.postgres.password,
          database: configService.postgres.dbName,
          synchronize: true,
          entities: ['dist/**/*.entity{.ts,.js}'],
          migrationsTableName: 'migrations',
          migrations: ['src/database/migrations/*.ts'],
          cli: {
            migrationsDir: 'src/database/migrations',
          },
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
