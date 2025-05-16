import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Zoo } from '../zoo';
import { environment } from '../../environments/environment.development';
import { Habitat } from '../habitat';
@Component({
  selector: 'app-habitats',
  imports: [],
  templateUrl: './habitats.component.html',
  styleUrl: './habitats.component.scss'
})
export class HabitatsComponent implements OnInit {
  public habitats: Habitat[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getHabitats();
  }
  
  getHabitats() {
      this.http.get<Habitat[]>(`${environment.baseUrl}api/Habitats`).subscribe({
        next: result => this.habitats = result,
        error: error => console.error(error)
      });
    }
}
