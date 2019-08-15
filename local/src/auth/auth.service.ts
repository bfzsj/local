import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm';
import { JwtPayload } from './jwt-payload.interface'
import * as jwt from 'jsonwebtoken';

import { InjectRepository } from '@nestjs/typeorm';
import {user_information} from "../entities/user_information.entity";

@Injectable()
export class AuthService {
    user: user_information
    constructor(
        @InjectRepository(user_information)
        private readonly userRepository: Repository<user_information>) { }

    async createToken(userName: string, passwoerd: string): Promise<any> {
        const user: JwtPayload = { APPLE_ID: userName, PASSWORD: passwoerd }
         return jwt.sign(user, 'secretKey', { expiresIn: 3600 });
    }

    async validateUser(name: string): Promise<any> {
        return this.userRepository.findOne({ APPLE_ID: name });
    }

    async findEmployeeByName(name: string): Promise<user_information> {
        return this.userRepository.findOne({ APPLE_ID: name });
    }

    getUser(): user_information {
        return this.user;
    }

    async login(name: string, password: string): Promise<any> {
        this.user = await this.userRepository.findOne({ APPLE_ID: name });
        if (this.user != undefined && this.user.PASSWORD == password) {
            return this.createToken(this.user.APPLE_ID, this.user.PASSWORD);
        } else {
            return "200"
        }
    }
}