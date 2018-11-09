import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import {HeroService} from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  constructor(private route: ActivatedRoute, private router: Router, private service: HeroService ) { }

  ngOnInit() {

    // paramMap observable manages component instace (reuse, destroy) according to Router's needs
    this.hero$ = this.route.paramMap.pipe(
      // use the swithMap to flatten the obeservable
      switchMap( (params: ParamMap) =>
        this.service.getHero(params.get(`id`)) // use the id token value from the route path change to get the correct Hero
  );
  }

}
