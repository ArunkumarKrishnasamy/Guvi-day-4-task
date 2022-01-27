let request = new XMLHttpRequest();
// https://restcountries.com/v3.1/all
request.open("GET", "https://restcountries.com/v3.1/all")
request.send()

request.onload = function(data){
    if(request.status==200){
        let c=JSON.parse(this.responseText);
        c.map((e)=>{
            console.log(e.flags.png);
        }); 
    }
    else{console.error("request not success")};
} ;

request.onerror = function(){
    console.log("Error");
};
