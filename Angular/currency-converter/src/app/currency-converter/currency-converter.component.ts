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

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrencyData().subscribe((data) => {
      this.currencies = data;
      this.fromCurrency = this.currencies[0];
      this.toCurrency = this.currencies[1];
    });
  }

  convertCurrency(): void {
    this.result = (this.amount / this.fromCurrency.unit) * this.toCurrency.unit;
  }
}
