import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRepository } from '../repository/user.repository';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
	constructor(
		private repository: UserRepository,
		private prisma: PrismaService,
	) {}

	async registerUser(newUser: CreateUserDto) {
		try {
			const result = await this.repository.registerUser(this.prisma, newUser);

			const linkUser = `http://localhost:4200/${result.name.toLowerCase().replaceAll(' ', '-')}/registrar`;

			return {
				status: 200,
				message: 'Usuário registrado com sucesso!',
				data: linkUser,
			};
		} catch (error) {
			throw error;
		}
	}
}
