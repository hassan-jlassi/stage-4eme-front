import { Component, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  public sidebarnavItems: RouteInfo[] = [];
  showSidebar = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Listen to route change to control the sidebar visibility
        this.showSidebar = !this.isAuthPage(event.urlAfterRedirects);
      }
    });
  }

  private isAuthPage(url: string): boolean {
    // Hide sidebar on login or signup page
    return url === '/login' || url === '/inscription';
  }

  addExpandClass(element: string) {
    if (element === this.showMenu) {
      this.showMenu = '';
    } else {
      this.showMenu = element;
    }
  }
}
