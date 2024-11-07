import { Component, OnInit } from '@angular/core';
import { ArbresParGenre } from 'src/app/Models/ArbresParGenre';
import { ArbreService } from 'src/app/Services/arbre.service';

@Component({
  selector: 'app-arbres-par-genre',
  templateUrl: './arbres-par-genre.component.html',
  styleUrls: ['./arbres-par-genre.component.scss']
})
export class ArbresParGenreComponent implements OnInit {

  arbresParGenre: ArbresParGenre[] = [];
  filteredArbres: ArbresParGenre[] = [];
  searchTerm: string = '';

  constructor(private arbreService: ArbreService) { }

  ngOnInit(): void {
      this.arbreService.getArbresParGenre().subscribe(
        (result) => {
          this.arbresParGenre = result;
          this.filteredArbres = this.arbresParGenre;
        },
        (error) => {
          console.error('Erreur lors du chargement des genres d\'arbres', error);
        }
      );
  }

  filterArbres(): void {
    if (!this.searchTerm) {
      this.filteredArbres = this.arbresParGenre;
    } else {
      this.filteredArbres = this.arbresParGenre.filter(arbre =>
        arbre.genre.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  resetFilter(): void {
    this.searchTerm = '';
    this.filteredArbres = this.arbresParGenre;
  }
}
