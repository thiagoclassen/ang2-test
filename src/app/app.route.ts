import {provideRouter, RouterConfig} from '@angular/router';

import {trecoUserRoutes} from './treco-user/treco-user.route';
import {projectRoutes} from './project/project.route';
import {taskRoutes} from './task/task.route';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/addUser',
        terminal: true
    },
    ...trecoUserRoutes,
    ...projectRoutes,
    ...taskRoutes,
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
];
