import { ValidationOptions, registerDecorator } from 'class-validator';
import { UniqueUserCpfValidator } from '../validator/unique-user-cpf.validator';

export const IsUniqueUserCpf = (validationOptions: ValidationOptions) => {
	return (object: Object, property: string) => {
		registerDecorator({
			target: object.constructor,
			propertyName: property,
			options: validationOptions,
			constraints: [],
			validator: UniqueUserCpfValidator,
		});
	};
};
