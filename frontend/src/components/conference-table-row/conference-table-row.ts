import { Component, Input } from '@angular/core';

/**
 * Generated class for the ConferenceTableRowComponent component.ew
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'conference-table-row',
  templateUrl: 'conference-table-row.html'
})
export class ConferenceTableRowComponent {

  @Input() conference;

  constructor() {
  }

  ionViewDidLoad() {
  }
}
