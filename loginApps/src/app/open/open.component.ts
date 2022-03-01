import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})


export class OpenComponent implements OnInit {

  
  uname = ""
  pswd = ""

  openForm = this.fb.group({



    uname: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })


  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  open() {

    var uname = this.openForm.value.uname
    var password = this.openForm.value.pswd
    if (this.openForm.valid) {
      this.ds.open(uname, password)


        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
           
            localStorage.setItem("currentUserName", JSON.stringify(result.currentUserName))
            localStorage.setItem("token", JSON.stringify(result.token))
            this.router.navigateByUrl("dashboard")
          }
        },
          (result) => {
            alert(result.error.message)
          }
        )

    }
    else {
      alert("Invalid Form")
    }
  }
}