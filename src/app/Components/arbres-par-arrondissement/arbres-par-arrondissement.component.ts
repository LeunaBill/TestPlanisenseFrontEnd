import { Component, OnInit } from '@angular/core';
import { ArbresParArrondissement } from 'src/app/Models/ArbresParArrondissement';
import { ArbreService } from 'src/app/Services/arbre.service';

@Component({
  selector: 'app-arbres-par-arrondissement',
  templateUrl: './arbres-par-arrondissement.component.html',
  styleUrls: ['./arbres-par-arrondissement.component.scss']
})
export class ArbresParArrondissementComponent implements OnInit {

  arbresParArrondissement: ArbresParArrondissement[] = [];
  filteredArbres: ArbresParArrondissement[] = [];
  searchTerm: string = '';

  constructor(private arberService: ArbreService) { }

  ngOnInit(): void {
      this.arberService.getArbresParArrondissement().subscribe(
        (result) => {
          this.arbresParArrondissement = result;
          this.filteredArbres = this.arbresParArrondissement;
        },
        (error) => {
          console.error('Erreur lors du chargement des arrondissements:', error);
        }
      );
  }

  filterArbres(): void {
    if (!this.searchTerm) {
      this.filteredArbres = this.arbresParArrondissement;
    } else {
      this.filteredArbres = this.arbresParArrondissement.filter(arbre =>
        arbre.arrondissement.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  resetFilter(): void {
    this.searchTerm = '';
    this.filteredArbres = this.arbresParArrondissement;
  }
}
