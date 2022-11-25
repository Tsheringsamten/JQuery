$(document).ready(function(){
    $("#fillup").click(function(){
        $("#cover1").slideDown(3000);
    });
});
$(document).ready(function(){
    $("#win").click(function(){
      $("#www").toggle(1000);
    });
  });
$(document).ready(function(){
    $("#hide").click(function(){
      $("#mmm").hide(1000);
    });
    $("#show").click(function(){
      $("#mmm").show();
    });
  });
  $(document).ready(function(){
    $("#hhh").click(function(){
      $("#nnn").hide();
    });
    $("#sss").click(function(){
      $("#nnn").show();
    });
  });
  $(document).ready(function(){
    $("p").dblclick(function(){
      $(this).hide();
    });
  });
$(document).ready(function(){
    $("#coding").mouseenter(function(){
    alert("Coding: Common programming languages include HTML, PHP, cascading style sheets, and JavaScript for front-end design. Consider learning Python, Java, or Ruby if you want to do back-end development.")
    });   
});
$(document).ready(function(){
    $("#rd").mouseup(function() {
        alert("Responsive design: People use a variety of devices to view websites. Developers should be able to create sites that look as good on smartphones and tablets as they do on computer screens.")
    });
});
$(document).ready(function(){
    $("#seo").mouseleave(function() {
        alert("Technical SEO: Many factors of website design can affect the site’s search engine ranking. Understanding how search engines rank sites is useful in a developer’s work.")
    });
});
$(document).ready(function(){
    $("#vc").mousedown(function(){
        alert("Version control: This lets you track and control changes to the source code without starting over from the beginning each time you run into a problem.")
    });
});
$(document).ready(function(){
    $("#vd").hover(function(){
        alert("Visual design: Understanding basic design principles, such as how to use white space, choose fonts, and incorporate images could boost your marketability.")
    });
});
$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "blue");
    });
    $("input").blur(function(){
        $(this).css("background-color", "red");
    });
});
$(document).ready(function(){
    $("#but").click(function(){
        $("#dd1").fadeOut(1000);
    });
});
$(document).ready(function(){
    $("#but2").click(function(){
        $("#dd2").fadeToggle("slow");
    });
});
$(document).ready(function(){
    $("#but3").click(function(){
        $("#dd3").fadeIn(2000);
    });
});
$(document).ready(function(){
    $("#but4").click(function(){
        $("#dd3").fadeTo("slow",0.15);
    });
});
$(document).ready(function(){
    $("#ten").click(function(){
        $("#tin").css("background-color" ,"red").slideDown(3000);
    });
});
$(document).ready(function(){
    $("#men").click(function(){
        $("#wen").slideUp("slow");
    });
});
$(document).ready(function(){
    $("#aa1").click(function(){
        $("#dd4").animate({
            left: '35%',
            opacity: '1.5',
            height: '200px',
            width: '200px'
        });
    });
});
$(document).ready(function(){
    $("#aa2").click(function(){
      $("#dd4").animate({
        height: 'toggle'
      });
    });
  });
  $(document).ready(function(){
    $("#aa3").click(function(){
      var div = $("#dd4");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
  });
  $(document).ready(function(){
    $("#scarlet").click(function(){
      $("#violet").toggle(6000);
    });
    $("#stop").click(function(){
      $("#violet").stop();
    });
  });
  $(document).ready(function(){
    $("#send").click(function(){
      alert("Value: " + $("#comment").val());
    });
  });
  $(document).ready(function(){
    $("#link").click(function(){
      alert($("#fin").attr("href"));
    });
  });
  $(document).ready(function(){
    $("#his").click(function(){
      $("#text1").text("History break: How did John build jQuery? Back in 2006, John Resig was a web developer working on his own projects. He was frustrated with how hard it was to write cross-browser JavaScript, and decided to write his own JS library to fix the problem for him: jQuery.");
    });
    $("#to").click(function(){
      $("#text2").html("jQuery is a JavaScript library created to make it easier and simpler to write JavaScript and HTML.");
    });
    $("#ry").click(function(){
      $("#text3").val("January 2006");
    });
  });
  $(document).ready(function(){
    $("#pre").click(function(){
      $("ol").prepend("<li>In 2019, jQuery was used on 80% of the top 1 million websites (according to BuiltWith), and 74.1% of the top 10 million (per W3Techs).</li>");
    });
    $("#app").click(function(){
      $("ol").append("<li>As of Apr 2021, jQuery is used by 77.8% of the top 10 million websites (according to W3Techs)</li>");
    });
  });
  $(document).ready(function(){
    $("#clear").click(function(){
      $(".king").remove();
    });
  });
  $(document).ready(function(){
    $("#classes").click(function(){
      $("#reed").addClass("important");
    });
  });
  $(document).ready(function(){
    $("#summit").click(function(){
        alert("")
    })
  })





