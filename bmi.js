let ceki = +prompt('Cekinizi yazin: ');
let boy = +prompt('Boyunuzu yazin: ');
let bmi = ceki / (boy * boy) * 10000;
let netice;

if (bmi < 18) {
    netice = 'Siz, ceki azligindan eziyyet cekirsiniz';
} else if (bmi >=18 && bmi <= 20) {
    netice = 'Sizin cekiniz azdir. Lakin saglamliq ucun zererli deyil.';
}   else if (bmi >20 && bmi <= 26) {
    netice = 'Sizin cekiniz normaldir.Tebrikler';
}  else if (bmi > 26 && bmi <= 28) {
    netice = 'Sizin artiq cekiniz var.';
}  else if (bmi > 28 && bmi <= 31) {
    netice = 'Siz, 1-ci dereceli artiq cekiden eziyyet cekirsiniz.';
}  else if (bmi > 31 && bmi <= 36) {
    netice = 'Siz, 2-ci dereceli artiq cekiden eziyyet cekirsiniz.';
}  else if (bmi > 36 && bmi <= 41) {
    netice = 'Siz, 3-cu dereceli artiq cekiden eziyyet cekirsiniz.';
}  else if (bmi > 41) {
    netice = 'Siz, 4-cu dereceli artiq cekiden eziyyet cekirsiniz.';
}  else {
    netice = 'Sizin basinizda problem var';
}

document.getElementById('esas').innerHTML = netice;
    
