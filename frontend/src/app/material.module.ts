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
    MdSnackBarModule,
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
      MdSnackBarModule,
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
      MdSnackBarModule,
      MdGridListModule
  ],
})
export class MaterialModule { }
