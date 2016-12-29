import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit {

  private backgroundColor: string;

  @Input()
  defaultColor: string = 'white';

  @Input('appHighlight')
  highlightColor: string = 'yellow';

  @HostBinding('style.backgroundColor')
  get setColor() {
    return this.backgroundColor;
  }

  @HostListener('mouseenter')
  onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }
  
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
