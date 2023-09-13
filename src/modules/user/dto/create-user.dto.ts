import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { IsUniqueUserCpf } from 'src/util/decorator/unique-user-cpf.decorator';
export class CreateUserDto {
	@IsString()
	@IsNotEmpty({ message: `O campo NOME está ausente!` })
	@MaxLength(100, { message: `O campo NOME deve ter no máximo 100 caracteres!` })
	@MinLength(1, { message: `O campo NOME deve ter no mínimo 1 caractere!` })
	name: string;

	@IsString()
	@IsNotEmpty({ message: `O campo CPF está ausente!` })
	@MaxLength(11, { message: `O campo CPF deve ter no máximo 11 caracteres!` })
	@MinLength(1, { message: `O campo CPF deve ter no mínimo 1 caractere!` })
	@IsUniqueUserCpf({ message: `O CPF informado já está em cadastrado!` })
	cpf: string;
}
