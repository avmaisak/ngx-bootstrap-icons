import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output()
  public textChanged = new EventEmitter<string>();

  public searchForm = new FormGroup({
    searchText: new FormControl(''),
  });

  public submitForm(): void {
    const res = this.searchForm.value;

    if (!res) {
      this.textChanged.emit('');
      return;
    }

    this.textChanged.emit(res.searchText.trim());
  }
}
