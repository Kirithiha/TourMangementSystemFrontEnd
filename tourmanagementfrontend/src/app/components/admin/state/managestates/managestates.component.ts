import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { State, StateService } from 'src/app/services/state/state.service';


@Component({
  selector: 'app-managestates',
  templateUrl: './managestates.component.html',
  styleUrls: ['./managestates.component.css']
})
export class ManagestatesComponent implements OnInit {

  private jsonObject : any;
  public states : State[] | undefined;
  public messageDelete : string = "Are you sure you want to delete it?";
  public title : string = "Confirmation";
  public searchText : any;
  public config : any;

  constructor(private service : StateService, private router : Router, private tostr : ToastrService) { }

  ngOnInit(): void {
    this.getState();     
  }

  delete(id : number|undefined) {
    this.service.delete(id).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      this.tostr.success(message);
      this.getState();
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  update(state : State) {
    this.router.navigate(["updatestate"],{state: {state: state}});
  }

  getState() {
    this.service.getState().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.states = this.jsonObject.data;
      this.config = { itemsPerPage: 5, currentPage: 1 }
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    })
  }

  addState() {
    this.router.navigate(["addstate"]);
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }
}
