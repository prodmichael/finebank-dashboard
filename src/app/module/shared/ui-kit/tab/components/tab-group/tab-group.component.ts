import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnDestroy,
  OnInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../../tab.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent implements OnInit, OnDestroy, AfterContentInit {
  @ContentChildren(TabComponent, { descendants: true })
  buttons!: QueryList<TabComponent>;

  tabs = [
    {
      img: '',
      title: 'GTR5',
      desc: 'Gadget & Gear',
      price: 160,
      date: '17 May 2023',
    },
  ];

  ngOnInit() {}
  ngOnDestroy() {}
  ngAfterContentInit() {}
}
