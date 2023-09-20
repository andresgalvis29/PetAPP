import { Mascota } from './mascota.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
@Entity({
	name: 'duenos'
})
export class Dueno {
	@PrimaryGeneratedColumn('uuid') id: string;

	@Column({ type: 'varchar', length: 100 })
	nombres: string;

	@Column({ type: 'varchar', length: 255, unique: true })
	identificacion: string;

	@Column({ type: 'varchar', length: 10 })
	telefono: string;

	@Exclude()
	@Column({ type: 'varchar', nullable: true })
	imagen: string;

	@Expose()
	get imagenUrl(): string | null {
		if (!this.imagen) {
			return null;
		}
		return `${process.env.URL_SERVER}/media/foto-perfil/dueno/${this.id}`;
	}

	@OneToMany(() => Mascota, (mascotas) => mascotas.dueno)
	mascotas: Mascota[];

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
