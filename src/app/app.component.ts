import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sig-market-revamp';

  ngOnInit() {
    $(document).ready(function() {
      $("#myModal").modal("show");
      $("#input-search").keyup(function() {
        if ($("#input-search").val().length > 0) {
          $(".go-icon").addClass("go-in");
        } else {
          $(".go-icon").removeClass("go-in");
        }
      });
      $(".go-icon").click(function() {
        $(".search-form").submit();
      });
      $("#view-cart").click(function() {
        $(".offcanvas-end").toggle();
        location.reload();
      });
      $("#checkout").click(function() {
        $(".offcanvas-end").toggle();
        location.reload();
      });
      $("#blog").click(function() {
        location.reload();
      });
      $("#about").click(function() {
        location.reload();
      });
      $("#login").click(function() {
        location.reload();
      });
      $("#beverages").click(function() {
        location.reload();
      });
      $("#granola").click(function() {
        location.reload();
      });
      $("#spreads").click(function() {
        location.reload();
      });
      $("#nuts").click(function() {
        location.reload();
      });
      $("#meals").click(function() {
        location.reload();
      });
    });
  }
}
