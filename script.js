const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const picker= document.getElementById("clrpkr");



// creates a grid with a given dimension
function createGrid(dimension=16)
{ const container=document.querySelector(".container");

  for(let i=0;i<dimension;i++)
  { //creates a row and appends it to container
    let row= document.createElement('div');
    row.classList.add("row");
    container.appendChild(row);
    for(let j=0;j<dimension;j++)
    {
      //creates an element and appends it to row
      let element= document.createElement('div');
      element.classList.add("element");
      element.style.cssText="background-color:black";
      row.appendChild(element);

      //lets you draw only if you press control while hovering
      element.onmouseenter=()=>{
        document.onkeydown=(e)=>{
          if(e.key=='Control')
        { 
          element.style.cssText="background-color:"+picker.value;
        }
        }
        
      }

    }
  }
}

//creates a default grid at the beginning
createGrid();

// wipes out the container and generates new grid
function newGrid()
{ let dimension= Number(output.textContent);
  console.log(dimension);
  document.querySelector('.container').textContent="";
  createGrid(dimension);
}


//code for eraser button
document.querySelector('#eraser').addEventListener('click',()=>{
picker.value="#000000";
});

// code for new grid button
document.querySelector("#new-grd").addEventListener('click',()=>{
  newGrid();
})


//code for the slider
output.textContent = slider.value;
let pencolor="white";
slider.oninput = function() {
  output.textContent = this.value;
}


