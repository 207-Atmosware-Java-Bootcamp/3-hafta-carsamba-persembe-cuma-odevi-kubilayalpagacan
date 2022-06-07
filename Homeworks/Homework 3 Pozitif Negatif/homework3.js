//ÖDEV-3 verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?

var number = Number(prompt("Sorgulamak istediğiniz sayıyı giriniz:"));

function negativeOrPositive(number) {
  if (number > 0)
    document.write(
      "Girmiş olduğunuz " + number + " sayısı pozitif bir sayıdır."
    );
  else if (number < 0)
    document.write(
      "Girmiş olduğunuz " + number + " sayısı negatif bir sayıdır."
    );
  else document.write(number + " pozitif veya negatif bir rakam değildir.");
}
negativeOrPositive(number)