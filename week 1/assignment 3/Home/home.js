async function main() {
    let name = document.getElementById("query").value
    if (name.length < 3) {
        return false;
    }
    let movies = await serachmovie(name)
    if (movies === undefined) {
        return false
    }
    console.log('movies:', movies)
    moiv_div.style.display = "grid"
    non.style.display = "grid"
    append_movie(movies)

}
//serach  omovie
let non = document.getElementById("non")
async function serachmovie(name) {
    let res = await fetch(`https://www.superheroapi.com/api.php/3045277052375665/search/${name}`)
    let data = await res.json()
    console.log('data:', data)
    return data.results
}
let moiv_div = document.getElementById("movies")
moiv_div.style.display = "none"
non.style.display = "none"


function append_movie(m) {
    moiv_div.innerHTML = null
    m.forEach(({ name, appearance, biography, image, powerstats, connections }) => {
        let div = document.createElement("div")
        div.setAttribute("class", "div_info")
        let p_avt = document.createElement('p')
        let avt_div = document.createElement("div")
        avt_div.append(p_avt)
        avt_div.setAttribute("class", "info_div")
        p_avt.innerText = name
        p_avt.setAttribute("class", "p_avt")
        div.onclick = () => {
            info_fun(name, appearance, biography, image, powerstats, connections)
        }
        div.append(avt_div)
        moiv_div.append(div)
    });

}

let cont_div = document.createElement("div")
function info_fun(name, appearance, biography, image, powerstats, connections) {
    let { alignment, publisher } = biography
    let dob = biography["place-of-birth"]
    let f_a = biography["first-appearance"]
    let { gender } = appearance
    let f_name = biography["full-name"]
    let main_div = document.getElementById("cont")
    main_div.style.display = "none"
    let img_div = document.createElement("div")
    let img_avt = document.createElement("img")
    let { url } = image
    img_avt.src = url
    img_avt.setAttribute("class", "avt_cont_img")
    img_div.append(img_avt)
    img_div.setAttribute("class", "class1")
    let info_div = document.createElement("div")
    let p_name = document.createElement("p")
    p_name.innerText = "Char name: " + name
    let p_fname = document.createElement("p")
    p_fname.innerText = "Name: " + f_name
    let p_gen = document.createElement("p")
    p_gen.innerText = "Gender: " + gender
    let p_dob = document.createElement("p")
    p_dob.innerText = "Place of Birth: " + dob
    let p_a = document.createElement("p")
    p_a.innerText = "First-appearance: " + f_a
    let p_ali = document.createElement("p")
    p_ali.innerText = "Alignment: " + alignment
    let p_pub = document.createElement("p")
    p_pub.innerText = "Publisher: " + publisher
    let head_1 = document.createElement("h6")
    head_1.innerText = "BIOGRAPHY"
    info_div.append(head_1, p_name, p_gen, p_dob, p_gen, p_a, p_ali, p_pub, p_fname)
    info_div.setAttribute("class", "class2")
    let tempdiv_1 = document.createElement("div")
    let tempdiv_2 = document.createElement("div")
    tempdiv_2.append(info_div)
    tempdiv_2.setAttribute("class", "fow_coloum")
    tempdiv_1.append(img_div, tempdiv_2)
    tempdiv_1.setAttribute("class", "fow_row")
    let btn = document.createElement("button")
    btn.innerText = "Back"

    cont_div.append(tempdiv_1, btn)
    cont_div.setAttribute("class", "cont_div_avt")

    btn.onclick = () => {
        main_div.style.display = "block"
        cont_div.innerHTML = ""
        document.getElementById("query").value = ""
        moiv_div.style.display = "none"
        non.style.display = "none"
    }
    document.body.append(cont_div)
}
let timerId
function debounce(func, delay) {

    let name = document.getElementById("query").value
    if (name.length == 0) {
        moiv_div.style.display = "none"
        non.style.display = "none"
    }
    if (name.length < 3) {
        return false;
    }
    if (timerId) {
        clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
        func()
    }, delay)
}