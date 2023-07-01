let inputTextArea = document.getElementById("input-textarea");
let charcCount = document.getElementById("charc-count");
let wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input",()=> {
    charcCount.textContent = inputTextArea.value.length;
    let txt = inputTextArea.value.trim();
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});