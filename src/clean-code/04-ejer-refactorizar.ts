(() => {
    
    function isRedFruit( fruit: string ): boolean {
        return ['manzana', 'cereza', 'ciruela'].includes(fruit) ? true : false;
    }

    function getFruitsByColor( color: string ): string[] {

        if ( color === 'red' ) return ['manzana','fresa'];

        if ( color === 'yellow') return ['piña','banana']; 
        
        if ( color === 'purple') return ['moras','uvas']; 
        
        throw Error('the color must be: red, yellow, purple');
    }

    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = false;
    let isFourthStepWorking = true;

    function workingSteps() {
        return (!isFirstStepWorking) ? 'First step broken.'  : !isSecondStepWorking
                                     ? 'Second step broken.' : !isThirdStepWorking
                                     ? 'Third step broken.'  : !isFourthStepWorking
                                     ? 'Fourth step broken.' : 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('manzana'), fruit: 'manzana' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();




