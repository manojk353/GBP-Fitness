import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CalorieSnackComponent } from '../calorie-snack/calorie-snack.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepstocalories',
  templateUrl: './stepstocalories.component.html',
  styleUrls: ['./stepstocalories.component.scss']
})
export class StepstocaloriesComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {}
  ngOnInit() {
  }

  calorie = new FormControl('', [
    Validators.required,
    Validators.pattern("^[0-9]+$"),
  ]);

  durationInSeconds = 5;
  public openSnackBar(calories: string) {
    var str:string ="";

    if(calories===""){

      str = "Enter calories in the field"
    }else{
      str=('"'+Number(calories)*20)+'"'+" Steps to reach your Target";
    }

    if((this.calorie.valid)){
    this._snackBar.open(str, "", {
      duration: 5000,
      politeness:"polite",
      verticalPosition:"bottom",
      horizontalPosition:"center",
      panelClass: ['red-snackbar']

    });
  }
  }

}
