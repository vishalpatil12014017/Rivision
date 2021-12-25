async function getdata(url){
    let res=await fetch(url)
    let data =await res.json();
    return data;

}
function append(data,place){
    data.forEach(el => {
        let div=document.createElement("div");
        var p_name=document.createElement("p");
        var strCategory=document.createElement("p");
        var img=document.createElement("img");
        var btn=document.createElement("button");
        btn.innerHTML="Book Order"
        img.src=el.strCategoryThumb;
        strCategory.innerHTML=`Category : ${el.strCategory}`;
        div.append(img,strCategory,btn);
        place.append(div);         
    });

}
export {append,getdata} 
