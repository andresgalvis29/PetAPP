import { Mascota } from './../database/entities/mascota.entity';
import { Dueno } from './../database/entities/dueno.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MediaController } from './controllers/media.controller';
import { MediaService } from './services/media.service';

@Module({
	imports: [ TypeOrmModule.forFeature([ Dueno, Mascota ]) ],
	controllers: [ MediaController ],
	providers: [ MediaService ]
})
export class MediaModule {}
