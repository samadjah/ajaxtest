
fetch('ship.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let product of products) {
      out += `
      <tr class="myTable">
      <td class="myCell">${product.orderNo}</td>
      <td class="myCell">${product.date}</td>
      <td class="myCell">${product.customer}</td>
      <td class="myCell">${product.trackingNo}</td>
      <td class="myCell">${product.status}</td>
      <td class="myCell">${product.consignee}</td>
      <td class="myCell">${"<button onclick={myFunction();}>open</button>"}</td>
  
      <td>${"<button>delite</button>"}</td>
      </tr>
      
      `;
      
    }
    placeholder.innerHTML = out;
    function myFunctionn() {
      let x = document.getElementById("myTable").rows.length;
      document.getElementById("demo").innerHTML = "Found " + x + " cells in the first tr element.";
    }
    const trBaseinfo = document.querySelector('.myTable button');
    const trBaseinfo2 = document.querySelectorAll('innerHTML');
    const trBase = document.querySelector('button onclick');
    trBaseinfo.textContent = 'muudan andme'; // textContent properti on that element
    console.dir(trBaseinfo.textContent);
    const newTable = trBaseinfo.outerHTML
  
  }); 
  function myFunction() {
 
    const muudaVarvi = document.querySelector('.myTable');
    muudaVarvi.classList.toggle('mystyle');
    muudaVarvi.setAttribute('title', 'ORDEEER')
    console.log(muudaVarvi.classList);
}
   
