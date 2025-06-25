

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

let toggleBtn=document.getElementById("theme-toggle")


toggleBtn.addEventListener("click",(e)=>{

  let ans = document.body.classList.contains("dark-mode");
  
  if(ans==true){
    document.body.classList.remove("dark-mode")
    localStorage.setItem("theme", "light");
   
  }
  else{
    document.body.classList.add("dark-mode")
     localStorage.setItem("theme", "dark");
 
  }

})

