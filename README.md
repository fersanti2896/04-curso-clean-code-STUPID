# Notas Sección 4: Acrónimo - STUPID
___

#### STUPID

6 code Smells que debemos de evitar. 

- __S__ inlgeton. Patrón singleton.
- __T__ ight Coupling. Alto acoplamiento.
- __U__ ntestability. Código no probable (unit test).
- __P__ remature Optimization. Optimizaciones prematuras.
- __I__ ndescriptive Naming. Nombres poco descriptivos. 
- __D__ uplication. Duplicidad de código, no aplicar el principio de DRY.

__`Patrón Singleton`__ (Considerado un `Code Smell`)

Pros ✅

Garantiza una única instancia de la clase a lo largo de toda la aplicación. 

Contras ❌

- Vive en el contexto global. 
- Puede ser modificado por cualquiera y en cualquier momento. 
- No es rastreable. 
- Difícil de testear debido a su aplicación. 

        const Singleton = (function () {
        
            let instance;

            function createInstance() {
                return new Object('I am the instance');
            }

            return {
                getInstance() {
                    if (!instance) {
                        instance = createInstance();
                    }
                    return instance;
                }
            };
        })();