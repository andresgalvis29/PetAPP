import { Dueno } from './../database/entities/dueno.entity';
import { Mascota } from './../database/entities/mascota.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MascotasController } from './controllers/mascotas.controller';
import { MascotasService } from './services/mascotas.service';

@Module({
	imports: [ TypeOrmModule.forFeature([ Mascota, Dueno ]) ],
	controllers: [ MascotasController ],
	providers: [ MascotasService ]
})
export class MascotasModule {}
