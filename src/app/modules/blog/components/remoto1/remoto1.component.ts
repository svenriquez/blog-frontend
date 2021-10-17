import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/modules/services/blog.service';

@Component({
  selector: 'app-remoto1',
  templateUrl: './remoto1.component.html',
  styleUrls: ['./remoto1.component.scss']
})
export class Remoto1Component implements OnInit {

  itemList: Array<any> = [];
  page = 0;
  totalRegistros = 0;
  itemsPorPagina = 3;

  constructor(
    private readonly blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.blogService.getRemoto2Post(this.page, this.itemsPorPagina).subscribe(resp => {
      if (resp) {
        this.itemList = resp.elements;
        this.totalRegistros = resp.total;
      }
    });
  }

  changePageIndex($event: any) {
    this.page = $event.pageIndex;
    this.blogService.getRemoto2Post(this.page, this.itemsPorPagina).subscribe(resp => {
      if (resp) {
        this.itemList = resp.elements;
        this.totalRegistros = resp.total;
      }
    });
  }

}
