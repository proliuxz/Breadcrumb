import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setPath(location.pathname);
  }

}
