//ÖDEV-1
//y=3x+4k ==> 1.dereceden 2 bilinmyenli denklem
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

var firstValue=Number(prompt("X değerimizi giriniz: "))
var secondValue=Number(prompt("Y değerimizi giriniz: "))

function EquationSolver() {
    document.write("Y= 3X + 4Y= "+(3*firstValue + 4*secondValue))
}

EquationSolver()