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

#### Acoplamiento y Cohesión

Lo ideal es tener bajo acoplamiento y buena cohesión. 

- Se refiere a cuán relacionadas o dependientes son dos clases o módulos entre sí. 

- En bajo acoplamiento, cambiar algo importante en una clase no debería afectar a la otra.

- En alto acoplamiento, dificultaría el cambio y el mantenimiento de su código; dado que las clases están muy unidas, hacer un cambio podría requerir una renovación completa del sistema. 

Contras ❌

- Un cambio en un módulo por lo general provoca un efecto dominó de los cambios en otros módulos. 

- El ensamblaje de módulos puede requerir más esfuerzo y/o tiempo debido a la mayor dependencia entre módulos. 

- Un módulo en particular puede ser más difícil de reutilizar y/o probar porque se deben incluir módulo dependientes. 

Posibles Soluciones ✅

- __A__ tiene un atributo que se refiere a __B__.
- __A__ se llama a los servicios de un objeto __B__.
- __A__ tiene un método que hace referencia a __B__ (a través del tipo de retorno o parámetro).
- __A__ es una subclase de (o implementa) la clase __B__.

Lo ideal en la cohesión es tener bajo acoplamiento y buena cohesión, lo cual se refere a lo que hace la clase (o módulo) puede hacer.

- La baja cohesión significaría que la clase realiza una gran variedad de acciones: es amplia, no se enfoca en lo que debe hacer. 

- La alta cohesión significa que la clase se enfoca en lo que debería estar haciendo, es decir, solo métodos relacionado con la intención de la clase. 

__Un buen diseño de software tiene alta cohesión y bajo acoplamiento.__