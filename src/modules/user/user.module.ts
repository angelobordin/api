import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { UserRepository } from './repository/user.repository';
import { PrismaService } from 'prisma/prisma.service';
import { UniqueUserCpfValidator } from 'src/util/validator/unique-user-cpf.validator';

@Module({
	imports: [],
	controllers: [UserController],
	providers: [UserService, UserRepository, PrismaService, UniqueUserCpfValidator],
	exports: [],
})
export class UserModule {}
