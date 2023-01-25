let maxCharcter = 20 ;
const inputText = document.querySelector(".text-area");
let charcterRemain =document.querySelector(".charcter-remain");
const note = document.querySelector(".note");
let remainIntial = document.querySelector(".remain").innerText = maxCharcter;
let charcterCount = document.querySelector(".charcter-count");
const inputValue = inputText.value;

inputText.addEventListener("input",(e)=>{
    countCharacter(maxCharcter);
})

function countCharacter(maxCharcter) {
    const inputValue = inputText.value;
    let charcter = inputValue.length;
    if (charcter > maxCharcter) {
        // inputText.disabled = true;
        inputText.value = inputValue.slice(0, maxCharcter);
        note.style.visibility = "visible";
    }
    else{
        charcterCount.innerHTML = ` <p><span class="count">${charcter}</span> Charcters</p>`;
        let remain = maxCharcter -charcter;
        charcterRemain.innerHTML = `<p>Remains : <span class="remain">${remain}</span></p>`
        note.style.visibility = "hidden";
    }
}