import { Directive,ElementRef,HostListener } from "@angular/core";

const CURRENCY_REGEX = /^\d*\.?\d{0,2}$/;

@Directive({
    selector:'[appCurrencyFormat]',
    standalone: true
})
export class CurrencyFormat{
    constructor(private el:ElementRef){}
    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
      // Obtiene el valor actual del campo de entrada
      const inputValue = this.el.nativeElement.value;
  
      // Obtiene el código de la tecla presionada
      const key = event.key;
  
      // Comprueba si la tecla presionada es permitida
      const isAllowedKey = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '.',
        'Backspace',
        'ArrowLeft',
        'ArrowRight',
        'Delete',
        'Tab',
      ].includes(key);
  
      if (!isAllowedKey) {
        event.preventDefault();
        return;
      }
  
      const controlKeys = [
        'Backspace',
        'ArrowLeft',
        'ArrowRight',
        'Delete',
        'Tab',
        'Enter',
      ];
  
      if (!controlKeys.includes(key)) {
        const isValidInput = CURRENCY_REGEX.test(inputValue + key);
  
        if (!isValidInput) {
          event.preventDefault();
        }
      }
    }
}