import { Module } from '@nestjs/common';
import { LoginRegisterController } from './login-register.controller';
import { LoginRegisterService } from './login-register.service';
import { PrismaService } from '../../../prisma/prisma.service'; // Asegúrate de importar PrismaService correctamente

@Module({
    controllers: [LoginRegisterController],
    providers: [LoginRegisterService,PrismaService]
})
export class LoginRegisterModule {}
