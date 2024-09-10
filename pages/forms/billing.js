document.getElementById("addProduct").addEventListener("click", (e) => {
    e.preventDefault();
    let productName = document.getElementById("productName");
    let productVersion = document.getElementById("productVersion");
    let productPrice = document.getElementById("productPrice");  
    
    let table = document.getElementById("productData");
    let newRow = table.insertRow(table.rows.length);
    let productNameData = newRow.insertCell(0);
    let productVersionData= newRow.insertCell(1)
    let productPriceData = newRow.insertCell(2);
    // let btn = newRow.inserCell(3);
  
    productNameData.innerHTML = productName.value;
    productPriceData.innerHTML = productPrice.value;
    productVersionData.innerHTML = productVersion.value;
    
  // let button = document.createElement('button');
  // button.innerHTML="Delete";
  // btn.innerHTML=button;

  productName.value='';
  productPrice.value='';
 productVersion.value='';

let totalAmount=0;
let rows=table.rows;
 for(let i=0;i<rows.length;i++){
totalAmount += parseFloat(rows[i].cells[2].innerHTML);
 }
 let amount=document.getElementById('totalAmount')
 amount.innerHTML=`Total Amount: ${totalAmount}`

 //  delete button

  });
  
  function generatingpdf(){
    let tableclone = document.getElementById("printable").cloneNode(true);
    let tableclonerowsandcolumn = tableclone.outerHTML;
    var invoiceWindow = window.open('', '_blank');
    invoiceWindow.document.write('<head><style>');
    invoiceWindow.document.write('body { font-family: Arial, sans-serif; }');
    invoiceWindow.document.write('table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }');
    invoiceWindow.document.write('th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }');
    invoiceWindow.document.write('th { background-color: #f2f2f2; }');
    invoiceWindow.document.write('#totalAmount { font-weight: bold; }');
    invoiceWindow.document.write('#invoiceTitle { text-align: center; font-size: 24px; margin-bottom: 20px; }');
    invoiceWindow.document.write('</style>');
    invoiceWindow.document.write('</head><body>');
    invoiceWindow.document.write('<h2 id="invoiceTitle">Invoice</h2>');
    invoiceWindow.document.write(tableclonerowsandcolumn);
    invoiceWindow.document.close();
    invoiceWindow.print();

}