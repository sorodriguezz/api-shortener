import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entities';
import { Repository } from 'typeorm';
import { BcryptPasswordHasher } from 'src/adapters/password-hasher/bcrypt-password-hasher';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { name, lastname, email, password } = createUserDto;

    const emailExist = await this.userRepository.existsBy({ email });

    if (emailExist) {
      throw new BadRequestException(`Ya existe email ${email}`);
    }

    const passwordHasher = new BcryptPasswordHasher();
    const hashedPassword = await passwordHasher.hash(password);

    const user = this.userRepository.create({
      name,
      lastname,
      email,
      password: hashedPassword,
    });

    const userSaved = await this.userRepository.save(user);

    return {
      uuid: userSaved.uuid,
      name: userSaved.name,
      lastname: userSaved.name,
      email: userSaved.email,
    };
  }

  async findAll(isActive: boolean) {
    let users: UserEntity[];

    if (isActive === undefined) {
      users = await this.userRepository.find();
    } else {
      users = await this.userRepository.findBy({ isEnable: isActive });
    }

    return users.map((user: UserEntity) => ({
      uuid: user.uuid,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      isEnable: user.isEnable,
    }));
  }

  async findOne(uuid: string) {
    const existUser = await this.userRepository.findOneBy({ uuid });

    if (!existUser) {
      throw new BadRequestException(`No existe usuario con uuid ${uuid}`);
    }

    return {
      uuid: existUser.uuid,
      name: existUser.name,
      lastname: existUser.lastname,
      email: existUser.email,
      isEnable: existUser.isEnable,
    };
  }

  async update(uuid: string, updateUserDto: UpdateUserDto) {
    const { name, lastname, email, password, isEnable } = updateUserDto;

    const existUser = await this.userRepository.findOneBy({ uuid });

    if (!existUser) {
      throw new BadRequestException(`No existe usuario con uuid {${uuid}}`);
    }

    if (email) {
      const emailExist = await this.userRepository.existsBy({ email });

      if (emailExist) {
        throw new BadRequestException(`Ya existe email {${email}}`);
      }
    }

    const user = {
      uuid: existUser.uuid,
      name: name || existUser.name,
      lastname: lastname || existUser.lastname,
      email: email || existUser.email,
      password: password || existUser.password,
      isEnable: !isEnable ? isEnable : existUser.isEnable,
    };

    await this.userRepository.update(uuid, user);

    return {
      message: `Usuario con uuid {${uuid}} actualizado`,
    };
  }
}
