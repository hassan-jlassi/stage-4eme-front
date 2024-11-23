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
      imei: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Consistent naming with form control
      dateReception: ['', Validators.required],
      categorie: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.savId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadSav();
  }

  loadSav() {
    this.savService.getSavById(this.savId).subscribe(
      stock => {
        this.updateSavForm.patchValue(stock);
      },
      error => {
        console.error('Error loading stock:', error);
      }
    );
  }


  updateSav() {
    if (this.updateSavForm.valid) {
      const updatedSav: Sav = {
        idProduit: this.savId, // Ensure correct ID usage
        ...this.updateSavForm.value
      };

      this.savService.updateSav(updatedSav, this.savId).subscribe(
        () => {
          console.log('SAV updated successfully:', updatedSav);
          this.router.navigate(['/component/sav']); // Redirect after update
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
