import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { State, StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.css']
})
export class AddStateComponent implements OnInit {

  private jsonObject : any;

  constructor(private service : StateService, private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  saveState(state : State) {
    this.service.saveState(state).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      this.toastr.success(message);
      this.router.navigate(["managestate"]);

    },
    (error)=>{
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }
}
