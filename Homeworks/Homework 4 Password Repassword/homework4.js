//ÖDEV-4 Kullanıcı tarafından aldığımız password ile repassword girilsin doğru ve yanlışı göstersin ?

function PasswordChecker() {
  do {
    var password = String(prompt("Şifrenizi giriniz: "));
    var repassword = String(prompt("Şifrenizi tekrar giriniz: "));
    if (password != repassword)
      alert("Girmiş olduğunuz şifreler aynı olmak zorunda. Tekrar deneyiniz.");
  } while (password != repassword);
  alert("Şifreler aynı, giriş yapılıyor...");
  document.write("Giriş başarıyla yapıldı.");
}
PasswordChecker();
