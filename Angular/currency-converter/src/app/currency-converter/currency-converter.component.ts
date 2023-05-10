import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { ICurrency } from '../currency.interface';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  currencies: ICurrency[] = [];
  fromCurrency!: ICurrency;
  toCurrency!: ICurrency;
  amount!: number;
  result!: number;
  mxnCurrency = {name: 'Pesos Mexicanos', currency: 'MXN', unit: 1};
  selectDisabled: 1 | 2 = 2;
  //isSwapped = false;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrencyData().subscribe((data) => {
      this.currencies = data;
      this.fromCurrency = this.currencies[0];
      this.toCurrency = this.mxnCurrency;
    });
  }

  convertCurrency(): void {
    this.result = (this.amount * this.fromCurrency.unit) / this.toCurrency.unit;
  }

  swapCurrencies(): void {
    [this.fromCurrency, this.toCurrency] = [this.toCurrency, this.fromCurrency];
    this.selectDisabled = this.selectDisabled === 1 ? 2 : 1;
  }
}
