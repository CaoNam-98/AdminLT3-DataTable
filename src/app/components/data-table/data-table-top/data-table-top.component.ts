import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Item } from '../../../models/item.model';
import { ItemStoreService } from '../../../services/store/item-store.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-data-table-top',
  templateUrl: './data-table-top.component.html',
  styleUrls: ['./data-table-top.component.css']
})
export class DataTableTopComponent implements OnInit, OnDestroy {
  listItem: any[] = [];
  item$: Subscription | undefined;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  isLoaded = false;

  constructor(
    private itemService: ItemStoreService,
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers', // remove first and last
      pageLength: 10,
      processing: true,
      searching: false, // Bỏ phần search
      // info: false,
      dom: 'rtip', // Bỏ phần show entries
      orderCellsTop: true,
    };
    this.isLoaded = false;
    this.itemService.GetListItems();
    this.item$ = this.itemService.ItemListUpdate.subscribe(
      (data) => {
        for(let value of Object.values(data)) {
          this.listItem.push(value);
        }
        this.isLoaded = true;
        this.dtTrigger.next();
      }
    )
  }

  ngOnDestroy() {
    this.item$ ? this.item$.unsubscribe() : '';
    this.dtTrigger.unsubscribe();
  }
}
