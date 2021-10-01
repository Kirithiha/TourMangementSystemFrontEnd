import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Type, TypeService } from 'src/app/services/type/type.service';

@Component({
  selector: 'app-manage-type',
  templateUrl: './manage-type.component.html',
  styleUrls: ['./manage-type.component.css']
})
export class ManageTypeComponent implements OnInit {

  private jsonObject : any;
  public types : Type[] | undefined;

  constructor(private service : TypeService, private router : Router) { }

  ngOnInit(): void {
    this.getType();
  }

  addType() {
    this.router.navigate(["addtype"]);
  }

  getType() {
    this.service.getAllType().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.types = this.jsonObject.data;
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  update(type : Type) {
    this.router.navigate(["updatetype"],{state: {type: type}});
  }

  delete(id : number|undefined) {
    this.service.delete(id).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      window.alert(message);
      window.location.reload();
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }
}
