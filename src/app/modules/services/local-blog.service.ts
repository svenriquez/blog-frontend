import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LocalBlogService {

  blogList: Array<any>;

  constructor() {
    this.blogList = [];
    this.initialItems();
  }

  getAll() {
    this.blogList = JSON.parse(localStorage.getItem("blog") || '{}');
    return this.blogList;
  }

  addItem(item: any) {
    this.blogList = JSON.parse(localStorage.getItem("blog") || '{}');
    this.blogList.push(item);
    localStorage.setItem("blog", JSON.stringify(this.blogList));
  }

  deleteItem(item: any) {
    this.blogList = JSON.parse(localStorage.getItem("blog") || '{}');

    let aux: any[] = [];
    this.blogList.forEach(x => {
      if (x.id != item.id) {
        aux.push(x);
      }
    });

    localStorage.setItem("blog", JSON.stringify(aux));
  }

  updateItem(oldItem: any, newItem: any) {
    this.blogList = JSON.parse(localStorage.getItem("blog") || '{}');

    let aux: any[] = [];
    this.blogList.forEach(x => {
      if (x.id == oldItem.id) {
        aux.push({
          id: x.id,
          titulo: newItem.titulo,
          descripcion: newItem.descripcion,
          imagen: newItem.imagen,
        });
      } else {
        aux.push(x);
      }
    });

    localStorage.setItem("blog", JSON.stringify(aux));
  }

  initialItems () {
    this.blogList =
    [
      {
        id: 1,
        titulo: "Historia del reloj",
        descripcion: "En la antigüedad se conocieron varias especies de relojes. Vitruvio habla del reloj de agua o clepsidra, el de aire, el de sol y de otras especies que son desconocidas." +
        " Los egipcios medían con el gnomon los movimientos del Sol. De igual medio se valía el ilustre astrónomo para sus observaciones. Las clepsidras y los relojes de sol fueron inventados en Egipto en tiempos de los Ptolomeos; las clepsidras fueron después perfeccionadas por Escipión Nasica o según otros por Ctesibio (discípulo de los oradores romanos medían con ellas la duración de sus discursos.)" +
        " Se cree que los grandes relojes de pesas y ruedas fueron inventados en Occidente por el monje benedictino Gerberto (papa, con el nombre de Silvestre II, hacia finales del siglo X) aunque ya con alguna anterioridad se conocían en el Imperio bizantino.2​Dante, en La divina comedia, canto X de El paraíso, antes del año 1321dc, cuenta acerca de relojes mecánicos con función alarma, cuyas ruedas se mueven unas a otras, y apresuran a la que va delante hasta que se oye tin tin con notas tan dulces, como algo normal.",
        imagen: "../../../../../assets/images/reloj.jpg"
      },
      {
        id: 2,
        titulo: "Evolución de las computadoras",
        descripcion: "Un computador o computadora es una maquina utilizada por el hombre para desempeñar diversas funciones, si hablamos del origen del computador nos tendríamos que remontar hasta la edad antigua cuando los hombres vivían en las cavernas, como sabemos el hombre primitivo no contaba con ningún medio para realizar cálculos y operaciones, se dice por ejemplo que para contar los frutos que recolectaba usaba pajillas o piedras, siempre fue una necesidad para el ser humano el tener conocimiento de cuanto alimento tenia y cuanto estaba utilizando, porque de esa manera sabría si va a poder sobrevivir los duros inviernos de aquella época, en esta época el comercio era nulo, luego fue avanzando hasta que se comenzaron a realizar trueques entre una y otra tribu, a medida que el trueque avanzo y la sociedad también es cuando aparece el dinero y por ello la necesidad de un instrumento que pueda dar cálculos exactos de lo que obtenía.",
        imagen: "../../../../../assets/images/computadora.jpg"
      },
      {
        id: 3,
        titulo: "El Internet",
        descripcion: "Internet (el internet o, también, la internet)​ es un conjunto descentralizado de redes de comunicaciones interconectadas, que utilizan la familia de protocolos TCP/IP, lo cual garantiza que las redes físicas heterogéneas que la componen constituyen una red lógica única de alcance mundial. Sus orígenes se remontan a 1969, cuando se estableció la primera conexión de computadoras, conocida como ARPANET, entre tres universidades en California (Estados Unidos).",
        imagen: "../../../../../assets/images/internet.jpg"
      }
    ];

    localStorage.setItem("blog", JSON.stringify(this.blogList));
  }
}
