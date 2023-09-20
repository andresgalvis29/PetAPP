import { MedicamentosCita } from './medicamentos-cita.entity';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from 'typeorm';
@Entity({
	name: 'medicamentos'
})
export class Medicamento {
	@PrimaryGeneratedColumn('uuid') id: string;

	@Column({ type: 'varchar', length: 250 })
	nombre: string;

	@Column({ type: 'varchar', length: 20, name: 'unidad_medida' })
	unidadMedida: string;

	@Column({ type: 'varchar', length: 50 })
	tipo: string;

	@OneToMany(() => MedicamentosCita, (citasMedicamento) => citasMedicamento.medicamento)
	citasMedicamento: MedicamentosCita[];

	@CreateDateColumn({
		name: 'created_at',
		type: 'timestamptz',
		default: () => 'CURRENT_TIMESTAMP'
	})
	createdAt: Date;

	@UpdateDateColumn({
		name: 'updated_at',
		type: 'timestamptz',
		default: () => 'CURRENT_TIMESTAMP'
	})
	updatedAt: Date;
}
