import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { EmployeeModule } from './modules/employee/employee.module';

@Module({
	imports: [UserModule, EmployeeModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
