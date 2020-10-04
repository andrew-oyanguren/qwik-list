// Declarations

//header form
const addItemBtn = document.getElementById('addItemBtn');
const userInput = document.getElementById('userInput');
//List
const ourList = document.querySelector('.list');



// Event Listeners

addItemBtn.addEventListener('click', addListItem);
ourList.addEventListener('click', removeListItem);



// Functions

function addListItem(e) {
  //stop form submit
  e.preventDefault();
  //create list-wrapper <div>
  const listWrapper = document.createElement('div');
  //add class to <div>
  listWrapper.classList.add('list-wrapper');
  //create list item <li>
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');
  listItem.innerText = userInput.value;
  listWrapper.appendChild(listItem);
  //create input checkbox
  const checkBox = document.createElement('input');
  checkBox.classList.add('check-box')
  checkBox.setAttribute('type', 'checkbox');
  listWrapper.appendChild(checkBox);
  //create label for input checkbox
  const label = document.createElement('label');
  label.classList.add('cross-toggle');
  label.setAttribute('for', 'checkbox');
  label.innerText = 'Need it...';
  listWrapper.appendChild(label);
  //create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerHTML = '<i class="fas fa-minus"></i>';
  listWrapper.appendChild(deleteBtn);
  //append created <div> to <ul>
  ourList.appendChild(listWrapper);
  //clear input value
  userInput.value = '';
}

function removeListItem(e) {
  //Declare target variable
  const item = e.target;
  const listText = item.previousElementSibling;
  //Delete List
  console.log(listText);
  if (item.classList[0] == 'delete-btn') {
    const list = item.parentElement;
    list.remove();
  }
  //Cross out and change text
  if (item.classList[0] == 'cross-toggle') {

    const itemText = item.parentElement;
    itemText.children[0].classList.toggle('cross-out');
    // change text
    if (item.innerText == 'Need it...') {
      return item.innerText = 'Got it!';
    } else {
      return item.innerText = 'Need it...';
    }
  }
}

