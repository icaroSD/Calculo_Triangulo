let box = document.getElementById('box')
let btn = document.querySelector('#btn')

btn.addEventListener('click',verificar)


function verificar(){
    let ladoA = document.getElementById('ladoA').value;
    let ladoB = document.getElementById('ladoB').value;
    let ladoC = document.getElementById('ladoC').value;

    let a = Number(ladoA)
    let b = Number(ladoB)
    let c = Number(ladoC)

    if(a > (b + c) || b > (a+c) || c >(a+b)){
        box.textContent='nao pode ser trianguilo'
        
    }else{
        if(a ==b || a==c || c == b){
            box.textContent='triangulo isoceles 2 lados iguais'}
            if(a == b && a==c && b==c){
                box.textContent='triangulo Equilatero 3 lados iguais'
            }if(a != b && a!=c && b!=c){
                box.textContent='triangulo Escaleno 3 lados diferentes'
            }
        }

    
}



