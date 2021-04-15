/* let numlist1:number[]=[10,20,30];

console.log("NO of elements ="+numlist1.length);
console.log(numlist1[0]); //first element

//Traditional for loop
console.log("Using Traditional for loop");

for(let i=0;i<numlist1.length;i++){
    console.log(numlist1[i]);
} */

//push method used to add element into the array
// for-of loop used to iterate sequentially over collection in a forward direction
let fruits:string[]=["mango","apple","grapes"];
fruits.push("strawberry");
fruits.push("chikoo");
fruits.sort();

for(let f of fruits){
    console.log(f);
} 
 for(let f in fruits){
    console.log(f);
} 
