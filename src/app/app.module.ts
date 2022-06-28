import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {InterpolationComponent} from '../interpolation/interpolation.component' ;
import {PropertybindingComponent} from '../propertybinding/propertybinding.component';
import {EventbindingComponent} from '../eventbinding/eventbinding.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, InterpolationComponent, PropertybindingComponent , EventbindingComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
