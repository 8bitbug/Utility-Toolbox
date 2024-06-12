document.getElementById('signUp').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, username, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert("Worked")
        } else {
            document.getElementById('username').placeholder = data.error;
            document.getElementById('username').value = ''
        }
    } catch (error) {
        alert("A Error incured. Please try again")
    }
})