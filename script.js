document.getElementById("card_info").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = document.getElementById('card_info')
    const photo = document.getElementById("photoInput").value;
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const number = document.getElementById("numberInput").value;
    
    const template = document.getElementById("contact-card");
    const clone = document.importNode(template.content, true);
    
    clone.getElementById("temp_photo").src = photo;
    clone.getElementById("temp_name").textContent = "Name: " + name;
    clone.getElementById("temp_email").textContent = "Email: " + email;
    clone.getElementById("temp_number").textContent = "Phone: " + number;
    
    document.getElementById("output").appendChild(clone);
    form.reset()
});

