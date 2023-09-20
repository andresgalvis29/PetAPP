import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { JwtGeneratorService } from './utils/jwt-generator/jwt-generator.service';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          secret: configService.jwtSecret,
          signOptions: {
            expiresIn: '10d',
          },
        };
      },
    }),
  ],
  providers: [JwtGeneratorService],
  exports: [JwtGeneratorService],
})
export class CommonModule {}
