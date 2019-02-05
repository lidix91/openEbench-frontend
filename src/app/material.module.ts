
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSelectModule, MatInputModule, MatProgressSpinnerModule, MatSortModule,
  MatFormFieldModule, MatTableModule, MatPaginatorModule, MatRadioModule, MatTabsModule,
  MatExpansionModule, MatGridListModule, MatTooltipModule, MatCheckboxModule, MatCardModule} from '@angular/material';


/**
 * Common Material Design modules.
 */

@NgModule({
  imports: [MatButtonModule, MatSelectModule, MatInputModule, MatProgressSpinnerModule, MatSortModule, MatTabsModule,
    MatFormFieldModule, MatTableModule, MatPaginatorModule, MatRadioModule, MatExpansionModule, MatGridListModule, MatTooltipModule,
    MatCheckboxModule, MatCardModule],
  exports: [MatButtonModule, MatSelectModule, MatInputModule, MatProgressSpinnerModule, MatSortModule, MatTabsModule,
    MatFormFieldModule, MatTableModule, MatPaginatorModule, MatRadioModule, MatExpansionModule, MatGridListModule, MatTooltipModule,
    MatCheckboxModule, MatCardModule]
})
export class MaterialModule { }
