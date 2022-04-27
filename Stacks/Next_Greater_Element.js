function findFirstMax(array) {
	var max = array[0];
	for( let i = 1; i < array.length; i++ ) {
		if( array[i] > max ) {
			max = array[i];
			break;
		}
	}
	return max;
}

function nextGreaterElement(array) {
	var nextGreatestElements = [];
	
	for( let i = 0; i < array.length; i++ ) {
		let temp = array.slice(i);
		let max = findFirstMax(temp);
		if( max > array[i] ) {
			nextGreatestElements.push( max );
		} else {
			temp = [array[i], ...array.slice(0 , i)];
			max = findFirstMax(temp);
			if( max > array[i] ) {
				nextGreatestElements.push( max );
			} else {
				nextGreatestElements.push(-1);
			}
		}
	}
	
	return nextGreatestElements;
}

// Do not edit the line below.
exports.nextGreaterElement = nextGreaterElement;

