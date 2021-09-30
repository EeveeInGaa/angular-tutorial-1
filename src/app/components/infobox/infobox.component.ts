import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.scss']
})
export class InfoboxComponent implements OnInit {

  text: string = "additional Info-Text on our info box!";
  toggleText: string = "Show"
  hidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hidden = !this.hidden;
    if(this.hidden === false) {
      this.toggleText = "Hide"
    } else {
      this.toggleText = "Show"
    }
  }

  formGroup1 = new FormGroup({
    formControl1: new FormControl(''),
    formControl2: new FormControl(''),
    nestedFormGroup: new FormGroup({
      nestedFormControl1: new FormControl(''),
      nestedFormControl2: new FormControl(''),
    }),
    reqFormControl3: new FormControl('', Validators.required),
  })

  submitButton(): void {
    console.log('test1:' + ' ' + this.formGroup1.get('formControl1')?.value)
  }
}
