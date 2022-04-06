const form = document.getElementById('reg-form')
form.addEventListener('submit', registerUser)

async function registerUser(event) {
    event.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const result = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    }).then((res) => res.json())

    if (result.success === 1) {
        // Everythign went fine
        alert('Registered Successfully')

        // Redirect to login page
        window.location = '/';

    } else {
        alert(result.message);
    }
}