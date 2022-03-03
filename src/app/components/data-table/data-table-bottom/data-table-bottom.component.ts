import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Item } from '../../../models/item.model';
import { ItemStoreService } from '../../../services/store/item-store.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-data-table-bottom',
  templateUrl: './data-table-bottom.component.html',
  styleUrls: ['./data-table-bottom.component.css']
})
export class DataTableBottomComponent implements OnInit {

  listItem: any[] = [];
  item$: Subscription | undefined;

  dtOptions: any = {};

  constructor(
    private itemService: ItemStoreService,
  ) { }

  ngOnInit(): void {
    this.item$ = this.itemService.ItemListUpdate.subscribe(
      (data) => {
        for(let value of Object.values(data)) {
          this.listItem.push(value);
        }
      }
    )

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
    // this.dtTrigger.unsubscribe();
  }
}
