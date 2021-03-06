import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComComponent } from './my-com/my-com.component';
import { OtherComponent } from './other/other.component';
import { Service } from './service';

@NgModule({
    declarations: [AppComponent, MyComComponent, OtherComponent],
    imports: [BrowserModule],
    providers: [Service],
    bootstrap: [AppComponent]
})
export class AppModule {}
