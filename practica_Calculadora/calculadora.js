const display = document.getElementById('display');

const limpiarDisplay = () => {
  display.textContent = '';
};

const borrarUltimoCaracter = () => {
  display.textContent = display.textContent.slice(0, -1);
};

const agregarAlDisplay = (valor) => {
  display.textContent += valor;
};

const sum = (v1, v2) => v1 + v2;

const res = (v1, v2) => v1 - v2;

const mul = (v1, v2) => v1 * v2;

const div = (v1, v2) => {
  if (v2 == 0) {
    return 'Operación no válida';
  } else {
    return v1 / v2;
  }
};

const porcentaje = () => {
  display.textContent = parseFloat(display.textContent) / 100;
};

const inversa = () => {
  display.textContent = 1 / parseFloat(display.textContent);
};

const cuadrado = () => {
  display.textContent = Math.pow(parseFloat(display.textContent), 2);
};

const raizCuadrada = () => {
  display.textContent = Math.sqrt(parseFloat(display.textContent));
};

const realizarOperacion = (operacion) => {
  const expresion = display.textContent.split(/([+\-x÷])/);
  const v1 = parseFloat(expresion[0]);
  const op = expresion[1];
  const v2 = parseFloat(expresion[2]);

  switch (op) {
    case '+':
      display.textContent = sum(v1, v2);
      break;
    case '-':
      display.textContent = res(v1, v2);
      break;
    case 'x':
      display.textContent = mul(v1, v2);
      break;
    case '÷':
      display.textContent = div(v1, v2);
      break;
    default:

      break;
  }
};

const botones = document.querySelectorAll('.teclado');

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const valorTeclado = boton.textContent;

    switch (valorTeclado) {
      case 'C':
        limpiarDisplay();
        break;
      case 'CE':
        borrarUltimoCaracter();
        break;
      case '←':
        borrarUltimoCaracter();
        break;
      case '1/x':
        inversa();
        break;
      case 'x^2':
        cuadrado();
        break;
      case '√x':
        raizCuadrada();
        break;
      case '%':
        porcentaje();
        break;
      case '=':
        realizarOperacion();
        break;
      default:
        agregarAlDisplay(valorTeclado);
        break;
    }
  });
});

