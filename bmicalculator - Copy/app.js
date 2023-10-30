let sonucal;

function sonuc() {
    var kg = parseInt(document.getElementById("weightinput").value);
    var cm = parseFloat(document.getElementById("floatinput").value);

    sonucal = kg / (cm * cm);
    var sonuclabel1 = document.getElementById("sonucLabel");
    var hesaplanansonuc = sonucal.toFixed(2);
    sonuclabel1.innerHTML = hesaplanansonuc;

 
}




function reset() {
    let bosmetin = "";
    let sonucreset ="Sonuç:"

    document.getElementById("weightinput").value = bosmetin;
    document.getElementById("floatinput").value = bosmetin;
    document.getElementById("sonucLabel").innerHTML= sonucreset;
    document.getElementById("durum").innerHTML="Durum:"
}



function durumhesapla()
{
    if(sonucal>=40)
    {
       
     document.getElementById("durum").innerHTML=" İdeal kilonun çok üstündesiniz.. (morbid obez)";
    }

    else if (sonucal>=30 &&  sonucal<=39.9)
    {
        document.getElementById("durum").innerHTML="İdeal kilonun çok üstünde (obez)";
    }

    else if (sonucal>=25 && sonucal<=29.9)
    {
        document.getElementById("durum").innerHTML=" İdeal kilonun üstünde";
    }

    else if(sonucal>=18.5 &&  sonucal<=24.9)
    {
        document.getElementById("durum").innerHTML="İdeal kiloda";
    }

    else if(sonucal<18.5)
    {
       
        document.getElementById("durum").innerHTML=" İdeal kilonun altında";
    }

    else 
    {
       
        alert("Lütfen Boy ve Kilonuzu doğru şekilde giriniz");
    }


}