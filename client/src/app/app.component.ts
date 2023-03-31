import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api').subscribe((res) => console.log(res));
  }

  public getUser() {
    this.http.get('/api/user').subscribe((res) => console.log(res));
  }
}
