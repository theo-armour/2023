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
<a href="https://tabatkins.github.io/symbols/" target="_blank">Symbolology</a>
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
	<div style="width:25rem;"
<a href="#${ baseToDo }3-heritage/residents/alexander-patrick" >alexander-patrick.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/anderson-barbara" >anderson-barbara.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/arburua-carmelita" >arburua-carmelita.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/armour-theo" >armour-theo.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/beatty-martha-nell" >beatty-martha-nell.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/benedict-yvonne" >benedict-yvonne.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/bissell-eleanor" >bissell-eleanor.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/brymner-jane" >brymner-jane.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/burke-bernie" >burke-bernie.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/conley-katherine" >conley-katherine.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/conn-susan" >conn-susan.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/copeland-harry" >copeland-harry.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/cornyn-paula" >cornyn-paula.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/coughlan-erika" >coughlan-erika.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/dugliss-lucia" >dugliss-lucia.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/dugliss-rod" >dugliss-rod.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/dy-betty" >dy-betty.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/ertola-shirley" >ertola-shirley.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/fischer-pamela" >fischer-pamela.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/fletcher-isabel" >fletcher-isabel.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/forman-marcia" >forman-marcia.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/fraps-june" >fraps-june.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/goff-judith" >goff-judith.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/graham-gene" >graham-gene.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/hanley-linda" >hanley-linda.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/hanley-tony" >hanley-tony.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/harris-mary-liz" >harris-mary-liz.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/hoff-aggie" >hoff-aggie.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/howard-dr-doris" >howard-dr-doris.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/hulting-patsy" >hulting-patsy.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/jacobs-margaret" >jacobs-margaret.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/johnson-margaret" >johnson-margaret.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/jordan-elizabeth" >jordan-elizabeth.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/kaufman-monique" >kaufman-monique.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/kirkpatrick-kathy" >kirkpatrick-kathy.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/learned-gloria" >learned-gloria.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/lee-ivy" >lee-ivy.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/leichum-karl" >leichum-karl.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/leichum-lillemor" >leichum-lillemor.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/lindlow-gail" >lindlow-gail.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/lloyd-gisela" >lloyd-gisela.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/loo-katie" >loo-katie.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/ludwig-jay" >ludwig-jay.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/luopajarvi-sisko-“sisi”" >luopajarvi-sisko-“sisi”.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/mansouri-midge" >mansouri-midge.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/mcevoy-rita" >mcevoy-rita.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/moore-sheila" >moore-sheila.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/morris-anne" >morris-anne.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/mossi-atilio-_til_" >mossi-atilio-_til_.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/moughan-terry" >moughan-terry.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/narron-kay" >narron-kay.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/nolan-liz" >nolan-liz.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/nolan-marty" >nolan-marty.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/petersen-marianne" >petersen-marianne.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/pieck-marianna" >pieck-marianna.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/plusa-genevieve" >plusa-genevieve.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/roper-mary-charlotte" >roper-mary-charlotte.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/rush-patrick" >rush-patrick.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/sabini-ernie" >sabini-ernie.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/segrin-robert" >segrin-robert.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/sharp-linda" >sharp-linda.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/skootsky-gary" >skootsky-gary.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/skootsky-kristine" >skootsky-kristine.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/standing-jane" >standing-jane.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/stent-nancy-c" >stent-nancy-c.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/tim-kay" >tim-kay.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/torres-martha" >torres-martha.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/van-den-berg-mercedes" >van-den-berg-mercedes.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/voyles-stela" >voyles-stela.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/wake-marion" >wake-marion.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/wentker-fred" >wentker-fred.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/wentker-jo-ann" >wentker-jo-ann.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/wesson-dr-richard" >wesson-dr-richard.md</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/zagorites-flora" >zagorites-flora.md</a>&nbsp;

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

