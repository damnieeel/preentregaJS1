/**
 * PREENTREGABLE 1:
 * Idea del proyecto: Menú de un restaurant
 * Alumno: Daniel Vilches
 */

// Recepción del cliente
let cliente = prompt('¡Bienvenid@ Tocornal Bar! ¿Cuál es tu nombre?');
let bienvenida = confirm(cliente + ' Para ver nuestro menú debes confirmar que eres mayor de edad 🔞');

let menuAdulto = function(){
    // Ciclo
    let i = "1";
    while (i != '*') {
        // Declaración de arrays para los menús
        let clasicos = ['1.- Pisco Sour $5.290', '2.- Aperol $6.990', '3.- Ramazzotti $6.990', '4.- Daiquiri $5.990', '5.- Mojito $6.590','6.- Piña Colada $5.990'];

        let schops = ['1.- Heineken $5.490','2.- Austral Calafate $6.990','3.- Kunstmann Torobayo $6.990','4.- Royal $4.990'];

        let sinAlcohol = ['1.- Heineken Cero $3.490','2.- Mojito $3.990','3.- Piña Colada $3.990', '4.- Limonada de la Casa $3.990'];

        // Inicialización
        i = prompt('Seleccione en el menú para ver los productos: \n1) Clásicos \n2) Schops \n3) Sin Alcohol \n*) Salir del menú');

        switch(i){
            case '1':
                alert(clasicos.join('\n'));
                break;
            case '2':
                alert(schops.join('\n'));
                break;
            case '3':
                alert(sinAlcohol.join('\n'));
                break;
            case '*':
                alert('Gracias por visitarnos, recuerda que puedes volver cuando quieras');
                break;
            default:
                alert('Opción inválida');
                break;
        }
    };
};

let menuNino = function(){
    // Ciclo
    let i = "1";
    while (i != '*') {
        // Declaración de arrays para los menús
        let carbonatadas = ['1.- Coca Cola Original $1.500', '2.- Coca Cola Zero $1.500', '3.- Fanta Original $1.500', '4.- Fanta Zero $1.500', '5.- Sprite Zero $1.500','6.- Quatro Pomelo $2.000'];

        let jugos = ['1.- Jugo de Naranja $2.500','2.- Jugo de Piña $2.500','3.- Jugo de Frambuesa $3.000','4.- Jugo de Mango $3.000', '5.- Jugo de Maracuyá $3.000'];

        // Inicialización
        i = prompt('Seleccione en el menú para ver los productos: \n1) Bebidas Carbonatadas \n2) Jugos de Pulpa (Guallarauco) \n*) Salir del menú');

        switch(i){
            case '1':
                alert(carbonatadas.join('\n'));
                break;
            case '2':
                alert(jugos.join('\n'));
                break;
            case '*':
                alert('Gracias por visitarnos, recuerda que puedes volver cuando quieras');
                break;
            default:
                alert('Opción inválida');
                break;
        }
    };
};

if (bienvenida == true){
    menuAdulto();
} else{
    menuNino();
}
