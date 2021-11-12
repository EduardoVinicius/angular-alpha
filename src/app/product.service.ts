// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

// Importando o model
import { Produto } from "./product";

export class ProductService {

  // constructor() {}

  // Criando o conteúdo que será oferecido pelo service
  public getProdutos() {
    let produtos: Produto[];

    produtos = [
      new Produto(1, 'Quadro Mestre Yoda', 199),
      new Produto(2, 'Máscara Darth Vader', 159),
      new Produto(3, 'LightSaber', 89)
    ];

    return produtos;
  }
}
