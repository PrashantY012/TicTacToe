const myElement=document.getElementById("gridContainer");
let childArray=[];
let row=[0,1,2];
let clickCount=0;
for(let x of myElement.children)
{   childArray.push(x);
    x.addEventListener('click',()=>{
        if(clickCount%2===0)
        {
            x.innerText="X";
        }
        else
        {
            x.innerText="O";
        }
       for( let i=0;i<9;i+=3)
       {    
        //row wins
           if(childArray[i+row[0]].innerText==="X" &&childArray[i+row[1]].innerText==="X" &&childArray[i+row[2]].innerText==="X")
           {
            alert("player1 won!!!");
           }
           if(childArray[i+row[0]].innerText==="O" &&childArray[i+row[1]].innerText==="O" &&childArray[i+row[2]].innerText==="O")
           {
            alert("player2 won!!!");
           }
       }
       for(let i=0;i<3;i++)
       {
          //col wins
          if(childArray[i+0].innerText==="X" &&childArray[i+3].innerText==="X" &&childArray[i+6].innerText==="X")
          {
           alert("player1 won!!!");
          }
          if(childArray[i+0].innerText==="O" &&childArray[i+3].innerText==="O" &&childArray[i+6].innerText==="O")
          {
           alert("player2 won!!!");
          }
       }
       //left diagonal
       if(childArray[0].innerText==="X"&&childArray[4].innerText==="X"&&childArray[8].innerText==="X")
       {
        alert("player1 won!!!");
       }
       if(childArray[0].innerText==="O"&&childArray[4].innerText==="O"&&childArray[8].innerText==="O")
       {
        alert("player1 won!!!");
       }
       //right diagonal
       if(childArray[2].innerText==="X"&&childArray[4].innerText==="X"&&childArray[6].innerText==="X")
       {
        alert("player1 won!!!");
       }
       if(childArray[2].innerText==="O"&&childArray[4].innerText==="O"&&childArray[6].innerText==="O")
       {
        alert("player2 won!!!");
       }
        clickCount++;
    });
}



