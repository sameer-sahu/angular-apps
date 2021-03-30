import { Address } from './Address.data';

export class Employee {
    public firstName: string;
    public middleName: string;
    public lastName: string;
    public emailId: string;
    
    public mobileNo: number[];

    public active: boolean;
    public address: Address;
}