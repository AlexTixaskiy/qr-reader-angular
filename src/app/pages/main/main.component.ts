import { Component } from '@angular/core';
import { ScannerQRCodeConfig } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  text = 'test';

  ngOnInit(): void {

  }

  generateCode(){
    this.text = 'date - ' + new Date ();
  }

  public config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth
      },
      audio: false
    },
    isBeep: false
  };
}
