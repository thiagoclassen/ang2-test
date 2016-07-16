import {RouterConfig} from '@angular/router';

import { TaskComponent } from './';
import { TaskListComponent } from './task-list';

export const taskRoutes: RouterConfig = [
    { path: 'addTask', component: TaskComponent },
    { path: 'taskList', component: TaskListComponent },
];
