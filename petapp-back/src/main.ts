import { NestFactory, Reflector } from '@nestjs/core';

import { AppModule } from './app.module';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json, urlencoded } from 'express';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			transformOptions: {
				enableImplicitConversion: true
			}
		})
	);

	app.enableCors();
	app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
	app.enableCors();

	const config = new DocumentBuilder()
		.setTitle('API ThisIsNotTrackingTime')
		.setDescription(`Documentación del API de la plataforma de control de tiempos de EPM`)
		.addBearerAuth()
		.setVersion('1.0')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, document);
	app.use(json({ limit: '50mb' }));
	app.use(urlencoded({ extended: true, limit: '50mb' }));
	await app.listen(process.env.PORT || 3000);
}
bootstrap();
