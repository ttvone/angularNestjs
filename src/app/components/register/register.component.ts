import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('form', { static: true })
  private form: NgForm;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.invalid) return;
    this._httpClient
      .post('/api/account/register', this.form.value)
      .subscribe(result => {
        console.log(result);
      });
  }

}
