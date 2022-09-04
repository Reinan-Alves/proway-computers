import { CarrinhosService } from 'src/app/carrinhos.service';
import { IProdutoCarrinho } from '../produtos';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhosService: CarrinhosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhosService.obtemCarrinho();
    this.calculaTotal();
  }
  removerProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(
      (item) => item.id !== produtoId
    );
    this.carrinhosService.removerProdutoCarrinho(produtoId);
    this.calculaTotal();
  }
  calculaTotal() {
    this.total = this.itensCarrinho.reduce(
      (prev, curr) => prev + curr.preco * curr.quantidade,
      0
    );
  }
  comprar() {
    alert('Parabéns, Compra efetuada com sucesso');
    this.carrinhosService.limparCarrinho();
    this.router.navigate(['produtos']);
  }
}
