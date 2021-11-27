import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  infoConsult:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
  }

  listar():void{
    this.http.get("http://localhost:8081/api/owner/consultarOwner",{responseType:"json"})
    .subscribe((Res:any)=>{

      console.log(Res);
      this.infoConsult=Res;

    });
    
  }
  eliminar(x:any):void{
    alert(x);
    this.http.delete("http://localhost:8081/api/owner/eliminarOwner"+x)
    .subscribe((Res:any)=>{
      console.log(Res);
      this.listar();
    });
  }
}
