import { Controller, Post, Param, Body } from '@nestjs/common';
import { EmployeeMarkBodyDto, EmployeeMarkParamsDTo } from '../dto/register-employee-mark.dto';
import { EmployeeService } from '../service/employee.service';

@Controller()
export class EmployeeController {
	constructor(private service: EmployeeService) {}

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
