//your JS code here. If required.
document.querySelectorAll('.square').forEach(square=>{
	square.addEventListener('mouseover', ()=>{
		square.style.backgroundColor='#1D1D1D';
	});
	square.addEventListner('mouseout', () =>{
		setTimeout(()=>{
			sqaure.style.backgroundColor='#ccc';
		}, 1000);
	});
})