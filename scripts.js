function converter(){


    var chamar = window.document.getElementById('binario')      
    var res = window.document.querySelector('div#res')  

    if (chamar.value.length == 0){
        alert("[ERRO] PREENCHA O CAMPO CORRETAMENTE")
        res.innerHTML = `[ERRO] PREENCHA O CAMPO CORRETAMENTE` 
    }else{

    var binario = Number.parseInt(chamar.value , 2)
    res.innerHTML = `Decimal = ${binario}` 

    res.classList.remove("hide")
    }    

    

}
