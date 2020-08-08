import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css'],
})
export class CopyrightComponent implements OnInit {
  constructor() {}
  get year(): number {
    return new Date().getFullYear();
  }

  ngOnInit(): void {}
}
