        $(document).ready(function(){
                $('img').bind('contextmenu', function(e){
                    return false;
                }); 
                $( ".eventicon" ).click(function() {
                    $(".eventicon").css('display','none');
                    $(".date").css('display','none');
                    $(".eventiconback").css('display','block'); 
                    $(".event").css('display','block'); 
                    $(".eventex").css('display','block'); 
                });
                $( ".eventiconback" ).click(function() {
                    $(".eventicon").css('display','block');
                    $(".date").css('display','block');
                    $(".eventiconback").css('display','none'); 
                    $(".event").css('display','none'); 
                    $(".eventex").css('display','none'); 
                });
                $( ".diaryicon1" ).click(function() {
                    $(".line1").css('display','none');
                    $(".line2").css('display','none');
                    $(".line3").css('display','block');
                    $(".line4").css('display','block'); 
                    $(".diary").css('display','block'); 
                    $(".bg").css('display','block'); 
                    $(".blanktext").css('display','block'); 
                    $(".title").css('display','block'); 
                    $(".text").css('display','block');
                });
                $( ".diaryicon2" ).click(function() {
                    $(".line1").css('display','block');
                    $(".line2").css('display','block');
                    $(".line3").css('display','none');
                    $(".line4").css('display','none'); 
                    $(".diary").css('display','none'); 
                    $(".bg").css('display','none'); 
                    $(".blanktext").css('display','none'); 
                    $(".title").css('display','none'); 
                    $(".text").css('display','none');
                });
                $( ".rightd1p1" ).click(function() {
                    $(".leftd1p1").css('display','none');
                    $(".rightd1p1").css('display','none');
                    $(".leftd1p2").css('display','block');
                    $(".rightd1p2").css('display','block');
                    $(".line1").css('display','block');
                    $(".line2").css('display','block');
                    $(".line3").css('display','none');
                    $(".line4").css('display','none'); 
                    $(".diary").css('display','none'); 
                    $(".bg").css('display','none'); 
                    $(".blanktext").css('display','none'); 
                    $(".title").css('display','none'); 
                    $(".text").css('display','none');
                });
                });
