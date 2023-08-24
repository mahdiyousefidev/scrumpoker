import {Component, OnInit} from '@angular/core';
import {BaseValidation} from "./_shared/base-validation";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseValidation implements OnInit{
  title = 'scrumpoker';
  fg!:FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.fg=new FormGroup({
      username: new FormControl('',[
        Validators.required
      ])
    })
  }
}
