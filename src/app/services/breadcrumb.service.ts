import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Breadcrumb } from '../models/breadcrumb.model';
import { NameService } from './name.service';

import '../rxjs-extension';

@Injectable()
export class BreadcrumbService {
  breadcrumbs = new Subject();
  constructor(private names: NameService) { }

  getBreadcrumbs(): Subject<Breadcrumb[]> {
    return this.breadcrumbs;
  }

  setPath(path: string) {
    let items = path.split('/');
    let currentPath = '';
    const breadcrumbs: Breadcrumb[] = items.filter(item => !!item)
      .map((item, index) => {
        currentPath += item + '/';
        return <Breadcrumb>{ label: this.getName(item, index), url: currentPath }
      })
    this.setBreadcrumbs(breadcrumbs);
  }

  getName(id: string, index: number): string {
    let name: string;
    switch (index) {
      case 0: name = this.names.getBrandName(id); break;
      case 1: name = this.names.getTypeName(id); break;
      case 2: name = this.names.getItemName(id); break;
      default: 'ERROR';
    }
    return name;
  }

  setBreadcrumbs(breadcrumbs: Breadcrumb[]): void {
    this.breadcrumbs.next(breadcrumbs);
  }
}
