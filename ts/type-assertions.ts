let nVariable: any = "Typescript training";

//let total = nVariable.length;

//let total = (<string> nVariable).length;

let total = (nVariable as string).length;

console.log(nVariable.length);