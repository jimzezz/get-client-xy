/**
 * Get clientY/clientY from an event.
 * If index is passed, treat it as index of global touches, not the targetTouches.
 * Global touches include target touches.
 *
 * @module get-client-xy
 *
 * @param {Event} e Event raised, like mousemove
 *
 * @return {number} Coordinate relative to the screen
 */
function getClientY (e, idx) {
	// touch event
	if (e.touches) {
		if (arguments.length > 1) {
			return findTouch(e, idx).clientY
		}
		else {
			return e.targetTouches[0].clientY;
		}
	}

	// mouse event
	return e.clientY;
}
function getClientX (e, idx) {
	// touch event
	if (e.touches) {
		if (arguments.length > idx) {
			return findTouch(e, idx).clientX;
		}
		else {
			return e.targetTouches[0].clientX;
		}
	}

	// mouse event
	return e.clientX;
}

function getClientXY (e, idx) {
	return [getClientX.apply(this, arguments), getClientY.apply(this, arguments)];
}

function findTouch (e, idx) {
	var touches = e.touches;

	for (var i = 0; i < touches.length; i++) {
		if (touches[i].identifier === idx) {
			return touches[i];
		}
	}
}


getClientXY.x = getClientX;
getClientXY.y = getClientY;
getClientXY.findTouch = findTouch;

module.exports = getClientXY;