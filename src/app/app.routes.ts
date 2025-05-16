import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { ZoosComponent } from './zoos/zoos.component';
import { HabitatsComponent } from './habitats/habitats.component';
import { CitiesComponent } from './cities/cities.component';
import { CountriesComponent } from './countries/countries.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CountryPopulationComponent } from './country-population/country-population.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    { path:"weather", component:WeatherComponent },
    { path: "cities", component:CitiesComponent },
    { path: "countries", component:CountriesComponent },
    { path:"navbar", component:NavBarComponent },
    { path: "countryPopulation/:id", component:CountryPopulationComponent },
    { path: "login", component:LoginComponent},
    { path: "zoos", component:ZoosComponent},
    { path: "habitats", component:HabitatsComponent},
    { path:"", component:WeatherComponent, pathMatch: "full" }
    
];
