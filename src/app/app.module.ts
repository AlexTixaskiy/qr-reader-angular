import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LOAD_WASM, NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { QrCodeModule } from 'ng-qrcode';

// LOAD_WASM().subscribe((res: any) => console.log('LOAD_WASM', res));

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxScannerQrcodeModule,
    QrCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
