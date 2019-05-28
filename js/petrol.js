var output = document.getElementById('output');
var petrolhttp = new XMLHttpRequest();
var url = "./js/petrol.json";
var  jcontent, petroldata = "";
petrolhttp.open("GET",url,true);
petrolhttp.setRequestHeader("content-type","application/json");
petroldata += '<tr><td>Mileage</td>';
petroldata += '<td>Date</td>';
petroldata += '<td>UnitPrice</td>';
petroldata += '<td>TotalPrice</td>';
petroldata += '<td>Litres</td></tr>';
petrolhttp.onreadystatechange = function(){
    if(petrolhttp.readyState == 4 && petrolhttp.status ==200){
        jcontent = JSON.parse(petrolhttp.responseText);
        for (x in jcontent){
            petroldata += "<tr><td>" +jcontent[x].Mileage + "</td>"
            petroldata += "<td>" +jcontent[x].Date+ "</td>"
            petroldata += "<td>" +jcontent[x].UnitPrice+ "</td>"
            petroldata += "<td>" +jcontent[x].TotalPrice+ "</td>"
            petroldata += "<td>" +jcontent[x].Litres+ "</td></tr>"
        }
        petroldata += "</table>"
        document.getElementById("petrol").innerHTML = petroldata;
        console.log(jcontent);
        console.log(petrolhttp);
    }
}
function addRow(){
    var table = document.getElementById("petrol")
    var row = table.insertRow(2);
    var mileage = row.insertCell(0);
    var date = row.insertCell(1);
    var unitprice = row.insertCell(2);
    var totalprice = row.insertCell(3);
    var litres = row.insertCell(4);
}
function deleteRow(){
    document.getElementById("petrol").deleteRow(2);
}
petrolhttp.send(null);
//output.innerHTML = "nothing";