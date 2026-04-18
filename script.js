window.onload = function() {

    function toggleProfile() {
        let profile = document.getElementById("profileText");

        if (profile.style.display === "none") {
            profile.style.display = "block";
        } else {
            profile.style.display = "none";
        }
    }

    window.toggleProfile = toggleProfile;

    let form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        if (name === "" || email === "") {
            document.getElementById("formMessage").innerText = "Please fill all fields";
        } else {
            document.getElementById("formMessage").innerText = "Message sent successfully!";
        }
    });

};

async function getQuote() {
    let quoteText = document.getElementById("quote");
    quoteText.innerText = "Loading...";
    try {
        let response = await fetch("https://dummyjson.com/quotes/random");
        let data = await response.json();
        quoteText.innerText = data.quote + " — " + data.author;
    } catch (error) {
        quoteText.innerText = "Error loading quote.";
    }
}