var XHR = new XMLHttpRequest(); //inbuilt javascript method to consume javascript APIs

XHR.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

XHR.open("GET", "https://ci-swapi.herokuapp.com/");
XHR.send();