import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vente } from '../../_models/vente'; // Assurez-vous que le chemin est correct
import { VenteService } from '../../_services/vente.service'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss']
})
export class VenteComponent implements OnInit {
  ventes: Vente[] = [];

  constructor(private venteService: VenteService, private router: Router) { }

  ngOnInit(): void {
    this.loadVentes();
  }

  loadVentes() {
    this.venteService.getAllVentes().subscribe(
      ventes => {
        this.ventes = ventes;
      },
      error => {
        console.error('Error loading ventes:', error);
      }
    );
  }

  viewVente(vente: Vente) {
    // Implement view functionality
    console.log('View Vente:', vente);
  }

  deleteVente(id: number) {
    if (confirm('Are you sure you want to delete this Vente?')) {
      this.venteService.deleteVente(id).subscribe(
        () => {
          // Remove the deleted Vente from the list
          this.ventes = this.ventes.filter(vente => vente.idVente !== id);
        },
        error => {
          console.error('Error deleting Vente:', error);
        }
      );
    }
  }

  createVente(newVente: Vente) {
    this.venteService.createVente(newVente).subscribe(
      createdVente => {
        this.ventes.push(createdVente);
      },
      error => {
        console.error('Error creating Vente:', error);
      }
    );
  }

  editVente(vente: Vente) {
    // Redirect to the update page with the Vente ID
    this.router.navigate(['/update-vente', vente.idVente]); // Adjust the URL based on your routing setup
  }
}
