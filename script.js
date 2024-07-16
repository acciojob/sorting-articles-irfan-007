//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let list=document.getElementById("band");
bands.sort((a, b) => {
if(rem(a)<rem(b)) return -1;
if(rem(a)>rem(b)) return 1;
return 0;
});

function rem(word){
	const arr=word.split(" ");
	if(arr[0]=="An" || arr[0]=="The" || arr[0]=="A")
		return arr.slice(1).join(" ");
	return arr.join(" ");
}

for(let t of bands){
	let li=document.createElement('li');
	li.innerText=t;
	list.appendChild(li);
}