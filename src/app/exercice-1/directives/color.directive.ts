import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

export enum KEY_CODE {
  DOWN_ARROW = 40,
  RIGHT_ARROW = 39,
  UP_ARROW = 38,
  LEFT_ARROW = 37
}


@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:keyup', ['$event']) windowClick($event: { keyCode: KEY_CODE; }) {
    // console.log($event.keyCode);

    switch ($event.keyCode) {
      case KEY_CODE.RIGHT_ARROW: {
        this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
        break;
      }
      case KEY_CODE.LEFT_ARROW: {
        this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
        break;
      }
      case KEY_CODE.UP_ARROW: {
        this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
        break;
      }
      case KEY_CODE.DOWN_ARROW: {
        this.renderer.setStyle(this.el.nativeElement, 'color', 'yellow');
        break;
      }
      default: {
        this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
        break;
      }
    }
  }



  ngOnInit(): void {
    // this.el.nativeElement.style.color= 'red' ;
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

}
