import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public lat: number;
  public lng: number;
  constructor() {}


  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((p) => {
        this.lat = p.coords.latitude;
        this.lng = p.coords.longitude;
      });
    }
  }

  ngOnInit() {
    this.setCurrentPosition();
  }

}
