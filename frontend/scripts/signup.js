let form=document.getElementById("form")
let submitButton=document.getElementById("submit")
let reset=document.getElementById("reset")

 let data=JSON.parse(localStorage.getItem("key"))||[] 

 reset.addEventListener("submit",()=>{

 })
 form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // create data 
    let name = form.Fname.value+" "+form.Lname.value;
    let email = form.email.value;
    let password = form.password.value;
    let obj={
       name,
       email,
       password
    }
    if(obj.name!=undefined&&obj.email!=undefined&&obj.password!=undefined){
        let present=false;
        data.forEach((element) => {
            if(element.email === email){
                present=true;
            }   
        });
        console.log(present);
        if(present==true){
                alert("User already exists")
            }else{
                data.push(obj)
                localStorage.setItem("key",JSON.stringify(data))
                window.location.assign("login.html")
            }
    }
        
    });
    
 console.log("yes");