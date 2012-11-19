Respond Zipper is a jQuery plugin that is an attempt to solve content folding for responsive design. (See: http://css-tricks.com/content-folding/)

----

Demo: http://phildebrandt.com/respond-zipper

----
----




Usage

-- HTML --

<article class="entry">
	<h1>Title</h1>
</article>
		
<article class="entry">
	<h1>Title</h1>
</article>

<article class="entry">
	<h1>Title</h1>
</article>

<aside class="side-bar">

		<div class="side-bar-entry rz-zipperable">
			<h2>1. This content gets zippered in</h2>
		</div>

		<div class="side-bar-entry rz-zipperable">
			<h2>2. This content gets zippered in</h2>
		</div>

<aside>

-- jQuery --

$('.rz-zipperable').respondZipper({

	// dimension to zipper
	// default 768
	'breakpoint': 768,
	
	// element to place zipper target under (css class)
	// default '.entry'			
	'zipper_under': '.entry',
	
	// nth element for zipper target
	// default 1			
	'nth_zipper_under': 1,
	
	// number of sidebar sections to zipper per target
	// default 1		
	'number_to_zipper': 1,
	
	// sidebar container (css class)
	// default '.side-bar'							
	'sidebar_container': '.side-bar'	
					
});


----


