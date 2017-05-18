import { NgModule } from '@angular/core';
import {
    MdCheckboxModule,
    MdSidenavModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdListModule,
    MdInputModule,
    MdSelectModule,
    MdTooltipModule,
    MdToolbarModule,
    MdCardModule,
    MdTabsModule,
    MdRadioModule,
    MdGridListModule
} from '@angular/material';

@NgModule({
  imports: [
      MdButtonModule,
      MdMenuModule,
      MdCheckboxModule,
      MdSidenavModule,
      MdButtonModule,
      MdIconModule,
      MdListModule,
      MdInputModule,
      MdSelectModule,
      MdTooltipModule,
      MdToolbarModule,
      MdCardModule,
      MdTabsModule,
      MdRadioModule,
      MdGridListModule
  ],
  exports: [
      MdButtonModule,
      MdMenuModule,
      MdCheckboxModule,
      MdSidenavModule,
      MdButtonModule,
      MdIconModule,
      MdListModule,
      MdInputModule,
      MdSelectModule,
      MdTooltipModule,
      MdToolbarModule,
      MdCardModule,
      MdTabsModule,
      MdRadioModule,
      MdGridListModule
  ],
})
export class MaterialModule { }
