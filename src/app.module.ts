import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupLinkModule } from './components/group-link/group-link.module';
import { LinkModule } from './components/link/link.module';
import { PermissionModule } from './components/permission/permission.module';
import { RoleModule } from './components/role/role.module';
import { UserModule } from './components/user/user.module';
import configuration from './config/configuration';
import { SharedModule } from './shared/shared.module';
import { TagLinkModule } from './components/tag-link/tag-link.module';

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
    TagLinkModule,
    LinkModule,
    UserModule,
    GroupLinkModule,
    RoleModule,
    PermissionModule,
    SharedModule,
  ],
})
export class AppModule {}
