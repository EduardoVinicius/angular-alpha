import { Component } from '@angular/core';
// Importando os recursos necessários
import { ProductService } from 'src/app/product.service';
import { Produto } from 'src/app/product';

@Component({
  selector: 'app-comp-service',
  templateUrl: './comp-service.component.html',
  styleUrls: ['./comp-service.component.css']
})
export class CompServiceComponent {

  // Casting das propriedades utilizadas dentro do código
  produtos!: Produto[];
  productService;

  constructor() {
    this.productService = new ProductService();
  }

  // Fazer uso do prosuctService para acessar 
  // o conteúdo do service criado anteriormente.
  obterConteudo() {
    this.produtos = this.productService.getProdutos();
  }

}
