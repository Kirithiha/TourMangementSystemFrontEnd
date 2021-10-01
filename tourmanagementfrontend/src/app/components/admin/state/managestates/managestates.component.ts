import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { State, StateService } from 'src/app/services/state/state.service';


@Component({
  selector: 'app-managestates',
  templateUrl: './managestates.component.html',
  styleUrls: ['./managestates.component.css']
})
export class ManagestatesComponent implements OnInit {

  private jsonObject : any;
  public states : State[] | undefined;

  constructor(private service : StateService, private router : Router) { }

  ngOnInit(): void {
    this.getState();     
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

  update(state : State) {
    this.router.navigate(["updatestate"],{state: {state: state}});
  }

  getState() {
    this.service.getState().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.states = this.jsonObject.data;
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
}
