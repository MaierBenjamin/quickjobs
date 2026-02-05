import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./scr/pages/home/home').then(m => m.Home),
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./scr/pages/login/login').then(m => m.Login),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./scr/pages/register/register').then(m => m.Register),
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./scr/pages/dashboard/dashboard').then(m => m.Dashboard),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./scr/pages/profile/profile').then(m => m.Profile),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./scr/pages/settings/settings').then(m => m.Settings),
  },
  {
    path: 'chat',
    loadComponent: () =>
      import('./scr/pages/chat/chat').then(m => m.Chat),
  },

  {
    path: 'jobs',
    loadComponent: () =>
      import('./scr/pages/all-jobs/all-jobs').then(m => m.AllJobs),
  },
  {
    path: 'jobs/create',
    loadComponent: () =>
      import('./scr/pages/job-create/job-create').then(m => m.JobCreate),
  },
  {
    path: 'jobs/:id',
    loadComponent: () =>
      import('./scr/pages/job-detail/job-detail').then(m => m.JobDetail),
  },
  {
    path: 'jobs/:id/apply',
    loadComponent: () =>
      import('./scr/pages/job-apply/job-apply').then(m => m.JobApply),
  },

  { path: '**', redirectTo: '' },
];
