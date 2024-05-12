function button() {
    var input = document.getElementById("input");
    var inputValue = input.value;

    if (inputValue === "SLX-QSFTMECXBUSQQNLU") {
      var scriptLink = "loadstring(game:HttpGet("https://raw.githubusercontent.com/timYTHuber/AllInOne/main/Hub.lua"))()";
      navigator.clipboard.writeText(scriptLink)
        .then(function() {
          alert("Link to script copied to clipboard!");
        })
        .catch(function() {
          alert("Something going wrong...");
        });
    } 
    else {
        alert("You are absolutely wrong!");
        setTimeout("window.location='https://fauux.neocities.org/statue/statue2'", 3000);
    }
  }
