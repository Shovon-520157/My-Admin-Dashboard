//________ side bar dropdown start ________//
let dropdown = document.querySelectorAll('.dropdown');
for(let i = 0; i<dropdown.length; i++) {
	dropdown[i].addEventListener('click', ()=> {
		let dropdown_item = document.querySelectorAll('.dropdown-item');
        let right_icon = document.querySelectorAll('.sidebar ul li a .right-icon');
		dropdown_item[i].classList.toggle('active');
        right_icon[i].classList.toggle('active');
	})
}
//________ side bar dropdown end ________//


//________ one tap go to top start ________//
let top_scroller = document.querySelector(".top_scroller");
document.addEventListener("scroll", ()=> {
    let scroll = window.scrollY;
    if(scroll>10) {
        top_scroller.classList.add('fa_solid_viewer');
    }
    else {
        top_scroller.classList.remove('fa_solid_viewer');
    }
})

//_____ one click go to top btn _____/
top_scroller.addEventListener("click",()=> {
    window.scrollTo({top:0, behavior:'smooth'});
})
//________ one tap go to top end ________//


//________ side bar active ________//
// let navigation = document.querySelectorAll('.sidebar ul li a');
// navigation.forEach(items => {
// 	items.addEventListener('click', (e)=> {
// 		e.preventDefault();
// 		items.classList.add('active');
// 	})
// })

// for (let i = 0; i<=navigation.length; i++) {
// 	navigation[i].addEventListener('click', (e)=> {
// 		e.preventDefault();
// 		navigation[i].classList.remove('active');
// 		this.classList.add('active');
// 	})
// }


//________ Dark light start ________//
// const dark_light = document.querySelector('.dark_light');
// dark_light.addEventListener('click', ()=> {
// 	const dark_light = document.querySelector('.body').classList.toggle('active');
// 	const dark_light_txt = document.querySelector('.dark_light a');

// 	if(dark_light) {		
// 		dark_light_txt.innerHTML = 'Dark'
// 		document.querySelector('#dark_mode').style.display = 'block';
// 		document.querySelector('#light_mode').style.display = 'none';
// 	} else {
// 		dark_light_txt.innerHTML = 'Light';
// 		document.querySelector('#dark_mode').style.display = 'none';
// 		document.querySelector('#light_mode').style.display = 'block';
// 	}
// })
//________ Dark light end ________//