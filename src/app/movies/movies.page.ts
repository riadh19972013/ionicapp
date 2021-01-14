import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService, SearchType } from '../services/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  constructor(private movieService:MoviesService) { }

  ngOnInit() {
  }
  searchChanged(){
    this.results=this.movieService.searchData(this.searchTerm,this.type);

}}
