src / modules / user / controller / user.controller.ts;
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('/user')
export class UserController {
	constructor(private service: UserService) {}

	@Post('registrar')
	async registerUser(@Body() body: CreateUserDto) {
		try {
			const newUser = body;
			const result = await this.service.registerUser(newUser);

			return result;
		} catch (error) {
			return error;
		}
	}
}
