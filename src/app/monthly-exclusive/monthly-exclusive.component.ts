import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-monthly-exclusive',
  templateUrl: './monthly-exclusive.component.html',
  styleUrls: ['./monthly-exclusive.component.scss']
})
export class MonthlyExclusiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $(document).ready(function () {
    //   $("[data-bs-toggle='tooltip']").tooltip('show');
    // });
  }
}