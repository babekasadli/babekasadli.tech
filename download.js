const downloadButton = document.getElementById("downloadButton");
const linkedinButton = document.getElementById("linkedinButton");
const twitterButton = document.getElementById("twitterButton");
const githubButton = document.getElementById("githubButton");
const stackoverflowButton = document.getElementById("stackoverflowButton");
const gmailButton = document.getElementById("gmailButton");


downloadButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default behavior of the button
  const filePath = "/assets/documents/Babek Asadli.pdf";
  const fileName = "Babek Asadli.pdf";
  const downloadLink = document.createElement("a"); // Create a link element
  downloadLink.href = filePath; // Set the href attribute to the file path
  downloadLink.download = fileName; // Set the download attribute to the file name
  downloadLink.click(); // Simulate a click on the link
});

function openLinkedin() {
  window.open('https://www.linkedin.com/in/babekasadli', '_blank');
}
linkedinButton.addEventListener('click', openLinkedin);

function openTwitter() {
  window.open('https://twitter.com/babekasadli', '_blank');
}
twitterButton.addEventListener('click', openTwitter);

function openGithub() {
  window.open('https://github.com/babekasadli', '_blank');
}
githubButton.addEventListener('click', openGithub);

function openStackoverflow() {
  window.open('https://stackoverflow.com/users/18040492/babek-asadli', '_blank');
}
stackoverflowButton.addEventListener('click', openStackoverflow);

function openGmail() {
  window.open('mailto:babekasadli@gmail.com', '_blank');
}
gmailButton.addEventListener('click', openGmail);