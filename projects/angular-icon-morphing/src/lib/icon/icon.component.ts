import { Component, OnInit, ContentChild, ElementRef, Input, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';

declare var SVGMorpheus: any;

@Component({
  selector: 'aim-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit, AfterContentInit, OnChanges {

  constructor() { }
  
  @ContentChild('startIcon') startIcon: ElementRef;
  @ContentChild('endIcon') endIcon: ElementRef;

  @Input() active: boolean;
  @Input() easing = 'linear';
  @Input() duration = 250;
  
  public svgMorpheus: any;

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.startIcon.nativeElement.id = 'startIcon';
    this.endIcon.nativeElement.id = 'endIcon';
    this.svgMorpheus = new SVGMorpheus('#icons-container svg', {iconId: 'startIcon'});
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes.active){
      this.doTransition();
    }

  }
  doTransition() {
    if (this.svgMorpheus) {
      const target: string = (!this.active) ? 'startIcon' : 'endIcon';
      this.svgMorpheus.to(target, {duration: this.duration, easing: this.easing, rotation: 'none'}, null);
    }
  }
}
