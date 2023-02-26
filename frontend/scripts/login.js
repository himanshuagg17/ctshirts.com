let form=document.getElementById("form")
let button=document.getElementById("submit")
let data=JSON.parse(localStorage.getItem("key"))
console.log(data)


form.addEventListener("submit",(e)=>{
   e.preventDefault()
   let  email = form.email.value;
   let  password = form.password.value;
   let temp;
   let flag = false;
   if(email==="admin@gmail.com"&&password==="admin"){
     flag = true;
   }else{
    data.forEach(element => {
        if(email == element.email){
            flag = true;
            temp = element;
        }
      });
   }
   
      
      if(flag == false){
        alert("User is not registered");
      }else{
        if(email!=="admin@gmail.com"&&password!==temp.password){
            alert("Enter Correct Password");
        }else{
            if(email!=="admin@gmail.com"){
                localStorage.setItem("user",JSON.stringify(temp));
            }
           
            if(email==="admin@gmail.com"&&password==="admin"){
                window.location.href="users.html";
            }else{
                window.location.assign("index.html")
            }
        }
      }
})