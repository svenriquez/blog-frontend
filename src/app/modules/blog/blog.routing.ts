import { Routes } from '@angular/router';
import { LocalComponent } from './components/local/local.component';
import { RemotoComponent } from './components/remoto/remoto.component';
import { Remoto1Component } from './components/remoto1/remoto1.component';

export const blogRoutes: Routes = [
  {
    path: 'local',
    component: LocalComponent
  },
  {
    path: 'remoto1',
    component: Remoto1Component
  },
  {
    path: '',
    component: RemotoComponent
  }
]
