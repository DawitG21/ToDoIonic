import { Itask } from './itask';

export class OtherTask implements Itask {
    UserID : number;
    ID : number;
    Task : string;
    Status : boolean;
    Priority : string;
    FullName : string;
}