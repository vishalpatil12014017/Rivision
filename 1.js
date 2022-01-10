var str="aabcef"
var max=0;
var count=0;
var obj={}
for (let i = 0; i < str.length; i++) {
   
    // if (obj[str[i]]==undefined) {
    //     obj[str[i]]=1
    //     count++
    // }else{
    //     count=1 
    //     obj={}
    //     obj[str[i]]=1
    // }
    // if (count>max) {
    //     max=count
        
    // }
    var res="";
    for (let j = i; j <str.length; j++) {
       res+=str[j]
        console.log(res);
    }
    
}
console.log(max);
console.log(obj);