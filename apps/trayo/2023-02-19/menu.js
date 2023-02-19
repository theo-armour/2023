const base = "https://api.github.com/repos/theo-armour/2023-todo/contents/";

divMenuBar.innerHTML = `
		<div class="tooltip"><span>hover</span>
			<span id=spnMenuHover class="tooltiptext"></span>
		</div>

		<div class="tooltip"><span>menu</span>
			<span id=spnMenu1 class="tooltiptext"></span>
		</div>

		<div class="tooltip"><span>residents</span>
			<span id=spnMenuResidents class="tooltiptext"></span>
		</div>
		<div class="tooltip"><span>snippets</span>
			<span id=spnMenuSnippets class="tooltiptext"></span>
		</div>

`;

const menuHover = `
&#164; &curren; &times; &deg; &bull; &middot; &mdash; &copy; &euro; &hellip; &vellip;
&#x1801; ❦ &#x2766; ❧ &phone;
&#x2261; ≡
&spades; &starf; &bigstar; &xcirc;
&block; &marker; &FilledSmallSquare;
&mdash;
`;


const menuHtm = `
<h3>
	<p>
		<a href="#${ base }0-to-do.md">to do</a> <a href="#${ base }1-notes.md">notes</a>

		<br>
	</p>
	<p>
		<a href="#${ base }0-me-admin/0-admin-to-do.md">admin</a><br>
		&nbsp; <a href="#${ base }0-me-admin/0-journal.md">journal</a><br>
	</p>
	<p>
		<a href="#${ base }1-health/0-health-to-do.md">health</a>
		&nbsp;<a href="#${ base }1-health/1-health-providers.md">providers</a>
		&nbsp;<a href="#${ base }1-health/1-health-journal.md">journal</a>
		&nbsp;<a href="#${ base }1-health/1-health-reference.md">reference</a>
		&nbsp;<a href="#${ base }1-health/36-questions-everyone-should-ask-themselves.md">36quests</a>
		&nbsp;<a href="#${ base }1-health/pt-fitness-coaches.md">phys ther</a>
	</p>

	<p>
		<a href="#${ base }2-ace-it/0-ace-it-to-do.md">ace-it</a><br>
		&nbsp; <a href="#${ base }2-ace-it/alix.md">alix</a>
		<a href="#${ base }2-ace-it/cynthia.md">cynthia</a>
		<a href="#${ base }2-ace-it/eloise.md">eloise</a>
	</p>

	<a href="#${ base }2-peeps/0-peeps-to-do.md">peeps</a><br>
	<a href="#${ base }2-evereverland-simplicity/0-evereverland-to-do.md">eel</a>
	<a href="#${ base }2-evereverland-simplicity/0-simplicity-to-do.md">simplicity</a>
	<a href="#${ base }3-tech/0-tech-to-do.md">coding</a>
	<p>
		<a href="#${ base }3-heritage/0-heritage-to-do.md">heritage</a>
		&nbsp;<a href="#${ base }3-heritage/2023-journal.md">journal</a>
		&nbsp;<a href="#${ base }3-heritage/1-residents-info.md">residents</a>
		&nbsp;<a href="#${ base }3-heritage/happenings.md">happenings</a>
		&nbsp;<a href="#${ base }3-heritage/touchtown.md">touchtown</a>
	</p>

</h3>
`;


const
	menuPeepsHtm = `
<a href="#${ base }3-heritage/residents/alexander-patrick.md" >alexander-patrick.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/anderson-barbara.md" >anderson-barbara.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/arburua-carmelita.md" >arburua-carmelita.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/armour-theo.md" >armour-theo.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/beatty-martha-nell.md" >beatty-martha-nell.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/benedict-yvonne.md" >benedict-yvonne.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/bissell-eleanor.md" >bissell-eleanor.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/brymner-jane.md" >brymner-jane.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/burke-bernie.md" >burke-bernie.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/conley-katherine.md" >conley-katherine.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/conn-susan.md" >conn-susan.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/copeland-harry.md" >copeland-harry.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/cornyn-paula.md" >cornyn-paula.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/coughlan-erika.md" >coughlan-erika.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/dugliss-lucia.md" >dugliss-lucia.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/dugliss-rod.md" >dugliss-rod.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/dy-betty.md" >dy-betty.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/ertola-shirley.md" >ertola-shirley.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/fischer-pamela.md" >fischer-pamela.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/fletcher-isabel.md" >fletcher-isabel.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/forman-marcia.md" >forman-marcia.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/fraps-june.md" >fraps-june.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/goff-judith.md" >goff-judith.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/graham-gene.md" >graham-gene.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/hanley-linda.md" >hanley-linda.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/hanley-tony.md" >hanley-tony.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/harris-mary-liz.md" >harris-mary-liz.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/hoff-aggie.md" >hoff-aggie.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/howard-dr-doris.md" >howard-dr-doris.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/hulting-patsy.md" >hulting-patsy.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/jacobs-margaret.md" >jacobs-margaret.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/johnson-margaret.md" >johnson-margaret.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/jordan-elizabeth.md" >jordan-elizabeth.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/kaufman-monique.md" >kaufman-monique.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/kirkpatrick-kathy.md" >kirkpatrick-kathy.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/learned-gloria.md" >learned-gloria.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/lee-ivy.md" >lee-ivy.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/leichum-karl.md" >leichum-karl.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/leichum-lillemor.md" >leichum-lillemor.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/lindlow-gail.md" >lindlow-gail.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/lloyd-gisela.md" >lloyd-gisela.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/loo-katie.md" >loo-katie.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/ludwig-jay.md" >ludwig-jay.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/luopajarvi-sisko-“sisi”.md" >luopajarvi-sisko-“sisi”.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/mansouri-midge.md" >mansouri-midge.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/mcevoy-rita.md" >mcevoy-rita.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/moore-sheila.md" >moore-sheila.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/morris-anne.md" >morris-anne.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/mossi-atilio-_til_.md" >mossi-atilio-_til_.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/moughan-terry.md" >moughan-terry.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/narron-kay.md" >narron-kay.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/nolan-liz.md" >nolan-liz.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/nolan-marty.md" >nolan-marty.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/petersen-marianne.md" >petersen-marianne.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/pieck-marianna.md" >pieck-marianna.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/plusa-genevieve.md" >plusa-genevieve.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/roper-mary-charlotte.md" >roper-mary-charlotte.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/rush-patrick.md" >rush-patrick.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/sabini-ernie.md" >sabini-ernie.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/segrin-robert.md" >segrin-robert.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/sharp-linda.md" >sharp-linda.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/skootsky-gary.md" >skootsky-gary.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/skootsky-kristine.md" >skootsky-kristine.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/standing-jane.md" >standing-jane.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/stent-nancy-c.md" >stent-nancy-c.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/tim-kay.md" >tim-kay.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/torres-martha.md" >torres-martha.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/van-den-berg-mercedes.md" >van-den-berg-mercedes.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/voyles-stela.md" >voyles-stela.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/wake-marion.md" >wake-marion.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/wentker-fred.md" >wentker-fred.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/wentker-jo-ann.md" >wentker-jo-ann.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/wesson-dr-richard.md" >wesson-dr-richard.md</a>&nbsp;
<a href="#${ base }3-heritage/residents/zagorites-flora.md" >zagorites-flora.md</a>&nbsp;

`;


menuBar = `
<input type=date oninput=getDate( this );>
`;

const menuSnippets = `
<a href="#https://api.github.com/repos/theo-armour/2023-todo/contents/3-heritage/1-residents-info.md">residents</a>
<a href="#https://api.github.com/repos/theo-armour/2023-todo/contents/1-notes.md">notes</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/folder-names.md">fldrs</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/things-i-forget.md">foget</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/things-i-like.md">like</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/lingo.md">lingo</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/location.md">location</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/jokes-quotes.md">jokes</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/health.md">helth</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/inspirations-sources.md">inspire</a>
<select id=selIfr size="1">
	<option>ifr ToDo</option>
	<option>ifr Journal</option>
	<option>ifr Admin</option>
	<option selected>ifr Heritage</option>
</select>
`;

spnMenuHover.innerHTML = menuHover;

spnMenu1.innerHTML = menuHtm;

spnMenuResidents.innerHTML = menuPeepsHtm;

spnMenuSnippets.innerHTML = menuSnippets;

h3MenuBar.innerHTML = menuBar;

