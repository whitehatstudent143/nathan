var arr =[1,2,3,4,5,6,7,8,9,10];

function find_num(arr,x)
{
   
  for(var i=0;i<arr.length;i++){
    if(x==arr[i]){
      console.log("Number exists" +i)
    } 
  }
}
function setup() 
{
  createCanvas(400, 400);
 
}

function draw() 
{
   background(220);
   find_num(arr,10);
  
}