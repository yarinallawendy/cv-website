function toggleProfile() {
    let profile = document.getElementById("profileText");

    if (profile.style.display === "none") {
        profile.style.display = "block";
    } else {
        profile.style.display = "none";
    }
}

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        document.getElementById("formMessage").innerText = "Please fill all fields";
    } else {
        document.getElementById("formMessage").innerText = "Message sent successfully!";
    }

});