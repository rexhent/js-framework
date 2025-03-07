
function addCss(css) {
    const styleElement = document.createElement('style');
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
}
function addStyles(element, styles) {
    // console.log(styles)
    for (let i = 0; i < styles.length; i++) {
        // console.log(i, styles, styles[i])
        element.classList.add(`${styles[i]}`)
    }
}

function addInterFont() {
    addCss(`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    `)
    for (let i = 1; i < 10; i++) {
        // console.log(i)
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
    .green {
        color: green;
    }
    
`);


// function createButton(text, id, onClick, styles) {
//     const button = document.createElement('button');    
//     button.textContent = text
//     button.style.padding = '10px 20px';
//     button.style.fontSize = '16px';
//     addStyles(button, styles)
//     button.addEventListener('click', onClick);

//     const container = document.getElementById(`${id}`);
//     if (container) {
//         container.appendChild(button);
//     } else {
//         console.error('Container with id "app" not found');
//     }
// }

function createButton(text, id, onClick, classes) {
    const button = createHtmlElement('button', id, text, classes, { padding: '10px 20px', fontSize: '16px'});    
    button.addEventListener('click', onClick);
}

function createHtmlElement(elementTag, id, content, classes, styles) {
    const element = document.createElement(`${elementTag}`)
    element.innerHTML = content
    if (styles) {
        for (const property in styles) {
            console.log(property, element[property], styles[property])
            element.style[property] = styles[property]
            // element.styles[i][0] = element.styles[i][1]
        }
    }
    addStyles(element, classes)
    const container = document.getElementById(`${id}`);
    if (container) {
        container.appendChild(element);
    } else {
        console.error('Container with id "app" not found');
    }
    return element
}

// Example usage
createButton('Click Me!', "app", () => alert('Button clicked!'), ["inter-400"]);

createButton("hello", "btn2", () => {},["inter-800"])


/** @param {string} myName */
myName = "name"
hello = createHtmlElement("h1", "app",`<i>Hello ${myName}!!!</i>`, ["green", "inter-400"], {fontSize: '48px', padding: "20px"})
hello.textContent = "hi"
hello.addEventListener('click', console.log("hi"))