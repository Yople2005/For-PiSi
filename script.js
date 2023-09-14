   
    var showButton = document.getElementById("showButton");
    var hiddenParagraph = document.getElementById("hiddenParagraph");

   
    showButton.addEventListener("click", function() {
    
        if (hiddenParagraph.style.display === "none") {
            hiddenParagraph.style.display = "block";
        } else {
            hiddenParagraph.style.display = "none";
        }
    });