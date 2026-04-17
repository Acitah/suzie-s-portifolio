const form = document.getElementById("form");
const messageArea = document.getElementById("messageArea");


form.addEventListener("submit", function(e) {
  e.preventDefault();

  fetch("https://formspree.io/f/mrerpnlq", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    })
  })
  .then(response => {
    if (response.ok) {
      form.reset(); // ✅ clears all inputs
      messageArea.textContent = "Message sent successfully!";
      messageArea.style.color= "Green"
      
    } else {
      messageArea.textContent = "Something went wrong!";
      messageArea.style.color = "red"
    }
  })
  .catch(error => {
    console.log(error);
  });
  messageArea.textContent="";
});