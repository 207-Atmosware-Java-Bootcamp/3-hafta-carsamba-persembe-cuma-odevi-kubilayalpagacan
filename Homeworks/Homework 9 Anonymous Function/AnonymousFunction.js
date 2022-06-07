//ÖDEV 5
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Anonymous function algoritmasını yazalım switch-case   new Date().getDay()
let AnonymousDate = function(){
  var day = new Date().getDay();
  switch (day) {
    case 0:
      document.write("Bugün Pazar");
      break;
    case 1:
      document.write("Bugün Pazartesi");
      break;
    case 2:
      document.write("Bugün Salı");
      break;
    case 3:
      document.write("Bugün Çarşamba");
      break;
    case 4:
      document.write("Bugün Perşembe");
      break;
    case 5:
      document.write("Bugün Cuma");
      break;
    case 6:
      document.write("Bugün Cumartesi");
      break;
  }
}
AnonymousDate()
