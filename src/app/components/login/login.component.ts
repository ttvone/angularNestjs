import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('form', { static: true })
  private form: NgForm;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.invalid) return;
    this._httpClient
      .post('/api/account/login', this.form.value)
      .subscribe(result => {
        console.log(result);
      });
  }
}
