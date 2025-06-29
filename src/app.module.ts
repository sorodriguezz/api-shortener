import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/configuration';
import { PermissionEntity } from './entities/permission.entity';
import { RoleEntity } from './entities/role.entity';
import { UserEntity } from './entities/user.entity';
import { GroupLinkEntity } from './entities/group-link.entity';
import { LinkEntity } from './entities/link.entity';
import { TagEntity } from './entities/tag.entity';
import { TagModule } from './components/tag/tag.module';
import { LinkModule } from './components/link/link.module';
import { UserModule } from './components/user/user.module';
import { GroupLinkModule } from './components/group-link/group-link.module';
import { RoleModule } from './components/role/role.module';
import { PermissionModule } from './components/permission/permission.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        ...(await configService.get('database')),
      }),
    }),
    TypeOrmModule.forFeature([
      PermissionEntity,
      RoleEntity,
      UserEntity,
      GroupLinkEntity,
      LinkEntity,
      TagEntity,
    ]),
    TagModule,
    LinkModule,
    UserModule,
    GroupLinkModule,
    RoleModule,
    PermissionModule,
  ],
})
export class AppModule {}
