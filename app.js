var btnTranslateMinion = document.querySelector("#btn-translate-minion");
var btnTranslateYoda = document.querySelector("#btn-translate-yoda");
var btnTranslateKlingon = document.querySelector("#btn-translate-klingon");

var txtInput = document.querySelector("#txt-input");
var outputBlock = document.querySelector("#output-block");



// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/"
 var url = "https://api.funtranslations.com/translate/"

function constructURL(text,charachterSelect){
    var updatedURL = url + charachterSelect + ".json?text=" + text ;
    return updatedURL;

}


function clickHandler(charachterSelect){


    var inputText = txtInput.value ;
    console.log(charachterSelect);
    console.log(inputText);

    fetch(constructURL(inputText,charachterSelect))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated ;
        outputBlock.innerText = translatedText ;
    
    })
    


}


btnTranslateMinion.addEventListener("click", function(){clickHandler("minion")})
btnTranslateYoda.addEventListener("click", function(){clickHandler("yoda")})
btnTranslateKlingon.addEventListener("click", function(){clickHandler("klingon")})