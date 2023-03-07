let n1 = parseInt(prompt("ingresar el primer numero"));
let n2 = parseInt(prompt("ingresar el segundo numero"));
let n3 = parseInt(prompt("ingresar el tercer numero"));

if (n1 < n2 && n3 < n2) {
    console.log (n2);
} else if (n2 < n1 && n3 < n1) {
    console.log (n1);
} else {
    console.log (n3);
}