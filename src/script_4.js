
// // long way explained basic
// const tablePromise = fetch(endpoint); //see request from network tab
// tablePromise.then(response => {
//   console.log(response);  // now we got response, notfully downloded
//   return response.json();// if all downloaded, please convert to json(teebparseosaärasinueest), got new promise
// }).then(data => {
//   // console.log(data);
//   console.log(data[3].orderNo);
//   console.log(data[3].date);
//   console.log(data[3].customer);
//   console.log(data[3].trackingNo);
//   console.log(data[3].status);
//   console.log(data[3].consignee);
//   // infoEl1.textContent = `${data[3].orderNo} `
//   infoEl1.textContent = `${data[3].orderNo} - ${data[3].date} -${data[3].customer} - ${data[3].trackingNo} - ${data[3].status} - ${data[3].consignee}`
// }).catch(handleError)
//   // console.log(tablePromise);

// function handleError(err) {
//   console.log('Oih!');
//   console.log(err);
// }

// // shorter way the same

// const endpoint0 = "./headers.json";
// const endpoint1 = "./ship.json";
// const endpoint2 = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";
// const infoEl1 = document.querySelector('.forhelping');
// const tableGrid = document.querySelector('.rowsand');


// async function displayTable(consignee) {
//   infoEl1.textContent = 'loading...';
//   const response = await fetch(endpoint); // now we got response
//   const data = await response.json();// if all downloaded, please convert to json(teebparseosaärasinueest), got new promise
//   console.log(data[3].orderNo);
//   console.log(data[3].date);
//   console.log(data[3].customer);
//   console.log(data[3].trackingNo);
//   console.log(data[3].status);
//   console.log(data[3].consignee);
//   infoEl1.textContent = `${data[3].orderNo} - ${data[3].date} -${data[3].customer} - ${data[3].trackingNo} - ${data[3].status} - ${data[3].consignee}`
// }

// function handleError(err) {
//   console.log('Oih!');
//   console.log(err);
//   infoEl1.textContent = `Oh no! Jumped to the left: ${err}`;
// }

// displayTable('Kimco Realty Corporation').catch(handleError); //call it on page load




// //3 kord uuesti
// async function loadInTable(url, table) {
//   const tableHead = table.querySelector("thead");
//   const response = await fetch(url);
//   const data = await response.json();
//   const tableBody = table.querySelector("tbody");
//   const response2 = await fetch(url);
//   const data2 = await response2.json();
//   console.log(data)
//   console.log(data2)

//   // clear the thable
//   tableHead.innerHtml = "<tr></tr>";
//   tableBody.innerHtml = "";

//   // populate the headers
//   for (const headerText of headers) {
//     const headerElement = document.createElement("th");
    
//     headerElement.textContent = headerText;
//     tableHead.querySelector("tr").appendChild(headerElement);
//   }
  
//   //populate the row
//   // for (const row of rows) {
//     for (i = 0; i < data2.length; i++) {
//     const rowElement = document.createElement("tr");

//     for (const cellText of row) {
//       const cellElement = document.createElement("td")

//       cellElement.textContent = cellText;
//       rowElement.appendChild(cellElement);
//     }

//     tableBody.appendChild(rowElement);
//   }
// }

// loadInTable("./headers.json", document.querySelector("table"));
// loadInTable("./ship.json", document.querySelector("table"));


