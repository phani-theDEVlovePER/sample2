const img=document.getElementById("image-dom")

const imageUpdate=(event)=>{
    img.style.backgroundImage="url("+URL.createObjectURL(event.target.files[0])+")"
}