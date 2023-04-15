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
<a href="https://tabatkins.github.io/symbols/" target="_blank">Symbololology</a>
<a href="https://docx.new" target="_blank">new docx</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet" target="_blank">regex</a>
<a href=javascript:void(document.body.style.backgroundColor='#fee' title="Make it Pink!") >background</a>

`;


const menuHtm = `
<h3>
	<p>
		<a href="#${ baseToDo }0-to-do.md">0 to do</a>
		<a href="#${ baseToDo }0-schedule.md">0 schedule</a>
		<a href="#${ baseToDo }1-notes.md">1 notes</a><br>
	</p>
	<p>
		<a href="#${ baseToDo }0-me-admin/0-admin-to-do.md">0 admin to do</a><br>
		&nbsp;<a href="#${ baseToDo }0-me-admin/0-concierge.md">concierge</a>
		&nbsp;<a href="#${ baseToDo }0-me-admin/0-journal.md">journal</a>
		&nbsp;<a href="#${ baseToDo }0-me-admin/1-admin-ontology.md">ontology</a>
		&nbsp;<a href="#${ baseToDo }0-me-admin/1-mission-values-vision.md">mission/values</a><br>

		&nbsp;<a href="#${ baseToDo }0-me-admin/dwa-douglass-winthrop.md">dwa</a>
		&nbsp;<a href="#${ baseToDo }0-me-admin/manett-vivian-redsar.md">vivianR</a>

	</p>
	<p>
		<a href="#${ baseToDo }1-health/0-health-to-do.md">0 health to do</a><br>
		&nbsp;<a href="#${ baseToDo }1-health/1-health-journal.md">journal</a>
		&nbsp;<a href="#${ baseToDo }1-health/1-health-history.md">history</a>
		&nbsp;<a href="#${ baseToDo }1-health/1-health-providers.md">providers</a>
		&nbsp;<a href="#${ baseToDo }1-health/1-health-reference.md">reference</a><br>
		&nbsp;<a href="#${ baseToDo }1-health/1-report-template.md">report-template</a>
		&nbsp;<a href="#${ baseToDo }1-health/36-questions-everyone-should-ask-themselves.md">36quests</a>
		&nbsp;<a href="#${ baseToDo }1-health/pt-fitness-coaches.md">phys ther</a>
	</p>

	<p>
		<a href="#${ baseToDo }2-ace-it/0-ace-it-to-do.md">2 ace-it to do</a>
		&nbsp; <a href="#${ baseToDo }2-ace-it/alix.md">alix</a>
		&nbsp;<a href="#${ baseToDo }2-ace-it/cynthia.md">cynthia</a>
		&nbsp;<a href="#${ baseToDo }2-ace-it/eloise.md">eloise</a>
		&nbsp;<a href="#${ baseToDo }2-ace-it/kyle-smith.md">kyle</a>
	</p>

	<p>
		<a href="#${ baseToDo }2-family/0-family-to-do.md">2 family to do</a>
		&nbsp;<a href="#${ baseToDo }2-family/allison-armour.md">allison</a>
		&nbsp;<a href="#${ baseToDo }2-family/tania.md">tania</a>
	</p>
	<p>
		<a href="#${ baseToDo }2-peeps/0-peeps-to-do.md">2 peeps to do</a><br>
	</p>
	<p>
		<a href="#${ baseToDo }3-evereverland-simplicity/0-evereverland-to-do.md">3 eel to do</a>
		<a href="#${ baseToDo }3-evereverland-simplicity/0-simplicity-to-do.md">3 simplicity to do</a>
	</p>
	<p>
		<a href="#${ baseToDo }3-heritage/0-heritage-to-do.md">3 heritage to do</a><br>
		&nbsp;<a href="#${ baseToDo }3-heritage/2023-journal.md">journal</a>
		&nbsp;<a href="#${ baseToDo }3-heritage/1-staff.md">staff</a>
		&nbsp;<a href="#${ baseToDo }3-heritage/happenings.md">happenings</a>
		&nbsp;<a href="#${ baseToDo }3-heritage/out-and-about.md">out-and-about</a>
		&nbsp;<a href="#${ baseToDo }3-heritage/life-enrichment.md">life-enrichment</a><br>
		&nbsp;<a href="#${ baseToDo }3-heritage/residents-council.md">res council</a>
		&nbsp;<a href="#${ baseToDo }3-heritage/touchtown.md">touchtown</a>
		</p>

		<a href="#${ baseToDo }3-tech/0-tech-to-do.md">coding</a>
</h3>
`;


const
	menuPeepsHtm = `
	<div style="width:20rem;"
<a href="#${ baseToDo }3-heritage/residents/alexander-patrick.md" >alexander Patrick</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/anderson-barbara.md" >anderson Barb</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/arburua-carmelita.md" >arburua Carm</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/beatty-martha-nell.md" >beatty Martha-Nell</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/benedict-yvonne.md" >benedict Yvonne</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/bissell-eleanor.md" >bissell Eleanor</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/brymner-jane.md" >brymner Jane</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/burke-bernie.md" >burke Bernie</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/conley-katherine.md" >conley Katherine</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/conn-susan.md" >conn Ausan</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/copeland-harry.md" >copeland Harry</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/cornyn-paula.md" >cornyn Paula</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/coughlan-erika.md" >coughlan Erika</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/dugliss-lucia.md" >dugliss Lucia</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/dugliss-rod.md" >dugliss Rod</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/dy-betty.md" >dy Betty</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/ertola-shirley.md" >ertola Shirley</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/fischer-pamela.md" >fischer Pamela</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/forman-marcia.md" >forman Marcia</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/fraps-june.md" >fraps June</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/graham-gene.md" >graham Gene</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/hanley-linda.md" >hanley Linda</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/hanley-tony.md" >hanley Tony</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/harris-mary-liz.md" >harris Mary Liz</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/hoff-aggie.md" >hoff Aggie</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/howard-dr-doris.md" >howard-Doris</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/hulting-patsy.md" >hulting Patsy</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/jacobs-margaret.md" >jacobs Margaret</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/johnson-margaret.md" >johnson Margaret</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/jordan-elizabeth.md" >jordan Elizabeth</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/kaufman-monique.md" >kaufman Monique</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/kirkpatrick-kathy.md" >kirkpatrick Kathy</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/learned-gloria.md" >learned Gloria</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/lee-ivy.md" >lee Ivy</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/leichum-karl.md" >leichum Karl</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/leichum-lillemor.md" >leichum Lillemor</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/lindlow-gail.md" >lindlow Gail</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/lloyd-gisela.md" >lloyd Gisela</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/loo-katie.md" >loo Katie</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/ludwig-jay.md" >ludwig Jay</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/luopajarvi-sisi.md" >luopajarvi Sisi</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/mansouri-midge.md" >mansouri Midge</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/mcevoy-rita.md" >mcevoy Rita</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/moore-sheila.md" >moore Sheila</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/morris-anne.md" >morris Anne</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/mossi-atilio-_til_.md" >mossi Til</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/moughan-terry.md" >moughan Terry</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/narron-kay.md" >narron Kay</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/nolan-liz.md" >nolan Liz</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/nolan-marty.md" >nolan Marty</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/ozsogomonyan-nancy.md" >ozsogomonyan Nancy</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/petersen-marianne.md" >petersen Marianne</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/pieck-marianna.md" >pieck Marianna</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/plusa-genevieve.md" >plusa Genevieve</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/rush-patrick.md" >rush Patrick</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/sabini-ernie.md" >sabini Ernie</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/segrin-robert.md" >segrin Robert</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/sharp-linda.md" >sharp Linda</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/skootsky-gary.md" >skootsky Gary</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/skootsky-kristine.md" >skootsky Kristine</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/standing-jane.md" >standing Jane</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/stent-nancy-c.md" >stent Nancy</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/tim-kay.md" >tim Kay</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/torres-martha.md" >torres Martha</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/van-den-berg-mercedes.md" >van-den-berg Mercedes</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/voyles-stela.md" >voyles Stela</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/wake-marion.md" >wake Marion</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/wentker-fred.md" >wentker Fred</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/wentker-jo-ann.md" >wentker Jo-Ann</a>&nbsp;
<a href="#${ baseToDo }3-heritage/residents/zagorites-flora.md" >zagorites Flora</a>&nbsp;

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

