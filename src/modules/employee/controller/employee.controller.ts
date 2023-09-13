import { Controller, Post, Param, Body, Get, Put } from '@nestjs/common';
import { RegisterEmployeeMarkBodyDto } from '../dto/register-employee-mark-body.dto';
import { EmployeeService } from '../service/employee.service';
import { EmployeeMarkParamsDto } from '../dto/employee-mark-param.dto';
import { UpdateEmployeeMarkBodyDto } from '../dto/update-employee-mark-body.dto';

@Controller()
export class EmployeeController {
	constructor(private service: EmployeeService) {}

	@Get('/registros')
	async gerMarkList() {
		try {
			const result = await this.service.getMarkList();

			return result;
		} catch (error) {
			return error;
		}
	}

	@Get('/:name/validar')
	async getMarkById(@Body() body: EmployeeMarkParamsDto) {
		try {
			const markId = body.id;
			const result = await this.service.getMarkById(markId);

			return result;
		} catch (error) {
			return error;
		}
	}

	@Put('/:id')
	async updateMark(@Param() params: EmployeeMarkParamsDto, @Body() body: UpdateEmployeeMarkBodyDto) {
		try {
			const markId = params.id;
			const newData = body;
			const result = await this.service.updateMark(newData, markId);

			return result;
		} catch (error) {
			return error;
		}
	}

	@Post('/:name/registrar')
	async registerEmployeeMark(@Param() params: EmployeeMarkParamsDto, @Body() body: RegisterEmployeeMarkBodyDto) {
		try {
			const markData = body;
			const employeeName = params.name;
			const result = await this.service.registerEmployeeMark(employeeName, markData);

			return result;
		} catch (error) {
			return error;
		}
	}
}
