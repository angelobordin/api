import { IsNotEmpty, IsString } from 'class-validator';

export class EmployeeMarkParamsDto {
	@IsNotEmpty()
	@IsString()
	id?: string;

	@IsString()
	@IsNotEmpty()
	name?: string;
}
