$( document ).ready(function() {
  console.log( "ready!" );

  // random color
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var colorR = '#';
    for (var i = 0; i < 6; i++) {
      colorR += letters[Math.floor(Math.random() * 16)];
    }
    return colorR;
  }

  function paint () {
    // the circles
    function circles() {
      // random shape size and position
      var randPos1 = Math.floor(Math.random() * 300) - 100;
      var randPos2 = Math.floor(Math.random() * 300) - 100;
      var randSize = Math.floor(Math.random() * 150) + 1;

      // random opacity
      var randOpacity = Math.round(Math.random() * 100) / 100;

      // random color
      var randColor = getRandomColor();

      (function() {
        $(document).ready(function() {
            drawCircle(randPos1,randPos2,randColor,randOpacity);
        });
      })();

      function SVG(tag) {
          return document.createElementNS('http://www.w3.org/2000/svg', tag);
      }

      var drawCircle = function(x,y,color,opacity) {
        var $svg = $("#s");
        $(SVG('circle'))
          .attr('cx', x)
          .attr('cy', y)
          .attr('r', randSize)
          .attr('fill', color)
          .attr('opacity', randOpacity)
          .appendTo($svg);
      };
    }
    var circleTrue = Math.random();
    while (circleTrue >= 0.5) {
        circles();
        circleTrue = Math.random();
    }
    // end circles

    // the rectangles
    function rect() {
      // random shape size and position
      var randPos1 = Math.floor(Math.random() * 300) - 100;
      var randPos2 = Math.floor(Math.random() * 300) - 100;
      var randWidth = Math.floor(Math.random() * 150) + 1;
      var randHeight = Math.floor(Math.random() * 150) + 1;

      // random opacity
      var randOpacity = Math.round(Math.random() * 100) / 100;

      // random color
      var randColor = getRandomColor();

      (function() {
        $(document).ready(function() {
            drawRect(randPos1,randPos2,randColor,randOpacity);
        });
      })();

      function SVG(tag) {
          return document.createElementNS('http://www.w3.org/2000/svg', tag);
      }

      var drawRect = function(x,y,color,opacity) {
        var $svg = $("#s");
        $(SVG('rect'))
          .attr('x', x)
          .attr('y', y)
          .attr('width', randWidth)
          .attr('height', randHeight)
          .attr('fill', color)
          .attr('opacity', randOpacity)
          .appendTo($svg);
      };
    }
    var rectTrue = Math.random();
    while (rectTrue >= 0.5) {
        rect();
        rectTrue = Math.random();
    }
    // end rectangles

    // the ellipses <ellipse cx="200" cy="80" rx="100" ry="50">
    function ellipse() {
      // random shape size and position
      var randPos1 = Math.floor(Math.random() * 300) - 100;
      var randPos2 = Math.floor(Math.random() * 300) - 100;
      var randWidth = Math.floor(Math.random() * 150) + 1;
      var randHeight = Math.floor(Math.random() * 150) + 1;

      // random opacity
      var randOpacity = Math.round(Math.random() * 100) / 100;

      // random color
      var randColor = getRandomColor();

      (function() {
        $(document).ready(function() {
            drawEllipse(randPos1,randPos2,randColor,randOpacity);
        });
      })();

      function SVG(tag) {
          return document.createElementNS('http://www.w3.org/2000/svg', tag);
      }

      var drawEllipse = function(x,y,color,opacity) {
        var $svg = $("#s");
        $(SVG('ellipse'))
          .attr('cx', x)
          .attr('cy', y)
          .attr('rx', randWidth)
          .attr('ry', randHeight)
          .attr('fill', color)
          .attr('opacity', randOpacity)
          .appendTo($svg);
      };
    }
    var ellipseTrue = Math.random();
    while (ellipseTrue >= 0.5) {
        ellipse();
        ellipseTrue = Math.random();
    }
    // end ellipse

    // the lines <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
    function line() {
      // random shape size and position
      var randPos1 = Math.floor(Math.random() * 300) - 100;
      var randPos2 = Math.floor(Math.random() * 300) - 100;
      var randWidth = Math.floor(Math.random() * 150) + 1;
      var randHeight = Math.floor(Math.random() * 150) + 1;

      // random opacity
      var randOpacity = Math.round(Math.random() * 100) / 100;

      // random color
      var randColor = getRandomColor();

      (function() {
        $(document).ready(function() {
            drawLine(randPos1,randPos2,randColor,randOpacity);
        });
      })();

      function SVG(tag) {
          return document.createElementNS('http://www.w3.org/2000/svg', tag);
      }

      var drawLine = function(x,y,color,opacity) {
        var $svg = $("#s");
        $(SVG('line'))
          .attr('x1', x)
          .attr('y1', y)
          .attr('x2', randWidth)
          .attr('y2', randHeight)
          .attr('stroke', color)
          .attr('opacity', randOpacity)
          .appendTo($svg);
      };
    }
    var lineTrue = Math.random();
    while (lineTrue >= 0.5) {
        line();
        lineTrue = Math.random();
    }
    // end lines

    // the polygons <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
    function polygon() {
      // random shape size and position
      var x = Math.floor(Math.random() * 300) - 100;
      var y = Math.floor(Math.random() * 300) - 100;
      var j = Math.floor(Math.random() * 300) - 100;
      var k = Math.floor(Math.random() * 300) - 100;
      var a = Math.floor(Math.random() * 300) - 100;
      var b = Math.floor(Math.random() * 300) - 100;
      var points = x+','+y+' '+j+','+k+' '+a+','+b;

      // random opacity
      var randOpacity = Math.round(Math.random() * 100) / 100;

      // random color
      var randColor = getRandomColor();

      (function() {
        $(document).ready(function() {
            drawPolygon(points,randColor,randOpacity);
        });
      })();

      function SVG(tag) {
          return document.createElementNS('http://www.w3.org/2000/svg', tag);
      }

      var drawPolygon = function(points,color,opacity) {
        var $svg = $("#s");
        $(SVG('polygon'))
          .attr('points', points)
          .attr('fill', color)
          .attr('opacity', randOpacity)
          .appendTo($svg);
      };
    }
    var polygonTrue = Math.random();
    while (polygonTrue >= 0.5) {
        polygon();
        polygonTrue = Math.random();
    }
    // end polygons

  }
  // end paint

  $( "#inspiration-form" ).submit(function( event ) {
    console.log( "inspiration-form form submitted" );
    event.preventDefault();
    var artTitle =  $('#inspiration').val();
    $( ".title" ).text( artTitle );
    
    paint();
    var svgChildren = $("#s").children().length;
    if (svgChildren <= 3) {
      paint();
    }

    d = new Date();
    date = d.toDateString();
    $( ".date" ).text( date );

    $( ".landing" ).fadeOut( "slow", function() {
      $( ".thought1" ).fadeIn( "slow" ).delay( 2400 ).fadeOut("slow", function() {
        $( ".thought2" ).fadeIn( "slow" ).delay( 2400 ).fadeOut("slow", function() {
          $( ".finish" ).fadeIn( "slow" );
        });
      });
    });

    $( "#reset" ).click(function() {
      $( ".finish" ).fadeOut( "slow", function() {
        $('#inspiration').val('');
        $("#s").empty();
        $( ".landing" ).fadeIn( "slow" );
      });
    });    
  });
});

