var downloadButton = document.getElementById("download-button");

downloadButton.addEventListener("click", function(event) {
  event.preventDefault();
  var file = "/assets/documents/Babek Asadli.pdf";
  var link = document.createElement("a");
  link.href = file;
  link.download = "Babek Asadli.pdf";
  link.click();
});