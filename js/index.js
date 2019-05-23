

//客服专区的JS代码

// 登陆框的JS代码
$(function () {
   $("#lanDing").click(function () {
      $('.login-box').show();
   })
})
$(function () {
   $('.top-blue').children('a').click(function () {
      $('.login-box').hide();
   })
})

$('.top-blue').children('a').mouseenter(function () {
   $(this).css({
      'transform': 'rotate(90deg)',
      "transition": "all 1s",
      "transform-origin": "center"
   })
}).mouseleave(function () {
   $(this).css({
      'transform': 'rotate(-90deg)',
      "transition": "all 1s",
      "transform-origin": "center"
   })
})

$(function () {
   $('#go-email-2').click(function () {

      $(this).addClass('login-hover').siblings('#go-email-1').removeClass('login-hover');
      $(this).parent().siblings('#mobile-box-1').show();
      $(this).parent().siblings('#email-box').hide();
   })

   $('#go-email-1').click(function () {
      $(this).addClass('login-hover').siblings('#go-email-2').removeClass('login-hover');
      $(this).parent().siblings('#email-box').show();
      $(this).parent().siblings('#mobile-box-1').hide();
   })

})


$(function () {
   $('#footerErweima').click(function () {
      $(this).parent().parent().parent().siblings('#diannao-big-one').show();
      $(this).parent().parent().parent().hide();
   })

})
$(function () {
   $('#footer-diannao-three').click(function () {
      $(this).parent().parent().parent().siblings('#diannao-big-one').show();
      $(this).parent().parent().parent().hide();
   })

})
$(function () {
   $('#footer-erweima-four').click(function () {
      $(this).parent('#diannao-big-one').siblings('.erweima-big').show();
      $(this).parent('#diannao-big-one').hide();
   })
})




// 邮箱验证码
$(function () {
   $('#dologin').click(function () {
      var value = $('#input-email').val();

      var value2 = $("#input-password").val();


      if (value != "") {
         var reg2 = /^[a-zA-Z0-9_-]+$/;

         var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;

         if (!reg.test(value)) {
            $(this).parent().siblings('#cuowude').show();
            
         }
         if (!reg2.test(value2) || value2.length < 6) {
            $(this).parent().siblings('#cuowude').show(); 
         }

         if(reg.test(value)&&reg2.test(value2) == true) {
            $(this).parent().parent().parent().parent().parent().hide();
            $('.landing').text('您好，已登录');
        
         }
      }


      $('[type="text"]').val("");
      $('[type="password"]').val("");
   })
})

$(function () {
   $('#input-email').focus(function () {
      if ($('[type="text"]').val("")) {
         $(this).parent().siblings('#cuowude').hide();
      }

   })
   $('#input-password').focus(function () {
      if ($('[type="password"]').val("")) {
         $(this).parent().siblings('#cuowude').hide();
      }
   })
})

// 手机验证码
$(function () {

   $('#dologin-008').click(function () {

      var reg3 = /^1[34578]\d{9}$/;
     
      if (!reg3.test($('#input-03')[0].value)) {
         $(this).parent().siblings('#cuowude-001').show();
         return false;
      }
      if(reg3.test($('#input-03')[0].value) == true) {
         $(this).parent().parent().parent().parent().parent().hide();
         $('.landing').text('您好，已登录');
     
      }
   })


   $('#input-03').focus(function () {
      if ($('#input-03 [type="text"]').val("")) {
         $(this).parent().siblings('#cuowude-001').hide();
      }
   })

})




// 短信验证码
// $(function () {
//    // var value4 = $('#input-06').val();


//    console.log( $('#input-06').val());
   
   
//    $('#dologin-008').click(function () {
      
//          var reg4 = /^[0-9]{6}$/;
//          console.log(reg4.test($('#input-06')[0].value));
//          if (!reg4.test($('#input-06')[0].value)) {
//              $(this).parent().siblings('#cuowude-002').show();
//             return false;
//          }
      
//    })

// })
// $(function () {
//    $('#input-06').focus(function () {
//       if ($('#input-06 [type="text"]').val("")) {
//          $(this).parent().siblings('#cuowude-002').hide();
//       }
//    })
// })


// 主体内容的JS代码
$(function () {
   $('#qslist>li>p').click(function () {
      if ($(this).next(".qs-solution").css("display") !== "block") {
         $(this).next(".qs-solution").show().parent().siblings().children(".qs-solution").hide();
      } else {
         $(this).next(".qs-solution").hide();
      }

   })
   // 标题的鼠标移入事件
   $('#qslist>li>p').mouseenter(function () {
      $(this).css('cursor', 'pointer').css('color','red');
    
   }).mouseleave(function(){
      $(this).css('color','#666666');
   })

})


$('.img-001').on('mouseenter',function(){
   $(this).stop().animate({
      width:130,
      height:130
   },300)
}).on('mouseleave',function(){
  $(this).stop().animate({
     width:110,
     height:110
  },300)
})