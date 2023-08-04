import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss'],
})
export class TabItemComponent {
  @ViewChild('tab', { read: TemplateRef }) tabTemplate!: TemplateRef<any>;

  public selected: boolean = false;
}
