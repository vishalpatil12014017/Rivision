async function getdata(url){
    let res=await fetch(url)
    let data =await res.json();
    return data;

}
function append(data,place){
    data.forEach(el => {
        let div=document.createElement("div");
        var p_name=document.createElement("p");
        var p_strCategory=document.createElement("p");
        var img=document.createElement("img");
        var btn=document.createElement("button");
        btn.innerHTML="Book Order"
        img.src=el.strMealThumb;
        p_name.innerHTML=el.strMeal;
        p_strCategory.innerHTML=`Category : ${el.strCategory}`;

        div.append(img,p_name,p_strCategory,btn);
        place.append(div);       
    });

}
export {append,getdata} 
