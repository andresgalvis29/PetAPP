import { Medicamento } from './../database/entities/medicamento.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicamentosController } from './controllers/medicamentos.controller';
import { MedicamentosService } from './services/medicamentos.service';

@Module({
	imports: [ TypeOrmModule.forFeature([ Medicamento ]) ],
	controllers: [ MedicamentosController ],
	providers: [ MedicamentosService ]
})
export class MedicamentosModule {}
