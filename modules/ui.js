
import { UI } from "winjs";
import ShowGlobe from "./modules/globe.js";
export { showTextNode, showOption, event }


const textElement = document.getElementById('text')

let state = {}

function letStart() {
    state = {}
    showTextNode(initialPage)
}

ShowGlobe();

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonElement.child) {
        optionButtonElement.removeChild(optionButtonElement.child)
    }

    textNode.option.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonElement.appendChild(button)
        }
    })
}

console.log(d3);

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return letStart()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNode = [{
    id: initialPage,
    text: 'welcome',
    options: [{
        text: 'BEGIN',
        setState: { BEGIN: true },
        nextText: PageII
    }]
}, {
    id: PageII,
    text: 'trigger warning: descriptions of massacre/ hate/ inhumane acts/ racial conflicts',
    options: [{
        text: 'acknowledged, continue',
        requiredState: (currentState) => currentState.BEGIN,
        setState: { BEGIN: false, ques: true },
        nextText: PageIII
    }, {
        text: 'I want to leave',
        requiredState: (currentState) => currentState.BEGIN,
        setState: { BEGIN: false, initialPage: true },
        nextText: initialPage
    }]
}, {
    id: PageIV,
    text: 'To start, how many events from the list below do you recognize? ',
    options: [{
        getSelectedCheckboxValues(){},
        text: 'next',
        nextText: PageV
    }]
}, {
    id: PageV,
    text: 'these are artifacts containing stories. click to listen',
    
},

letStart(),

function getSelectedCheckboxValues(event) {
    const checkboxes = document.querySelectorAll(`input[name="${event}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

]



