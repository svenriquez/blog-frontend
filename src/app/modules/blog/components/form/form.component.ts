import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocalBlogService } from 'src/app/modules/services/local-blog.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formGroup = new FormGroup({
    'titulo': new FormControl('',[Validators.required]),
    'descripcion': new FormControl('', [Validators.required])
  });

  @ViewChild('formRef') formRef!: FormGroupDirective;

  typesFileUpload = [
    'image/png',
    'image/jpg',
    'image/jpeg'
  ];

  extensionFileUpload = [
    '.png',
    '.jpg',
    '.jpeg'
  ];

  imageName: any;
  archivoBase64: any;
  file: any;

  constructor(
    private dialogRef: MatDialogRef<FormComponent>,
    private readonly localBlogService: LocalBlogService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data.tipo == "edicion") {
      this.formGroup.patchValue({
        titulo: this.data.item.titulo,
        descripcion: this.data.item.descripcion
      });
    }
  }

  close() {
    this.dialogRef.close();
  }


  createItem() {
    if (this.validateForm() && this.file != undefined && this.file != null && this.data.tipo == "creacion") {
      let reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        const objeto = {
          ...this.formGroup.value,
          imagen: reader.result
        };
        this.dialogRef.close(objeto);
      };
      reader.onerror = function (error) {};
    } else if (this.validateForm() && this.data.tipo == "edicion") {
      if (this.file != null) {
        let reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = () => {
          const objeto = {
            ...this.formGroup.value,
            imagen: reader.result,
            id: 0
          };
          this.dialogRef.close(objeto);
        };
        reader.onerror = function (error) {};
      } else {
        const objeto = {
          ...this.formGroup.value,
          imagen: this.data.item.imagen,
          id: this.data.item.id
        };
        this.dialogRef.close(objeto);
      }
    }
  }

  validateForm() {
    let result = true;

    if (!this.formGroup.valid) {
      result = false;
      this.toastr.error('Existen campos obligatorios que no se han ingresado.', 'Error');
    }

    return result;
  }

  handleFileInput(event: any): void {
    try {
      const files = event.target.files;
      let fileToUpload = files.item(0);

      if (this.typesFileUpload.includes(fileToUpload.type)) {
        this.imageName = fileToUpload.name;
        this.file = fileToUpload;
      } else {
        this.toastr.error(`Tipo de archivo no válido. Solo se permite subir archivos con las siguientes extensiones: ${this.extensionFileUpload.join(', ')}`, 'Error')
        fileToUpload = null;
        this.imageName = null;
      }
    } catch {}
  }

}
