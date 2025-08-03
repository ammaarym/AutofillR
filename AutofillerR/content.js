console.log("content.js running");

window.addEventListener("load", () => {
    // select all inputs
    // const inputs = document.querySelectorAll('input');

    // fill out input fields
    const input1 = document.querySelector(['input[name="fname"]']);
    if (input1) input1.value = "Ammaar";
    
    const input2 = document.querySelector(['input[name="lname"]']);
    if (input2) input2.value = "Mohammed";

    const input3 = document.querySelector(['input[type="submit"]']);
    input3.click();


})