import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html'
})
export class TiendaComponent {
  productos: Product[] = [
    {
      id: 1,
      name: 'Camiseta Bizarra',
      price: 40000,
      sizes: ['M','L'],
      imageUrl: 'assets/img/Producto5.avif',
      description: 'Camiseta de algodón suave con estampado exclusivo que representa el arte alternativo y urbano.'
    },
    {
      id: 2,
      name: 'Gorra Alternativa',
      price: 35000,
      sizes: ['S','M'],
      imageUrl: 'assets/img/Producto4.avif',
      description: 'Gorra estilo urbano con diseño minimalista y ajuste perfecto para cualquier ocasión.'
    },
    {
      id: 3,
      name: 'Sticker Pack',
      price: 15000,
      sizes: ['S'],
      imageUrl: 'assets/img/Producto6.avif',
      description: 'Pack de stickers coleccionables con ilustraciones originales para darle un toque único a tus cosas.'
    },
    {
      id: 4,
      name: 'Hoodie Arte',
      price: 95000,
      sizes: ['L','XL'],
      imageUrl: 'assets/img/Producto3.avif',
      description: 'Hoodie premium con diseño artístico, ideal para climas fríos y estilo callejero.'
    },
  ];

  constructor(private router: Router) {}

  filtroPrice: number = 120000;
  filtroTallas: string[] = [];
  orden: string = 'recientes';

  get productosFiltrados() {
    let filtrados = this.productos.filter(p => p.price <= this.filtroPrice);

    if (this.filtroTallas.length > 0) {
      filtrados = filtrados.filter(p => p.sizes.some(t => this.filtroTallas.includes(t)));
    }

    if (this.orden === 'price-asc') {
      filtrados = filtrados.sort((a, b) => a.price - b.price);
    } else if (this.orden === 'price-desc') {
      filtrados = filtrados.sort((a, b) => b.price - a.price);
    }

    return filtrados;
  }

  toggleTalla(talla: string) {
    if (this.filtroTallas.includes(talla)) {
      this.filtroTallas = this.filtroTallas.filter(t => t !== talla);
    } else {
      this.filtroTallas.push(talla);
    }
  }

  verDetalle(id: number) {
    this.router.navigate(['/producto', id]);
  }
}
