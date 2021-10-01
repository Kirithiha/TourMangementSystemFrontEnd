import { Component, OnInit } from '@angular/core';
import { State, StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-view-state',
  templateUrl: './view-state.component.html',
  styleUrls: ['./view-state.component.css']
})
export class ViewStateComponent implements OnInit {

  private jsonObject : any;
  public states : State[] | undefined;

  constructor(private service : StateService) { }

  ngOnInit(): void {
    this.getState();
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
    });
  }
}
