import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const playButton = document.getElementById("playButton");
const app = new Application(canvas);
const cubeButton = document.getElementById("cubeButton"); // Get the button

// Load the Spline scene

app
  .load("https://prod.spline.design/oEGxUOlnCL4sj-Qj/scene.splinecode")
  .then(() => {
    console.log("Scene Loaded");

    
  });

//update variable on click
const purple = document.querySelector(".purple");
purple.addEventListener("click",()=>{
  app.setVariables({ m3noise: 100,m3color:100,
    m2noise:0,m2color:0,
    m1matcap:0,m1d2:0,m1d1:0,m1color:0 });
});


const brown = document.querySelector(".brown");
brown.addEventListener("click",()=>{
  app.setVariables({ m3noise: 0,m3color:0,
    m2noise:100,m2color:100,
    m1matcap:0,m1d2:0,m1d1:0,m1color:0 });
});


const metal = document.querySelector(".metal");
metal.addEventListener("click",()=>{
  app.setVariables({ m3noise: 0,m3color:0,
    m2noise:0,m2color:0,
    m1matcap:100,m1d2:100,m1d1:100,m1color:100 });
});