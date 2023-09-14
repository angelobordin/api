import { Injectable } from '@nestjs/common';
import { RegisterEmployeeMarkBodyDto } from '../dto/register-employee-mark-body.dto';
import { PrismaService } from 'prisma/prisma.service';
import { EmployeeRepository } from '../repository/employee.repository';
import { UpdateEmployeeMarkBodyDto } from '../dto/update-employee-mark-body.dto';

@Injectable()
export class EmployeeService {
	constructor(
		private prisma: PrismaService,
		private repository: EmployeeRepository,
	) {}

	async registerEmployeeMark(employeeName: string, markData: RegisterEmployeeMarkBodyDto) {
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

	async getMark(markName: string) {
		try {
			const result = await this.repository.getMark(this.prisma, markName);

			return {
				status: 200,
				message: '',
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async updateMark(newData: UpdateEmployeeMarkBodyDto, markId: string) {
		try {
			const result = await this.repository.updateMark(this.prisma, newData, markId);

			return {
				status: 200,
				message: 'Registro atualizado com sucesso!',
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}
}
