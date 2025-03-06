
function addCss(css) {
    const styleElement = document.createElement('style');
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
}
function addStyles(element, styles) {
    element.classList.add(`${styles}`)
}

function addInterFont() {
    addCss(`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    `)
    for (let i = 1; i < 10; i++) {
        console.log(i)
        weight = `${i}00`
        addCss(`
            .inter-${weight} {
            font-family: "Inter", sans-serif;
            font-optical-sizing: auto;
            font-weight: ${weight};
            font-style: normal;
        }
        `)
        
    }
}

addInterFont()

// Example usage
addCss(`
    #app button {
        background-color: #4CAF50;
        color: white;
        padding: 12px 24px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    #app button:hover {
        background-color: #45a049;
    }
    
`);


function createButton(text, id, onClick, styles) {
    const button = document.createElement('button');
    button.textContent = text
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    addStyles(button, styles)
    button.addEventListener('click', onClick);

    const container = document.getElementById(`${id}`);
    if (container) {
        container.appendChild(button);
    } else {
        console.error('Container with id "app" not found');
    }
}

// Example usage
createButton('Click Me!', "app", () => alert('Button clicked!'), "inter-400");

createButton("hello", "btn2", () => {},"inter-800")