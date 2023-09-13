import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserRepository {
	async registerUser(prisma: PrismaService, newUser: CreateUserDto) {
		try {
			const result = await prisma.user.create({
				data: {
					name: newUser.name,
					cpf: newUser.cpf,
				},
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async getUserByCpf(prisma: PrismaService, cpf: string) {
		try {
			const user = await prisma.user.findUnique({
				where: { cpf },
			});

			return user;
		} catch (error) {
			throw error;
		}
	}
}
