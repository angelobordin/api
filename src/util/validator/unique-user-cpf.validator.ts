import { Injectable } from '@nestjs/common';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { PrismaService } from 'prisma/prisma.service';
import { UserRepository } from 'src/modules/user/repository/user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueUserCpfValidator implements ValidatorConstraintInterface {
	constructor(
		private repository: UserRepository,
		private prismaService: PrismaService,
	) {}

	async validate(cpf: string, validationArguments?: ValidationArguments): Promise<boolean> {
		const user = await this.repository.getUserByCpf(this.prismaService, cpf);

		// Caso exista usuário com o cpf informado deve retornar false, ou seja, informando que o cpf é inválido;
		return user ? false : true;
	}
}
