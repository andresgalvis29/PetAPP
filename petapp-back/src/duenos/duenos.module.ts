import { Mascota } from './../database/entities/mascota.entity';
import { Dueno } from './../database/entities/dueno.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DuenosController } from './controllers/duenos.controller';
import { DuenosService } from './services/duenos.service';

@Module({
	imports: [ TypeOrmModule.forFeature([ Dueno, Mascota ]) ],
	controllers: [ DuenosController ],
	providers: [DuenosService]
})
export class DuenosModule {}
