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
}
