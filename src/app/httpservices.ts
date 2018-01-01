import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Rx";

@Injectable()
export class HttpService {
  private url = "https://jsonplaceholder.typicode.com/posts/3";
  private _url: string = "/api/places";
  private __url: string = "/api/ratings";
  constructor(private _http: Http) {}

  // getPlaces() {
  //   return this._http
  //     .get(this._url)
  //     .map((response: Response) => response.json());
  // }

  getPlaces(): Observable<any> {
    return this._http
      .get(this._url)
      .map((response: Response) => response.json());
  }

  setRating(_rating) {
    return this._http
      .post("http://localhost:3000/api/ratings", _rating)
      .map(res => res.json);
  }

  postReviews(_reviews) {
    return this._http
      .post("http://localhost:3000/api/reviews", _reviews)
      .map(res => res.json);
  }

  btnSearch(_find) {
    return this._http
      .post("http://localhost:3000/api/search", _find)
      .map(res => res);
  }

  getNearbyPlaces(_nearby) {
    return this._http
      .get(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
          _nearby.latitude +
          "," +
          _nearby.longitude +
          "&radius=100&type=" +
          _nearby.nearby +
          "&keyword=cruise&key=AIzaSyBV_05tOiURUudZjXaiWdCxcMjkvD__fRk",
        _nearby
      )
      .map(res => res);
  }

  // postReviews(_reviews) {
  //   return this._http
  //     .get("http://localhost:3000/api/places")
  //     .filter(place_id => (place_id = _reviews.place_id))
  //     .map(res => res.json);
  // }
}
