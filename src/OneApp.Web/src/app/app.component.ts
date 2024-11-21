import { Component } from '@angular/core';
import { WeatherForecasts } from '../types/weatherForecast';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather';
  forecasts: WeatherForecasts = [];

  constructor(private http: HttpClient) {
    http.get<WeatherForecasts>('api/WeatherForecast').subscribe({
      next: result => this.forecasts = result,
      error: console.error
    });
  }
}
