/*let h=document.querySelector("#main-header");
h.style.borderBottom='solid 4px red'

let d=document.querySelector("input");
d.value="sekhar"

let sub=document.querySelector('input[type="submit"]');
sub.value="nono";

let item=document.querySelector(".list-group-item");
item.style.color="red";

let litem=document.querySelector(".list-group-item:last-child")
litem.style.color="red"  

let pitem=document.querySelector(".list-group-item:nth-child(2)");
pitem.style.color="red";   */

let a=document.querySelectorAll('.title');
console.log(a);
a[0].textContent="helo";

let odd=document.querySelectorAll('li:nth-child(odd)') 
let evn=document.querySelectorAll('li:nth-child(even)')
for(let i=0;i<odd.length;i++)
{
    odd[i].style.color="red"
}