$('document').ready(function () {


  $( "#range" ).slider({
    range : "max",
    min   : 1,
    max   : 5,
    value : 3,
    slide : function ( event, ui ) {
      $( "#range" ).attr( "value", ui.value );
    }
  });



  function setHeiHeight() {
    $( '.introduction' ).css({ height:$( window ).height() + 'px' });
  }
  setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
  $(window).resize( setHeiHeight ); // обновляем при изменении размеров окна



  var $menu = $("#navigation");
  $(window).scroll(function(){
    if ( $(this).scrollTop() > 800 && $menu.hasClass("is-hidden") ){
      $menu.removeClass("is-hidden").addClass("navigation");
    } else if($(this).scrollTop() <= 800 && $menu.hasClass("navigation")) {
      $menu.removeClass("navigation").addClass("is-hidden");
    }
  }); 



  $('.bell').hover(
    function () {
      $('.popup').removeClass('is-hidden');
    },
    function () {
      $('.popup').addClass('is-hidden');
    }
  );



  var btn = document.getElementById('linkEmail');
  var clipboard = new ClipboardJS(btn);
  clipboard.on('success', function(e) {
      alert("Адрес электронной почты был скопирован!");
  });
  clipboard.on('error', function(e) {
    alert("Адрес электронной почты копировать не удалось, произошла ошибка!");
  });



  var hidden_el = '.dashed-toggle__button:first, ' + 
                  '.dashed-toggle__button:last,  ' + 
                  '.wrapper-total-sum,  ' + 
                  '.wrapper-stages-processes';
  $('.dashed-toggle').click( function () {
    $( hidden_el ).toggleClass('is-hidden');
  });



  $('.module-horizontal-toggle__button').click(function () {
    $(this).toggleClass('is-activated').toggleClass('is-deactivated');
    $(this).siblings().toggleClass('is-activated').toggleClass('is-deactivated');
  });



  $('input[type="radio"').click(function () {
    if ( $(this).attr('id') === 'city' ) {
      $( '.select-city select' ).prop('disabled', false);
      $( '.select-city input' ).val('').prop('disabled', true);
    } else {
      $( '.select-city select' ).prop('disabled', true);
      $( '.select-city input' ).prop('disabled', false);
      $('.select-city select option').prop('selected', function() {
        return this.defaultSelected;
      });
    }
  });

  $('input[type="checkbox"').click(function () {
    var str = $(this).prev().attr('src');
    if ( $(this).prop('checked') ) {
      var newSrc = str.replace('Pas.png', 'Act.png');
      $(this).prev().attr('src', newSrc );
    } else {
      var newSrc = str.replace('Act.png', 'Pas.png');
      $(this).prev().attr('src', newSrc );
    }
    
  });



  $('.control-panel div').click(function () {
    $(this).siblings().removeClass('is-clicked');
    $(this).addClass('is-clicked');
  });



  $('.wrapper-format').click(function () {
    $('.wrapper-format').removeClass('is-clicked');
    $(this).addClass('is-clicked');
  });

 
  $('.call__button').click(function () {
    $('.callback').removeClass('is-hidden');
  });

  $('.decorative-closer').click(function () {
    $('.callback').addClass('is-hidden');
  });
 
















  var
    smallForm = $(".callback form, .about form, .benefits form"),
    bigForm   = $(".big-form"),

    nameValid  = /^[-_A-zА-яёЁ]+(\s+[-_A-zА-яёЁ]+)*$/,
    phoneValid = /^[\-\+\_\(\)0-9]+(\s+[\-\+\_\(\)0-9]+)*$/,
    emailValid = /^\S[\w\d\.\_\-]+@[\w\d\.\_\-]+\.[\w]{2,5}$/i,

    requiredMessage     = "<div class='errorMessage'>ОБЯЗАТЕЛЬНО!</div>",
    reqNameOrPhone      = "<div class='errorMessage'>ТЕЛЕФОН ИЛИ ПОЧТА!</div>",
    invalidNameMessage  = "<div class='errorMessage'>A-zА-я0-9-_</div>",
    invalidPhoneMessage = "<div class='errorMessage'>ЦИФРЫ+-_()</div>",
    invalidEmailMessage = "<div class='errorMessage'>БЕЗ ПРОБЕЛА A-z0-9_.-@</div>"
  ;
 
  function showAlert ( inputName, messageAlert ) {
    inputName.before( messageAlert );
    
    setTimeout( function () {
      $(".errorMessage").remove();
    }, 1500);
  }
  
  smallForm.submit( function() {
    var 
      form  = $( this ),
      name  = form.children( "input[name='name']" ),
      phone = form.children( "input[name='phone']" ),
    
      regexName  = new RegExp( nameValid  ),
      regexPhone = new RegExp( phoneValid ),
      
      valueName  = name.val().replace(/\s+/g,' ').trim(),
      valuePhone = phone.val().replace(/\s+/g,' ').trim()
    ;

    if ( valueName === "" || !regexName.test(valueName) ) {
      if ( valueName === "" ) {
        showAlert( name, requiredMessage );
      } else {
        showAlert( name, invalidNameMessage );
      }
      
      return false;
    }  
    else if ( valuePhone === "" || !regexPhone.test(valuePhone) ) {
      if ( valuePhone === "" ) {
        showAlert( phone, requiredMessage );
      } else {
        showAlert( phone, invalidPhoneMessage );
      }
      
      return false;
    }  
    
    var arr = form.serializeArray();
    console.log( arr[0].name + " : " + arr[0].value );
    console.log( arr[1].name + " : " + arr[1].value );

    // return false;
  });

  
  bigForm.submit( function() {
    var 
      name    = $( "input[name='calculation-name']" ),
      phone   = $( "input[name='calculation-phone-number']" ),
      email   = $( "input[name='email']" ),
      company = $( "input[name='company']" ),

      regexName  = new RegExp( nameValid  ),
      regexPhone = new RegExp( phoneValid ),
      regexEmail = new RegExp( emailValid ),

      valueName  = name.val().replace(/\s+/g, ' ').trim(),
      valuePhone = phone.val().replace(/\s+/g,' ').trim(),
      valueEmail = email.val().replace(/\s+/g,' ').trim()
    ;

    // Если имя пустое или невалидное, то прервать.
    if ( valueName === "" || !regexName.test(valueName) ) {
      // Если имя пустое, сообщить об обязательном заполнении этого пункта.
      if ( valueName === "" ) {
        showAlert( name, requiredMessage );
      } 
      // Если имя непустое, то тогда, сообщить о его невалидности.
      else {
        showAlert( name, invalidNameMessage );
      }
      
      return false;
    }  
    
    // Если телефон и почта пусты, то прервать.
    else if ( valuePhone === ""  &&  valueEmail === "" ) {
      showAlert( phone, reqNameOrPhone );
      return false;
    }  
    
    // Если телефон невалиден, а почта пуста, то прервать.
    else if ( !regexPhone.test(valuePhone) && valueEmail === "" ) {
      showAlert( phone, invalidPhoneMessage );

      return false;
    }
    
    // Если почта невалидна, а телефон пуст, то прервать.
    else if ( !regexEmail.test(valueEmail) && valuePhone === "" ) {
      showAlert( email, invalidEmailMessage );
      
      return false;
    }
    
    // Если телефон валиден, а почта пуста или почта валидна, а телефон пуст, то отправать.
    else if ( (regexPhone.test(valuePhone) && valueEmail === "") || (regexEmail.test(valueEmail) && valuePhone === "") ) {
      extractingBigForm();
      // return true;
    }
    
    // Если почта и телефон валидны, то отправаить.
    else if ( regexEmail.test(valueEmail) && regexPhone.test(valuePhone) ) {
      extractingBigForm();
      // return true;
    }
    
    // Если телефон невалиден, а почта валидна, то прервать.
    else if ( !regexPhone.test(valuePhone) && regexEmail.test(valueEmail) ) {
      showAlert( phone, invalidPhoneMessage );

      return false;
    }
    
    // Если почта невалидна, а телефон валиден, то прервать.
    else if ( !regexEmail.test(valueEmail) && regexPhone.test(valuePhone) ) {
      showAlert( email, invalidEmailMessage );

      return false;
    }

    // Если телефон и почта невалидны, то прервать.
    else if ( !regexPhone.test(valuePhone) && !regexEmail.test(valueEmail) ) {
      showAlert( phone, invalidPhoneMessage );
      showAlert( email, invalidEmailMessage );

      return false;
    }

    return false;
  });

  function extractingBigForm () {
    var arr = $( ".big-form" ).serializeArray();
    var sliderRange = $( "#range" ).attr( "value" );

    for ( var i = 0; i < arr.length; i++ ) {
      console.log( arr[i].name + " : " + arr[i].value );
    }

    console.log( "range : " + sliderRange );
  } 

  
























  $( ".gallery .module-horizontal-toggle__button" ).click( changeFormat );

  $( ".decorative-slider__arrow-right" ).click( changePhoto );
  $( ".decorative-slider__arrow-left" ).click( changePhoto );
  
  $( ".control-panel__alexfitness").click( changeSection );
  $( ".control-panel__redmond").click( changeSection );
  $( ".control-panel__beeline").click( changeSection );

     
  function changeSection () {
    var 
      clickedBtn = $( this ),
      www = clickedBtn.closest( ".second-block" ).siblings().hasClass( "first-block" ),
      dsa = clickedBtn.closest( ".first-block" ).siblings().hasClass( "second-block" ),
      xxx, 
      yyy, 
      iii, 
      slider, 
      oldUrl, 
      arrayUrl, 
      newSection, 
      oldSection,
      defaultImg, 
      arrayToStr, 
      newUrl
    ;

    
    if ( www ) {
      iii = clickedBtn.find( "h5" ).text();
      xxx = clickedBtn.closest( ".second-block" );
      yyy = xxx.siblings( ".first-block" );
      slider =  yyy.find( ".slider" );
    } else {
      iii = clickedBtn.find( "h5" ).text();
      xxx = clickedBtn.closest( ".first-block" );
      yyy = xxx.next( ".second-block" );
      slider = yyy.find( ".slider" );  
    }
    oldUrl = slider.css( "background-image" );
    arrayUrl = oldUrl.split( "/" );  




    newSection = iii.toLowerCase();
    oldSection = arrayUrl.length - 3;
    arrayUrl[ oldSection ] = newSection;



    defaultImg = arrayUrl.length - 1;
    arrayUrl[ defaultImg ] = "1.jpg";
    arrayToStr = arrayUrl.toString();
    newUrl = arrayToStr.replace( /,/g, "/" );
    slider.css( "background-image", newUrl );
  }

  /*
  function op () {
    var 
      clickedBtn = $( this ),
      www = clickedBtn.closest( ".second-block" ).siblings().hasClass( "first-block" ),
      dsa = clickedBtn.closest( ".first-block" ).siblings().hasClass( "second-block" ),
      xxx, 
      yyy, 
      slider, 
      oldUrl, 
      arrayUrl, 
      arrayToStr,
      newUrl
    ;

    iii = clickedBtn.find( "h5" ).text();

    if ( www ) {
      iii = clickedBtn.find( "h5" ).text();
      xxx = clickedBtn.closest( ".second-block" );
      yyy = xxx.siblings( ".first-block" );
      slider =  yyy.find( ".slider" );
    } else {
      iii = clickedBtn.find( "h5" ).text();
      xxx = clickedBtn.closest( ".first-block" );
      yyy = xxx.next( ".second-block" );
      slider = yyy.find( ".slider" );  
    }

    if (  www ) {
      xxx = clickedBtn.closest( ".second-block" );
      yyy = xxx.siblings( ".first-block" );
      slider =  yyy.find( ".slider" );
    } else {
      xxx = clickedBtn.closest( ".first-block" );
      yyy = xxx.next( ".second-block" );
      slider = yyy.find( ".slider" );  
    }

    oldUrl = slider.css( "background-image" );
    arrayUrl = oldUrl.split( "/" );  
    oldUrl = slider.css( "background-image" );
    arrayUrl = oldUrl.split( "/" );  

    defaultImg = arrayUrl.length - 1;    
    defaultImg = arrayUrl.length - 1;
    arrayUrl[ defaultImg ] = "1.jpg";
    arrayUrl[ defaultImg ] = '1.jpg';



    arrayToStr = arrayUrl.toString();
    newUrl = arrayToStr.replace( /,/g, "/" );
    arrayToStr = arrayUrl.toString();
    newUrl = arrayToStr.replace( /,/g, "/" );
    slider.css( "background-image", newUrl );
    slider.css( "background-image", newUrl );
  }  
  */

  function changeFormat () {
    var 
      clickedBtn = $( this ),
      www = clickedBtn.closest( ".second-block" ).siblings().hasClass( "first-block" ),
      dsa = clickedBtn.closest( ".first-block" ).siblings().hasClass( "second-block" ),

      xxx, 
      yyy, 
      slider, 
      oldUrl, 
      arrayUrl, 
      format, 
      defaultImg, 
      arrayToStr, 
      newUrl
    ;

    if (  www ) {
      xxx = clickedBtn.closest( ".second-block" );
      yyy = xxx.siblings( ".first-block" );
      slider =  yyy.find( ".slider" );
    } else {
      xxx = clickedBtn.closest( ".first-block" );
      yyy = xxx.next( ".second-block" );
      slider = yyy.find( ".slider" );  
    }
    oldUrl = slider.css( "background-image" );
    arrayUrl = oldUrl.split( "/" );  



    format = arrayUrl.length - 2;
    if ( arrayUrl[ format ] === "outside" ) {
      arrayUrl[ format ] = "inside";
    } else {
      arrayUrl[ format ] = "outside";
    }



    defaultImg = arrayUrl.length - 1;
    arrayUrl[ defaultImg ] = '1.jpg';
    arrayToStr = arrayUrl.toString();
    newUrl = arrayToStr.replace( /,/g, "/" );
    slider.css( "background-image", newUrl );
  }





















  function changePhoto () {
    var 
      clickedBtn = $( this ),
      slider     = clickedBtn.closest( ".slider" ),
      oldUrl     = slider.css( "background-image" ),

      url    = oldUrl.split( "/" ),
      urlEls = url.slice( -4 ),
      photos = objPhotos,

      findPhotoName, newImg, i
    ;
    
    iterateImgs = function ( arrImgs ) {
      var
        btn      = clickedBtn.attr( "class" ),
        whichBtn = btn === "decorative-slider__arrow-right",
        cleanUp  = /\"|\'|\)/g,
        lastEl   = url.pop(),
        oldImg   = lastEl.replace( cleanUp, "" )
        i
      ;

      for ( i = 0; i < arrImgs.length; i++ ) {
        if ( arrImgs[ i ] === oldImg ) {
          if ( whichBtn ) {
            if ( arrImgs[ i + 1 ] !== undefined ) {
              newImg = arrImgs[ i + 1 ];
            } else { 
              newImg = arrImgs[ i ];
            }
          } else {
            if ( arrImgs[ i - 1 ] !== undefined ) {
              newImg = arrImgs[ i - 1 ];
            } else { 
              newImg = arrImgs[ i ];
            }
          }
        } 
      }
    };
      
    findPhotoName = function ( obj, arrPath, count ) {
      for ( val in obj ) {
        if ( val === arrPath[count] ) {
          if ( Array.isArray(obj[val]) ) {
            iterateImgs( obj[val] );
          } else {
            findPhotoName( obj[val], arrPath, count + 1 );
          }
        }
      }
    };
    findPhotoName( photos, urlEls, 0 );

    var connecton = url + "/" + newImg +'")';
    var newUrl    = connecton.replace( /,/g, "/" );
    slider.css( "background-image", newUrl );
  }

  var objPhotos;

  $.ajax({
    type: 'POST',
    url: '../test.php',
    success: function( data ) {
      objPhotos = JSON.parse( data );
    },
    async: false
  });

});
