const tableContainer = document.getElementById("table-info");
const btn = document.getElementById("btn")



btn.addEventListener('click', function () {
  //"call ajax func here"
   let ourRecuest = new XMLHttpRequest();
  // ourRecuest.open('GET', 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0');
  ourRecuest.open('GET', 'ship.json');
  ourRecuest.onload = function () {
    if (ourRecuest.status >= 200 && ourRecuest.status < 400) {
      let ourData = JSON.parse(ourRecuest.responseText);
      renderHTML(ourData);      
    } else {
      console.log("Error from server");
    }
};
  ourRecuest.onerror = function () {
    console.log("Conection error")
  };

  ourRecuest.send();
});
// add info to  empty  elementi 
function renderHTML(data) {

  const btnName = "OPEN"
  const buttonnn = "<td>" + "<button onclick='myFun()' class='test' type='button' >" + btnName + "</button>" + "</td>";
  let htmlString = '';
    for (i = 0; i < data.length; i++) {
      htmlString += "<tr onclick='myIndexFind(this)'>" + "<td>" + "<dr>" + data[i].orderNo + "</dr>" + "</td>" + "<td>"  + "<dr>" + data[i].date + "</dr>" + "</td>"
        + "<td>" + "<dr>" + data[i].customer + "</dr>" + "</td>" + "<td>" + "<dr>" + data[i].trackingNo + "</dr>" + "</td>" + "<td>" +
        "<dr>" + data[i].status + "</dr>" + "</td>" + "<td>" + "<dr>" + data[i].consignee + "</dr>" + "</td>" + buttonnn + "</tr>";
  }
  tableContainer.insertAdjacentHTML('beforeend', htmlString);
}



function myFun() {
  const child = document.querySelector('.test');

  const parent = child.parentElement.parentElement;
  parent.classList.toggle('fixed-grid');
  
}
// controlling  index
function myIndexFind(x) {
  let rowIdexInfo = x.rowIndex;
  let clickedRowIndex = rowIdexInfo;
  console.log(clickedRowIndex);
  
}

/*cklickable buttns maping clicks, controll.
Why only :()    <button id="btn">Fecthime</button>*/

const clickCounts = new Map();
const buttonNop = document.querySelectorAll('button');

buttonNop.forEach(button => {
  clickCounts.set(button, 0);
  button.addEventListener('click', function () {
    const val = clickCounts.get(this);
    clickCounts.set(this, val + 1)
    console.log(clickCounts)
  });
});

