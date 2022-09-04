import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  notificar(mensagem: string){
    this.snackBar.open(mensagem, "ok"),{
      duration: 2000,
      verticalPsition: "top",
      horizontalPosition: "center"
    }
  }
}
