const sqrBtn = document.querySelector('#sqr-btn');

const sqrNum = () => {
    const number = document.querySelector('#square').value;
    alert(number * number);
};

sqrBtn.addEventListener('click', sqrNum);

const halfBtn = document.querySelector('#half-btn');

const halfNum = () => {
    const number = document.querySelector('#half').value;
    alert(number / 2);
}

halfBtn.addEventListener('click', halfNum);

const prcBtn = document.querySelector('#prc-btn');

const prcNum = () => {
    const numberA = document.querySelector('#percent1').value;
    const numberB = document.querySelector('#percent2').value;
    alert(numberA * 100 / numberB + "%");
}

prcBtn.addEventListener('click', prcNum);

const areaBtn = document.querySelector('#area-btn');

const areaCircle = () => {
    const number = document.querySelector('#area').value;
    alert(Math.PI * number * number);
}

areaBtn.addEventListener('click', areaCircle);