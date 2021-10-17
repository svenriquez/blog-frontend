import { Component, OnInit } from '@angular/core';
import { LocalBlogService } from 'src/app/modules/services/local-blog.service';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  itemList: Array<any> = [];
  page = 0;
  totalRegistros = 0;
  itemsPorPagina = 3;
  itemsListToShow: Array<any> = [];
  filterValue: any;

  constructor(
    private readonly localBlogService: LocalBlogService,
    private readonly dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  changePageIndex($event: any) {
    this.page = $event.pageIndex;
    let fin = this.itemsPorPagina * (this.page + 1);
    let inicio = fin - this.itemsPorPagina;
    this.itemsListToShow = this.itemList.slice(inicio, fin);
  }

  deleteItem(item: any) {
    this.localBlogService.deleteItem(item);
    this.getItems();
  }

  editItem(item: any) {
    let oldItem = {...item};
    const dialogRef = this.dialog.open(FormComponent, {
      disableClose: true,
      autoFocus: true,
      closeOnNavigation: false,
      position: { top: '30px' },
      width: '700px',
      data: {
        tipo: "edicion",
        item: item
      }
    });

    dialogRef.afterClosed().subscribe(newItem => {
      this.localBlogService.updateItem(oldItem, newItem);
      this.getItems();
    });
  }

  createItem() {
    const dialogRef = this.dialog.open(FormComponent, {
      disableClose: true,
      autoFocus: true,
      closeOnNavigation: false,
      position: { top: '30px' },
      width: '700px',
      data: {
        tipo: "creacion"
      }
    });

    dialogRef.afterClosed().subscribe(r => {
      r.id = (this.itemList[this.itemList.length - 1] + 1);
      this.localBlogService.addItem(r);
      this.getItems();
    });
  }

  getItems() {
    this.page = 0;
    this.itemList = this.localBlogService.getAll();
    this.totalRegistros = this.itemList.length;
    this.itemsListToShow = this.itemList.slice(0, this.itemsPorPagina);
  }

}
