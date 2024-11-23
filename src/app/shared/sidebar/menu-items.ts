import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-house-door',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/composant',
    title: 'Composant',
    icon: 'bi bi-tools',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/sav',
    title: 'Service Après Vente',
    icon: 'bi bi-telephone',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/stock',
    title: 'Afficher les produits',
    icon: 'bi bi-box',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/vente',
    title: 'Afficher la liste des Ventes',
    icon: 'bi bi-cart',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/login',
    title: 'Déconnexion',
    icon: 'bi bi-box-arrow-right',
    class: '',
    extralink: false,
    submenu: []
  }
];
