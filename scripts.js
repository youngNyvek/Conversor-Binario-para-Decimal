
function converter(){
    const inputBin = document.querySelector("input#binario")
    const res = window.document.querySelector('div#res') 
    const patt1 = /[2-9]/.test(inputBin.value)
    const label = document.querySelector("label")
    if ( patt1 == true || inputBin.value.length == 0 ){
        
        label.innerHTML = ("DIGITE APENAS 0's ou 1's ")
        alert("[ERRO] DIGITE APENAS 0's ou 1's ")
    }else {
        label.innerHTML = ("Binário")
        const bin = Number.parseInt(inputBin.value , 2)
        res.classList.remove("hide")
        res.innerHTML = (`Decimal = ${bin}`)


   }   

}