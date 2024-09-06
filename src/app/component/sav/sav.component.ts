import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sav } from '../../_models/sav'; // Assurez-vous que le chemin est correct
import { SavService } from '../../_services/sav.service'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-sav',
  templateUrl: './sav.component.html',
  styleUrls: ['./sav.component.scss']
})
export class SavComponent implements OnInit {
  savs: Sav[] = [];

  constructor(private savService: SavService, private router: Router) { }

  ngOnInit(): void {
    this.loadSavs();
  }

  loadSavs() {
    this.savService.getAllSavs().subscribe(
      savs => {
        console.log('SAVs loaded:', savs); // Vérifiez les données ici
        this.savs = savs;
      },
      error => {
        console.error('Error loading SAVs:', error);
      }
    );
  }

  viewSav(sav: Sav) {
    console.log('View SAV:', sav);
  }

  deleteSav(id: number) {
    if (confirm('Are you sure you want to delete this SAV?')) {
      this.savService.deleteSav(id).subscribe(
        () => {
          this.savs = this.savs.filter(sav => sav.idProduit !== id);
        },
        error => {
          console.error('Error deleting SAV:', error);
        }
      );
    }
  }

  createSav(newSav: Sav) {
    this.savService.createSav(newSav).subscribe(
      createdSav => {
        this.savs.push(createdSav);
      },
      error => {
        console.error('Error creating SAV:', error);
      }
    );
  }

  editSav(sav: Sav) {
    this.router.navigate(['/update-sav', sav.idProduit]); // Ajustez l'URL si nécessaire
  }
}
