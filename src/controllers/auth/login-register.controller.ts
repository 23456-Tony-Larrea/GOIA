import { Controller,Post,Body } from '@nestjs/common';
import { LoginRegisterService } from './login-register.service';

@Controller('login-register')
export class LoginRegisterController {
    constructor(private readonly loginRegisterService: LoginRegisterService) {}
    @Post('/register')
    register(@Body() data: { email: string, password: string, name: string, roleId: number }) {
        return this.loginRegisterService.register(data);
    }
    @Post('/login')
    login(@Body() data: { email: string, password: string }) {
        return this.loginRegisterService.login(data);
    }
}
