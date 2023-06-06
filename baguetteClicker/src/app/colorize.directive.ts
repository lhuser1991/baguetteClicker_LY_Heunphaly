import { Directive, ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[colorize]'
})
export class ColorizeDirective {

  constructor(private elem:ElementRef){ 
    this.elem.nativeElement.style.color="";
  }

  @HostListener('mouseenter') onMouseOver() {
    this.colorize('var(--bread-count)');
  }

  @HostListener('mouseleave') onMouseOut() {
    this.colorize('var(--clear-text)');
  }
  
  private colorize(color: string) {
    this.elem.nativeElement.style.color=color;
  }

}
