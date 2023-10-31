var a=document.getElementById("one");
var b=document.getElementById("two");
var c=document.getElementById("three");
var d=document.getElementById("four");
var e=document.getElementById("five");
var f=document.getElementById("six");
var g=document.getElementById("seven");
var h=document.getElementById("eight");
var i=document.getElementById("nine");
var j=document.getElementById("ten");


function mon(){
        a.style.color = "white";
        d.style.color = "white";
        e.style.color = "white";
        b.style.color="transparent";
        g.style.color ="transparent";
        j.style.color="transparent";
        c.style.color = "transparent";
        f.style.color = "transparent";
        h.style.color = "transparent";
        i.style.color = "transparent";
       
} 
function tue(){
b.style.color="white";
g.style.color ="white";
j.style.color="white";
a.style.color = "transparent";
d.style.color = "transparent";
e.style.color = "transparent";
c.style.color = "transparent";
f.style.color = "transparent";
h.style.color = "transparent";
i.style.color = "transparent";
}
function wed(){
 a.style.color="white";
 d.style.color ="white";
i.style.color="white";
 b.style.color = "transparent";
 c.style.color = "transparent";
 e.style.color = "transparent";
 f.style.color = "transparent";
 g.style.color = "transparent";
 h.style.color = "transparent";
 j.style.color = "transparent";
    }
function thu(){
 b.style.color="white";
 f.style.color ="white";
 h.style.color="white";
 a.style.color = "transparent";
 c.style.color = "transparent";
 e.style.color = "transparent";
 g.style.color = "transparent";
 d.style.color = "transparent";
 i.style.color = "transparent";
 j.style.color = "transparent";
    }
function fri(){
 c.style.color="white";
 f.style.color ="white";
j.style.color="white";
a.style.color = "transparent";
b.style.color = "transparent";
d.style.color = "transparent";
e.style.color = "transparent";
g.style.color = "transparent";
h.style.color = "transparent";
i.style.color = "transparent";
            }
            function formDetails() {
        
                var full_name = document.getElementById("nameTag");
                var email = document.getElementById("mailTag");
                var message = document.getElementById("msgTag");
              
                var t = document.getElementById("nameReq");
                var te = document.getElementById("mailReq");
                var tel = document.getElementById("msgReq");
              
                if (full_name.value.length < 3 || !/^[A-Za-z\s]+$/.test(full_name.value)) {
                    t.innerHTML =  "Fill Your Name Properly";
                    full_name.focus()
                    full_name.required = true;
                    t.style.display = "block";
                    full_name.setCustomValidity(" Fill Your Name Properly");
                    return false;
                } else {
                    t.innerHTML = "";
                    t.style.border = "none";
                    t.style.display = "none";
                    full_name.required = false;
                    full_name.setCustomValidity("");
                }
              
                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
                    te.innerHTML = "Fill Your Email Id Properly";
                    email.focus()
                    email.required = true;
                    te.style.display = "block";
                    email.setCustomValidity(" Fill Your Email Id Properly");
                    return false;
                } else {
                    te.innerHTML = "";
                    te.style.border = "none";
                    te.style.display = "none";
                    email.focus()
                    email.required = false;
                    email.setCustomValidity("");
                }
              
                if (message.value.length === 0) {
                    tel.innerHTML = " Fill Your meaasge Properly";
                    message.focus();
                    message.required = true;
                    tel.style.display = "block";
                    message.setCustomValidity(" Fill Your message Properly");
                    return false;
                }
                else {
                    tel.innerHTML = "";
                    tel.style.border = "none";
                    tel.style.display = "none";
                    message.focus();
                    message.required = false;
                    message.setCustomValidity("");
                }
                let inputValueName = document.getElementById("nameTag").value;
                let inputValueMail = document.getElementById("mailTag").value;
              let inputValueMsg = document.getElementById("msgTag").value;
              let mail = "befitgym@gmail.com";
              let subject = "Joining Details";
              let cBody = `Hi I am ${inputValueName} and ${inputValueMail} ,this is my mail id for your further 
              contact. I am pleased to inform you that, ${inputValueMsg}  `;
                let vl= `mailto:${mail}?subject=${subject}&body=${cBody}` ;
                window.location.href = vl;
                return true;
              
              }
             
              function  menulist(){
                var a = document.getElementById("showMenu");
                // console.log(bar.style.display);
                if (a.style.display === "block") {
                  a.style.display = "none";
                } else {
                  a.style.display = "block";
                }
              }
              function closeMenu() {
                var clear = document.getElementById("showMenu");
                if (clear.style.display === "block") {
                  clear.style.display = "none";
                } else {
                  clear.style.display = "block";
                }
              }
              var header = document.getElementById("d-but");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}