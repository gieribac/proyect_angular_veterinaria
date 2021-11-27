import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  objJ:any={

    mail:"",
    names:"",
    lastnames:"",
    password:"",
    dni:""
    
  }
constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  save():void{
    console.log(this.objJ)
    this.http.post("http://localhost:8081/api/owner/guardarOwner",this.objJ)
    .subscribe((Res:any)=>{
    console.log(Res);
    });
  } 
}
