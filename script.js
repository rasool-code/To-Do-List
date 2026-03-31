const btn = document.querySelector('#btn');
const input = document.querySelector('#txt');
const list = document.querySelector('#ol');

btn.addEventListener('click', addItem);

function addItem() {
    const value = input.value.trim();

    if (value === '') {
        alert('Please enter something!');
        return;
    }

    // Create list item
    const li = document.createElement('li');
    li.textContent = value;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete-btn');

    // Delete functionality
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = '';
}
/*
let btn=document.querySelector('#btn').addEventListener('click',insert)
function insert(){
    let value=document.querySelector('#txt')
    let p=document.querySelector('ul')
    let li=document.createElement('li');
    let del=document.querySelector('del')
    li.innerText=value.value
    p.appendChild(li)
    value.value=''
}*/