
import { Component, OnInit } from '@angular/core';
import { CarrinhosService } from '../carrinhos.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public carrinhosService :CarrinhosService
  ) { }

  ngOnInit(): void {
  }

}
