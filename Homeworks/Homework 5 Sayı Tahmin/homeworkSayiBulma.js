//ÖDEV SayiBulma
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin etmeye çalışalım bizim tahmin sayımız 5 olsun eğer biz sayıdan büyükse büyük tahmin eğer sayıdan küçükse küçük tahmin. ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?

function guessNumber() {
  var ourNumber=5;
  var count=0;
  alert("1 ile 10 arasındaki sayıyı tahmin etmeye çalışın!!!")
  do {
    var number=Number(prompt("Tahminin: "))
    count++;
    if(number<1 || number>10){
      alert("Sayımız 1 ve 10 arasındadır. Tahminini ona göre yap!!!")
    }
    else if(number>ourNumber){
      alert("Tahminin Büyük")
    }
    else if(number<ourNumber){
      alert("Tahminin Küçük")
    }
  } while (number!=ourNumber);
  alert("Doğru Tahmin!!! "+count+" kere deneyerek buldun!!!")
  document.write(count+" kere deneyerek buldun!")
}

guessNumber()
