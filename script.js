function button() {
    var input = document.getElementById("input");
    var inputValue = input.value;

    if (inputValue === "SLX-QSFTMECXBUSQQNLU") {
      var scriptLink = "https://pastebin.com/GhiSgM6D"
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
