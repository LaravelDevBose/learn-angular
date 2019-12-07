import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BasisHighlightDirective} from './directive/basis-highlight.directive';
import { RendererDirectiveDirective } from './directive/renderer-directive.directive';
import { HostListenerDirectiveDirective } from './directive/host-listener-directive.directive';
import { HostBindingDirectiveDirective } from './directive/host-binding-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasisHighlightDirective,
    RendererDirectiveDirective,
    HostListenerDirectiveDirective,
    HostBindingDirectiveDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
