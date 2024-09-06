import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SavService } from '../../_services/sav.service';
import { Sav } from '../../_models/sav';

@Component({
  selector: 'app-update-sav',
  templateUrl: './updatesav.component.html',
  styleUrls: ['./updatesav.component.scss']
})
export class UpdatesavComponent implements OnInit {
  updateSavForm: FormGroup;
  savId!: number;
  sav!: Sav;

  constructor(
    private fb: FormBuilder,
    private savService: SavService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.updateSavForm = this.fb.group({
      numSerie: ['', [Validators.required, Validators.minLength(3)]],
      IMEI: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      dateReception: ['', Validators.required],
      categorie: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Récupérer l'ID du SAV depuis l'URL
    this.route.params.subscribe(params => {
      this.savId = params['id'];
      this.loadSav(this.savId);
    });
  }

  loadSav(id: number) {
    this.savService.getSavById(id).subscribe(
      sav => {
        this.sav = sav;
        this.updateSavForm.patchValue({
          numSerie: sav.numSerie,
          IMEI: sav.IMEI,
          dateReception: sav.dateReception,
          categorie: sav.categorie
        });
      },
      error => {
        console.error('Erreur lors du chargement du SAV :', error);
      }
    );
  }

  updateSav() {
    if (this.updateSavForm.valid) {
      const updatedSav: Sav = {
        idProduit: this.savId,  // Assurez-vous d'utiliser l'ID correct ici
        ...this.updateSavForm.value
      };
      this.savService.updateSav(updatedSav,this.savId).subscribe(
        () => {
          console.log('SAV mis à jour avec succès :', updatedSav);
          this.router.navigate(['/component/sav']); // Rediriger après mise à jour
        },
        error => {
          console.error('Erreur lors de la mise à jour du SAV :', error);
        }
      );
    } else {
      console.error('Données de formulaire invalides');
    }
  }

  resetForm() {
    this.updateSavForm.reset();
  }
}
