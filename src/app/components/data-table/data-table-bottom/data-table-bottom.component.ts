import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { timer } from 'rxjs';
import { Item } from '../../../models/item.model';

@Component({
  selector: 'app-data-table-bottom',
  templateUrl: './data-table-bottom.component.html',
  styleUrls: ['./data-table-bottom.component.css']
})
export class DataTableBottomComponent implements OnInit {

  listItem: any[] = [];
  item$: Subscription | undefined;
  isLoaded: boolean = false;
  dtOptions: any = {};

  constructor(
  ) { }

  ngOnInit(): void {
    timer(500)
      .subscribe(() => this.isLoaded = true)

    this.dtOptions = {
      ajax: 'assets/data.json',
      columns: [{
        title: 'Rendering Engine',
        data: 'rendering'
      }, {
        title: 'Browser',
        data: 'browser'
      }, {
        title: 'Platform(s)',
        data: 'platform'
      }, {
        title: 'Engine version',
        data: 'version'
      }, {
        title: 'CSS grade',
        data: 'grade'
      }],
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'copy',
        'csv',
        'excel',
        'pdf',
        'print',
        'colvis',
      ]
    };
  }

  ngOnDestroy() {
    this.item$ ? this.item$.unsubscribe() : '';
  }
}
