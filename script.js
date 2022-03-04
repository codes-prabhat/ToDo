var ToDo=[]
/* Adding 2 Div elements Left and Right  */
function add_div(){
  var div1=document.createElement("div");
  var div2=document.createElement("div");
  div1.setAttribute("class","div1")
  div2.setAttribute("class","div2")

  var heading=document.createElement("h1");
  heading.innerHTML="TASK LIST";
  div1.appendChild(heading);
  var par=document.createElement("p");
  par.innerHTML="Add task to your list by typing to the right and pressing enter.You may then view pending task below."
  div1.appendChild(par)

  var input_to_do=document.createElement("textarea");
  input_to_do.setAttribute("placeholder","I need To... ");
  input_to_do.setAttribute("id","textbox");

  div2.appendChild(input_to_do)

  input_to_do.addEventListener("keydown",eventTextArea);
//adding unordered list to left div
  var ul1=document.createElement("ul")
  ul1.setAttribute("class","list");
  div1.appendChild(ul1);



  document.body.appendChild(div1);
  document.body.appendChild(div2);
}
/****************************************************** */


/*Text Area fetching and updating HTML DOM and local storage*/
function eventTextArea(event){
  var key_Code=event.code;
  var textbox=document.querySelector("#textbox")
  if((textbox.value==="") && (key_Code==="Enter" || key_Code==="NumpadEnter")){
    event.preventDefault()
  }
  if ((key_Code==="Enter" || key_Code==="NumpadEnter") && textbox.value!=="")
  {
    event.preventDefault();
    var list_item=document.createElement("li");
    var input_box=document.createElement("input")
    var values=document.createElement("span")
    var edit=document.createElement("i");
    edit.setAttribute("class","fa fa-pencil");
    values.innerHTML=textbox.value;
    input_box.setAttribute("type","checkbox")
    /*************** adding check event to checkbox ****/
     input_box.addEventListener("change",function(){
     if(this.checked)
     values.innerHTML='<s>'+values.innerText+'</s>';
     else
     values.innerHTML=values.innerText;
   });
   /**************************************************/
    list_item.appendChild(values);
    var x=document.createElement("span");
    x.setAttribute("class","close")
    x.innerHTML="x";

    var container1=document.createElement("div");
    container1.appendChild(input_box)
    container1.appendChild(edit)
    container1.appendChild(x)

    //edit pencil
    edit.addEventListener("click",function(){
      values.setAttribute("contenteditable","true")
    })
    /*************/
    ToDo.push(values.innerText);
    localStorage.setItem("ToDo",JSON.stringify(ToDo))

    list_item.appendChild(container1);

    container1.setAttribute("class","container1")



    var div3=document.querySelector(".div1")
    div3.appendChild(list_item)

    list_item.setAttribute("class","list_item");
    textbox.value=''
    list_item.setAttribute("id",textbox.value)
    /********************************** remove X */
    x.addEventListener("click",function(){
      div3.removeChild(list_item)
      //remove desired item
      ToDo = ToDo.filter(function(item) {
        return item !== values.innerText;
      });
      console.log(ToDo)

      //update js object in localstorage
      localStorage.setItem('ToDo',JSON.stringify(ToDo))
          })
    /***************************************** */
}
}
/****************************************************** */

add_div();

var array_copy=localStorage.getItem("ToDo")

/****************************************************** */

/*extracting values from local storage and making HTML DOM*/
if(array_copy!==null){
var a=JSON.parse(array_copy)
console.log(a)
a.forEach(
function(val){
  console.log(val)
  ToDo.push(val);
  localStorage.setItem("ToDo",JSON.stringify(ToDo))
 //console.log("ok")
   var list_item=document.createElement("li");
   var input_box=document.createElement("input")
   var values=document.createElement("span")
   values.innerHTML=val;
   input_box.setAttribute("type","checkbox")
   /*************** adding check event to checkbox ****/
   input_box.addEventListener("change",function(){
     if(this.checked)
     values.innerHTML='<s>'+val+'</s>';
     else
     values.innerHTML=val;
   });
   /**************************************************/
   list_item.appendChild(values);

  var x=document.createElement("span");
   x.setAttribute("class","close")
   x.innerHTML="x";

       var edit=document.createElement("i");
    edit.setAttribute("class","fa fa-pencil");

  var container1=document.createElement("div");
   container1.appendChild(input_box)
   container1.appendChild(edit)
   container1.appendChild(x)

       //edit pencil
    edit.addEventListener("click",function(){
      values.setAttribute("contenteditable","true")
    })
    /*************/

   list_item.appendChild(container1);
   container1.setAttribute("class","container1")



    var div3=document.querySelector(".div1");
    div3.appendChild(list_item);

    list_item.setAttribute("class","list_item");
        /********************************** remove X */
    x.addEventListener("click",function(){
      div3.removeChild(list_item)
      //remove desired item
      ToDo = ToDo.filter(function(item) {
        return item !== values.innerText;
      });

      //update js object in localstorage
      localStorage.setItem('ToDo',JSON.stringify(ToDo))
          })
  /***************************************** */

})
}
/***************************************************************** */
