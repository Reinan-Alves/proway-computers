
import { NotificacaoService } from './../../notificacao.service';
import { IProduto, IProdutoCarrinho } from './../../produtos';
import { ProdutoService } from './../../produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhosService } from 'src/app/carrinhos.service';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.scss'],
})
export class DetalhesProdutosComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade: number = 1;
  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private notificacao: NotificacaoService,
    private carrinhosService:CarrinhosService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtoService.getOne(produtoId);
  }
 adicionarAoCarrinho(){

  this.notificacao.notificar("Produto adicionado ao carrinho")
  const produto: IProdutoCarrinho = {
    ...this.produto!,
    quantidade: this.quantidade
  }
  this.carrinhosService.adicionarAoCarrinho(produto)

 }
}
