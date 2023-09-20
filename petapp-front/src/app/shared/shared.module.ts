import { PacientesService } from './services/pacientes.service';
import { CamaraService } from './services/camara.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [],
	imports: [ CommonModule ],
	providers: [ CamaraService, PacientesService ]
})
export class SharedModule {}
