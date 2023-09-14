import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { RegisterEmployeeMarkBodyDto } from '../dto/register-employee-mark-body.dto';
import { UpdateEmployeeMarkBodyDto } from '../dto/update-employee-mark-body.dto';

@Injectable()
export class EmployeeRepository {
	async registerEmployeeMark(prisma: PrismaService, employeeName: string, markData: RegisterEmployeeMarkBodyDto) {
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

	async getMark(prisma: PrismaService, markName: string) {
		try {
			const result = await prisma.mark.findFirst({
				where: {
					name: {
						equals: markName,
					},
				},
				include: {
					mark_knowledge: true,
				},
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async updateMark(prisma: PrismaService, newData: UpdateEmployeeMarkBodyDto, markId: string) {
		try {
			const result = await prisma.mark.update({
				where: { id: parseInt(markId) },
				data: {
					validate: newData.validate,
				},
			});
		} catch (error) {
			throw error;
		}
	}
}
