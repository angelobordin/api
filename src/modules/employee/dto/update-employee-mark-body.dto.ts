import { IsArray, IsBoolean, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Knowledge } from 'src/util/interface/knowledge';

export class UpdateEmployeeMarkBodyDto {
	@IsString()
	@IsNotEmpty({ message: `O campo NOME está ausente!` })
	@MaxLength(100, { message: `O campo NOME deve ter no máximo 100 caracteres!` })
	@MinLength(1, { message: `O campo NOME deve ter no mínimo 1 caractere!` })
	name: string;

	@IsEmail()
	@IsNotEmpty({ message: `O campo E-MAIL está ausente!` })
	@MaxLength(100, { message: `O campo E-MAIL deve ter no máximo 100 caracteres!` })
	@MinLength(1, { message: `O campo E-MAIL deve ter no mínimo 1 caractere!` })
	email: string;

	@IsString()
	@IsNotEmpty({ message: `O campo CPF está ausente!` })
	@MaxLength(11, { message: `O campo CPF deve ter no máximo 11 caracteres!` })
	@MinLength(1, { message: `O campo CPF deve ter no mínimo 1 caractere!` })
	cpf: string;

	@IsString()
	@MaxLength(11, { message: `O campo CELULAR deve ter no máximo 11 caracteres!` })
	cellphone?: string;

	@IsArray()
	@IsNotEmpty({ message: `O campo CONHECIMENTOS está ausente!` })
	knowledge: Knowledge[];

	@IsBoolean()
	validate: boolean;
}
