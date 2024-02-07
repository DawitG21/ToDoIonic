
import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import { Itask } from '../todo/itask';



@Injectable()
export class TodoProvider {
 tasks : Itask[];

  constructor( private _http : Http) {
    console.log('Hello TodoProvider Provider');
  }

  getTask() : Observable<Itask[]>{
    return this._http.get("http://192.168.0.108/taskapi/api/task")
    .map((res : Response)=> <Itask[]> res.json());
  }
  
  createTask(addtask): Observable<Itask[]>{
    return this._http.post("http://192.168.0.108/taskapi/api/task" , addtask)
    .map((res : Response)=> <Itask[]> res.json());
  }

  deleteTask(addtask:Itask) {
    return this._http.delete("http://192.168.0.108/taskapi/api/task" , {body :addtask})
    .map(res => res);
  }

  editTask(addtask: Itask){
    return this._http.put("http://192.168.0.108/taskapi/api/task" , addtask)
    .map(res=>res);
  }

  getUser() : Observable<Itask[]>{
    return this._http.get("http://192.168.0.108/taskapi/api/user")
    .map((res : Response)=><Itask[]> res.json());
  }
  createUser(userpassid) : Observable<Itask[]>{
    return this._http.post("http://192.168.0.108/taskapi/api/user" , userpassid)
    .map((res : Response)=><Itask[]> res.json());
  }

  updateTask(finalizetask:Itask){
    return this._http.put("http://192.168.0.108/taskapi/api/task",finalizetask)
    .map((res :Response)=> res)
  }

}
