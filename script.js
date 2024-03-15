console.log("Hello World!");

// let elem1 = document.querySelector("#elem1");
// let elem1Img = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", (dets)=>{
//   elem1Img.style.left = dets.x+"px";
//   elem1Img.style.top = dets.y+"px";
//   elem1Img.style.cursor = "none";
// })

// elem1.addEventListener("mouseenter", (dets)=>{
//   elem1Img.style.opacity = 1;
// })

// elem1.addEventListener("mouseleave", (dets)=>{
//   elem1Img.style.opacity = 0;
// })


let elem = document.querySelectorAll(".elem");

elem.forEach((ele)=>{
  let myImg = ele.querySelector("img")
  console.log(myImg)
ele.addEventListener("mouseenter", (dets)=>{
  // ele.childNodes[3].style.opacity = 1;
  myImg.style.display = "block";
})

ele.addEventListener("mouseleave", (dets)=>{
  // ele.childNodes[3].style.opacity = 0;
  myImg.style.display = "none";
})
+
ele.addEventListener("mousemove", (dets)=>{
  console.log("dts.y height", dets.y)
  var diff = (dets.clientY - ele.getBoundingClientRect().top);
  console.log("difference", diff)
  console.log("bounding box ",ele.getBoundingClientRect().top);
  // ele.childNodes[3].style.left = dets.x+"px";
  myImg.style.left = dets.x+"px";
  // ele.childNodes[3].style.top = dets.y+"px";
  myImg.style.top = diff+"px";
})
})