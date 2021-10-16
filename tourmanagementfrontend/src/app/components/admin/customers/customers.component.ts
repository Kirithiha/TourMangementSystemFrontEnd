import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers : Customer[] | undefined;
  public config : any;
  public searchText : any;
  private jsonObject : any;

  constructor(private service : CustomerService) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.service.getAll().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.customers = this.jsonObject.data;
      this.config = { itemsPerPage: 5, currentPage: 1 };
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
