import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { KeycloakService, KeycloakAngularModule } from "keycloak-angular";
import { initializer } from "./utils/app-init";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
// Material designe
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { StatisticsService } from "./shared/statistics.service";
import * as c3 from "c3";
import * as d3 from "d3";
import { AppComponent } from "./app.component";

import { TopMenuComponent } from "./top-menu/top-menu.component";
import { FooterComponent } from "./footer/footer.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ManageEventsComponent } from "./manage-events/manage-events.component";
import { DataTablesModule } from "angular-datatables";

import { HttpClientModule } from "@angular/common/http";
import { APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { environment } from "../environments/environment";
import { DocsComponent } from "./docs/docs.component";

import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { FormlyFieldTabs } from './manage-events/tabs.type';

// env variable to a local variable
const envurl = environment.SCIENTIFIC_SERVICE_URL;

// function to create apollo client
export function createApollo(httpLink: HttpLink) {
    return {
        link: httpLink.create({ uri: envurl }),
        cache: new InMemoryCache()
    };
}

export function patternNecessary(err, field: FormlyFieldConfig) {
  return `The pattern should be ${field.templateOptions.pattern}`;
}

export function minItemsValidationMessage(err, field: FormlyFieldConfig) {
    return `should NOT have fewer than ${field.templateOptions.minItems} items`;
}

export function maxItemsValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT have more than ${field.templateOptions.maxItems} items`;
}

export function minlengthValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT be shorter than ${field.templateOptions.minLength} characters`;
}

export function maxlengthValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT be longer than ${field.templateOptions.maxLength} characters`;
}

export function minValidationMessage(err, field: FormlyFieldConfig) {
  return `should be >= ${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field: FormlyFieldConfig) {
  return `should be <= ${field.templateOptions.max}`;
}

export function multipleOfValidationMessage(err, field: FormlyFieldConfig) {
  return `should be multiple of ${field.templateOptions.step}`;
}

export function exclusiveMinimumValidationMessage(err, field: FormlyFieldConfig) {
  return `should be > ${field.templateOptions.step}`;
}

export function exclusiveMaximumValidationMessage(err, field: FormlyFieldConfig) {
  return `should be < ${field.templateOptions.step}`;
}

export function constValidationMessage(err, field: FormlyFieldConfig) {
  return `should be equal to constant "${field.templateOptions.const}"`;
}

/**
 * Main app module
 */
@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent,

        // all the pages that are in top menu
        routingComponents,
        FooterComponent,
        PageNotFoundComponent,
        DocsComponent,
        ManageEventsComponent,
        FormlyFieldTabs
    ],
    imports: [
        BrowserModule,
        DataTablesModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        KeycloakAngularModule,
        HttpClientModule,
        ApolloModule,
        HttpLinkModule,

        FormlyModule.forRoot({
            validationMessages: [
              { name: 'required', message: 'This field is required' },
            ],
            types: [
              { name: 'tabs', component: FormlyFieldTabs },
            ],
        }),
        FormlyBootstrapModule,
        MatTabsModule
    ],
    providers: [
        StatisticsService,
        DataService,
        {
            provide: APP_INITIALIZER,
            useFactory: initializer,
            multi: true,
            deps: [KeycloakService]
        },
        {
            provide: APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [HttpLink]
        }
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap: [AppComponent]
})
export class AppModule {}

