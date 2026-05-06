import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { DashboardLayout } from './components/layout/dashboard-layout/dashboard-layout'; 

export const routes: Routes = [
  // 1. مسار الهوم الأساسي
  { path: '', component: Home, title: 'Default Page' },
  { path: 'Home', component: Home, title: "Home Page" },

  // 2. مسار الداشبورد (الغلاف اللي فيه السايد بار)
  {
    path: 'dashboard',
    component: DashboardLayout, 
    children: [
      // {
      //   path: '', // ده معناه لما اليوزر يفتح localhost:4200/dashboard
      //   component: Home // هنعرضله الـ Home هنا مؤقتاً عشان نشوف شكل السايد بار حواليه
      // }
    ]
  },

  // 3. مسار الـ Not Found (لاااااازم يكون آخر واحد تحت خالص)
  { path: '**', component: NotFound, title: "Not Found Page" }
];