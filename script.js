
// NAV BAR - ACTIVE 


const navbar = document.getElementById('menu-list');
var navClick = navbar.getElementsByClassName("nav-click");
for (var i = 0; i < navClick.length; i++) {

  navClick[i].addEventListener("click", function() {
  var currentPage = document.getElementsByClassName("current");
  currentPage[0].className = currentPage[0].className.replace(" current", "");
  this.className += " current";
  });
}

const navList = document.querySelectorAll('nav ul li a')
const sectionTags = document.querySelectorAll('section')

window.addEventListener('scroll', () => {
	
	let currentView = '';
	sectionTags.forEach(section => {
		let sectionTop = section.offsetTop;
		if(scrollY >= sectionTop - 150){
			currentView = section.getAttribute('id')
		}
	});
  navList.forEach(li => {
		li.classList.remove('current');
		document.querySelector('nav ul li a[href*= '+ currentView +']').classList.add('current')

	})
})


// NAVBAR SCROLL

let scrolled = false;

window.onscroll = function () {
if (window.pageYOffset > 100) {
	navbar.classList.remove('top');
	if (!scrolled) {
		navbar.style.transform = 'translateY(-70px)';
	}
	setTimeout(function () {
		navbar.style.transform = 'translateY(0px)';
		scrolled = true;
	}, 200);
} else {
	navbar.classList.add('top');
	scrolled = false;
}
};
// Smooth Scrolling
$('#menu-list a, .btn, #view_work').on('click', function (e) {
if (this.hash !== '') {
	e.preventDefault();

	const hash = this.hash;

	$('html, body').animate(
		{
			scrollTop: $(hash).offset().top - 100,
		},
		800
	);
}
});

// ------------


// CONTACT FORM
const createForm = document.getElementById('create-form')
const contactForm = document.getElementById('contact-a')
const clickHere = document.getElementById('click-here')
const pointDown = document.getElementById('south-arrow')


createForm.addEventListener('click', () => {
	if (clickHere.innerHTML == 'Click Here') {
		contactForm.classList.remove('hidden')
		contactForm.classList.add('visible')
		clickHere.innerHTML = 'Close Form'
		clickHere.style.color = 'green'
		pointDown.classList.remove('hidden')
	} else {
		contactForm.classList.add('hidden');
		contactForm.classList.remove('visible');
		clickHere.innerHTML = 'Click Here'
		clickHere.style.color = 'white'
		pointDown.classList.add('hidden')

	}

})

const faPen = document.querySelector('.fa-pen');

// SPLIT SCREEN

const leftSide = document.querySelector('.left');
const rightSide = document.querySelector('.right');
const containerBody = document.querySelector('.container01');

leftSide.addEventListener('mouseenter', () => {
  containerBody.classList.add('hover-left');
})

leftSide.addEventListener('mouseleave', () => {
  containerBody.classList.remove('hover-left');
})

rightSide.addEventListener('mouseenter', () => {
  containerBody.classList.add('hover-right');
})

rightSide.addEventListener('mouseleave', () => {
  containerBody.classList.remove('hover-right');
  containerBody.classList.add('mouse-leave');
})


			// FRONT-END LIST
			const projectObjectList = [
				{
					index: 1,
					id: 'p1',
					category: 'FRONT-END PROJECT',
					title: "E-COMMERCE WEBSITE",
					img: "media/images/projects/burpline_e_commerce.JPG",
					link: "https://afamjoe.github.io/burpline_e-commerce/",
					videoLink: "media/video/01_burpline_website.mp4",
					gitLink: "https://github.com/AfamJOE/burpline_e-commerce",
					folderLink:"01_e_commerce",
					briefLink:'media/images/brief/01_e_commerce/e_commerce_brief.jpg',
					
				},
				
				{
					index: 2,
					id: 'p2',
					category: 'FRONT-END PROJECT',
					title: "PORTFOLIO WEBSITE",
					img:  "media/images/projects/portfolio.JPG",
					link: "https://www.youtube.com/watch?v=u20TmPII8eE&ab_channel=Nas-Topic",
					videoLink: "media/video/01_burpline_website.mp4",
					gitLink: "here",
					folderLink:"02_portfolio",
					briefLink:'media/images/brief/02_portfolio/portfolio_brief.jpg',

				},
				
			]


			const projectList = document.getElementById('project_list')
      

			for (let index = 0; index < projectObjectList.length; index++) {
				const element = projectObjectList[index];
				let projectItem =document.createElement('div')
				projectItem.index = `${element.index}`
				projectItem.id = `${element.id}`
				projectItem.category = `${element.category}`
				projectItem.title = `${element.title}`
				projectItem.img = `${element.img}`
				projectItem.link = `${element.link}`
				projectItem.video = `${element.videoLink}`
				projectItem.gitLink = `${element.gitLink}`
				projectItem.briefLink = `${element.briefLink}`
				projectItem.folderLink = `${element.folderLink}`


				projectItem.innerHTML = `
				
				<div class="item">
				<div class="item-image">
					<img src="${projectItem.img}" alt="it01" />
				</div>
				<div class="item-text">
					<div class="item-text-wrap">
						<p class="item-text-category">${projectItem.category}</p>
						<h2 class="item-text-title">${projectItem.title}</h2>
						<div>
						<a
						href="${projectItem.briefLink}" class="btn-dark btn-height scrum_btn" data-lightbox="${projectItem.folderLink}" data-title=''>BRIEF
				   </a>
					 </div>
					 <div>
						<a
							href="${projectItem.link}"
							target="_blank"
						>
						<button class="btn-dark btn-height site-class">SITE</button>
					 </a>
					 </div>
					 <div>
					 <a href="#" class="btn-dark btn-height project_btn" id=${index}btn >VIDEO</a>							
					 </div>
					 <div>
					 <a
						 href="${projectItem.gitLink}"
						 target="_blank"
					 >
					 <button class="btn-dark btn-height git-class ">GITHUB</button>
					</a>
					</div>
					</div>
				</div>
			</div>
			
					<div class="video-container video-background" id= ${index}cont>
					<span class="close" id= ${index}close>&#10006;</span>
							<video muted src="${projectItem.video}" controls class="video_stop" id =${index}vid ></video>
						</div>
				`
				projectList.appendChild(projectItem)
				
				// VIDEO POPUP
				
			
					 const project_btn = document.getElementById(`${index}btn`);
					 const videoContainer = document.getElementById(`${index}cont`);
					 const stopVideo = document.getElementById(`${index}vid`);
					 const close = document.getElementById(`${index}close`);

					 project_btn.addEventListener('click', (e) => {
						videoContainer.classList.add('show');
						stopVideo.play()
					});
		
					close.addEventListener('click', () => {
						videoContainer.classList.remove('show');
						stopVideo.pause()
					});
         
		
					videoContainer.addEventListener('click', () => {
						videoContainer.classList.remove('show');
						stopVideo.pause()
					});
         

					}
					
			
			// SCRUM LIST
			
			const scrumObjectList = [
				{
					index: 3,
					id: 's1',
					category: 'SCRUM',
					title: "BURPLINE- MOBILE COUPON GAME",
					img: "media/images/projects/burpline_scrum.jpg",
					link: "https://www.youtube.com/watch?v=u20TmPII8eE&ab_channel=Nas-Topic",
					videoLink:  "media/video/02_burpline_scrum.mp4",
					folderLink:"03_burpline",
					briefLink:'media/images/brief/03_burpline/burpline_brief.jpg'
				},
				
			]


			const scrumList = document.getElementById('scrum_list')
      

			for (let index = 0; index < scrumObjectList.length; index++) {
				const element = scrumObjectList[index];
				let scrumItem =document.createElement('div')
				scrumItem.index = `${element.index}`
				scrumItem.id = `${element.id}`
				scrumItem.category = `${element.category}`
				scrumItem.title = `${element.title}`
				scrumItem.img = `${element.img}`
				scrumItem.link = `${element.link}`
				scrumItem.video = `${element.videoLink}`
				scrumItem.brief = `${element.briefLink}`
				scrumItem.folder = `${element.folderLink}`


				scrumItem.innerHTML = `
				
				<div class="item">
				<div class="item-image">
					<img src="${scrumItem.img}" alt="it01" />
				</div>
				<div class="item-text">
					<div class="item-text-wrap">
						<p class="item-text-category">${scrumItem.category}</p>
						<h2 class="item-text-title">${scrumItem.title}</h2>
						<a
						href="${scrumItem.brief}" class="btn-dark btn-height scrum_btn" data-lightbox="${scrumItem.folder}" data-title=''>BRIEF
				   </a>
					 <div>
					 <a href="#" class="btn-dark btn-height scrum_btn" id=${index}btn01 >VIDEO</a>							
					 </div>
					 <div>
					 <a href= "media/images/slide_images/scrum/01_sprint.jpg" class="btn-dark btn-height scrum_btn" id=${index}image data-lightbox="slide_images" data-title='HOMEPAGE: UPDATE UI BASED OF THE SPRINT REVIEW OUTCOME'>IMAGES</a>							
					 <a href= "media/images/slide_images/scrum/02_sprint.jpg" data-lightbox="slide_images" data-title='GAME SUMMARY: ENHANCE BUTTON FEATURES INTRODUCED AS SOLUTION TO BE ADDED TO THE PRODUCT BACKLOG DURING THE SPRINT RETROSPECTIVE'></a>							
					 <a href= "media/images/slide_images/scrum/03_sprint.jpg" data-lightbox="slide_images" data-title='GAME PLAY: UPDATED TO A MORE FLUID GAME PLAY WAS ACHIEVED AS A SPRINT GOAL'></a>							
					 <a href= "media/images/slide_images/scrum/04_sprint.jpg" data-lightbox="slide_images" data-title='CHOOSE ITEMS: IN ADDITION TO COUPONS, THE IN-APP PURCHASE ELEMENTS WERE HIGHLIGHTED AS NECESSARY TO ACHIEVE 'DEFINITION OF DONE' FOR AN INCREMENT'></a>							
									
					 </div>
					</div>
				</div>
			</div>
			
					<div class="video-container video-background" id= ${index}cont01>
					<span class="close" id= ${index}close01>&#10006;</span>
							<video muted src="${scrumItem.video}" controls class="video_stop" id =${index}vid01 ></video>
						</div>
				`
				scrumList.appendChild(scrumItem)
				
				// SCRUM - VIDEO POPUP
				
			
					 const scrum_btn = document.getElementById(`${index}btn01`);
					 const scrumVideoContainer = document.getElementById(`${index}cont01`);
					 const scrumStopVideo = document.getElementById(`${index}vid01`);
					 const closeScrum = document.getElementById(`${index}close01`);

					 scrum_btn.addEventListener('click', (e) => {
						scrumVideoContainer.classList.add('show');
						scrumStopVideo.play()
					});
		
					closeScrum.addEventListener('click', () => {
						scrumVideoContainer.classList.remove('show');
						scrumStopVideo.pause()
					});
		
					scrumVideoContainer.addEventListener('click', () => {
						scrumVideoContainer.classList.remove('show');
						scrumStopVideo.pause()
					});
         

					}
					
					


	
