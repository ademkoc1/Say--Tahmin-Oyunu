//Değişkenler
let min=1,
max=10,
kazananSayi=rastgeleKazananSayi(min,max),
tahminHakki=3;

let denemeSayisi=0;

//Html Elemanları değerelerini bir değişkene aktaralım

const   minSayi = document.querySelector(".min"),
        maxSayi = document.querySelector(".max"),
        tahminInput = document.querySelector("#tahmin-input"),
        tahminbtn =document.querySelector("#tahmin-btn"),
        oyun = document.querySelector(".oyun");
        mesaj = document.querySelector(".mesaj")

        minSayi.textContent = min;
        maxSayi.textContent = max;

//oyun bittiğinde yeniden başlatalım
oyun.addEventListener('mousedown',function(e){
    if(e.target.className==="tekrar-oyna"){
        window.location.reload();
    }
})

//Tahmine Başlayalım
tahminbtn.addEventListener("click",function(){
    const tahminEdilenSayi = tahminInput.value;
    if(
        tahminEdilenSayi==="" ||
        tahminEdilenSayi < min ||
        tahminEdilenSayi > max
    ){
        mesajYazdir("Hata ! boş alan bıraktınız veya min-max sayı oranını geçtiniz","red")
    }
    else if(tahminEdilenSayi== kazananSayi){
        denemeSayisi++;
        oyunBitti(false,`Başarılı! Doğru Tahmin ve tahmini ${denemeSayisi} denemede buldunuz`)
    }
    else{
        tahminHakki-=1;
        denemeSayisi++;
        if(tahminHakki==0){
           oyunBitti(true,`Tahmin hakkınız Kalmadı.. Doğru tahmin ${kazananSayi} olmalıydı.`)
        }else if(tahminEdilenSayi<kazananSayi){
            mesajYazdir(`Tahmin hakkınız ${tahminHakki} kaldı.. Daha Büyük Sayı Giriniz`,"red",)
        }else if(tahminEdilenSayi>kazananSayi){
            mesajYazdir(`Tahmin hakkınız ${tahminHakki} kaldı.. Daha Küçük Sayı Giriniz`,"red",)
        }
        
    }
})



//oyun bitti fonksiyonu
function oyunBitti(kontrol,msj){
    let color;

    kontrol ==true ? (color ="red"):(color="green");

    tahminInput.disabled = true;
    tahminInput.style.borderColor = color;
    mesajYazdir(msj,color);


    //Button olayını değiştirelim
    tahminbtn.textContent = "tekrar-oyna";
    tahminbtn.className ="tekrar-oyna";
}

//mesaj Yazdır Fonksiyonu
function mesajYazdir(msj,color){
    mesaj.style.color= color;
    mesaj.textContent = msj;
}


//Rastgele kazanan sayı üretme
function rastgeleKazananSayi(min,max){
    return Math.floor(Math.random()*(max-min +1) + min);
}