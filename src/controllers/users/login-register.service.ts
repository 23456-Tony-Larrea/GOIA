import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginRegisterService {
    async register(data: { email: string, password: string, name: string, roleId: number }) {
        return {
            message: 'register'
        };
    }
    
}
