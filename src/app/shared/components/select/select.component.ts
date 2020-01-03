import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectOption } from '../../models/select-option';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements OnInit {
  @Input() options: SelectOption[];
  @Input() label: string;
  @Output() valueChanged = new EventEmitter();

  selectControl = new FormControl(null);

  constructor() {
  }

  ngOnInit() {
    this.selectControl.valueChanges
      .subscribe(value => this.valueChanged.emit(value));
  }

}
