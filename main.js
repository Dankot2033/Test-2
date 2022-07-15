//Checking if consent for usage of cookies was given
//If so, enabling google maps cookies and functionalities on website
if(getCookie("cookieConsent") == "given"){
    document.getElementById("cookie").style.display = "none";
    createGoogleMap();
}else{
    document.getElementById("cookie").style.display = "block";
}

//onClick function for giving consent for cookie usage on website
function cookieConsent(){
    document.cookie = "cookieConsent=given";
    document.getElementById("cookie").style.display = "none";
    createGoogleMap();
}

//Function for finding the value of specific cookie
function getCookie(name){
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

//Function for creating a google map
function createGoogleMap(){
    var map = document.createElement("iframe");
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d260534.52747512204!2d17.701880006374193!3d59.32584138311499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm!5e0!3m2!1ssv!2sse!4v1648642962673!5m2!1ssv!2sse";
    var mapBox = document.getElementById("googleMapBox");
    mapBox.appendChild(map);
}

//onClick function for showing mobile nav
function mobileNav(){
    var nav = document.getElementById("mainNav");
    if(nav.style.height === "200px"){
        nav.style.height = "0";
    } else{
        nav.style.height = "200px";
    }
}

//onClick function for showing photos from gallery in bigger resolutions
//Styling for both modal and img are in main scss file
function showBigger(x){

    //Checking if devices width is at least 1000px
    if(window.innerWidth < 1000){
        return;
    }else{
        //Creating a modal and giving it an id
        var modal = document.createElement("div");
        modal.id = "modal";

        //Adding a removal function
        modal.onclick = function(){
            modal.remove();
        }

        //Dropping modal in body
        document.body.appendChild(modal);

        //Creating an img
        var img = document.createElement("img");

        //Taking a src from argument
        img.src = "images/bigger/" + x + "big.jpg";

        //Dropping img inside the modal
        modal.appendChild(img);
    }
}