import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productos: ProductoDescripcion = {};
  anio: number = new Date().getFullYear();
  id: string;

  constructor(private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(parametros => {
        this.productoService.getProducto(parametros['idProducto'])
             .subscribe((producto: ProductoDescripcion) => {
              this.id = parametros['idProducto'];
              this.productos = producto;
             });
      });
  }

}
