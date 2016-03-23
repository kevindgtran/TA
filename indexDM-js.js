var kevinFramesDiv = document.getElementById("kevin-slides");
var pageVerticalPosition = 0;
var pageVerticalPositionOnTouch = 0;
var previousPageVerticalPosition = 0;
var deltaPageVerticalPosition = 0;
var counter = 0;
var switcher = 1;
var kevinStartRideFrame = 1;
var kevinStopRideFrame = 2;
var kevinOneFrameWidth = 406;
var shiftKevinFrameTimeInterval = 250;
var canAnimateKevinRideStop = true;
var kevinStartFrame;
var kevinStopFrame;
var shiftKevinFrameTimer;
var isKevinStopping = false;

window.onscroll = function (e) {
	runTheseFunctionsAfterScrollOrSwipe();
	}

function runTheseFunctionsAfterScrollOrSwipe() {
	animateKevinRideStop();
	hideScrollOrSwipeTextContainer();
	}

function animateKevinRideStop() {
  if (canAnimateKevinRideStop == true) {
    disableAnimateKevinRideStop();
    clearInterval(shiftKevinFrameTimer);
    shiftKevinFrameTimer = setInterval(function(){shiftKevinFrame()}, shiftKevinFrameTimeInterval);
  	}
	}

function shiftKevinFrame() {
  console.log('called');
	kevinStartFrame = kevinStartRideFrame;
	kevinStopFrame = kevinStopRideFrame;

	kevinFramesDiv.style.left = (-1 * kevinOneFrameWidth * (kevinStartFrame + counter)) + "px";
	if (kevinStartFrame + counter + switcher > kevinStopFrame) {
		 	switcher = -1 * switcher;
	}

	if (kevinStartFrame + counter  + switcher == kevinStartFrame) {
			pageVerticalPositionWhenAnimateKevin1 = pageVerticalPosition;
	}

	if (kevinStartFrame + counter + switcher < kevinStartFrame) {
			pageVerticalPositionWhenAnimateKevin2 = pageVerticalPosition;

	if (pageVerticalPositionWhenAnimateKevin1 == pageVerticalPositionWhenAnimateKevin2) {
			clearShiftKevinFrameTimer();
				return;
			}
				else
				{
					switcher = -1 * switcher;
				}
	}
			counter = counter + switcher;
}

function clearShiftKevinFrameTimer()
	{
		clearInterval(shiftKevinFrameTimer);
		{
		setKevinStaticFrame();
		}
		counter = 0;
		switcher = 1;
		enableAnimateKevinRideStop();
	}

function enableAnimateKevinRideStop()
	{
		canAnimateKevinRideStop = true;
	}

function disableAnimateKevinRideStop()
	{
		canAnimateKevinRideStop = false;
	}

function setKevinStaticFrame()
	{
		kevinFramesDiv.style.left = "0px";
	}
