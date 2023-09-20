import { Medicamento } from './medicamento.entity';
import { Cita } from './cita.entity';
import { Mascota } from './mascota.entity';
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
@Entity({
	name: 'medicamentos_citas'
})
export class MedicamentosCita {
	@PrimaryGeneratedColumn('uuid') id: string;

	@Column({ type: 'numeric', default: 0 })
	cantidad: string;

	@Column({ type: 'numeric', default: 0 })
	frecuencia: string;

	@ManyToOne(() => Cita, (cita) => cita.medicamentosCita)
	@JoinColumn({ name: 'cita_id' })
	cita: Cita;

	@ManyToOne(() => Medicamento, (medicamento) => medicamento.citasMedicamento)
	@JoinColumn({ name: 'medicamento_id' })
	medicamento: Medicamento;

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
