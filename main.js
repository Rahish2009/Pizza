
menu_list_array =["Veg Tandoori Pizza",
"Veg Paneer Pizza",
"Veg Supreme Pizza",
"Veg Deluxe Pizza",
"Veg Paneer Tikka"
] 

function getmenu() {
var htmldata;
htmldata="<button class='menulist'>"
menu_list_array.sort();
for(var i=0; i<menu_list_array.length;i++){
    htmldata=htmldata +'<li>'+ menu_list_array[i] + '</li>'
 }
     htmldata=htmldata+"</ol>";
     document.getElementById("display_menu").innerHTML = htmldata;   
}

function add_item() {
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>";
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldat+"<div class="<"card">" " + " <img src="images/pizzaImg.png/">" + " menu_list_array[i] + "<"/div"> 
    }
  htmldata=htmldata+"</section>"
  document.getElementById("display_addedmenu").innerHTML = htmldata ; 
}