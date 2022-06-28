// CALCULOS
let outScree = document.querySelector('.output input');
mode = 'calc';

function insert(num) {
    outScree.value += num;
    if (mode == 'equal'){
        outScree.value = '';
        outScree.value += num;
        mode = 'calc';
    };
};

function crl(){
    outScree.value = '';
};

function del(){
    outScree.value = outScree.value.slice(0, -1);
    if (mode == 'equal'){
        outScree.value = '';
    };
};

function calc() {
    try{
        outScree.value = eval(outScree.value);
        mode = 'equal';
    } catch (err){
        outScree.value = 'invalido';
        mode = 'equal';
    };
};

//CORES

let menuIcon = document.querySelector('.icon'), 
    menu = document.querySelector('.menu');

menuIcon.onclick = function () {
    menu.classList.toggle('open');
};

let blueTheme = Document.querySelector('.blue'),
    orangeTheme = document.querySelector('.orange'),
    redTheme = document.querySelector('.red'),
    purpleTheme = document.querySelector('.purple'),
    pinkTheme = document.querySelector('.pink');

blueTheme.onclick = function(){
    Document.body.classList.remove('orange');
    Document.body.classList.remove('red');
    Document.body.classList.remove('purple');
    Document.body.classList.remove('pink');
    Document.body.classList.add('blue');
    menu.classList.remove('open');
};

blueTheme.onclick = function(){
    Document.body.classList.remove('blue');
    Document.body.classList.remove('red');
    Document.body.classList.remove('purple');
    Document.body.classList.remove('pink');
    Document.body.classList.add('orange');
    menu.classList.remove('open');
};

blueTheme.onclick = function(){
    Document.body.classList.remove('blue');
    Document.body.classList.remove('orange');
    Document.body.classList.remove('purple');
    Document.body.classList.remove('pink');
    Document.body.classList.add('red');
    menu.classList.remove('open');
};

blueTheme.onclick = function(){
    Document.body.classList.remove('blue');
    Document.body.classList.remove('orange');
    Document.body.classList.remove('red');
    Document.body.classList.remove('pink');
    Document.body.classList.add('puple');
    menu.classList.remove('open');
};

blueTheme.onclick = function(){
    Document.body.classList.remove('blue');
    Document.body.classList.remove('orange');
    Document.body.classList.remove('red');
    Document.body.classList.remove('purple');
    Document.body.classList.add('pink');
    menu.classList.remove('open');
};