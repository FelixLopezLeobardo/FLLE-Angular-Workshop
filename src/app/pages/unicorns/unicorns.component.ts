import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Unicorn } from 'src/app/interfaces/unicorn';
import { UnicornsService } from 'src/app/services/unicorns.service';
import { UnicornsViewComponent } from './unicorns-view/unicorns-view.component';
import { UnicornsUpdateComponent } from './unicorns-update/unicorns-update.component';

@Component({
  selector: 'app-unicorns',
  templateUrl: './unicorns.component.html',
  styleUrls: ['./unicorns.component.css']
})
export class UnicornsComponent {
  cabeceraTabla: string[] = ['name', 'age', 'colour', 'actions'];
  unicornios: Unicorn[] = [];
  dataSource = new MatTableDataSource<Unicorn>(this.unicornios);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private unicornsService: UnicornsService
  ) {
    this.unicornsService.unicornsSubject.subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.unicornsService.queryUnicorns().subscribe((data) => {    
      this.dataSource.data = data.body;
    });
  }

  verUnicornio(unicorns: Unicorn) {
    const dialogRef = this.dialog.open(UnicornsViewComponent, {
      width: '500px',
      data: unicorns,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.unicornsService.queryUnicorns().subscribe((data) => {});
    });
  }

  editarUnicornio(unicorns: Unicorn) {
    const dialogRef = this.dialog.open(UnicornsUpdateComponent, {
      data: unicorns,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.unicornsService.queryUnicorns().subscribe((data) => {});
    });
  }

  crearUnicornio() {
    const dialogRef = this.dialog.open(UnicornsUpdateComponent, {
      data: null,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.unicornsService.queryUnicorns().subscribe((data) => {});
    });
  }

  borrarUnicornio(_id: string) {
    this.unicornsService.deleteUnicorn(_id).subscribe((data) => {
      this.unicornsService.queryUnicorns().subscribe((data) => {});
    });
  }

}
