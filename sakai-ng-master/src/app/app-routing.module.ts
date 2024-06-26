import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LoginComponent } from './login/login/login.component';  // Asegúrate de que la ruta es correcta

const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/login', 
        pathMatch: 'full' 
    },
    { 
        path: 'login', 
        component: LoginComponent  // Ruta para el componente de Login
    },
    {
        path: 'app',
        component: AppLayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
            { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
            { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
            { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
            { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
            { path: 'acceso', loadChildren: () => import('./demo/components/acceso/acesso.module').then(m => m.AccesoModule) },
            { path: 'generales', loadChildren: () => import('./demo/components/generales/generales.module').then(m => m.GeneraleModule)}
        ]
    },
    { 
        path: 'auth', 
        loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) 
    },
    { 
        path: 'landing', 
        loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) 
    },
    { 
        path: 'notfound', 
        component: NotfoundComponent 
    },
    { 
        path: '**', 
        redirectTo: '/notfound' 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', 
      anchorScrolling: 'enabled', 
      onSameUrlNavigation: 'reload'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
