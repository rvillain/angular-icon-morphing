import { Component, OnInit, ContentChild, ElementRef, Input, AfterContentInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

declare var SVGMorpheus: any;

@Component({
  selector: 'aim-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit, AfterContentInit, OnChanges {

  constructor() { }
  // Icons children
  @ContentChild('startIcon') startIcon: ElementRef;
  @ContentChild('endIcon') endIcon: ElementRef;

  @ViewChild('iconContainer') iconContainer: ElementRef;

  @Input() active: boolean;
  @Input() easing = 'linear';
  @Input() duration = 250;

  // morpheus variable
  public svgMorpheus: any;

  public containerId = 'ic-' + Math.floor(Math.random() * 1000000);

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.startIcon.nativeElement.id = 'startIcon';
    this.endIcon.nativeElement.id = 'endIcon';
    this.iconContainer.nativeElement.id = this.containerId;
    this.svgMorpheus = new SVGMorpheus('#' + this.containerId + ' svg', {iconId: 'startIcon'});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.active) {
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
