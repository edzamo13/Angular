import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent
  implements
    OnInit,
    AfterContentInit,
    AfterViewInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterViewInit
{
  constructor() {
    console.log('Constructor start!..');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('method ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('method ngDoCheck');
  }
  ngAfterContentChecked(): void {
    console.log('method ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('method ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('method ngAfterViewInit');
  }
  ngOnDestroy(): void {
    console.log('method ngOnDestroy');
  }
  ngOnInit(): void {
    console.log('method ngOnInit');
  }
}
