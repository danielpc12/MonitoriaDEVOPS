function sumatoriaAutomatica(inicio, fin) {
    let suma = 0;

    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }

    return suma;
}

const resultado = sumatoriaAutomatica(1, 10);
console.log(resultado); // Imprimirá 55
