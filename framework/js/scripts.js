// JavaScript Document



//Baseline Grid Toggle

$("#baseline").click(function(){
  $("#container").toggleClass("baseline");
}); 

$("#grid").click(function(){
  $("#container").toggleClass("colgrid");
}); 

//Form Clear

function init(){
	var inp = document.getElementsByTagName('input');
	for(var i = 0; i < inp.length; i++) {
		if(inp[i].type == 'text') {
			inp[i].setAttribute('rel',inp[i].defaultValue)
			inp[i].onfocus = function() {
				if(this.value == this.getAttribute('rel')) {
					this.value = '';
				} else {
					return false;
				}
			}
			inp[i].onblur = function() {
				if(this.value == '') {
					this.value = this.getAttribute('rel');
				} else {
					return false;
				}
			}
			inp[i].ondblclick = function() {
				this.value = this.getAttribute('rel')
			}
		}
	}
}
if(document.childNodes) {
	window.onload = init
}

// pop up alert

function popup(){
		alert("NOTE: This is still a work in progress full verion of this framework will be release soon. Please go to GitHub to follow project and check out the files, link is under \" Files & More \" ");
	};

//Video Player Custom Controls functions

$(function(){
  var video = $('video')[0];
  
  // Play Button
  $('#play').toggle(function(){
    video.play(),
	$('#play').attr('value','Pause');	
  },
  function(){
	  video.pause(),
	  $('#play').attr('value','Play');
	  })
  
  // Pause Button
//  $('#play').click(function(){
//    video.pause();
//  });
//  
  // Stop
  $('#stop').click(function(){
    video.pause();
    video.currentTime = 0;
  })
  
  // Skip Back
  $('#skipBack').click(function(){
    video.currentTime -= 2;
  })
  
  $(video).bind('loadedmetadata', function(){
    var seek = $('#seek'), 
        paused;
    
    // Set up Slider
    seek.slider({
      range: "min",
	  value: 0,
	  min: 0,
      max: video.duration,
      stop: function(event, ui){
        video.currentTime = ui.value;
        if(!paused){
          video.play();
        }
      },
      start: function(event, ui){
        paused = video.paused;
        video.pause();
      }
    });
    
    $(video).bind('timeupdate', function(){
      seek.slider('value', video.currentTime)
    })
	
	//Volume
	$("body").append("<div id='volume' style='display:none;'></div>");
	$(".vidvol").hover(function(){
			$("#volume").show('slow');
		}, function(){
				$("#volume").hide();
			});
	
	$('#volume').slider({
        orientation: "vertical",
        value: video.volume,
        min: 0,
        max: 1,
        range: 'min',
        animate: true,
        step: .1,
        slide: function(e, ui) { 
            video.volume = ui.value;
            if(ui.value > 0) video.muted = false;
        }
});



    
  })
  
  
});

// Video Full Screen Functions
function fullScreen(){	
	if ($.browser.webkit){
		document.getElementsByTagName('video')[0].webkitEnterFullscreen()
		}
		else if ($.browser. mozilla){
		document.getElementsByTagName('video')[0].mozRequestFullScreen();
		
		//Show Controls for firefox 
		document.getElementsByTagName('video')[0].setAttribute('controls','controls')
		
		$(document).keydown(function(e){			
			if(e.keyCode == 27){$('video').removeAttr('controls');}
			})
		};
	};

// Removes Full Screen Button on IE Cause it is not supported
function noFull(){
		if ($.browser.msie){
			document.getElementById("fullScreen").style.display="none"
			};
	};


//onLoad Functions	
	function startStuff(){
		popup(),
		noFull();
		
		};




	