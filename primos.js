function mostrarPrimos() {
    let numero = +prompt(
      'dame un numero a partir del 2 en adelante y te devuelvo los primos',
      10
    );
    if (isNaN(numero) || numero < 2) {
      alert('el dato ingresado no es un numero o es menor a 2 papu');
      return;
    }
    nextPrime: for (let i = 2; i <= numero; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
      alert(i);
    }
  }
  