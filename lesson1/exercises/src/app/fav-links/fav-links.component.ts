import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  favLinks: string[] = ['https://open.spotify.com/artist/35iAdp3TrZPJT5UCv9bq7V?si=cVxxMub5SZiuxddvJELxyg&nd=1', 'https://www.instagram.com/dead7sound/']
}
