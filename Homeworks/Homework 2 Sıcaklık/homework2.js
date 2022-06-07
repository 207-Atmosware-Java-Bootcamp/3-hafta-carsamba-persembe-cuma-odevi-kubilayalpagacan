//ÖDEV-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül:(x*9/5)+32

var celsius=Number(prompt("Sıcaklığı santigrat cinsinden giriniz: "))

function celsiusToFahrenheit(celsius) {
    document.write("Girdiğiniz sıcaklığın fahrenheit karşılığı: "+((celsius*(9/5))+32)+"°F")
}

celsiusToFahrenheit(celsius)