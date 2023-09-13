import { Module } from '@nestjs/common';
import { EmployeeController } from './controller/employee.controller';
import { EmployeeService } from './service/employee.service';
import { PrismaService } from 'prisma/prisma.service';
import { EmployeeRepository } from './repository/employee.repository';

@Module({
	imports: [],
	controllers: [EmployeeController],
	providers: [EmployeeService, EmployeeRepository, PrismaService],
	exports: [],
})
export class EmployeeModule {}
