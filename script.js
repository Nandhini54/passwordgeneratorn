// Function to generate a random password
function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    const length = 12; // Desired password length
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('Password').value = password;
}

// Function to copy the generated password to clipboard
function copyPassword() {
    const passwordField = document.getElementById('Password');
    passwordField.select();
    document.execCommand('copy');
    alert("Password copied to clipboard!");
}

// Event listeners for buttons
document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyIcon').addEventListener('click', copyPassword);
