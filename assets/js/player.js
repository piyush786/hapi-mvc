$(document).ready(function(){
	player=$('#music-player')[0]
	$(document).on('click','#play-btn.fa.fa-play',function(){
		$('#play-btn.fa.fa-play').removeClass('fa-play').addClass('fa-pause').css('color','#fff')
		player.play();
		totalTime =player.duration
		PlayingTime=setInterval(function(){
				 var playedtime=(Math.round((player.currentTime/player.duration)*100))
				 if(playedtime>=100)
				 {
					 $('#play-btn.fa.fa-pause').removeClass('fa-pause').addClass('fa-play').css('color','#aaa')
					 player.pause();
					 clearInterval(PlayingTime) 
					 player.currentTime=0;
					 $('#podcast-id-value').animate({width:'0%'})
				 }
				 else
				 {
					$('#podcast-id-value').animate({width:playedtime+'%'})
				 }
		},1000) 
	})
	
	$(document).on('click','#play-btn.fa.fa-pause',function(){
			$('#play-btn.fa.fa-pause').removeClass('fa-pause').addClass('fa-play').css('color','#aaa')
			player.pause();
			clearInterval(PlayingTime) 
	})
	
	$(document).on('click','#podcast-progress',function(event){
			
		 if($('#play-btn.fa').hasClass('fa-pause'))
		 {
			 var clickpos=event.pageX
			 
			 var divpos=$('#podcast-progress').offset().left
			 var divwid=$('#podcast-progress').width()
			 var songpos= ((clickpos-divpos)/divwid)*100
			 $('#podcast-id-value').animate({width:songpos+'%'})
			 totalTime =player.duration
			 player.currentTime=(songpos*totalTime)/100;
			 player.play();			 
		 }
	})
	

	$(document).on('click','#volume-progress',function(event){			
			 var clickpos=event.pageX			 
			 var divpos=$('#volume-progress').offset().left
			 var divwid=$('#volume-progress').width()
			 var volpos= Math.round(((clickpos-divpos)/divwid)*10)/10;
			 $('#volume-id-value').animate({width:(volpos*100)+'%'})
			 player.volume=volpos
	})


	$(document).on('click','#volume-container .fa.fa-volume-up',function(){
		$('#volume-container .fa.fa-volume-up').removeClass('fa-volume-up').addClass('fa-volume-off').css('color','#fff')
		currentVol=player.volume
		player.volume=0
		$('#volume-id-value').animate({width:'0%'})
	})

	$(document).on('click','#volume-container .fa.fa-volume-off',function(){
		$('#volume-container .fa.fa-volume-off').removeClass('fa-volume-off').addClass('fa-volume-up').css('color','#aaa')
		player.volume=currentVol
		$('#volume-id-value').animate({width:(currentVol*100)+'%'})
	})

	
})
