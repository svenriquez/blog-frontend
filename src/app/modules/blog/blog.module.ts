import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalComponent } from './components/local/local.component';
import { RemotoComponent } from './components/remoto/remoto.component';
import { FormComponent } from './components/form/form.component';
import { HomeModule } from '../home/home.module';
import { BlogService } from '../services/blog.service';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LocalBlogService } from '../services/local-blog.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ToastrModule } from 'ngx-toastr';
import { Remoto1Component } from './components/remoto1/remoto1.component';


@NgModule({
  declarations: [
    LocalComponent,
    RemotoComponent,
    FormComponent,
    Remoto1Component
  ],
  imports: [
    CommonModule,
    HomeModule,
    MatCardModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatSidenavModule,
    ReactiveFormsModule,
    ToastrModule
  ],
  entryComponents: [
    FormComponent
  ],
  providers: [
    BlogService,
    LocalBlogService,
    MatDialog
  ],
})
export class BlogModule { }
