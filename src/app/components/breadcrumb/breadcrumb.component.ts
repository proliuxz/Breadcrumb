import { Component } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import { Breadcrumb } from '../../models/breadcrumb.model';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {

  public breadcrumbs: Breadcrumb[];

  constructor(private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.getBreadcrumbs().subscribe(b => {
      this.breadcrumbs = b;
      console.log(b);
    });
  }
}
