function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_65yhtd7";
  const templateID = "template_qwe2lce";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log("Success:", res.status);
      alert("✅ Your message was sent successfully!");
      window.location.href = "fisrt.html"
    })
    .catch((err) => {
      console.error("Failed:", err);
      alert("❌ Failed to send message. Please try again later.");
    });
}
