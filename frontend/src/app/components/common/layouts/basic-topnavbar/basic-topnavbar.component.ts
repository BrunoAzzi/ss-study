import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';

@Component({
    selector: 'basic-topnavbar',
    templateUrl: './basic-topnavbar.template.html',
    styleUrls: ['./basic-topnavbar.component.scss']
})
export class BasicTopNavBarLayout implements OnInit {
    breadcrumb: string = "";

    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
            let root: ActivatedRoute = this.activatedRoute.root;
            this.getBreadcrumbs(root);
        });
    }

    private getBreadcrumbs(route: ActivatedRoute) {
		const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";
		let children: ActivatedRoute[] = route.children;

		if (children.length === 0) return;

		for (let child of children) {
			let childHasBreadCrumb = child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB);

			if (child.outlet !== PRIMARY_OUTLET) continue;
			if (childHasBreadCrumb) this.breadcrumb = child.snapshot.data[ROUTE_DATA_BREADCRUMB];

			return this.getBreadcrumbs(child);
		}
	}
}
