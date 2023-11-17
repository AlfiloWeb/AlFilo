import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
document.addEventListener('DOMContentLoaded', function() {
  const openModalBtn = document.getElementById('openModalBtn')!;
  const closeModalBtn = document.getElementById('closeModalBtn')!;
  const modal = document.getElementById('myModal')!;

  openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'AlFilo';
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
