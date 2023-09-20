import { MedicamentosCita } from '@database/entities/medicamentos-cita.entity';
import { Medicamento } from './../database/entities/medicamento.entity';
import { Mascota } from './../database/entities/mascota.entity';
import { Cita } from './../database/entities/cita.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitasController } from './controllers/citas.controller';
import { CitasService } from './services/citas.service';

@Module({
	imports: [ TypeOrmModule.forFeature([ Cita, Mascota, Medicamento, MedicamentosCita ]) ],
	controllers: [ CitasController ],
	providers: [ CitasService ]
})
export class CitasModule {}
