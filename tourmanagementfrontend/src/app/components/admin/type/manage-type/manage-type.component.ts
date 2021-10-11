import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Type, TypeService } from 'src/app/services/type/type.service';

@Component({
  selector: 'app-manage-type',
  templateUrl: './manage-type.component.html',
  styleUrls: ['./manage-type.component.css']
})
export class ManageTypeComponent implements OnInit {

  private jsonObject : any;
  public types : Type[] | undefined;
  public messageDelete : string = "Are you sure you want to delete it?";
  public title : string = "Confirmation";
  public searchText : any;
  public config : any;

  constructor(private service : TypeService, private router : Router, private tostr : ToastrService) { }

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
      this.config = { itemsPerPage: 5, currentPage: 1 }
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
    console.log(id);
    this.service.delete(id).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      this.tostr.success(message);
      this.getType();
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }
}
