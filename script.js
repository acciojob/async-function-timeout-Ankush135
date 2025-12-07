//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");


function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);   
    });
}

async function run() {
    const userText = text.value;     
    const userDelay = Number(delay.value);  

    await wait(userDelay);  

    output.innerHTML = userText;  
}

btn.addEventListener("click", run);