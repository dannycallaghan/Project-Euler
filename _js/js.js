var $ = function ( el ) {
	return document.getElementById( el );
},

btn = $( 'submit' ),
input = $( 'solution' ),
img = $( 'calculating' ),
start,

ask = function ( e ) {
		if ( e.preventDefault ) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    img.style.display = 'block';
    start = new Date().getTime();
    init();
},

answer = function ( solution, notes ) {
	var end = new Date().getTime(),
	time = end - start,
	p, x;
	img.style.display = 'none';
	input.value = solution,
	small = $( 'notes' );
	while( small.firstChild ){
		small.removeChild( small.firstChild );
	}
	p = document.createElement( 'P' ),
	x = document.createTextNode( 'Time taken : ' + time + ' milliseconds (about ' + ( time / 1000 ).toPrecision( 2 ) + ' second' + ( ( ( time / 1000 ) === 1 )? '' : 's' ) + ').' );
	p.appendChild( x );
	small.appendChild( p );
	if( typeof notes === 'string' && notes.length ){
		p = document.createElement( 'P' ),
		x = document.createTextNode( 'Notes : ' + notes );
		p.appendChild( x );
		small.appendChild( p );
	}
};

window.onload = function () {
	if ( btn.addEventListener ) {
        btn.addEventListener( 'click', ask, false );
    } else if ( el.attachEvent ) {
        btn.attachEvent( 'onclick', ask );
    } else {
        btn[ 'onclick' ] = ask;
    }
}