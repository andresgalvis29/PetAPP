import { Rol } from './../../../auth/models/roles.model';
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinTable,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity({
	name: 'usuarios'
})
export class Usuario {
	@PrimaryGeneratedColumn('uuid') id: string;

	@Column({ type: 'varchar', length: 100 })
	nombres: string;

	@Column({ type: 'varchar', length: 255, unique: true })
	email: string;

	@Column({ type: 'varchar' })
	imagen: string;

	@Column({ type: 'enum', enum: Rol, nullable: true })
	rol: string;

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
