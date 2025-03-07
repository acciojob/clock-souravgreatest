//your JS code here. If required.
let element=document.getElementById('timer');
let curr_time=new Date();
setInterval(
	function(){
		curr_time=new Date();
		element.innerHTML=curr_time.toLocaleString();
	},1000
)