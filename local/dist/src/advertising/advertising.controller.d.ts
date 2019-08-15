import { UsernameService } from './username.service';
import { username } from '../entities/username.entity';
export declare class UsernameController {
    private readonly usernameService;
    constructor(usernameService: UsernameService);
    root(): string;
    findAll(): Promise<username[]>;
    login(request: username, res: any): Promise<void>;
    save(request: username, res: any): Promise<void>;
}
