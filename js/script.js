// This file contains the JavaScript code that adds interactivity to the HTML page.

document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Welcome to My HTML Project!';
    
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });
});