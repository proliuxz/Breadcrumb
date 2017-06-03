import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setPath(location.pathname);
  }

}
