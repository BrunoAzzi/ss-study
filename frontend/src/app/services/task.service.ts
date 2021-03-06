import { Observable } from 'rxjs/Observable';
import { HttpClientService } from './http-client.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Task } from './../models/task.model';

@Injectable()
export class TasksService {

    private endpoint = '/tasks';
    public tasks: Array<Task> = [];

    constructor(private http: Http, private service: HttpClientService) { }

    getTaskList() : Observable<Array<any>> {

        return this.service.get(this.endpoint)
            .map((jsonResponse) => {
                return jsonResponse.tasks.map(task => {
                    return new Task().initializeWithJSON(task);
                });
            });
    }
    
    saveTask(_task : Task) {
        if(_task.id) {
            return this.updateTask(_task);
        } else {
            return this.createTask(_task);
        }
    }

    createTask(_task : Task) {
        return this.service.post(this.endpoint, JSON.stringify(_task.toJSON()))
            .map((jsonResponse) => {                
                return new Task().initializeWithJSON(jsonResponse.task);
            });
    }

    updateTask(_task : Task) {        
        return this.service.put(this.endpoint + '/' + _task.id, JSON.stringify(_task.toJSON()))
            .map((jsonResponse) => {
                return new Task().initializeWithJSON(jsonResponse.task);
            });
    }

    uploadFile(id: number, formData :any , type: string) {        
        return this.service.postWithNoHeaders(this.endpoint + '/' + id + '/' + type, formData)
            .map((response) => {
                return response;
        });
    }

    deleteTask(id: number) {
        return this.service.delete(this.endpoint + "/" + id)
            .map((response) => {                
                return response;
			});
    }
}
