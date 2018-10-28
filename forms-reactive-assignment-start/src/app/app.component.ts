import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Options } from 'selenium-webdriver/safari';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup; 
  options: ['Stable','Critical','Finished'];

  ngOnInit(): void {
    
    this.projectForm = new FormGroup({
      'projectname': new FormControl(null, [Validators.required], this.invalidNames),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl()
    });

  }

  invalidNames(control: FormControl): Promise<any> | Observable<any> {

    const promise = new Promise<any>((resolve, reject) => {
      if(control.value === 'Test')
        {
          resolve({ 'invalidName': true });
        } else {
          resolve(null);
        }
    });

    return promise;

  }

}
