let bir =document.getElementById('birinchiSon').value;
let ikki =document.getElementById('ikkinchiSon').value;

function minus(){ 
    let bir =document.getElementById('birinchiSon').value;
let ikki =document.getElementById('ikkinchiSon').value;
    let minu = bir - ikki;
    console.log(minu);
}

function multip(){ 
    let bir =document.getElementById('birinchiSon').value;
    let ikki =document.getElementById('ikkinchiSon').value;
    let kop = bir * ikki;
    console.log(kop);
}

function dev(){ 
    let bir =document.getElementById('birinchiSon').value;
    let ikki =document.getElementById('ikkinchiSon').value;
    let bol = bir / ikki;
    console.log(bol);
}

function pl() { 
    let bir = parseFloat(document.getElementById('birinchiSon').value);
    let ikki = parseFloat(document.getElementById('ikkinchiSon').value);
    let pl = bir + ikki;
    console.log(pl);
}