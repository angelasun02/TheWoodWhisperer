        $(document).ready(function(){
                $('img').bind('contextmenu', function(e){
                    return false;
                }); 

                $( ".Aclick" ).click(function() {
                    $(".date").css('display','block');
                    $(".eventicon").css('display','block');
                    $(".diaryicon1").css('display','block');
                    $(".A").css('display','none');  
                    $(".Aclick").css('display','none'); 
                    $(".A2").css('display','block'); 
                    $(".leftA2").css('display','block'); 
                    $(".rightA2").css('display','block'); 
                    $(".day0header").css('display','block');
                });
                $( ".leftA2" ).click(function() {
                    $(".A2").css('display','none'); 
                    $(".leftA2").css('display','none'); 
                    $(".rightA2").css('display','none'); 
                    $(".A").css('display','block');   
                    $(".Aclick").css('display','block'); 
                    $(".date").css('display','none');
                    $(".eventicon").css('display','none');
                    $(".diaryicon1").css('display','none');
                    $(".day0header").css('display','none');
                });
                $( ".rightA2" ).click(function() {
                    $(".A2").css('display','none'); 
                    $(".leftA2").css('display','none'); 
                    $(".rightA2").css('display','none');  
                    $(".A3").css('display','block');  
                    $(".leftA3").css('display','block');
                    $(".rightA3").css('display','block');
                    $(".day0header").css('display','none');
                    $(".day1header").css('display','block');
                });
                $( ".leftA3" ).click(function() {
                    $(".A3").css('display','none');
                    $(".leftA3").css('display','none');
                    $(".rightA3").css('display','none');
                    $(".A2").css('display','block'); 
                    $(".leftA2").css('display','block'); 
                    $(".rightA2").css('display','block'); 
                });
                $( ".rightA3" ).click(function() {
                    $(".A3").css('display','none');
                    $(".leftA3").css('display','none');
                    $(".rightA3").css('display','none');
                    $(".A4").css('display','block'); 
                    $(".leftA4").css('display','block'); 
                    $(".rightA4").css('display','block'); 
                });
                $( ".leftA4" ).click(function() {
                    $(".A3").css('display','block');
                    $(".leftA3").css('display','block');
                    $(".rightA3").css('display','block');
                    $(".A4").css('display','none'); 
                    $(".leftA4").css('display','none'); 
                    $(".rightA4").css('display','none'); 
                });
                $( ".rightA4" ).click(function() {
                    $(".A4").css('display','none'); 
                    $(".leftA4").css('display','none'); 
                    $(".rightA4").css('display','none'); 
                    $(".A5").css('display','block');
                    $(".leftA5").css('display','block');
                    $(".rightA5").css('display','block');
                });
                $( ".leftA5" ).click(function() {
                    $(".A4").css('display','block'); 
                    $(".leftA4").css('display','block'); 
                    $(".rightA4").css('display','block'); 
                    $(".A5").css('display','none');
                    $(".leftA5").css('display','none');
                    $(".rightA5").css('display','none');
                });
                $( ".rightA5" ).click(function() {
                    $(".A5").css('display','none');
                    $(".leftA5").css('display','none');
                    $(".rightA5").css('display','none');
                    $(".A6").css('display','block'); 
                    $(".leftA6").css('display','block'); 
                    $(".rightA6").css('display','block'); 
                });
                $( ".leftA6" ).click(function() {
                    $(".A6").css('display','none');
                    $(".leftA6").css('display','none');
                    $(".rightA6").css('display','none');
                    $(".A5").css('display','block');
                    $(".leftA5").css('display','block');
                    $(".rightA5").css('display','block');
                });
                $( ".rightA6" ).click(function() {
                    $(".A6").css('display','none');
                    $(".leftA6").css('display','none');
                    $(".rightA6").css('display','none');
                    $(".A7").css('display','block'); 
                    $(".leftA7").css('display','block');
                    $(".rightA7").css('display','block'); 
                });
                $( ".leftA7" ).click(function() {
                    $(".A7").css('display','none');
                    $(".leftA7").css('display','none');
                    $(".rightA7").css('display','none');
                    $(".A6").css('display','block');
                    $(".leftA6").css('display','block');
                    $(".rightA6").css('display','block');
                });
                $( ".rightA7" ).click(function() {
                    $(".A7").css('display','none');
                    $(".leftA7").css('display','none');
                    $(".rightA7").css('display','none');
                    $(".A8").css('display','block'); 
                    $(".leftA8").css('display','block');
                    $(".rightA8").css('display','block'); 
                });
                $( ".leftA8" ).click(function() {
                    $(".A8").css('display','none');
                    $(".leftA8").css('display','none');
                    $(".rightA8").css('display','none');
                    $(".A7").css('display','block');
                    $(".leftA7").css('display','block');
                    $(".rightA7").css('display','block');
                });
                $( ".rightA8" ).click(function() {
                    $(".A8").css('display','none');
                    $(".leftA8").css('display','none');
                    $(".rightA8").css('display','none');
                    $(".A9").css('display','block'); 
                    $(".leftA9").css('display','block');
                    $(".rightA9").css('display','block'); 
                });
                $( ".leftA9" ).click(function() {
                    $(".A9").css('display','none');
                    $(".leftA9").css('display','none');
                    $(".rightA9").css('display','none');
                    $(".A8").css('display','block');
                    $(".leftA8").css('display','block');
                    $(".rightA8").css('display','block');
                });
                $( ".rightA9" ).click(function() {
                    $(".A9").css('display','none');
                    $(".leftA9").css('display','none');
                    $(".rightA9").css('display','none');
                    $(".A10").css('display','block'); 
                    $(".leftA10").css('display','block');
                    $(".rightA10").css('display','block'); 
                });
                $( ".leftA10" ).click(function() {
                    $(".A10").css('display','none');
                    $(".leftA10").css('display','none');
                    $(".rightA10").css('display','none');
                    $(".A9").css('display','block');
                    $(".leftA9").css('display','block');
                    $(".rightA9").css('display','block');
                });
                $( ".rightA10" ).click(function() {
                    $(".A10").css('display','none');
                    $(".leftA10").css('display','none');
                    $(".rightA10").css('display','none');
                    $(".A11").css('display','block'); 
                    $(".leftA11").css('display','block');
                    $(".rightA11").css('display','block'); 
                });
                $( ".leftA11" ).click(function() {
                    $(".A11").css('display','none');
                    $(".leftA11").css('display','none');
                    $(".rightA11").css('display','none');
                    $(".A10").css('display','block');
                    $(".leftA10").css('display','block');
                    $(".rightA10").css('display','block');
                });
                $( ".rightA11" ).click(function() {
                    $(".A11").css('display','none');
                    $(".leftA11").css('display','none');
                    $(".rightA11").css('display','none');
                    $(".A12").css('display','block'); 
                    $(".leftA12").css('display','block');
                    $(".rightA12").css('display','block'); 
                });
                $( ".leftA12" ).click(function() {
                    $(".A12").css('display','none');
                    $(".leftA12").css('display','none');
                    $(".rightA12").css('display','none');
                    $(".A11").css('display','block');
                    $(".leftA11").css('display','block');
                    $(".rightA11").css('display','block');
                });
                $( ".rightA12" ).click(function() {
                    $(".A12").css('display','none');
                    $(".leftA12").css('display','none');
                    $(".rightA12").css('display','none');
                    $(".A13").css('display','block'); 
                    $(".leftA13").css('display','block');
                    $(".rightA13").css('display','block'); 
                });
                $( ".leftA13" ).click(function() {
                    $(".A13").css('display','none');
                    $(".leftA13").css('display','none');
                    $(".rightA13").css('display','none');
                    $(".A12").css('display','block');
                    $(".leftA12").css('display','block');
                    $(".rightA12").css('display','block');
                });
                $( ".rightA13" ).click(function() {
                    $(".A13").css('display','none');
                    $(".leftA13").css('display','none');
                    $(".rightA13").css('display','none');
                    $(".A14").css('display','block'); 
                    $(".leftA14").css('display','block');
                    $(".rightA14").css('display','block'); 
                });
                $( ".leftA14" ).click(function() {
                    $(".A14").css('display','none');
                    $(".leftA14").css('display','none');
                    $(".rightA14").css('display','none');
                    $(".A13").css('display','block');
                    $(".leftA13").css('display','block');
                    $(".rightA13").css('display','block');
                });
                $( ".rightA14" ).click(function() {
                    $(".A14").css('display','none');
                    $(".leftA14").css('display','none');
                    $(".rightA14").css('display','none');
                    $(".A15").css('display','block'); 
                    $(".leftA15").css('display','block');
                    $(".rightA15").css('display','block'); 
                });
                $( ".leftA15" ).click(function() {
                    $(".A15").css('display','none');
                    $(".leftA15").css('display','none');
                    $(".rightA15").css('display','none');
                    $(".A14").css('display','block');
                    $(".leftA14").css('display','block');
                    $(".rightA14").css('display','block');
                });
                $( ".rightA15" ).click(function() {
                    $(".A15").css('display','none');
                    $(".leftA15").css('display','none');
                    $(".rightA15").css('display','none');
                    $(".A16").css('display','block'); 
                    $(".leftA16").css('display','block');
                    $(".rightA16").css('display','block'); 
                });
                $( ".leftA16" ).click(function() {
                    $(".A16").css('display','none');
                    $(".leftA16").css('display','none');
                    $(".rightA16").css('display','none');
                    $(".A15").css('display','block');
                    $(".leftA15").css('display','block');
                    $(".rightA15").css('display','block');
                });
                $( ".rightA16" ).click(function() {
                    $(".A16").css('display','none'); 
                    $(".leftA16").css('display','none');
                    $(".rightA16").css('display','none'); 
                    $(".A17").css('display','block');
                    $(".leftA17").css('display','block');
                    $(".rightA17").css('display','block');
                });
                $( ".leftA17" ).click(function() {
                    $(".A17").css('display','none');
                    $(".leftA17").css('display','none');
                    $(".rightA17").css('display','none');
                    $(".A16").css('display','block'); 
                    $(".leftA16").css('display','block');
                    $(".rightA16").css('display','block'); 
                });
                $( ".rightA17" ).click(function() {
                    $(".A17").css('display','none');
                    $(".leftA17").css('display','none');
                    $(".rightA17").css('display','none');
                    $(".A18").css('display','block'); 
                    $(".leftA18").css('display','block');
                    $(".rightA18").css('display','block'); 
                });
                $( ".leftA18" ).click(function() {
                    $(".A18").css('display','none');
                    $(".leftA18").css('display','none');
                    $(".rightA18").css('display','none');
                    $(".A17").css('display','block');
                    $(".leftA17").css('display','block');
                    $(".rightA17").css('display','block');
                });
                $( ".rightA18" ).click(function() {
                    $(".A18").css('display','none');
                    $(".leftA18").css('display','none');
                    $(".rightA18").css('display','none');
                    $(".A19").css('display','block'); 
                    $(".leftA19").css('display','block');
                    $(".rightA19").css('display','block'); 
                });
                $( ".leftA19" ).click(function() {
                    $(".A19").css('display','none');
                    $(".leftA19").css('display','none');
                    $(".rightA19").css('display','none');
                    $(".A18").css('display','block');
                    $(".leftA18").css('display','block');
                    $(".rightA18").css('display','block');
                });
                $( ".rightA19" ).click(function() {
                    $(".A19").css('display','none');
                    $(".leftA19").css('display','none');
                    $(".rightA19").css('display','none');
                    $(".A20").css('display','block'); 
                    $(".leftA20").css('display','block');
                    $(".rightA20").css('display','block'); 
                });
                $( ".leftA20" ).click(function() {
                    $(".A20").css('display','none');
                    $(".leftA20").css('display','none');
                    $(".rightA20").css('display','none');
                    $(".A19").css('display','block');
                    $(".leftA19").css('display','block');
                    $(".rightA19").css('display','block');
                });
                $( ".rightA20" ).click(function() {
                    $(".A20").css('display','none');
                    $(".leftA20").css('display','none');
                    $(".rightA20").css('display','none');
                    $(".A21").css('display','block'); 
                    $(".leftA21").css('display','block');
                    $(".rightA21").css('display','block'); 
                });
                $( ".leftA21" ).click(function() {
                    $(".A21").css('display','none');
                    $(".leftA21").css('display','none');
                    $(".rightA21").css('display','none');
                    $(".A20").css('display','block'); 
                    $(".leftA20").css('display','block');
                    $(".rightA20").css('display','block'); 
                });
                $( ".rightA21" ).click(function() {
                    $(".A21").css('display','none');
                    $(".leftA21").css('display','none');
                    $(".rightA21").css('display','none');
                    $(".A22").css('display','block'); 
                    $(".leftA22").css('display','block');
                    $(".rightA22").css('display','block'); 
                });
                $( ".leftA22" ).click(function() {
                    $(".A22").css('display','none');
                    $(".leftA22").css('display','none');
                    $(".rightA22").css('display','none');
                    $(".A21").css('display','block'); 
                    $(".leftA21").css('display','block');
                    $(".rightA21").css('display','block'); 
                });
                $( ".rightA22" ).click(function() {
                    $(".A22").css('display','none');
                    $(".leftA22").css('display','none');
                    $(".rightA22").css('display','none');
                    $(".A23").css('display','block'); 
                    $(".leftA23").css('display','block');
                    $(".rightA23").css('display','block'); 
                });
                $( ".leftA23" ).click(function() {
                    $(".A23").css('display','none');
                    $(".leftA23").css('display','none');
                    $(".rightA23").css('display','none');
                    $(".A22").css('display','block'); 
                    $(".leftA22").css('display','block');
                    $(".rightA22").css('display','block'); 
                });
                $( ".rightA23" ).click(function() {
                    $(".A23").css('display','none');
                    $(".leftA23").css('display','none');
                    $(".rightA23").css('display','none');
                    $(".B1").css('display','block'); 
                    $(".leftB1").css('display','block');
                    $(".rightB1").css('display','block'); 
                    $(".day1header").css('display','none');
                    $(".day2header").css('display','block');
                });

                $( ".leftB1" ).click(function() {
                    $(".A23").css('display','block'); 
                    $(".leftA23").css('display','block');
                    $(".rightA23").css('display','block'); 
                    $(".B1").css('display','none'); 
                    $(".leftB1").css('display','none');
                    $(".rightB1").css('display','none'); 
                    $(".day1header").css('display','block');
                    $(".day2header").css('display','none');
                });
                $( ".rightB1" ).click(function() {
                    $(".B1").css('display','none'); 
                    $(".leftB1").css('display','none');
                    $(".rightB1").css('display','none'); 
                    $(".B2").css('display','block'); 
                    $(".leftB2").css('display','block');
                });
                $( ".leftB2" ).click(function() {
                    $(".B1").css('display','block'); 
                    $(".leftB1").css('display','block');
                    $(".rightB1").css('display','block'); 
                    $(".B2").css('display','none'); 
                    $(".leftB2").css('display','none');
                });


                $( ".Day2" ).click(function() {
                    $(".B2").css('display','block'); 
                    $(".leftB2").css('display','block');
                    $(".day2header").css('display','block');
                });

                $( ".Day1" ).click(function() {
                    $(".A3").css('display','block'); 
                    $(".leftA3").css('display','block');
                    $(".rightA3").css('display','block'); 
                    $(".B1").css('display','none'); 
                    $(".leftB1").css('display','none');
                    $(".rightB1").css('display','none'); 
                    $(".day1header").css('display','block');
                    $(".day2header").css('display','none');
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
            
            

                });
