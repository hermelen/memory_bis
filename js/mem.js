var divList = document.getElementsByTagName('div');
var rectoList = document.getElementsByClassName('recto');
var versoList = document.getElementsByClassName('verso');
var src = "";
for (var i = 0; i < divList.length; i++) {
    div = divList[i];
    div.addEventListener('click', function(){
        recto = this.childNodes[1];
        verso = this.childNodes[3];
        if (recto.src == src) {
            recto.style.display = "block";
            verso.style.display = "none";
        }
        else {
            
        }
        verso.style.display = "none";
        recto.style.display = "block";
        src = recto.src;

        console.log(src);
})
}




//

//
