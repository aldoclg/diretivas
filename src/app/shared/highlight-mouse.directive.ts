import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  private backgroundColor: string;

  @HostBinding('style.backgroundColor')
  get setColor() {
    return this.backgroundColor;
  }

  @HostListener('mouseenter')
  onMouseOver() {
    //this._renderer.setElementStyle(this._elementRef, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseleave() {
    //this._renderer.setElementStyle(this._elementRef, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  constructor(/*private _elementRef: ElementRef,
    private _renderer: Renderer*/) { }



}
