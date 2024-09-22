// Função para exibir/ocultar menu em dispositivos móveis
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Função para calcular o IMC
function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const imc = (peso / (altura * altura)).toFixed(2);

  let resultado = '';
  
  if (imc < 18.5) {
    resultado = `Seu IMC é ${imc}. Você está abaixo do peso.`;
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado = `Seu IMC é ${imc}. Você está com peso normal.`;
  } else if (imc >= 25 && imc <= 29.9) {
    resultado = `Seu IMC é ${imc}. Você está acima do peso.`;
  } else {
    resultado = `Seu IMC é ${imc}. Você está com obesidade.`;
  }

  document.getElementById('resultado-imc').innerText = resultado;
}
