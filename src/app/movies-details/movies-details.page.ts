import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService} from '../services/movies.service';




@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.page.html',
  styleUrls: ['./movies-details.page.scss'],
})
export class MoviesDetailsPage implements OnInit {
information=null;
  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.moviesService.getDetails(id).subscribe(result => {
     console.log('details: ' ,result);   
       this.information = result;
    });
  }
 

}
