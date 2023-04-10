const baseToDo = "https://api.github.com/repos/theo-armour/2023-todo/contents/";
const basePages = "https://api.github.com/repos/theo-armour/pages/contents/";

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
&#x1801; ❦ &#x2766; ❧ &#x2767; &phone;
&#x2261; ≡
&spades; &starf; &bigstar; &xcirc;
&block; &marker; &FilledSmallSquare;
&mdash; &ndash;<br>
&amp;mdash; &amp;ndash; &amp;euro;
<br>
<a href="https://docx.new" target="_blank">new docx</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet" target="_blank">regex</a>
<a href=javascript:void(document.body.style.backgroundColor='#fee' title="Make it Pink!") >background</a>

`;


const menuHtm = `
<h3>
	<p>
		<a href="#${ baseToDo }0-to-do.md">to do</a> <a href="#${ baseToDo }1-notes.md">notes</a><br>
		</p>
		<p>
		<a href="#${ baseToDo }0-me-admin/0-admin-to-do.md">admin</a><br>
		&nbsp; <a href="#${ baseToDo }0-me-admin/0-journal.md">journal</a>
		&nbsp;<a href="#${ baseToDo }0-me-admin/dwa-douglass-winthrop.md">dwa</a>
		&nbsp;<a href="#${ baseToDo }0-me-admin/manett-vivian-redsar.md">vivianR</a>

	</p>
	<p>
		<a href="#${ baseToDo }1-health/0-health-to-do.md">health</a>
		&nbsp;<a href="#${ baseToDo }1-health/1-health-providers.md">providers</a>
		&nbsp;<a href="#${ baseToDo }1-health/1-health-journal.md">journal</a>
		&nbsp;<a href="#${ baseToDo }1-health/1-health-reference.md">reference</a>
		&nbsp;<a href="#${ baseToDo }1-health/36-questions-everyone-should-ask-themselves.md">36quests</a>
		&nbsp;<a href="#${ baseToDo }1-health/pt-fitness-coaches.md">phys ther</a>
	</p>

	<p>
		<a href="#${ baseToDo }2-ace-it/0-ace-it-to-do.md">ace-it</a><br>
		&nbsp; <a href="#${ baseToDo }2-ace-it/alix.md">alix</a>
		<a href="#${ baseToDo }2-ace-it/cynthia.md">cynthia</a>
		<a href="#${ baseToDo }2-ace-it/eloise.md">eloise</a>
	</p>

	<a href="#${ baseToDo }2-peeps/0-peeps-to-do.md">peeps</a><br>
	<a href="#${ baseToDo }2-evereverland-simplicity/0-evereverland-to-do.md">eel</a>
	<a href="#${ baseToDo }2-evereverland-simplicity/0-simplicity-to-do.md">simplicity</a>
	<a href="#${ baseToDo }3-tech/0-tech-to-do.md">coding</a>
	<p>
		<a href="#${ baseToDo }3-heritage/0-heritage-to-do.md">heritage</a>
		&nbsp;<a href="#${ baseToDo }3-heritage/2023-journal.md">journal</a>
		&nbsp;<a href="#${ baseToDo }3-heritage/1-residents-info.md">residents</a>
		&nbsp;<a href="#${ baseToDo }3-heritage/happenings.md">happenings</a>
		&nbsp;<a href="#${ baseToDo }3-heritage/touchtown.md">touchtown</a>
	</p>

</h3>
`;


const
	menuPeepsHtm = `
	<div style="width:22rem;"
<a href="#${ baseToDo }3-heritage/residents/alexander-patrick.md" >alexander-Patrick</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/anderson-barbara.md" >anderson-Barbara</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/arburua-carmelita.md" >arburua-Carmelita</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/beatty-martha-nell.md" >beatty-martha-nell</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/benedict-yvonne.md" >benedict-yvonne</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/bissell-eleanor.md" >bissell-eleanor</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/brymner-jane.md" >brymner-jane</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/burke-bernie.md" >burke-bernie</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/conley-katherine.md" >conley-katherine</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/conn-susan.md" >conn-susan</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/copeland-harry.md" >copeland-harry</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/cornyn-paula.md" >cornyn-paula</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/coughlan-erika.md" >coughlan-erika</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/dugliss-lucia.md" >dugliss-lucia</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/dugliss-rod.md" >dugliss-rod</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/dy-betty.md" >dy-betty</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/ertola-shirley.md" >ertola-shirley</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/fischer-pamela.md" >fischer-pamela</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/fletcher-isabel.md" >fletcher-isabel</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/forman-marcia.md" >forman-marcia</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/fraps-june.md" >fraps-june</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/goff-judith.md" >goff-judith</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/graham-gene.md" >graham-gene</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/hanley-linda.md" >hanley-linda</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/hanley-tony.md" >hanley-tony</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/harris-mary-liz.md" >harris-mary-liz</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/hoff-aggie.md" >hoff-aggie</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/howard-dr-doris.md" >howard-dr-doris</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/hulting-patsy.md" >hulting-patsy</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/jacobs-margaret.md" >jacobs-margaret</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/johnson-margaret.md" >johnson-margaret</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/jordan-elizabeth.md" >jordan-elizabeth</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/kaufman-monique.md" >kaufman-monique</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/kirkpatrick-kathy.md" >kirkpatrick-kathy</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/learned-gloria.md" >learned-gloria</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/lee-ivy.md" >lee-ivy</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/leichum-karl.md" >leichum-karl</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/leichum-lillemor.md" >leichum-lillemor</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/lindlow-gail.md" >lindlow-gail</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/lloyd-gisela.md" >lloyd-gisela</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/loo-katie.md" >loo-katie</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/ludwig-jay.md" >ludwig-jay</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/luopajarvi-sisko-“sisi”.md" >luopajarvi-sisko-“sisi”</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/mansouri-midge.md" >mansouri-midge</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/mcevoy-rita.md" >mcevoy-rita</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/moore-sheila.md" >moore-sheila</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/morris-anne.md" >morris-anne</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/mossi-atilio-_til_.md" >mossi-atilio-_til_</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/moughan-terry.md" >moughan-terry</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/narron-kay.md" >narron-kay</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/nolan-liz.md" >nolan-liz</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/nolan-marty.md" >nolan-marty</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/petersen-marianne.md" >petersen-marianne</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/pieck-marianna.md" >pieck-marianna</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/plusa-genevieve.md" >plusa-genevieve</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/rush-patrick.md" >rush-patrick</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/sabini-ernie.md" >sabini-ernie</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/segrin-robert.md" >segrin-robert</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/sharp-linda.md" >sharp-linda</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/skootsky-gary.md" >skootsky-gary</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/skootsky-kristine.md" >skootsky-kristine</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/standing-jane.md" >standing-jane</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/stent-nancy-c.md" >stent-nancy-c</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/tim-kay.md" >tim-kay</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/torres-martha.md" >torres-martha</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/van-den-berg-mercedes.md" >van-den-berg-mercedes</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/voyles-stela.md" >voyles-stela</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/wake-marion.md" >wake-marion</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/wentker-fred.md" >wentker-fred</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/wentker-jo-ann.md" >wentker-jo-ann</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/zagorites-flora.md" >zagorites-flora</a>&nbsp;

`;


const menuDate = `
<input type=date oninput=getDate(this);>
`;

const menuSnippets = `
pages
<a href="#${ basePages }00-journal/articles-to-write-video.md">articles to write</a><br>
Snippets
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/bookmarklets.md">bookmarklets</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/folder-names.md">fldrs</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/habits.md">habits</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/health.md">health</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/inspirations-sources.md">inspire</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/jokes-quotes.md">jokes</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/lingo.md">lingo</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/location.md">location</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/things-i-forget.md">forget</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/things-i-like.md">like</a>
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/snippets/tips.md">tips</a> ~
<a href="#https://api.github.com/repos/theo-armour/2023-qdata/contents/hardware/hardware.md">hardware</a>

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

h3MenuDate.innerHTML = menuDate;



function getDate ( that ) {

	const dateString = that.value;
	//console.log( "dateString", dateString );

	const mydate = dateString.slice( -2 );
	const month = dateString.slice( 5, 7 );
	const path = `${ baseQ }journal/days-of-year-htm/${ month }/${ month }${ mydate }.md`;

	//location.hash = path;
	ifrNotesJournal.contentWindow.location.hash = path;

};

