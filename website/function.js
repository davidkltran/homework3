const startNum = prompt('Enter the start') 
const start = parseInt(startNum, 10)
            
const endNum = prompt('Enter the end')  
const end = parseInt(endNum, 10)

const stepNum = prompt('Enter the step')  
const step = parseInt(stepNum, 10)
                        
var min = start;       
var max = end;     
var arr = [];
var sum = 0
var binary = 0
var n = 0;
var binaryArr = [];
var difference = Math.pow(2, n);

        
for (var i=min; i <=max; i=i+1)
arr.push(i)

for (var i=min; i<=max; i=i+1)
sum=sum+i

   
const output = document.getElementById("output")
output.innerHTML = 'The array is ' + arr

const output2 = document.getElementById("output2")
output2.innerHTML = 'The sum is ' + sum

const output3 = document.getElementById("output3")
output3.innerHTML = 'The binaries are ' + arr





