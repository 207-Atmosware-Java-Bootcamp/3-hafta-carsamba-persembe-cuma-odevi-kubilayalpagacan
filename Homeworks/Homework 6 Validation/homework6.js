//ÖDEV-6
//Login userEmail,userPassword kullanıcıdan aldığımız değeri db ile karşılaştıracak eğer doğru ise adminFunction'a gönderecek 4 kalan haktan aşağı doğru düşecek eğer kalan hak sayımız 0 olursa kullanıcı bloke olsun
// dbUserEmail="deneme@gmail.com"
// dbUserPassword="root"

var dbUserEmail = "deneme@gmail.com";
var dbUserPassword = "root";

var adminFunction = () => {
  alert("Başarıyla giriş yapıldı.");
  document.write("Admin Sayfası");
};

function Validation() {
  var count = 4;
  do {
    var userEmail = String(prompt("Email: "));
    var userPassword = String(prompt("Password "));
    count--;
    if (count == 0) {
      break;
    }
  } while ((userEmail != dbUserEmail && userPassword != dbUserPassword) || count==0);
  if (userEmail === dbUserEmail && userPassword === dbUserPassword) {
    return adminFunction();
  }
  alert("Kullanıcı bloke oldu.");
  document.write("Bloked")
}

Validation();
