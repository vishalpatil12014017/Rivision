async function getdata(url){
    let res=await fetch(url)
    let data =await res.json();
    return data;

}

function append(data,place){
    data.forEach(el => {
        let div=document.createElement("div");
        var p_name=document.createElement("p");
        var p_price=document.createElement("p");
        var img=document.createElement("img");
        img.src=el.image;
        p_name.innerHTML=el.title;
        p_price.innerHTML=el.price;

        div.append(img,p_name,p_price);
        place.append(div);
        
    });

}
export {append,getdata} 
