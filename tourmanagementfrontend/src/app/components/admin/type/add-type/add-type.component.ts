import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Type, TypeService } from 'src/app/services/type/type.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {

  private jsonObject : any;
  
  constructor(private service : TypeService, private router : Router) { }

  ngOnInit(): void {
  }

  saveType(type : Type) {
    this.service.saveType(type).subscribe(
      (response) => {
        this.jsonObject = JSON.parse(JSON.stringify(response));
        var message = this.jsonObject.message;
        window.alert(message);
        this.router.navigate(["managetype"]);
      },
      (error)=>{
        this.jsonObject = JSON.parse(JSON.stringify(error));
        var message = this.jsonObject.error.message;
        window.alert(message);
      });
  }
}
