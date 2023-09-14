import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors();

	// Código para usar as validações de dados de entradas nos DTO corretamente;
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			skipUndefinedProperties: true,
		}),
	);

	// Código para o class-validator usar o mesmo recursos de resolução de dependências do NestJS;
	// Segundo parâmetro é para usar a resolução de dependências do class-validator caso a do NestJs falhar;
	useContainer(app.select(AppModule), { fallbackOnErrors: true });

	await app.listen(3000);
}
bootstrap();
