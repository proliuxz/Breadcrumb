import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';
import { CComponent } from './pages/c/c.component';

const appRoutes: Routes = [
  {
    path: 'a',
    data: {
      breadcrumb: 'A'
    },
    children: [
      {
        path: '',
        component: AComponent,
      },
      {
        path: 'b',
        data: {
          breadcrumb: 'B'
        },
        children: [
          {
            path: '',
            component: BComponent,
          },
          {
            path: 'c',
            data: {
              breadcrumb: 'C'
            },
            children: [
              {
                path: '',
                component: CComponent,
              }
            ]
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
