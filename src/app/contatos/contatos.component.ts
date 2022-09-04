import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss'],
})
export class ContatosComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}

  formContato = this.fb.group({
    nome: ["", [Validators.minLength(4), Validators.required]],
    assunto: ["", [Validators.minLength(10), Validators.required]],
    telefone: ["", [Validators.minLength(11), Validators.required]],
    email: ["", [Validators.email, Validators.required]],
    mensagem: ["", [Validators.minLength(20), Validators.required]],
  });


enviarFormulario(){
  alert("mensagem enviada com sucesso");
  this.formContato.reset();
}

}
