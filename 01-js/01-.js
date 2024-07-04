// Función para obtener el mayor de dos números
function encontrarMayor(numero1, numero2) {
    if (numero1 > numero2) {
      return numero1;
    } else {
      return numero2;
    }
  }
  
  // Solicitar números al usuario
  const numero1 = parseFloat(prompt("Ingrese el primer número: "));
  const numero2 = parseFloat(prompt("Ingrese el segundo número: "));
  
  // Encontrar el mayor
  const mayor = encontrarMayor(numero1, numero2);
  
  // Mostrar el resultado
  console.log(`El número mayor es: ${mayor}`);