import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private apiUrl = 'http://localhost:8080/api/v1'; // Your backend API URL

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllTasks`);
  }

  getTaskById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getTask/${id}`);
  }

  createTask(task: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/newTask`, task);
  }

  updateTask(id: number, task: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateTask/${id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteTask/${id}`);
  }
}