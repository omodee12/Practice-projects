const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('name is required')
    }
    if (password.value.legnth <= 6) {
        messages.push('password must be more than 6 characters')
    }
    if (messages.length > 0) {
        errorElement.innerText = messages.join(', ')
    }
    e.preventDefault()
})