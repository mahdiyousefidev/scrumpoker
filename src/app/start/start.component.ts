import {Component, OnInit} from '@angular/core';
import {BaseValidation} from "../_shared/base-validation";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent extends BaseValidation implements OnInit {
  fg!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.fg = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ])
    })
  }

  onSubmit() {
    console.log('asdfsd');
  }
}
