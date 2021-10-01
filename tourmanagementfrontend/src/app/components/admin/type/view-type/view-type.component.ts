import { Component, OnInit } from '@angular/core';
import { Type, TypeService } from 'src/app/services/type/type.service';

@Component({
  selector: 'app-view-type',
  templateUrl: './view-type.component.html',
  styleUrls: ['./view-type.component.css']
})
export class ViewTypeComponent implements OnInit {

  public types : Type[] | undefined;
  private jsonObject : any;

  constructor(private service : TypeService) { }

  ngOnInit(): void {
    this.getType();
  }

  getType() {
    this.service.getAllType().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.types = this.jsonObject.data;
      console.log(this.types);
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }
}
