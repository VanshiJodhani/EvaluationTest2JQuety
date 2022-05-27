$(document).ready(function() {
 
  //name
  jQuery.validator.addMethod("notspecialchar", function(value, element)   {
    return this.optional(element) || /^[a-z," "]+$/i.test(value);
  }, "Special character not allow"); 
  //phone number
  jQuery.validator.addMethod("phno", function(value, element) {
    return this.optional(element) || /^[6-9]\d{9}$/.test(value);
  }, "Enter only ten digit and it must be start from 6 to 9");
  //email
  jQuery.validator.addMethod("Maill", function(value, element) {
    return this.optional(element) || /^[a-z0-9](\.?[a-z0-9]){3,}@[t][n][t][r][a]\.io$/i.test(value);
  }, "Invalid mail");

  $("#myform").validate({
    rules: {
      fname : {
        required: true,
        notspecialchar: true,
        minlength: 3
      },
      age:{
        required:{
          depends: function(element){
            if(0 == $('#age').val()){
                //Set predefined value to blank.
                $('#age').val('');
            }
            return true;
          }}
      },
      phone : {
        required: true,
        rangelength: [10,10],
        digits: true,
        phno: true,
      },
      e_mail : {
        required: true,
        Maill: true
      },
      male1 : {
        required: true,
      },
      box11:{
        required: true
        }, 
      box21:{
        required: true
        },
      box31:{
        required: true
        },
      box41:{
        required: true
        },
      box51:{
        required: true
        },
      box61:{
        required: true
        },
      box71:{
        required:true
        },     
    },
    
    //gender
    errorPlacement: function(error, element) 
        {
          if ( element.is(":radio") ){
            error.appendTo( element.parents('.gender') );
          }
          else{ 
                error.insertAfter( element );
          }},
        });

     //age trial
    $(function(){age123(); 
      function age123(){
        var options = "<option value=' '>"+ "Please select" +"</option>";
        for(var age = 8 ; age <=25; age++){
          options += "<option value="+age+">"+ age +"</option>";
        }
        $("#age").html(options);
      }});

  //sunday trial
  $(function(){sun(); 
    function sun(){
      var options = "<option value=''>"+ "Please select" +"</option>";
      for(var box11 = 00 ; box11 <=23; box11++){
        options += "<option value="+box11+":00"+">"+ box11+":00" +"</option>";
      }
      $("#box11").html(options);
      $("#box21").html(options);
      $("#box31").html(options);
      $("#box41").html(options);
      $("#box51").html(options);
      $("#box61").html(options);
      $("#box71").html(options);
    }});

/*checkbox*/
$(function() {
  enable_cb();
  $("#box").click(enable_cb);
});
function enable_cb() {
  $(".box").prop("disabled", !this.checked);
  $('.box').prop('checked', false);
  enable_c1();
  enable_c2();
  enable_c3();
  enable_c4();
  enable_c5();
  enable_c6();
  enable_c7();

  $("#box1").prop("ckecked", false);
  $("#box2").prop("ckecked", false);
  $("#box3").prop("ckecked", false);
  $("#box4").prop("ckecked", false);
  $("#box5").prop("ckecked", false);
  $("#box6").prop("ckecked", false);
  $("#box7").prop("ckecked", false);

  $("#box11").prop("disabled", true);
  $("#box21").prop("disabled", true);
  $("#box31").prop("disabled", true);
  $("#box41").prop("disabled", true);
  $("#box51").prop("disabled", true);
  $("#box61").prop("disabled", true);
  $("#box71").prop("disabled", true);

  $("#box11").val("");
  $("#box21").val("");
  $("#box31").val("");
  $("#box41").val("");
  $("#box51").val("");
  $("#box61").val("");
  $("#box71").val("");

  //error hide
  $("#box11-error").hide();
  $("#box11").removeClass("error");

  $("#box21-error").hide();
  $("#box21").removeClass("error");

  $("#box31-error").hide();
  $("#box31").removeClass("error");

  $("#box41-error").hide();
  $("#box41").removeClass("error");

  $("#box51-error").hide();
  $("#box51").removeClass("error");

  $("#box61-error").hide();
  $("#box61").removeClass("error");

  $("#box71-error").hide();
  $("#box71").removeClass("error");
}

/*sunday*/
$(function() {
  enable_c1();
  $("#box1").click(enable_c1);
});
function enable_c1() {
  $("#box11").val("");//id select sunday
  $(".box1").prop("disabled", !this.checked);
  $("#box11-error").hide();//romove error
  $("#box11").removeClass("error");
}

/*monday*/
$(function() {
  enable_c2();
  $("#box2").click(enable_c2);
});
function enable_c2() {
  $("#box21").val("");
  $(".box2").prop("disabled", !this.checked);
  $("#box21-error").hide();
  $("#box21").removeClass("error");
}

/*tuesday*/
$(function() {
  enable_c3();
  $("#box3").click(enable_c3);
});
function enable_c3() {
  $("#box31").val("");
  $(".box3").prop("disabled", !this.checked);
  $("#box31-error").hide();
  $("#box31").removeClass("error");
}

/*wednesday*/
$(function() {
  enable_c4();
  $("#box4").click(enable_c4);
});
function enable_c4() {
  $("#box41").val("");
  $(".box4").prop("disabled", !this.checked);
  $("#box41-error").hide();
  $("#box41").removeClass("error");
}

/*thursday*/
$(function() {
  enable_c5();
  $("#box5").click(enable_c5);
});
function enable_c5() {
  $("#box51").val("");
  $(".box5").prop("disabled", !this.checked);
  $("#box51-error").hide();
  $("#box51").removeClass("error");
}

/*friday*/
$(function() {
  enable_c6();
  $("#box6").click(enable_c6);
});
function enable_c6() {
  $("#box61").val("");
  $(".box6").prop("disabled", !this.checked);
  $("#box61-error").hide();
  $("#box61").removeClass("error");
}

/*saturday*/
$(function() {
  enable_c7();
  $("#box7").click(enable_c7);
});
function enable_c7() {
  $("#box71").val("");
  $(".box7").prop("disabled", !this.checked);
  $("#box71-error").hide();
  $("#box71").removeClass("error");
}


//remove
$(document).on('click','.remCF1',function(){
  $(this).parent().parent().remove();
  $('#myTable tbody tr').each(function(i){            
   $($(this).find('td')[0]).html(i+1);          
  });
});

//update
$(document).on('click','.remCF1',function(){
  $(this).parent().parent().update();
  $('#myTable tbody tr').each(function(i){            
   $($(this).find('td')[0]).html(i);          
  });
});


/*table*/
$("#result1").html(localStorage.getItem("textvalue1"));//name
$("#result2").html(localStorage.getItem("textvalue2"));//age
$("#result3").html(localStorage.getItem("textvalue3"));//phone
$("#result4").html(localStorage.getItem("textvalue4"));//email
$("#result5").html(localStorage.getItem("textvalue5"));//gender
$("#result6").html(localStorage.getItem("textvalue6"));//confi
$("#result7").html(localStorage.getItem("textvalue7"));//sunday
$("#result8").html(localStorage.getItem("textvalue8"));//monday
$("#result9").html(localStorage.getItem("textvalue9"));//tuesday
$("#result10").html(localStorage.getItem("textvalue10"));//wednesday
$("#result11").html(localStorage.getItem("textvalue11"));//thursday
$("#result12").html(localStorage.getItem("textvalue12"));//friday
$("#result13").html(localStorage.getItem("textvalue13"));//saturday

});

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function passvalues()
{
  //name
  var firstname = document.getElementById("fname").value;
  localStorage.setItem("textvalue1",firstname);

  //age
  var agee = document.getElementById("age").value;
  localStorage.setItem("textvalue2",agee);
  
  //phone
  var phone_no = document.getElementById("phone").value;
  localStorage.setItem("textvalue3",phone_no);

  //e_mail
  var e__mail = document.getElementById("e_mail").value;
  localStorage.setItem("textvalue4",e__mail);

  //gender
  var ml=$('input[type="radio"][name = "male01"]:checked').val();
  localStorage.setItem("textvalue5",ml);

  //confi
  var confi=$('input[type="checkbox"][name = "box"]:checked').val();
  localStorage.setItem("textvalue6",confi);

  //sunday
  var day1 = document.getElementById("box11").value;
  localStorage.setItem("textvalue7",day1);

  //monday
  var day2 = document.getElementById("box21").value;
  localStorage.setItem("textvalue8",day2);

  //tuesday
  var day3 = document.getElementById("box31").value;
  localStorage.setItem("textvalue9",day3);

  //wednesday
  var day4 = document.getElementById("box41").value;
  localStorage.setItem("textvalue10",day4);

  //thursday
  var day5 = document.getElementById("box51").value;
  localStorage.setItem("textvalue11",day5);

  //friday
  var day6 = document.getElementById("box61").value;
  localStorage.setItem("textvalue12",day6);

   //saturday
   var day7 = document.getElementById("box71").value;
   localStorage.setItem("textvalue13",day7);
}
