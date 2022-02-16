/* ==================================> Basic Types
    Reference:
    - https://www.typescriptlang.org/docs/handbook/basic-types.html

    Utilização:
    - Variables
    - Functions
*/
// ----- Basic Types in Variables
    let isDone: boolean = false;
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let color: string = "blue";
    let arr1: number[] = [1, 2, 3];
    let arr2: Array<number> = [1, 2, 3];  // generic array type = Array<elemType>

    /* ----- Tuple
        Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:
    */
    // Declare a tuple type
    let x: [string, number];
    // Initialize it
        x = ["hello", 10]; // OK
    // Initialize it incorrectly
        // x = [10, "hello"]; // Error
        // Type 'number' is not assignable to type 'string'.
        // Type 'string' is not assignable to type 'number'.

    /* ----- Enum
        A helpful addition to the standard set of datatypes from JavaScript is the enum. 
        As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.
        --- By default, enums begin numbering their members starting at 0.
        You can change this by manually setting the value of one of its members. 
        For example, we can start the previous example at 1 instead of 0:
        --- Or, even manually set all the values in the enum:
                enum Color { Red = 1, Green = 2, Blue = 4 }
    */
    enum Color {
    Red = 1,
    Green,
    Blue,
    }
    let c: Color = Color.Green;
    let colorName: string = Color[2];  // Green (Retorna o nome do item (string) via index )

    console.log(Color.Green);
    console.log(Color[2]);
    console.log(colorName);

// ----- Basic Types in Functions
    // Exemplo em JavaScript = Validação de tipos manual
    // function sum1(a, b) {
    //     if (typeof a === "number" && typeof b === "number") {
    //         return a + b;
    //     }
    //     return NaN;
    // }
    // Exemplo em TypeScript = Validação de tipos automática
    function sum2(a: number, b: number){ 
        return a + b;
    }
    console.log(sum2(1,2));