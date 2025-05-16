import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Zoo } from '../zoo';
import { environment } from '../../environments/environment.development';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-zoos',
  imports: [RouterLink],
  templateUrl: './zoos.component.html',
  styleUrl: './zoos.component.scss'
})
export class ZoosComponent implements OnInit {

   public zoos: Zoo[] = [];
    constructor(private http: HttpClient) {}
  
    ngOnInit(): void {
      this.getZoos();
    }
    
    getZoos() {
        this.http.get<Zoo[]>(`${environment.baseUrl}api/Zoos`).subscribe({
          next: result => this.zoos = result,
          error: error => console.error(error)
        });
      }

}
