import { Controller, Post, Param, Body, Get } from '@nestjs/common';
import { EmployeeMarkBodyDto, EmployeeMarkParamsDTo } from '../dto/register-employee-mark.dto';
import { EmployeeService } from '../service/employee.service';

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
	async getMarkById(@Body() body: { id: string }) {
		try {
			const markId = body.id;
			const result = await this.service.getMarkById(markId);

			return result;
		} catch (error) {
			return error;
		}
	}

	@Post('/:name/registrar')
	async registerEmployeeMark(@Param() params: EmployeeMarkParamsDTo, @Body() body: EmployeeMarkBodyDto) {
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
