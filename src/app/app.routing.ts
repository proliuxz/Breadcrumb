import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';
import { CComponent } from './pages/c/c.component';

const appRoutes: Routes = [
  {
    path: 'a',
    component: AComponent,
    data: {
      breadcrumb: 'A'
    },
    children: [
      {
        path: 'b',
        component: BComponent,
        data: {
          breadcrumb: 'B'
        },
        children: [
          {
            path: 'c',
            component: CComponent,
            data: {
              breadcrumb: 'C'
            },
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
