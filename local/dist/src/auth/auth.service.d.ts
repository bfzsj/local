import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';
export declare class AuthService {
    private readonly employeeRepository;
    user: Employee;
    constructor(employeeRepository: Repository<Employee>);
    createToken(userName: string, passwoerd: string): Promise<any>;
    validateUser(name: string): Promise<any>;
    findEmployeeByName(name: string): Promise<Employee>;
    getUser(): Employee;
    login(name: string, password: string): Promise<any>;
}
