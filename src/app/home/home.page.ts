import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonText } from '@ionic/angular/standalone';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerOptions, CapacitorBarcodeScannerTypeHintALLOption } from '@capacitor/barcode-scanner';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonText],
})
export class HomePage {
  public barcodeResult! : string;
  private options: CapacitorBarcodeScannerOptions = {
    scanButton: true,
    hint: CapacitorBarcodeScannerTypeHintALLOption.ALL
  }
  public constructor() {}

  public async scanBarcode() :Promise<void> {
    this.barcodeResult = (await CapacitorBarcodeScanner.scanBarcode(this.options)).ScanResult;
    console.log('Barcode data:', this.barcodeResult);
  }
}
