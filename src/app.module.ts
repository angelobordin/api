import * as cors from 'cors';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { EmployeeModule } from './modules/employee/employee.module';

@Module({
	imports: [UserModule, EmployeeModule],
	controllers: [],
	providers: [],
})
export class AppModule {
	// Configuração de cors e middlewares
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(
				cors({
					origin: '*',
					methods: '*',
					allowedHeaders: '*',
				}),
			)
			.forRoutes({ path: '*', method: RequestMethod.ALL });
	}
}
