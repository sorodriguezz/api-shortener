import {
  GroupLinkEntity,
  LinkEntity,
  ListTodoEntity,
  PermissionEntity,
  RoleEntity,
  TagLinkEntity,
  UserEntity,
  TodoEntity,
  TagTodoEntity,
} from '../entities';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      TagLinkEntity,
      PermissionEntity,
      RoleEntity,
      UserEntity,
      GroupLinkEntity,
      LinkEntity,
      ListTodoEntity,
      TodoEntity,
      TagTodoEntity,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class SharedModule {}
