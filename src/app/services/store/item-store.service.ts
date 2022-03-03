import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { switchMap, tap } from 'rxjs/operators';
import { Item } from '../../models/item.model';
import { HandleErrorService } from './handle-error.service';
import { ConnectApiService } from '../connect-api/connect-api.service';

@Injectable({
  providedIn: 'root'
})

export class ItemStoreService {

  private ItemsList: Item[] | null = null;
  ItemListUpdate = new Subject<Item[]>();

  constructor(
    private api: ConnectApiService,
    private handleErr: HandleErrorService,
  ) { }

  GetListItems() {
    this.api.GetListItems().subscribe(
      (itemData: Item[]) => {
        this.ItemsList = itemData;
        this.ItemListUpdate.next({ ...this.ItemsList });
      },
      (err: any) => this.handleErr.HandleError(err)
    );
  }
}
