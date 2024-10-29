function handle(event){
  if(event.key === "Enter"){
    dynamic()
  }
}
function dynamic(){
  const input = document.getElementById("input")

  if(input.value === "Yamal"){
    document.body.style.background = "url(Lamine.jpg)"
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
  }
  else if(input.value === "Lewandowski"){
    document.body.style.background = "url(Lewan.jpg)"
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
  }
  else if(input.value === "Rapinha"){
    document.body.style.background = "url(Rapinha.jpeg)"
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
  }
  else if(input.value === "logo1"){
    document.body.style.background = "url(483251.jpg)"
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
  }
  else if(input.value === "logo2"){
    document.body.style.background = "url(483269.jpg)"
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
  }
  else if(input.value === "Camp Nou" || input.value === "camp nou"){
    document.body.style.background = "url(483324.jpg)"
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
  }
  else if(input.value === "MSN" || input.value === "msn"){
    document.body.style.background = "url()"
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
  }
}