import { Component } from '@angular/core';
import { DxResponsiveBoxModule } from 'devextreme-angular';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    customers: any[] = [];

    constructor() {
    }

    screen(width) {
        return (width < 700) ? 'sm' : 'lg';
    }
}
