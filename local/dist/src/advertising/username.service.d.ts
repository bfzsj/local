import { username } from '../entities/username.entity';
import { Repository } from "typeorm";
export declare class UsernameService {
    private readonly usernaemRepository;
    constructor(usernaemRepository: Repository<username>);
    root(): string;
    findAll(): Promise<username[]>;
    findOne(username: username): Promise<username>;
    create(username: username): Promise<username>;
}
