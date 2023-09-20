import { Mascota } from './mascota.entity';
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import { MedicamentosCita } from './medicamentos-cita.entity';
@Entity({
	name: 'citas'
})
export class Cita {
	@PrimaryGeneratedColumn('uuid') id: string;

	@Column({ type: 'varchar' })
	fecha: string;

	@Column({ type: 'varchar' })
	motivo: string;

	@ManyToOne(() => Mascota, (mascota) => mascota.citas)
	@JoinColumn({ name: 'mascota_id' })
	mascota: Mascota;

	@OneToMany(() => MedicamentosCita, (medicamentosCita) => medicamentosCita.cita)
	medicamentosCita: MedicamentosCita[];

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
