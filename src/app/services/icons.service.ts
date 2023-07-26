import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class IconsService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  public icons: string[] = [
    'logo',
    'button-google',
    'logo-white',
    'overview',
    'wallet',
    'transaction',
    'bill',
    'expencces',
    'goal',
    'settings',
    'logout',
    'menu',
    'search',
    'chevrons-right',
    'clarity',
    'arrow-up-right',
    'chevron-right',
    'chevron-left',
    'chevron-right',
  ];

  public initIcons(): void {
    this.icons.forEach((name) => {
      this.matIconRegistry.addSvgIcon(
        name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/icons/${name}.svg`
        )
      );
    });
  }
}
