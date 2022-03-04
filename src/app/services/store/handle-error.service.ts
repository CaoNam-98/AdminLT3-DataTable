import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class HandleErrorService {

  constructor() { }

  HandleError(err: HttpErrorResponse) {
    switch(err.status) {
      case 401:
        Swal.fire(
          'You do not have authentication to do!!!',
          'You clicked the button!',
          'error'
        );
        break;

      case 403:
        Swal.fire(
          'You do not have permission to do!!!',
          'You clicked the button!',
          'error'
        );
        break;

      case 404:
        Swal.fire(
          err.statusText,
          'You clicked the button!',
          'error'
        );
        break;

      case 500:
        Swal.fire(
          err.error,
          'You clicked the button!',
          'error'
        );
        break;
    }
  }
}
