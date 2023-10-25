import { Module } from '@nestjs/common';
import { UsersController } from '../../routes/users.controller';
import { PrismaService } from '../../../prisma/prisma.service';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController], // Solo incluye UsersController aquí
  providers: [UsersService, PrismaService], // Incluye UsersService y PrismaService como providers
  exports: [UsersService],
})
export class UsersModule {}