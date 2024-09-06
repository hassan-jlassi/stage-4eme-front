import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Composant } from '../../_models/composant';
import { ComposantService } from '../../_services/composant.service';

@Component({
  selector: 'app-composant',
  templateUrl: './composant.component.html',
  styleUrls: ['./composant.component.scss']
})
export class ComposantComponent implements OnInit {
  composants: Composant[] = [];

  constructor(private composantService: ComposantService, private router: Router) { }

  ngOnInit(): void {
    this.loadComposants();
  }

  loadComposants() {
    this.composantService.getAllComposants().subscribe(
      composants => {
        this.composants = composants;
      },
      error => {
        console.error('Error loading composants:', error);
      }
    );
  }

  viewComposant(composant: Composant) {
    // Implement view functionality
    console.log('View composant:', composant);
  }

  deleteComposant(id: number) {
    if (confirm('Are you sure you want to delete this composant?')) {
      this.composantService.deleteComposant(id).subscribe(
        () => {
          // Remove the deleted composant from the list
          this.composants = this.composants.filter(composant => composant.idComposant !== id);
        },
        error => {
          console.error('Error deleting composant:', error);
        }
      );
    }
  }

  createComposant(newComposant: Composant) {
    this.composantService.createComposant(newComposant).subscribe(
      createdComposant => {
        this.composants.push(createdComposant);
      },
      error => {
        console.error('Error creating composant:', error);
      }
    );
  }

  updateComposant(updatedComposant: Composant) {
    this.composantService.updateComposant(updatedComposant, updatedComposant.idComposant).subscribe(
      () => {
        const index = this.composants.findIndex(composant => composant.idComposant === updatedComposant.idComposant);
        if (index !== -1) {
          this.composants[index] = updatedComposant;
        }
      },
      error => {
        console.error('Error updating composant:', error);
      }
    );
  }

  editComposant(composant: Composant) {
    // Redirect to the update page with the composant ID
    this.router.navigate(['/updatecomposant', composant.idComposant]); // Assuming the update URL is '/update-composant/:idComposant'
  }
}
