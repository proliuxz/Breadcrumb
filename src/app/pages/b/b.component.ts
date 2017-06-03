import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setPath(location.pathname);
  }

}
