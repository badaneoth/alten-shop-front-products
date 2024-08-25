import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNGModule } from './utils/primeng/primeng.module';
import { AnimatedButtonComponent } from './ui/animated-button/animated-button.component';
import { DynamicFormService } from './ui/dynamic-form/dynamic-form.service';
import { DynamicFormComponent } from './ui/dynamic-form/dynamic-form.component';
import { FileUploadInputComponent } from './ui/file-upload-input/file-upload-input.component';
import { InfoIconComponent } from './ui/info-icon/info-icon.component';
import { ListComponent } from './ui/list/list.component';
import { ListService } from './ui/list/list.service';
import { ColumnsManagementDialogComponent } from './ui/table/columns-management-dialog/columns-management-dialog.component';
import { EditionDialogComponent } from './ui/table/edition-dialog/edition-dialog.component';
import { TableComponent } from './ui/table/table.component';
import { DynamicFormControlComponent } from './ui/dynamic-form-control/dynamic-form-control.component';
import { TableToolbarComponent } from './ui/table/table-toolbar/table-toolbar.component';
import { TableFilterCellComponent } from './ui/table/table-filter-cell/table-filter-cell.component';
import { TableActionsCellComponent } from './ui/table/table-actions-cell/table-actions-cell.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    InfoIconComponent,
    AnimatedButtonComponent,
    ListComponent,
    FileUploadInputComponent,
    DynamicFormComponent,
    TableComponent,
    EditionDialogComponent,
    ColumnsManagementDialogComponent,
    DynamicFormControlComponent,
    TableToolbarComponent,
    TableFilterCellComponent,
    TableActionsCellComponent
  ],
  providers: [
    DynamicFormService,
    ListService
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNGModule,
    TableModule,
    CalendarModule,
		DialogModule,
		MultiSelectModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule
  ],
  exports: [
    CommonModule,
    InfoIconComponent,
    AnimatedButtonComponent,
    ListComponent,
    ReactiveFormsModule,
    FormsModule,
    FileUploadInputComponent,
    PrimeNGModule,
    DynamicFormComponent,
    TableComponent
  ]
})
export class SharedModule { }
