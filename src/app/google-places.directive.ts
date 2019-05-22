import { Directive, ElementRef, OnInit } from '@angular/core';
const google = require('@types/googlemaps');

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[google-place]'
})
export class GooglePlacesDirective implements OnInit {
  private element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    // elRef will get a reference to the element where
    // the directive is placed
    this.element = elRef.nativeElement;
  }

  ngOnInit() {
    const autocomplete = new google.maps.places.Autocomplete(this.element);
  }

}
