export let arr = new Array();

let button = document.getElementById("add");
let el = document.getElementById("d1");
let out = document.getElementById("list");
let title = document.getElementById("title1");
let date = document.getElementById("date1");
let sum = document.getElementById("sum1");
let save = document.getElementById("save1");
window.addEventListener("DOMContentLoaded", add);

export function add()
{
    button.addEventListener('click', call);
}

export function call()
{
    el.showModal();
    save.addEventListener('click', call1);
}

export function call1()
{
    let node = document.createElement("li");
    let textNode = document.createTextNode(`Blog ${arr.length + 1} is ${title.value}(${date.value}): ${sum.value}`);
    title.value = '';
    date.value = '1999-01-02';
    sum.value = '';
    node.appendChild(textNode);
    out.appendChild(node);
    node.setAttribute("id", `div${arr.length}`);
    arr.push(node);
    console.log(arr);
    localStorage.setItem('lists', JSON.stringify(arr));
}

let choice = document.getElementById("input1");
let button1 = document.getElementById("remove");
let el1 = document.getElementById("d2");
window.addEventListener("DOMContentLoaded", rm);
let save1 = document.getElementById("conf2");

export function rm()
{
    button1.addEventListener('click', remo);
}

export function remo()
{
    el1.showModal();
    save1.addEventListener('click', rm_confirm);
}

export function rm_confirm()
{
    let ind = choice.value - 1;
    let node = arr[ind]
    node.remove();
    arr.splice(ind, 1);
    for(let i = 0; i < arr.length; i++)
    {
        node = arr[i];
        let temp = node.innerText.split("is");
        node.innerText = `Blog ${i + 1} is${temp[1]}`;
    }
    console.log(arr);
    localStorage.setItem('lists', JSON.stringify(arr));
}

let choice1 = document.getElementById("input2");
let button2 = document.getElementById("edit");
let el2 = document.getElementById("d3");
window.addEventListener("DOMContentLoaded", ed);
let save2 = document.getElementById("save3");
let title1 = document.getElementById("title2");
let date1 = document.getElementById("date2");
let sum1 = document.getElementById("sum2");

export function ed()
{
    button2.addEventListener('click', edi);
}

export function edi()
{
    el2.showModal();
    save2.addEventListener('click', ed_confirm);
}

export function ed_confirm()
{
    let ind = choice1.value - 1;
    let node = arr[ind]
    let temp = node.innerText.split("is");
    node.innerText = `${temp[0]}is ${title1.value}(${date1.value}): ${sum1.value}`;
    title1.value = '';
    date1.value = '1999-01-02';
    sum1.value = '';
    arr[ind] = node;
    console.log(arr);
    localStorage.setItem('lists', JSON.stringify(arr));
}