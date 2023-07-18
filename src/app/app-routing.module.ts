import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'platform',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    data: { route: 'auth' },
    loadChildren: () =>
      import('./module/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'platform',
    data: { route: 'platform' },
    loadChildren: () =>
      import('./module/platform/platform.module').then((m) => m.PlatformModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
