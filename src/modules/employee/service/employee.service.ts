import { Injectable } from '@nestjs/common';
import { EmployeeMarkBodyDto } from '../dto/register-employee-mark.dto';
import { PrismaService } from 'prisma/prisma.service';
import { EmployeeRepository } from '../repository/employee.repository';

@Injectable()
export class EmployeeService {
	constructor(
		private prisma: PrismaService,
		private repository: EmployeeRepository,
	) {}

	async registerEmployeeMark(employeeName: string, markData: EmployeeMarkBodyDto) {
		try {
			const result = await this.repository.registerEmployeeMark(this.prisma, employeeName, markData);

			return {
				status: 200,
				message: 'Ponto registrado com sucesso!',
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async getMarkList() {
		try {
			const result = await this.repository.getMarkList(this.prisma);

			return {
				status: 200,
				message: '',
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async getMarkById(markId: string) {
		try {
			const result = await this.repository.getMarkById(this.prisma, markId);

			return {
				status: 200,
				message: '',
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}
}
