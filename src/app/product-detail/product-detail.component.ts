import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!: Product;

  selectedSize: string = '';
  quantity: number = 1;
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

  constructor(private cartService: CartService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productos.find(p => p.id === id)!;
  }

  addToCart() {
    if (!this.selectedSize) {
      alert('Selecciona una talla');
      return;
    }
    this.cartService.addToCart(this.product, this.selectedSize, this.quantity);
    alert('Producto agregado al carrito!');
  }
}
