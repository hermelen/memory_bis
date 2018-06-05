

var divList = document.getElementsByTagName('div');
var rectoList = document.getElementsByClassName('recto');
var versoList = document.getElementsByClassName('verso');
var prevSrc = "";
var prevClass = [];
for (var i = 0; i < divList.length; i++) {
    div = divList[i];
    div.addEventListener('click', function(){
        recto = this.childNodes[1];
        verso = this.childNodes[3];
        verso.style.display = "none";
        recto.style.display = "block";
        prevRecto = document.getElementsByClassName(prevClass);
        prevRecto_0 = prevRecto[0];
        prevRecto_1 = prevRecto[1];
        if (prevRecto_0 != null && recto.src != prevSrc) {
            console.log('different');
            // if (prevRecto_0 != null) {
              console.log(prevRecto_0);
              prevRecto_0.style.display = "none";
            // }
            // prevRecto_1.style.display = "none";
        } else {
          console.log('idem');
        }

        prevSrc = recto.src;
        prevClass = recto.className;
    })
}




//

//
