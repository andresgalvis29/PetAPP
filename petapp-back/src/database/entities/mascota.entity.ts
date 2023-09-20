import { Exclude, Expose } from 'class-transformer';
import { Cita } from './cita.entity';
import { Dueno } from './dueno.entity';
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity({
	name: 'mascotas'
})
export class Mascota {
	@PrimaryGeneratedColumn('uuid') id: string;

	@Column({ type: 'varchar', length: 100 })
	nombres: string;

	@Column({ type: 'varchar', length: 255 })
	raza: string;

	@Exclude()
	@Column({ type: 'varchar', nullable: true })
	imagen: string;

	@Expose()
	get imagenUrl(): string | null {
		if (!this.imagen) {
			return null;
		}
		return `${process.env.URL_SERVER}/media/foto-perfil/mascota/${this.id}`;
	}

	@Column({ type: 'varchar', name: 'fecha_nacimiento' })
	fechaNacimiento: string;

	@Column({ type: 'varchar' })
	sexo: string;

	@ManyToOne(() => Dueno, (dueno) => dueno.mascotas)
	@JoinColumn({ name: 'dueno_id' })
	dueno: Dueno;

	@OneToMany(() => Cita, (cita) => cita.mascota)
	citas: Cita[];

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
