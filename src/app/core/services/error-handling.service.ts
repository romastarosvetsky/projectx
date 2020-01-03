import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {

  constructor(private toastr: ToastrService) {
  }

  showError(message: string): void {
    this.toastr.error(message);
  }
}
