<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
		<meta charset="utf-8">
		<title>Woodlands Grave-Hopper</title>
		<meta name="description" content="Interactive map guide to The Woodlands Cemetery at 4000 Woodland Avenue, Philadelphia, PA 19104">
		<meta name="author" content="Michael Geise">
		<link href="https://fonts.googleapis.com/css?family=Italianno|Roboto:400,700" rel="stylesheet">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
		<link rel="stylesheet" type="text/css" href="woodlands/css/style.css">

		 <!-- Google Analytics -->
		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-12293005-1', 'auto');
			ga('send', 'pageview');

		</script>
		<!-- end Google Analytics -->
	</head>
	<body>
		<section class="header load">
			<div class="hero">
				<button type="button" class="btn btn-light float-right" data-toggle="modal" data-target="#about"><i class="fas fa-info-circle"></i></button>
				<h1>The Woodlands</h1>
				<p class="address">4000 Woodland Avenue,
					<br>Philadelphia, PA 19104</p>
				<p class="hint">Select a grave marker to learn about who lies beneath</p>
			</div>
			<div class="enter-button">
				<i class="fas fa-chevron-up"></i>
			</div>
		</section>
		<section id="map"></section>


<!-- Modals -->
		<div class="modal fade" id="about" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">About This Project</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<p class="infoText">This project was built as an interactive map guide to the beautiful Woodlands Cemetery at 4000 Woodland Avenue, Philadelphia, PA.</p>
						<p class="infoText">Click on grave markers to learn about the people who occupy the plots. Be sure to allow the browser to know your location to see where you are in the cemetary (<a href="https://www.wikihow.tech/Change-Your-Location-Sharing-Setting-in-Google-Chrome" target="_blank" rel="noopener noreferrer">how to share location in Chrome on iPhone</a>).</p>
						<p>Created by <a href="https://michaelgeise.com" title="Meet Michael Geise">Michael Geise</a></p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-success btn-lg btn-block" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

		<!-- John Hill Brinton, M.D. -->
		<div class="modal fade" id="j-brinton" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">John Hill Brinton, M.D.
							<br><small>(1832-1907), Section N, Lot #239-242</small></h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<img src="https://static1.squarespace.com/static/51ad165be4b095d664d87dfe/t/520273ede4b0deac401658da/1375892465799/display_image.php.jpeg?format=500w" class="img-fluid img-thumbnail" />
						<p class="infoText">This physician was the first curator of the U.S. Army Medical Museum (now the National Museum of Health and Medicine) and an influential surgeon during the Civil War. After Brinton received his medical degree from Jefferson Medical College in 1853, he worked as the chair of surgery at the University of Pennsylvania until 1861. At the beginning of the Civil War, Lincoln requested that Brinton serve as a brigadier surgeon of volunteers. He saw action in the battles of Fort Donaldson, Fort Henry, and Shiloh.</p>
						<p class="infoText">In the summer of 1862, Brinton began working in the office of the surgeon general in Washington, D.C., where he was asked to prepare The Surgical History of the Rebellion. This collection of surgical specimens from field surgeons during the war became the foundation of the U.S. Army Medical Museum. He was also a pioneer in the use of photography in medicine, recognizing the superior accuracy of photographed wounds to artist drawings for the purposes of teaching. This work led Brinton to become a leading authority on gunshot wounds. After the Civil War, he returned to Philadelphia's Jefferson Medical College and also chaired the committee on the Mutter Museum at the College of Physicians.</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-success btn-lg btn-block" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Wilson Eyre, Jr. -->
		<div class="modal fade" id="w-eyre" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Wilson Eyre, Jr.
							<br><small>(1858-1944), Section G, Lot #123-129</small></h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<img src="https://static1.squarespace.com/static/51ad165be4b095d664d87dfe/t/5203cce3e4b097413cf32ba5/1375980772272/WilsonEyre.jpg?format=300w" class="img-fluid img-thumbnail" />
						<p class="infoText">Eyre's work as an prominent American architect continues to mark Philadelphia's landscape today. Eyre spent his early childhood in Italy, but returned to the United States at age eleven. As a young man, he completed one year of study at MIT and by 1877, he was working in the architecture firm of James Peacock Sims. At Sims' death in 1882, Eyre began practicing independently.</p>
						<p class="infoText">It was not until 1911 that he formed another partnership, this time with John Gilbert McIlvaine. Much of Eyre's work was influenced by English residential architecture and he is best known for his numerous private house designs, including many in the Rittenhouse Square neighborhood. He also collaborated with other architects on the Benjamin Franklin Parkway (1900-1902) and the University of Pennsylvania Museum (1893). He served as a professor in the Department of Architecture at the University of Pennsylvania from 1890-94. House & Garden Magazine, which he founded and edited, served as a forum for the residential designs of the Philadelphia architectural community.</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-success btn-lg btn-block" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
		<!-- Mary Grew -->
		<div class="modal fade" id="m-grew" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Mary Grew
							<br><small>(1813-1896), Section C, Lot #559</small></h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<img src="https://static1.squarespace.com/static/51ad165be4b095d664d87dfe/t/5203d6b3e4b0cb9179d27b2d/1375983287395/Mary_Grew_c1863.jpg?format=300w" class="img-fluid img-thumbnail" />
						<p class="infoText">Born and educated in Hartford, Connecticut, Grew came to Philadelphia in 1834. An ardent abolitionist, she worked with Lucretia Mott in the Female Anti-Slavery Society. As a delegate to the World's Anti-Slavery Convention in London in 1840, Grew was excused from the floor for demanding to speak.</p>
						<p class="infoText">Grew dedicated herself to the pursuit of women's rights, defying societal norms and her father's wishes. She was President of the Pennsylvania Woman Suffrage Association, and eventually became a Unitarian preacher. John Greenleaf Whittier commemorated her achievements in one of his poems, with the line: "The way to make the world anew is just to grow - a Mary Grew!"</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-success btn-lg btn-block" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Samuel David Gross, M.D.-->
		<div class="modal fade" id="s-gross" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Samuel David Gross, M.D.
							<br><small>(1805-1884), Section CC, Lot #27</small></h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<img src="https://static1.squarespace.com/static/51ad165be4b095d664d87dfe/t/5203d74ae4b0494d1c8d465e/1375983435971/483px-Thomas_Eakins%2C_American_-_Portrait_of_Dr._Samuel_D._Gross_%28The_Gross_Clinic%29_-_Google_Art_Project.jpg?format=500w" class="img-fluid img-thumbnail" />
						<p class="infoText">Gross was the foremost surgeon in Philadelphia for much of the 19th century. He graduated from Jefferson Medical College in 1828 and moved to Easton, Ohio in 1830 to establish a private practice. During the same period, he taught at the Medical College of Ohio and then at the Louisville Medical Institute. When he returned to Philadelphia in 1856, he was appointed professor of surgery at his alma mater.</p>
						<p class="infoText">At Jefferson Medical College he published some of his most influential work, including System of Surgery (1859), which became one of the great surgical treatises of its day, and Manual of Military Surgery (1861), which was the standard operating manual for Civil War surgeons. Gross also founded the American Medical Association and the American Surgical Association while serving at Jefferson. He is depicted as the central figure in Thomas Eakins' painting "The Gross Clinic."</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-success btn-lg btn-block" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Jessie Wilcox Smith -->
		<div class="modal fade" id="j-smith" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Jessie Wilcox Smith 
							<br><small>(1863-1935), Section F, Lot #220</small></h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<img src="https://static1.squarespace.com/static/51ad165be4b095d664d87dfe/t/5203e965e4b0a080db2c6126/1375988070474/220px-Jessie_Willcox_Smith_cph.3c23073.jpg?format=300w" class="img-fluid img-thumbnail" />
						<p class="infoText">Renowned for her illustrations of children in magazines and books, Jessie Wilcox Smith only began drawing at the age of twenty. She had trained to become a kindergarten teacher but soon found that she was not suited to the job. One day she happened to attend a cousin's art lesson and discovered both a talent for and an interest in drawing. She left teaching and enrolled at the Pennsylvania Academy of Fine Arts in 1885, where she studied under Thomas Eakins.</p>
						<p class="infoText">In 1894, she enrolled in classes at the Drexel Institute taught by illustrator Howard Pyle. With Pyle's help and with the support of fellow aspiring artists, Violet Oakley and Elizabeth Shippen Green, Smith grew to be a prolific contributor to American magazines and books and one of the most popular graphic artists in the United States. Over the length of her career, she created covers for Harper's, Collier's, Good Housekeeping, Ladies Home Journal, and Women's Home Companion. She illustrated over 40 books, including, perhaps most famously, Charles Kingsley's The Water-Babies (1916), the original paintings of which are now held by the Library of Congress.</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-success btn-lg btn-block" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Francis Martin Drexel -->
		<div class="modal fade" id="f-drexel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Francis Martin Drexel (1792-1863), Anthony J. Drexel (1826-1893), and George Washington Childs Drexel
							<br><small>(1868-1944), Section L, Lot #190 (Drexel Mausoleum)</small></h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<img src="https://static1.squarespace.com/static/51ad165be4b095d664d87dfe/t/52028255e4b0a0eb1f1b1a7e/1375896152320/Drexel-Francis-A.jpg?format=500w" class="img-fluid img-thumbnail" />
						<p class="infoText">Francis Martin Drexel became a titan of international finance, but was born in Austria's Tyrol region and began his career as an artist. At the age of 25, Drexel immigrated to America in the pursuit of greater artistic opportunity. Shortly after his arrival in Philadelphia, Drexel's paintings were exhibited at the Pennsylvania Academy of the Fine Arts.</p>
						<p class="infoText">He travelled to South America, where he painted portraits of Bolivar and other leaders of newly independent republics. Drexel's experiences in South America and his fluency in German and Spanish eventually drew him into the world of international banking. In 1838, he opened the Drexel Bank on South Third Street in Philadelphia. This bank helped to finance the Mexican-American War by floating $49 million in war loans in 1846. Drexel trained two of his sons (Francis A. and Anthony J.) in the ways of banking, and the two eventually took the helm of Drexel and Company.</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-success btn-lg btn-block" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Francis Martin Drexel -->
		<div class="modal fade" id="t-evans" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Thomas Wiltberger Evans
							<br><small>(1823-1897), Section M, Lot #6-15</small></h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<img src="https://static1.squarespace.com/static/51ad165be4b095d664d87dfe/t/5203cc76e4b02f3210804765/1375980672655/220px-Thomas_Wiltberger_Evans.jpg?format=300w" class="img-fluid img-thumbnail" />
						<p class="infoText">Evans began his dental career in Philadelphia and pioneered the use of gold as cavity fillings. He exhibited his achievements at the Franklin Institute and received the first gold medal issued for such work. Evans' other dental accomplishments include introducing nitrous oxide as an anesthetic to Europe and the first use of vulcanite rubber as a base for dentures. Evans moved to Paris in 1848, and became dentist and confidante to Napoleon III and various other members of European royal families.</p>
						<p class="infoText">His patients enlisted Evans' talents in areas ranging from royal match-making to transmitting unofficial correspondence between kings. In fact, Evans assumed an active role in European deliberations on the American Civil War and is considered to have been "largely responsible for convincing Napoleon III not to recognize the Confederacy." Evans also clothed the Army of the Potomac during the first winter of the Civil War.</p>
						<p class="infoText">In Europe, he introduced the American ambulance to the French Army - a significant contribution to the French effort in the Franco-Prussian War. Meanwhile, Evans' Parisian real estate investments made him fabulously wealthy. When the Second Empire fell, he saved the French Empress Eugénie from angry Parisian mobs, smuggling her by carriage to England. Evans was married to Agnes Doyle, the daughter of John Doyle (Philadelphia). Agnes died in Paris, but Evans brought her back to Philadelphia for burial in The Woodlands Cemetery. At his death in 1897, Evans' left his estate to the University of Pennsylvania to found a Dental School and funds for a 90-foot granite obelisk to mark the Evans family tomb. The monument was designed by the Wilson Brothers of Philadelphia, but not completed until 1917. It has been classified as the tallest funerary monument in America.</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-success btn-lg btn-block" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>



		<!-- <div class="modal fade" id="t-baba" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Tatsui Baba
							<br><small>(1850-1888), Section G, Lot #130</small></h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<img src="https://static1.squarespace.com/static/51ad165be4b095d664d87dfe/t/52026474e4b0922f14f7898d/1375888501015/385px-Baba_Tatsui.jpg?format=500w" class="img-fluid img-thumbnail" />
						<p class="infoText">This statesman was an important figure in the Japanese democratic movement of the 19th century. Baba was educated at Yukichi Fukuzawa's private school (later Keio University) and received a degree from Temple Law School in England. When he returned to Japan in 1878, he embarked on a political career, which included founding the Kokuyukai Society and becoming a leader in the Jiyuto, or Liberal, Party with Taisuke Itagaki. Baba eventually left the party, but by that time he had been labeled a radical and was forbidden to speak publicly. In 1885, he was arrested on a charge of illegally purchasing explosives and spent several months in detention. When he was acquitted in 1886, he moved to the United States, eventually settling in Philadelphia. Baba continued his political activism, publishing a pamphlet in 1888 entitled "The Political Condition of Japan, showing the Despotism and Incompetency of the Cabinet and the Aims of the Popular Parties." He died that same year in Philadelphia.</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-success btn-lg btn-block" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div> -->

		<script src="woodlands/js/maps.js"></script>
		<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyChetOwaMCEikxbZIikRuJ20IorcIQgOxA&callback=initMap"> </script>
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
		<script src="https://code.jquery.com/mobile/1.5.0-alpha.1/jquery.mobile-1.5.0-alpha.1.min.js" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
		<script type="text/javascript">
			$(document).ready(function(){

				$(".enter-button").click(function(){
				    $(".header").removeClass("load");
				});
				$(document).on("scrollstart",function(){
				    $(".header").removeClass("load");
				});

				$("h1, .hint").click(function(){
				    $(".header").addClass("load");
				});
			});
		</script>
	</body>
</html>