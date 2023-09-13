import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { EmployeeMarkBodyDto } from '../dto/register-employee-mark.dto';

@Injectable()
export class EmployeeRepository {
	async registerEmployeeMark(prisma: PrismaService, employeeName: string, markData: EmployeeMarkBodyDto) {
		try {
			const result = await prisma.mark.create({
				data: {
					name: markData.name,
					email: markData.email,
					cpf: markData.cpf,
					cellphone: markData.cellphone,
					mark_knowledge: {
						createMany: {
							data: markData.knowledge,
						},
					},
				},
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async getMarkList(prisma: PrismaService) {
		try {
			// Busca todos os registros e ordena por ordem Crescente (Alfabética)
			const result = await prisma.mark.findMany({
				orderBy: {
					name: 'asc',
				},
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async getMarkById(prisma: PrismaService, markId: string) {
		try {
			const result = await prisma.mark.findFirst({
				where: { id: parseInt(markId) },
			});

			return result;
		} catch (error) {
			throw error;
		}
	}
}
