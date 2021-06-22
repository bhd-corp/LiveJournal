function send () {
	let a = document.getElementById('i_b').value;
	let out = document.querySelector('.out');
	let user = document.getElementById('user');
	out.innerHTML = a;
	user.style.display = 'flex';
}
document.getElementById('fg').onclick = function () {
	let inp = document.getElementById('i_b');
	let sub = document.getElementById('i_bs');
	let div = document.getElementById('div');
	let df = document.getElementById('login');
	inp.style.display = 'flex';
	df.style.display = 'none';
	div.style.display = 'none';
	sub.style.display = 'flex';
}
document.getElementById('fa').onclick = function() {
	let home = document.getElementById('div');
	let su = document.getElementById('i_bs');
	let rt = document.getElementById('i_b');
	let y = document.getElementById('login');
	div.style.display = 'block';
	rt.style.display  = 'none';
	su.style.display = 'none';
	y.style.display = 'none';
}
document.getElementById('fd').onclick = function() {
	let log = document.getElementById('login');
	let hom = document.getElementById('div');
	let s = document.getElementById('i_bs');
	let r = document.getElementById('i_b');
	log.style.display = 'block';
	hom.style.display = 'none';
	s.style.display = 'none';
	r.style.display = 'none';
}
document.querySelector('.input_sub').onclick = function () {
	let hme = document.getElementById('div');
	let u = document.getElementById('i_bs');
	let t = document.getElementById('i_b');
	let s = document.getElementById('login');
	let ed = document.querySelector('.ed');
	hme.style.display = 'block';
	ed.innerHTML = 'Thanks for login. Now you can write your blog';
	u.style.display  = 'none';
	t.style.display = 'none';
	s.style.display = 'none';
}