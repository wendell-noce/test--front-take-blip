import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-base-router',
    template:
        '<router-outlet (activate)="activatedRouteData()"></router-outlet>',
})
export class BaseRouterComponent implements OnInit {
    @Output() routerEvent = new EventEmitter();

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {}

    activatedRouteData() {
        this.routerEvent.next(this.activatedRoute.data);
    }
}
