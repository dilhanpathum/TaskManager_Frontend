import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

export const appRoutes: Routes = [
  { path: '', component: TaskListComponent }, // Default route
  { path: 'task-form', component: TaskFormComponent }, // Task form route
  { path: '**', redirectTo: '' } // Wildcard route to handle any unknown routes
];