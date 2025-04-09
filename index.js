document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop normal form submission

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "Not specified";

    const subject = "New Contact Form Submission";
    
    const body = `Name: ${name}%0AAge: ${age}%0APhone: ${phone}%0AGender: ${gender}%0A%0AI need your appointment`;

    const mailtoLink = `mailto:ryanriyaz23@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;
});
