// Change text content dynamically
function changeText() {
    const textElement = document.getElementById('dynamic-text');
    const messages = [
        "Text Changed!",
        "Updated Content!",
        "New Message!",
        "Modified Text!"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    textElement.textContent = messages[randomIndex];
}

// Toggle CSS styles
function toggleStyles() {
    const styleTarget = document.getElementById('style-target');
    styleTarget.classList.toggle('highlight');
}

// Add/remove element
let elementExists = false;

function toggleElement() {
    const container = document.getElementById('element-container');
    
    if (elementExists) {
        container.removeChild(container.lastElementChild);
    } else {
        const newElement = document.createElement('div');
        newElement.textContent = "New Element Added!";
        newElement.classList.add('box');
        container.appendChild(newElement);
    }
    
    elementExists = !elementExists;
}