import {
  Directive, OnInit,
  OnDestroy, ElementRef,
  HostListener,
  Renderer2, //dom manipulation library
  Input
} from '@angular/core';

// <h2 appHighlight
// <div appHighlight

// host element

@Directive({
  // []- must, reperesent a property
  // used at any tag/component
  selector: '[appHighlight]',
  exportAs: 'appHighlight' //for #myDir="appHighlight"
})
export class HighlightDirective implements OnInit, OnDestroy {
  // <h2 appHighlight="orange"
  @Input("appHighlight")
  color: string = "lightgreen";

  // is injected with host element elementRef
  constructor(private hostElement: ElementRef,
    private renderer: Renderer2) {
    console.log("HighlightDirective Ceated");
  }

  ngOnInit() {
    console.log("HighlightDirective  ngOnInit called");
    if (!this.color) {  // to fix alias default
      this.color = 'lightgreen';
    }
    console.log('host tag', this.hostElement.nativeElement.tagName)

  }
  ngOnDestroy() {
    console.log("HighlightDirective  ngOnDestroy called");

  }
  @HostListener('click')
  clicked() {
    console.log('click event');
  }

  @HostListener('mouseenter')
  Mymouseenter() {
    this.renderer.setStyle(this.hostElement.nativeElement,
      "background",
      this.color);
  }
  @HostListener('mouseleave')
  Mymouseleave() {
    this.renderer.removeStyle(this.hostElement.nativeElement,
      "background");
  }

}
