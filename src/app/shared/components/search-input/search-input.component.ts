import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements OnInit {
  @Input() placeholder = 'Search';
  @Input() delay = 0;
  @Input() defaultValue = '';
  @Output() valueChanged = new EventEmitter<string>();

  searchControl = new FormControl(this.defaultValue);

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(this.delay),
      distinctUntilChanged(),
    ).subscribe(value => this.valueChanged.emit(value));
  }
}
