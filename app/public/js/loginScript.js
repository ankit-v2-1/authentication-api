const form = document.getElementById('login')
form.addEventListener('submit', login)

async function login(event) {
    event.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const result = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then((res) => res.json())

    if (result.success === 1) {

        // Everythign went fine
        alert('Logined Successfully')

        // Reload the page
        window.location.reload();

    } else {

        // Show error message
        alert(result.message)

        // Clear the password field
        window.location.reload();
    }
}