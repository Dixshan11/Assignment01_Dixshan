const hh = document.querySelector(".linn");
const bor1 = document.querySelector(".bor-box1");
const bor2 = document.querySelector(".bor-box2");
const bor3 = document.querySelector(".bor-box3");
const bor4 = document.querySelector(".bor-box4");





// for active element border and color in nav bar
bor1.addEventListener("click", (e) => {
   e.preventDefault();
   e.target.classList.add("navborder");
   location.href = "index.html";

}
);


// for active element border and color in nav bar
bor2.addEventListener("click", (e) => {
   e.preventDefault();
   e.target.classList.add("navborder");

   location.href = "add.html";
}
);


// for active element border and color in nav bar
bor3.addEventListener("click", (e) => {
   e.preventDefault();
   e.target.classList.add("navborder");

   location.href = "login.html";
}
);


// for active element border and color in nav bar
bor4.addEventListener("click", (e) => {
   e.preventDefault();
   e.target.classList.add("navborder");

   location.href = "signup.html";
}

);


// $('.bor-box').on('click', function(){
//    $('.bor-box').removeClass('selected');
//    $(this).addClass('selected');
//    location.href = "add.html";
// });





// its used to validate the user when signin

function uservalidation() {

   const message = document.getElementById("p01");
   message.innerHTML = "";
   var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
   var num = /^(?=.*\d)/
   let result = document.getElementById("name").value;


  
   try {
      if (result == "") throw ` <span class="signupResult">username is required<span>`;

      if (num.test(result) || format.test(result)) throw ` <span class="signupResult"> usernname mustbe letter <span>`;
      if (result.length < 5) throw ` <span class="signupResult">username is short<span>`;
      if (result.length > 20) throw ` <span class="signupResult"> is to big<span>`;

   }
   catch (err) {
      message.innerHTML =  err;

   }
 
     
    
  
};


// its used to validate password while signin

function passwordvalidation() {

   const message = document.getElementById("p02");
   message.innerHTML = "";
   let result = document.getElementById("password").value;
   var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;

   try {

      if (result !== "") {
         if (result.length === 8) {
            if (password.value.match(passw)) {

               throw ` <span class="signupResult" style="color:green">Strong</span>`;
          
            }
            else {
               throw ` <span style="color:red">Password must contain one Uppercase One Lowercase One digt<span>`;
            }
         } else {
            throw ` <span class="signupResult">password mustbe 8 characters</span>`;
         }
      }
      else {
         throw ` <span class="signupResult">Password is required<span>`;
      }
   }

   catch (err) {
      message.innerHTML = err;
   }
};



//email validations  here i validate 3 domain gmails like .com .org

function emailvalidation() {

   const message = document.getElementById("p03");
   message.innerHTML = "";
   var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
   const result = document.getElementById("email").value;

   var atposition = result.indexOf("@");
   var dotposition = result.lastIndexOf(".");


   try {

      if (result == "") throw ` <span class="signupResult">email is required<span>`;
      if (format.test(result[0])) throw ` <span class="signupResult">symboles cant be the first<span>`;
      if (atposition < 1) throw ` <span class="signupResult">@ missing<span>`;
      if (dotposition < atposition + 2) throw ` <span class="signupResult">wrong format <span>`;
      if (dotposition + 4 !== result.length) throw ` <span class="signupResult">check the domain <span>`;

      

   }

   catch (err) {
      message.innerHTML = err;
   
    
      
   }

};



// for validate adding tv shows in ad.html

$("#addshowbtn").click(function () {

   var result = $("#addtvname").val();
   var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
   if (result === "") {
      $("#p01").html("please enter show name");
      $("#p01").css('color', 'red');
   }
   else if ($.isNumeric(result[0]) || format.test(result[0])) {
      $("#p01").html("invalid TV Show " + result);
      $("#p01").css('color', 'red');
   }
   else {
      $("#p01").html(result + " has been added");
      $("#p01").css('color', 'green');
   }

   

});





//for link the btnsubcribe to login page

$("#btnsubcribe").click(function (e) {
   e.preventDefault();
   window.location.replace("../login.html");
});


//link the signup page through button in login.html

$("#signupinlogin").click(function (e) {
   e.preventDefault();
   window.location.replace("signup.html");
});





// load the episode in main card
$("document").ready(function () {
   $.ajax({
      url: "shows.json",
      dataType: "json",
      success: function (showsdata) {


         var data = "";

         for (var i = 0; i < showsdata.length; i++) {
            var sortname = showsdata[i]["name"]
            var a = sortname.replace(/\s+/g, '');
           
            data += '<div class="card epic">\
                  <a href="'+ a.toLowerCase() + '.html" class="card-img-top"> <img src="' + showsdata[i]["image"] + '" class="card-img-top epicimg " alt="'+ showsdata[i]["name"] + '"  value="' + i + '"  ></a>\
                  <div class="card-body">\
                     <h5>'+ showsdata[i]["name"] + '</h5>\
                     <Span>'+ showsdata[i]["episode"] + '</Span>\
                  </div>\
               </div> '
         };

         document.getElementById("show").innerHTML = data;
      }
   });
});




//when click search buttion
$(".episodetypebtn").click(function (e) {

   var cvalue = $(this).html();

   $.ajax({
      url: "shows.json",
      dataType: "json",
      success: function (showsdata) {

         var data = "";
         for (var i = 0; i < showsdata.length; i++) {
            if (showsdata[i]["type"] === cvalue) {
               data += '<div class="card epic">\
                     <a href="gameofthrone.html" class="card-img-top"> <img src="' + showsdata[i]["image"] + '" class="card-img-top" alt="..."></a>\
                     <div class="card-body">\
                        <h5>'+ showsdata[i]["name"] + '</h5>\
                        <Span>'+ showsdata[i]["episode"] + '</Span>\
                     </div>\
                  </div> '
            }
         }

         document.getElementById("show").innerHTML = data;
      }
   });
});



//search when click letters  buttion
$(".singleSearch").click(function (e) {

   var cvalue = $(this).html();

   $.ajax({
      url: "shows.json",
      dataType: "json",
      success: function (showsdata) {

         var data = "";
         for (var i = 0; i < showsdata.length; i++) {
         
            if (showsdata[i]["name"][0] === cvalue) {
             
               data += '<div class="card epic">\
                     <a href="gameofthrone.html" class="card-img-top"> <img src="' + showsdata[i]["image"] + '" class="card-img-top" alt="..."></a>\
                     <div class="card-body">\
                        <h5>'+ showsdata[i]["name"] + '</h5>\
                        <Span>'+ showsdata[i]["episode"] + '</Span>\
                     </div>\
                  </div> '
            }
         }

         document.getElementById("show").innerHTML = data;
      }
   });
});


// load all the episode in the div
$("#allepic").click(function (e) {

   $.ajax({
      url: "shows.json",
      dataType: "json",
      success: function (showsdata) {


         var data = "";

         for (var i = 0; i < showsdata.length; i++) {
            var sortname = showsdata[i]["name"]
            var a = sortname.replace(/\s+/g, '');
            data += '<div class="card epic">\
                   <a href="'+ a + '.html" class="card-img-top"> <img src="' + showsdata[i]["image"] + '" class="card-img-top epicimg " alt="..."  value="' + i + '"  ></a>\
                   <div class="card-body">\
                      <h5>'+ showsdata[i]["name"] + '</h5>\
                      <Span>'+ showsdata[i]["episode"] + '</Span>\
                   </div>\
                </div> '
         };

         document.getElementById("show").innerHTML = data;
      }
   });

});



//textbox search function

function searchtxt() {

   $.ajax({
      url: "shows.json",
      dataType: "json",
      success: function (showsdata) {

   var data = "";
 var cvalue = $("#searchtxt").val();

   for (var i = 0; i < showsdata.length; i++) {
      var name = showsdata[i]["name"].replace(/\s+/g, '');
      if (name.toLowerCase().search(cvalue)!==-1) {
         data += '<div class="card epic">\
                     <a href="gameofthrone.html" class="card-img-top"> <img src="' + showsdata[i]["image"] + '" class="card-img-top" alt="..."></a>\
                      <div class="card-body">\
                        <h5>'+ showsdata[i]["name"] + '</h5>\
                        <Span>'+ showsdata[i]["episode"] + '</Span>\
                     </div>\
                  </div> '
      }
   };

 
   document.getElementById("show").innerHTML = data;
  }
   });

};

//clear txtbox  after search
function serchclr(){
  $("#searchtxt").val("");
  
}
   



// for clear textbox value

$("#loginpassword , #loginemail ,#name").click(function (e){
   $("#errormessage").html("");
  


});

$("#email").keyup(function (e){

   $(p03).html("");
 
});

$("#password").keyup(function (e){

   $(p02).html("");
 
});
$("#name").keyup(function (e){

   $(p01).html("");
 
});











// number search 
// $(".singlenumSearch").click(function (e) {

  

//    $.ajax({
//       url: "shows.json",
//       dataType: "json",
//       success: function (showsdata) {

//          var data = "";
//          for (var i = 0; i < showsdata.length; i++) {
         
//             if (showsdata[i]["name"][0] === 1 || showsdata[i]["name"][0] === 2 || showsdata[i]["name"][0] ===3 || showsdata[i]["name"][0] ===4 || showsdata[i]["name"][0] ===5 || showsdata[i]["name"][0] ===6 || showsdata[i]["name"][0] ===7 || showsdata[i]["name"][0] ===8 || showsdata[i]["name"][0] ===9) {
             
//                data += '<div class="card epic">\
//                      <a href="gameofthrone.html" class="card-img-top"> <img src="' + showsdata[i]["image"] + '" class="card-img-top" alt="..."></a>\
//                      <div class="card-body">\
//                         <h5>'+ showsdata[i]["name"] + '</h5>\
//                         <Span>'+ showsdata[i]["episode"] + '</Span>\
//                      </div>\
//                   </div> '
//             }
//          }

//          document.getElementById("show").innerHTML = data;
//       }
//    });
// });
