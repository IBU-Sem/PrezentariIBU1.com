(function () {
var img = new Image();
var C = createjs;
var p = 'prototype';
var S = C.Sprite;
var M = C.MovieClip;
var SS = C.SpriteSheet;
var T = C.Tween;
var G = C.Container;																				
var L = {}; 																						
C.manager = C.manager || {}; 														
C.manager.Idle = {lib:L, root:null, complete:false, onComplete:null}; 			

img.onload = function () {
var s = new SS({
	images: [img],
	frames: [
		[104,60,22,73,0,8.09,73.87],
		[114,135,21,73,0,9.04,15.92],
		[2,2,100,205,0,73.89,665.7],
		[2,239,50,10,0,24.47,8.97]]
});
s.name = 'main';


// ================================ //

// --- lib3 (_3)  --- //
(L._3 = function(){this.stop();})[p] = new S(s,0);

// --- lib4 (mc_right)  --- //
(L._4 = function(){this.stop();this.name='mc_right';})[p] = new S(s,1);

// --- lib5 (mc_body)  --- //
(L._5 = function(){this.stop();this.name='mc_body';})[p] = new S(s,2);

// --- lib7 (mouth)  --- //
(L._7 = function(){this.stop();this.name='mouth';})[p] = new S(s,3);

// --- lib8 (_8)  --- //
var anim0 = new SS({
	images: [img],
	frames: [
		[195,30,25,28,0,12.25,27.15],
		[195,30,25,28,0,12.25,27.15],
		[195,30,25,28,0,12.25,27.15],
		[195,30,25,28,0,12.25,27.15],
		[195,30,25,28,0,12.25,27.15],
		[195,30,25,28,0,12.25,27.15],
		[195,30,25,28,0,12.25,27.15],
		[195,30,25,28,0,12.25,27.15],
		[195,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[141,30,25,28,0,12.25,27.15],
		[128,88,25,26,0,12.25,26.15],
		[128,60,25,26,0,12.25,26.15],
		[114,210,25,26,0,12.25,26.15],
		[114,210,25,26,0,12.25,26.15],
		[114,210,25,26,0,12.25,26.15],
		[114,210,25,26,0,12.25,26.15],
		[222,32,25,26,0,12.25,26.15],
		[114,30,25,28,0,12.25,27.15],
		[226,2,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15],
		[168,30,25,28,0,12.25,27.15]
	]
});
(L._8=function(){this.play();})[p] = new S(anim0);

// --- lib9 (_9)  --- //
var anim1 = new SS({
	images: [img],
	frames: [
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[58,209,26,28,0,12.58,27.15],
		[198,2,26,26,0,12.58,26.15],
		[170,2,26,26,0,12.58,26.15],
		[142,2,26,26,0,12.58,26.15],
		[142,2,26,26,0,12.58,26.15],
		[142,2,26,26,0,12.58,26.15],
		[142,2,26,26,0,12.58,26.15],
		[114,2,26,26,0,12.58,26.15],
		[30,209,26,28,0,12.58,27.15],
		[2,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15],
		[86,209,26,28,0,12.58,27.15]
	]
});
(L._9=function(){this.play();})[p] = new S(anim1);


// ================================ //

// --- face --- //
(L._6 = function() {var m=this;
	m.initialize();
	m.name = 'face';
	m.mouth = new L._7();
	m.timeline.addTween(T.get(m.mouth)
		.t({x:0.1,scaleX:2.9868,scaleY:2.9868},0).w(50));
	m._8 = new L._8();
	m.timeline.addTween(T.get(m._8)
		.t({x:53.1,y:-76,scaleX:2.9868,scaleY:2.9868},0).w(50));
	m._9 = new L._9();
	m.timeline.addTween(T.get(m._9)
		.t({x:-54.3,y:-76,scaleX:2.9868,scaleY:2.9868},0).w(50));
	m.timeline._tweens.reverse();
})[p] = new M();

// --- idle --- //
(L._2 = function() {var m=this;
	m.initialize();
	m.name = 'idle';
	m._3 = new L._3();
	m.timeline.addTween(T.get(m._3)
		.t({x:78.6,y:106.3,skewY:180},0).w(50));
	m.mc_right = new L._4();
	m.timeline.addTween(T.get(m.mc_right)
		.t({x:26.1,y:47.4},0).w(50));
	m.mc_body = new L._5();
	m.timeline.addTween(T.get(m.mc_body)
		.t({x:77.6,y:602.4},0).w(50));
	m.face = new L._6();
	m.timeline.addTween(T.get(m.face)
		.t({x:53.1,y:24.7,scaleX:0.3348,scaleY:0.3348},0).w(50));
	m.timeline._tweens.reverse();
})[p] = new M();

// --- worker --- //
(L._1 = function() {var m=this;
	m.initialize();
	m.name = 'worker';
	m.idle = new L._2();
	m.timeline.addTween(T.get(m.idle)
		.t({y:70},0).w(50));
	m.timeline._tweens.reverse();
})[p] = new M();

// --- Idle --- //
(L._0 = function() {var m=this;
	m.initialize();
	m.name = 'Idle';
	m.worker = new L._1();
	m.timeline.addTween(T.get(m.worker)
		.t({x:29.2,y:5.6},0).w(50));
	m.timeline._tweens.reverse();
})[p] = new M();


// ================================ //

 			

if (document.readyState === 'complete') handleComplete(); 													
else window.addEventListener('load', handleComplete, false); 												

 																									

	 																								

function handleComplete() { 																		
	var exportRoot = new L._0(); 														

	C.Ticker.setFPS(24); 																	
	var canvas = document.getElementById('Idle'); 											
	if (canvas) { 																					
		canvas.width = 164; 																		
		canvas.height = 220; 																	
		var stage = new C.Stage(canvas); 														
		stage.addChild(exportRoot); 																
		stage.update(); 																			
		C.Ticker.addEventListener('tick', stage); 											
	} 																								

	var managed = C.manager.Idle; 													
	managed.root = exportRoot; 																		
	managed.labels = {};
	managed.complete = true; 																		
	if (typeof managed.onComplete === 'function') { 												
		managed.onComplete(managed); 																
	} 																								
} 																									
};
img.src = 'Idle.png';
})();