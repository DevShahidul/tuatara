(function($){
    $(function(){
        if($('.home-page-content').length){
            $('body').addClass('homepage-body');
        }
        
        $(".navbar-toggler").click(function(){
            $(this).toggleClass("navShown");
        });
        
        
        
        
        $(".quote-text").html(function(){ // Class or id can be use
          var text = $(".quote-text").text().trim().split(" "); // All text convert to array.
          var last = text.pop();  // Select last wrod.
          var first = text.shift(); // Select first word.

          var firstW = first.innerHTML = '<span class="firstWord">' + first + '</span>'; // Make wrapper of first wrod
          var lastW = last.innerHTML = '<span class="lastWord">' + last + '</span>'; // Make wrapper of last wrod.

          return firstW + " " + text.join(" ") + " " + lastW ;
        });
        
        
        if($(".problems-solve-content").length){
            var maxLength = 108;
            $(".problems-solve-content").each(function(){
                var allContents = $(this).html();
                var myStr = $(this).find('p').text();
                
                $(this).parent().find('.problems-solve-popup').html(allContents);
                $(this).parent().find('.problems-solve-popup').find(".popup-triger").text('Close').addClass('close-triger');
                
                if($.trim(myStr).length > maxLength){
                    var newStr = myStr.substring(0, maxLength);
                    var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
                    $(this).find('p').empty().html(newStr);
                    //$(this).append(' <a href="javascript:void(0);" class="read-more">read more...</a>');
                    $(this).find('p').append('<span class="more-text">' + removedStr + '</span>');
                }
                
                $(".popup-triger").click(function(e){
                    e.preventDefault();
                    $('.problems-solve-item').removeClass('popup-shown');
                    $(this).parents('.problems-solve-item').addClass('popup-shown');
                    $(this).parents('.problems-solve-item').find('.problems-solve-popup').find(".popup-triger").removeClass(".popup-triger");
                    $(".close-triger").click(function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        $('.problems-solve-item').removeClass('popup-shown');
                        $(this).parents('.problems-solve-item').removeClass('popup-shown');
                    })
                    //$(this).parent().find(".more-text").contents().unwrap();
                });
            });
            
        }
        
        if($('.problems-solve-item .figure').length){
            $('.problems-solve-item .figure').each(function(){
                var $_this = $(this);                
                $_this.click(function(){
                    $('.problems-solve-item').removeClass('popup-shown');
                    $_this.parents('.problems-solve-item').addClass('popup-shown');
                    $('.close-triger').click(function(e){
                        e.preventDefault();
                        $('.problems-solve-item').removeClass('popup-shown');
                    })
                })
            });
        }
        
        if($('.team-member').length){
            $('.team-member-des-modal').hide();
            $('.team-member').each(function(){
                var $_this = $(this),
                    teamFigure = $_this.find('figure').html(),
                    teamContent = $_this.find('.team-member-info').html();
                $_this.click(function(){
                   $('.team-member-des-modal').slideDown();
                   $('.team-modal-figure').html(teamFigure); 
                   $('.team-modal-content').html(teamContent); 
                    $('.team-member-des-modal .close-triger').click(function(e){
                        e.preventDefault();
                        $('.team-member-des-modal').slideUp();
                    })
                });
                
            })
        }
        
        if($('.faq-item').length){
            $('.question').each(function(){
                var $_this = $(this);
                $_this.click(function(){
                    if($_this.hasClass('active')){
                        $_this.removeClass('active');
                        $_this.parent().find('.ans').slideUp();
                    }
                    else{
                        $('.question').removeClass('active');
                        $_this.addClass('active');
                        $('.ans').slideUp();
                        $_this.parent().find('.ans').slideDown();
                    }
                })
            })
        }
        
        if($( "#datepicker" ).length){
            $( "#datepicker" ).datepicker({
                dayNamesMin: [ "S", "M", "T", "W", "T", "F", "S" ],
                showOtherMonths: true
            });
        }
        
        if($('.select-triger').length){
            $('.select-triger').each(function(){
                var $_this = $(this);
                $_this.click(function(){
                    if($_this.hasClass('active')){
                        $_this.removeClass('active');
                        $_this.parent().find('.select-wrap').slideUp();
                    }else{
                        $_this.addClass('active');
                        $_this.parent().find('.select-wrap').slideDown();
                    }
                })
            });
            
            $('.select-wrap li').each(function(){
                var _this = $(this);
                _this.click(function(){
                    var selectedTex = _this.text();
                    _this.parents('.select-option-wrap').find('.select-triger span').text(selectedTex);
                    _this.parents('.select-option-wrap').find('.select-triger').removeClass('active')
                    _this.parent('.select-wrap').slideUp();
                })
            })
        }
        
    }) // End ready function
})(jQuery);