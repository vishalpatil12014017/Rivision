const container = document.querySelector('.container');
let counter = 1;
function loadImages(numImages = 25) {
    let i = 0;
    while (i < numImages) {
        const div = document.createElement('div');
        div.textContent = `Masai Student ${counter}`
        container.appendChild(div);
        console.log(counter,i);
        counter++;
        i++;
    }
}

loadImages()
window.addEventListener('scroll', () => {
    // console.log(window.innerHeight)
    // console.log(window.scrollY)
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        setTimeout(() => {
            loadImages()

        }, 3000)
    }
})