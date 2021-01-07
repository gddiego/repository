import { Component, Inject } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
// import { MatDialog } from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  animal: string;
  name: string;

  public DialogOverviewExampleDialog: any;
  constructor() { }



}

