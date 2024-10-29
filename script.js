function handle(event){
  if(event.key === "Enter"){
    sign();
  }
}
function sign(){
  const box = document.getElementById("box")
  const box2 = document.getElementById("box2")

  box.style.display = "none"
  box2.style.display = "flex"
}

function next(){
  window.location.href = "index2.html"
}