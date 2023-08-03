var form = document.getElementById("contactForm");
var status = document.getElementById("status");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      data.append("email", "gideonmwangi83@gmail.com");
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.classList.add("success")
          status.innerHTML = "Thank you for your message.";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.classList.add("error");
              status.innerHTML = "Oops! There was a problem.Try Again!"
            }
          })
        }
      }).catch(error => {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem.Try Again!"
      });
    }
    form.addEventListener("submit", handleSubmit) 