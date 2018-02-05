import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
    .addSvgIcon('thumb-up',
        // sanitizer.bypassSecurityTrustResourceUrl('/icon/assets/thumbup-icon.svg'))
        sanitizer.bypassSecurityTrustResourceUrl('assets/thumbup-icon.svg'))
    .addSvgIconSetInNamespace('core',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/core-icon-set.svg'))
    .registerFontClassAlias('fontawesome', 'fa');
  }

  ngOnInit() {
  }

}
