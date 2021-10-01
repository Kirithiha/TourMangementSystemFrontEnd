import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { State, StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-updatestate',
  templateUrl: './updatestate.component.html',
  styleUrls: ['./updatestate.component.css']
})
export class UpdatestateComponent implements OnInit {

  public state : State | any;
  private jsonObject : any;

  constructor(private router : Router, private service : StateService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      state : State
    };
    this.state = state.state;
   }

  ngOnInit(): void {
    console.log(this.state);
  }

  updateState(updatedState : State) {
    this.service.update(updatedState).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      window.alert(message);
      this.router.navigate(["managestate"]);
    },
    (error)=>{
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

}
