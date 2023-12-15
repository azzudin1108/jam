const hours = document.getElementById('jam');
const minutes = document.getElementById('menit');
const second = document.getElementById('detik');
const digital = document.getElementById('digital');

function startTime() {
    const time = new Date();
    let jam = time.getHours();
    let menit = time.getMinutes();
    let detik = time.getSeconds();

    hours.style.rotate = ((jam * 30) + (menit * 0.5)).toString() + 'deg';
    second.style.rotate = (detik * 6).toString() + 'deg';
    minutes.style.rotate = (menit * 6).toString() + 'deg';

    jam = checkTime(jam);
    menit = checkTime(menit);
    detik = checkTime(detik);

    digital.innerHTML = jam + ':' + menit + ':' + detik;

    setTimeout(startTime, 1000);
}

const checkTime = a => {
    if (a < 10) {
        return a = '0' + a;
    } else {
        return a;
    }
}


startTime();