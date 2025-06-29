import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities';
import { Repository } from 'typeorm';

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

    const user = this.userRepository.create({
      name,
      lastname,
      email,
      password,
    });

    const userSaved = await this.userRepository.save(user);

    return {
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
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      isEnable: user.isEnable,
    }));
  }

  async findOne(id: number) {
    const existUser = await this.userRepository.findOneBy({ id });
    if (!existUser) {
      throw new BadRequestException(`No existe usuario con id ${id}`);
    }
    return {
      name: existUser.name,
      lastname: existUser.lastname,
      email: existUser.email,
      isEnable: existUser.isEnable,
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { name, lastname, email, password, isEnable } = updateUserDto;

    const existUser = await this.userRepository.findOneBy({ id });

    if (!existUser) {
      throw new BadRequestException(`No existe usuario con id {${id}}`);
    }

    if (email) {
      const emailExist = await this.userRepository.existsBy({ email });

      if (emailExist) {
        throw new BadRequestException(`Ya existe email {${email}}`);
      }
    }

    const user = {
      name: name || existUser.name,
      lastname: lastname || existUser.lastname,
      email: email || existUser.email,
      password: password || existUser.password,
      isEnable: !isEnable ? isEnable : existUser.isEnable,
    };

    await this.userRepository.update(id, user);

    return {
      message: `Usuario con id {${id}} actualizado`,
    };
  }

  async remove(id: number) {
    const existUser = await this.userRepository.findOneBy({ id });

    if (!existUser) {
      throw new BadRequestException(`No existe usuario con id {${id}}`);
    }

    await this.userRepository.delete(id);
    return {
      message: `Usuario con id {${id}} eliminado`,
    };
  }
}
