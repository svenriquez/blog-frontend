import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/modules/services/blog.service';

@Component({
  selector: 'app-remoto',
  templateUrl: './remoto.component.html',
  styleUrls: ['./remoto.component.scss']
})
export class RemotoComponent implements OnInit {

  itemList: Array<any> = [];
  page = 0;
  totalRegistros = 0;
  itemsPorPagina = 3;
  itemsListToShow: Array<any> = [];

  constructor(
    private readonly blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.blogService.getRemotoPost().subscribe(resp => {
      if (resp) {
        this.itemList = resp.articles;
        this.totalRegistros = this.itemList.length;
        this.itemsListToShow = this.itemList.slice(0, this.itemsPorPagina);
      }
    });

    this.totalRegistros = this.itemList.length;
    this.itemsListToShow = this.itemList.slice(0, this.itemsPorPagina);
  }

  changePageIndex($event: any) {
    this.page = $event.pageIndex;
    let fin = this.itemsPorPagina * (this.page + 1);
    let inicio = fin - this.itemsPorPagina;
    this.itemsListToShow = this.itemList.slice(inicio, fin);
  }

}
