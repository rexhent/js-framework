/**
 * Adds a CSS style block to the document head.
 * @param {string} css - The CSS rules as a string.
 */
function addCss(css) {
    const styleElement = document.createElement('style');
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
}
addCss(`.mr-2 {
    margin-right: 5px;
    }`)

/**
 * Adds CSS class names to the specified HTML element.
 * @param {HTMLElement} element - The target HTML element.
 * @param {string[]} styles - An array of class names to add to the element.
 */
function addStyles(element, styles) {
    for (let i = 0; i < styles.length; i++) {
        element.classList.add(`${styles[i]}`);
    }
}

/**
 * Loads the Inter font from Google Fonts and dynamically generates weight-based CSS classes.
 */
function addInterFont() {
    addCss(`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    `);
    for (let i = 1; i < 10; i++) {
        const weight = `${i}00`;
        addCss(`
            .inter-${weight} {
            font-family: "Inter", sans-serif;
            font-optical-sizing: auto;
            font-weight: ${weight};
            font-style: normal;
        }
        `);
    }
}

// function setReactive(element, value) {
//     element.textContent 
// }

// Automatically add the Inter font styles
addInterFont();

/**
 * Creates a button element and appends it to the specified container.
 * @param {string} text - The text content of the button.
 * @param {string} id - The ID of the container where the button will be appended.
 * @param {Function} onClick - The callback function to execute on button click.
 * @param {string[]} classes - An array of CSS class names to add to the button.
 */
function createButton(text, id, onClick, classes) {
    const button = createHtmlElement('button', id, text, classes, { 
        padding: '10px 20px', 
        fontSize: '16px', 
        backgroundColor: '#4CAF50', 
        color: 'white', 
        border: 'none', 
        borderRadius: '4px', 
        cursor: 'pointer',
    });
    button.addEventListener('click', onClick);
    return button
}


/**
 * Creates an HTML element, applies styles and classes, and appends it to the specified container.
 * @param {string} elementTag - The tag name of the HTML element to create (e.g., "div", "h1").
 * @param {string} id - The ID of the container where the element will be appended.
 * @param {string} content - The inner HTML content of the element.
 * @param {string[]} classes - An array of CSS class names to add to the element.
 * @param {Object} styles - An object containing CSS property-value pairs to apply to the element.
 * @returns {HTMLElement} The created HTML element.
 */
function createHtmlElement(elementTag, id, content, classes, styles) {
    const element = document.createElement(`${elementTag}`);
    element.innerHTML = content;
    if (styles) {
        for (const property in styles) {
            console.log(property, element[property], styles[property]);
            element.style[property] = styles[property];
        }
    }
    addStyles(element, classes);
    const container = document.getElementById(`${id}`);
    if (container) {
        container.appendChild(element);
    } else {
        console.error(`Container with id "${id}" not found`);
    }
    return element;
}

// Example usage
/**
 * @type {number}
 */
let buttonValue = 0

const increment = createButton('+', "app", () => {buttonValue++; reset.textContent = buttonValue}, ["inter-400", "mr-2"]);
const reset = createButton(`${buttonValue}`, "app", () => {buttonValue = 0; reset.textContent = buttonValue}, ["inter-400", "mr-2"]);
const decrement = createButton('-', "app", () => {buttonValue--; reset.textContent = buttonValue}, ["inter-400", "mr-2"]);



createButton("hello", "btn2", () => {}, ["inter-800"]);

/**
 * Example usage: Creates an <h1> element with dynamic content.
 * @type {string}
 */
const myName = "name";
const hello = createHtmlElement("h1", "app", `<i>Hello ${myName}!!!</i>`, ["green", "inter-400"], { 
    fontSize: '48px', 
    padding: "20px"
});
hello.textContent = "hi";
/** 
* value var 
* @type {number}
*/

let value = 0
hello.addEventListener('click', () => {value++; hello.textContent = value});


