const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const picker= document.getElementById("clrpkr");
const switch1= document.getElementById("chkbx");
output.textContent = slider.value;
let pencolor="white";
slider.oninput = function() {
  output.textContent = this.value;
}

function createGrid(dimension=16)
{ const container=document.querySelector(".container");

  for(let i=0;i<dimension;i++)
  { let row= document.createElement('div');
    row.classList.add("row");
    container.appendChild(row);
    for(let j=0;j<dimension;j++)
    {
      let element= document.createElement('div');
      element.classList.add("element");
      element.style.cssText="background-color:black";
      row.appendChild(element);
      
     
      element.onmouseenter=()=>{
        element.style.cssText="background-color:"+picker.value;
      }
      
    }
  }
}

document.querySelector('#eraser').addEventListener('click',()=>{
picker.value="black";
});

document.querySelector("#new-grd").addEventListener('click',()=>{
  newGrid();
})

function newGrid()
{ let dimension= Number(output.textContent);
  console.log(dimension);
  document.querySelector('.container').textContent="";
  createGrid(dimension);
}

createGrid();