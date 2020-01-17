





// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
 var span = document.createElement("SPAN");
 var txt = document.createTextNode("\u00D7");
 span.className = "close";
 span.appendChild(txt);
 myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
function closeEvent() {
 var close = document.getElementsByClassName("close");

 for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
   var div = this.parentElement;
   div.style.display = "none";

   renderGraph();
  }
 }
}
// document.querySelector('.column');
// var x = document.querySelector('.column').display === "none";
// var yy = window.getComputedStyle.display(x) === "none";

// var x = node.style.display === "none"
// var test = document.getElementsByClassName("column");
// var nodes = Array.prototype.slice.call(test);

// nodes.filter(function (node) {
//  return node.style.display !== "none"
// }).length

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
 if (ev.target.tagName !== 'LI') return;

 ev.target.classList.toggle('checked');
 renderGraph();
}, false);


// Create a new list item when clicking on the "Add" button
function newElement() {
 var li = document.createElement("li");

 li.className = "column";
 li.draggable = "true";
 // order according to time
 li.setAttribute("data-time", document.getElementById("myInput1").value);
 // order according to time

 var inputValue = document.getElementById("myInput").value;

 var inputValue1 = document.getElementById("myInput1").value;
 var tine = document.getElementById("myInput1");
 tine.dateTime = "6:00"
 // inputValue2.datetime = "6:00";



 var tt = document.createTextNode(inputValue1 + " - ");
 li.appendChild(tt);


 var t = document.createTextNode(inputValue);
 li.appendChild(t);


 if (inputValue === '') {
  alert("You must write a task!");
 } else {

  document.getElementById("columns").appendChild(li);
  // order according to time start

  // setTimeout(function () {
  //  var sortItems = document.querySelectorAll("[data-time]");
  //  var elemArray = Array.from(sortItems);
  //  elemArray.sort(function (a, b) {
  //   if (a.getAttribute('data-time') < b.getAttribute('data-time')) { return -1 } else { return 1 }
  //  });

  //  // 
  //  document.getElementById("columns").innerHTML = "";

  //  elemArray.forEach(appendFunction);

  //  function appendFunction(item, index) {
  //   document.getElementById("columns").innerHTML += item.outerHTML;
  //  }

  //  afterUpdate();
  // });


  setTimeout(function () {
   var sortItems = Array.from(document.querySelectorAll("[data-time]"))
    .filter((item) => !item.classList.contains('checked'))
    .sort(function (a, b) {
     if (a.getAttribute('data-time') < b.getAttribute('data-time')) { return -1 } else { return 1 }
    });

   document.getElementById("columns").innerHTML = "";

   sortItems.forEach(appendFunction);

   function appendFunction(item, index) {
    document.getElementById("columns").innerHTML += item.outerHTML;
   }

   afterUpdate();
  });





  // order according to time end

 }
 document.getElementById("myInput").value = "";
 document.getElementById("myInput1").value = "";

 var span = document.createElement("SPAN");
 var txt = document.createTextNode("\u00D7");
 span.className = "close";
 span.appendChild(txt);
 li.appendChild(span);

 for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
   var div = this.parentElement;
   div.style.display = "none";
  }
 }
}


// Add tasks by pressing enter
// Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
 // Number 13 is the "Enter" key on the keyboard
 if (event.keyCode === 13) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Trigger the button element with a click
  document.getElementById("myBtn").click();

 }
});
// // 
// // 




var btn = document.querySelector('.add');
var remove = document.querySelector('.column');

function dragStart(e) {
 this.style.opacity = '0.4';
 dragSrcEl = this;
 e.dataTransfer.effectAllowed = 'move';
 e.dataTransfer.setData('text/html', this.innerHTML);
};

function dragEnter(e) {
 this.classList.add('over');
}

function dragLeave(e) {
 e.stopPropagation();
 this.classList.remove('over');
}

function dragOver(e) {
 e.preventDefault();
 e.dataTransfer.dropEffect = 'move';
 return false;
}

function dragDrop(e) {
 if (dragSrcEl != this) {
  dragSrcEl.innerHTML = this.innerHTML;
  this.innerHTML = e.dataTransfer.getData('text/html');
  closeEvent();
 }
 return false;
}

function dragEnd(e) {
 var listItems = document.querySelectorAll('.column');
 [].forEach.call(listItems, function (item) {
  item.classList.remove('over');
 });
 this.style.opacity = '1';
}

function addEventsDragAndDrop(el) {
 el.addEventListener('dragstart', dragStart, false);
 el.addEventListener('dragenter', dragEnter, false);
 el.addEventListener('dragover', dragOver, false);
 el.addEventListener('dragleave', dragLeave, false);
 el.addEventListener('drop', dragDrop, false);
 el.addEventListener('dragend', dragEnd, false);
}

function addDragAndDrop() {
 var listItems = document.querySelectorAll('.column');

 listItems.forEach(addEventsDragAndDrop);
}

afterUpdate();

function afterUpdate() {
 closeEvent();
 addDragAndDrop();
 renderGraph();
}


function addNewItem() {
 var newItem = document.querySelector('.input').value;
 if (newItem != '') {
  document.querySelector('.input').value = '';
  var li = document.createElement('li');
  var attr = document.createAttribute('column');
  var ul = document.querySelector('ul');

  li.className = 'column';
  attr.value = 'true';

  li.setAttributeNode(attr);
  li.appendChild(document.createTextNode(newItem));
  ul.appendChild(li);

  addEventsDragAndDrop(li);

 }
}

// btn.addEventListener('click', addNewItem);






// $("li").click(function () {

//  $(this).parent().prepend($(this));
//  afterUpdate();
// });
// putCheckedToEnd(function () {
//  var sortItems2 = document.getElementById('li');
//  var elemArray2 = Array.from(sortItems2);
//  elemArray2.sort(function (a, b) {
//   if (a.getAttribute('data-time') < b.getAttribute('data-time')) { return -1 } else { return 1 }
//  });

//  // 
//  document.getElementById("columns").innerHTML = "";

//  elemArray.forEach(appendFunction);

//  function appendFunction(item, index) {
//   document.getElementById("columns").innerHTML += item.outerHTML;
//  }

//  afterUpdate();
// });

