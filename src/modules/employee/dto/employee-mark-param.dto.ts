import { IsNotEmpty, IsString } from 'class-validator';

export class EmployeeMarkIdDto {
	id?: string;
}

export class EmployeeMarkNameDto {
	name: string;
}
