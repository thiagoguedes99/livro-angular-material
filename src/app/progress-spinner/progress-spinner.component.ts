import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {

  constructor(iconeRegistrado: MatIconRegistry, sanitizer: DomSanitizer) {
    // iconRegistry
    // .addSvgIcon('thumb-up',
        // sanitizer.bypassSecurityTrustResourceUrl('/icon/assets/thumbup-icon.svg'))
        // sanitizer.bypassSecurityTrustResourceUrl('assets/thumbup-icon.svg'))
    // .addSvgIconSetInNamespace('core',
        // sanitizer.bypassSecurityTrustResourceUrl('../assets/core-icon-set.svg'))
    // .registerFontClassAlias('fontawesome', 'fa');

    // iconRegistry.registerFontClassAlias('fontawesome', 'fas');
    iconeRegistrado.registerFontClassAlias('minhaFont', 'fas')

    iconeRegistrado.addSvgIcon('meuIcone',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icon.svg'));

    iconeRegistrado.addSvgIconSetInNamespace('icones',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/core-icon-set.svg'));
  }

  ngOnInit() {
  }

}
