const second = document.querySelector('.seconds');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
function updateTime() {
	let date = new Date();

	let sec = date.getSeconds();
	let min = date.getMinutes();
	let hr = date.getHours();
	let millsec = date.getMilliseconds();
	hour.style.transform = `rotate(${
		(hr + min / 60 + sec / 3600 + millsec / 216000) * 30
	}deg)`;
	minute.style.transform = `rotate(${
		(min + sec / 3600 + millsec / 216000) * 6
	}deg)`;
	second.style.transform = `rotate(${(sec + millsec / 216000) * 6}deg)`;
}
setInterval(updateTime, 1000);
