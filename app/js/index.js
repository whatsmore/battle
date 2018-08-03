/**
 * Created by whats_more on 2018/3/29.
 */
const HEIGHT = 60;
const WIDTH = 80;
const SPEED = 1;
const PERSON_INFO = `@`;
const MONSTER_INFO = `Ж`;
const BACKGROUND_INFO = `。`;
const MONSTER_NUMBER = 10;
const BATTLEFIELD = $(`#battlefield`).html();

//location info
let now_location_last_info = BACKGROUND_INFO;
let now_location = [0, 0];
let scene = `map`;
let lhe = [];
let rhe = [];

initMap();
initMonster();
// walk(`right`, SPEED);
intoBattle()

$(document).keydown(function (event) {
    if (`map` === scene) {
        walkEvent(event.keyCode)
    } else if (`battle` === scene) {
        battleEvent(event.keyCode)
    }
});

function battleEvent(key_code) {
    if (`F1` === ckctv(key_code)) {
        endBattle();
    }else if(`Spacebar` === ckctv(key_code)){
        shoot();
    }else{
        generateEnergy(key_code);
    }
    
}
// $("#msg").hover(function(){
//     $(this).fadeOut(1000);
//   });
function shoot() {
    let msg = $(`#msg`);
    msg.html(`火球术`);
    msg.css(`display`,`block`);
    msg.fadeOut(1000);
    let damage = lhe.length+rhe.length;
    let e_1_hp = $(`#enemy_1_hp`);
    e_1_hp_value = e_1_hp.html()-damage;
    e_1_hp.html(e_1_hp_value>=0?e_1_hp_value:0);
    cleanEnergy();
    if(e_1_hp_value<=0){
        endBattle();
    }
}
function generateEnergy(key_code) {
    let value = ckctv(key_code);
    pushEnergyToHand(value, gev(value), getHandArea(value));
}
function getHandArea(value) {
    return getHandAreaByValue(value);
}
function gev(value) {
    return getEnergyValue(value);
}
function cleanEnergy(area){
    if(HAND_AREA.L === area){
        let lma = $(`#lh_magic_area`);
        lma.html(``);
        lhe = [];
        return;
    }else if(HAND_AREA.R === area){
        let rma = $(`#rh_magic_area`);
        rma.html(``);
        rhe = [];
        return;
    }else{
        cleanEnergy(HAND_AREA.L);
        cleanEnergy(HAND_AREA.R);
    }
}
function pushEnergyToHand(value, energy, area) {
    let lma = $(`#lh_magic_area`);
    let rma = $(`#rh_magic_area`);
    let ma, he;
    if (HAND_AREA.L === area) {
        ma = lma;
        he = lhe;
    } else if (HAND_AREA.R === area) {
        ma = rma;
        he = rhe;
    }
    he.push(value);
    ma.append(energy);
}
function walkEvent(key_code) {
    if (`W` === ckctv(key_code)) {
        walk(`up`, SPEED);
    } else if (`A` === ckctv(key_code)) {
        walk(`left`, SPEED);
    } else if (`S` === ckctv(key_code)) {
        walk(`down`, SPEED);
    } else if (`D` === ckctv(key_code)) {
        walk(`right`, SPEED);
    }
}

function initMonster() {
    let monster_x_list = getRandomNumber(0, WIDTH, MONSTER_NUMBER);
    let monster_y_list = getRandomNumber(0, HEIGHT, MONSTER_NUMBER);
    for (let i = 0; i < MONSTER_NUMBER; i++) {
        changePixel([monster_x_list[i], monster_y_list[i]], MONSTER_INFO);
    }
}
function getRandomNumber(min, max, count) {
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push(getOneRandomNumber(min, max))
    }
    return result;
}
function getOneRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function intoBattle() {
    scene = `battle`;
    $(`#map`).addClass(`disappear`);
    let btf = $(`#battlefield`);
    btf.removeClass(`disappear`);
    btf.html(BATTLEFIELD);
}
function endBattle() {
    scene = `map`;
    $(`#map`).removeClass(`disappear`);
    $(`#battlefield`).addClass(`disappear`);
}
function initMap() {
    let map = $(`#map`);
    $(`#battlefield`).addClass(`disappear`);
    let line_arr = new Array(WIDTH).fill(BACKGROUND_INFO);
    for (let i = 0; i < HEIGHT; i++) {
        map.append(`<div id="l${i}" class="line">${line_arr.join("")}</div>`);
    }
    let line = $(`.line`);
    line.height(`10px`);
}

function walk(direction, pixel) {
    changePixel(now_location, now_location_last_info);
    locationMove(direction, pixel);
    changePixel(now_location, PERSON_INFO);
    if (MONSTER_INFO === now_location_last_info) {
        intoBattle()
    }
}

function changePixel(now_location, info) {
    let x = now_location[0];
    let y = now_location[1];
    let line = $(`#l` + y);
    let line_info = line.html();
    let left = line_info.substring(0, x);
    let right = line_info.substring(x + 1);
    line.html(left + info + right);
}

function locationMove(direction, pixel) {
    let x = now_location[0];
    let y = now_location[1];
    if (`up` === direction) {
        y -= pixel;
    } else if (`down` === direction) {
        y += pixel;
    } else if (`left` === direction) {
        x -= pixel;
    } else if (`right` === direction) {
        x += pixel;
    }
    if (x < 0) {
        x = 0;
    } else if (x > WIDTH - 1) {
        x = WIDTH - 1;
    }
    if (y < 0) {
        y = 0;
    } else if (y > HEIGHT - 1) {
        y = HEIGHT;
    }
    now_location = [x, y];
    now_location_last_info = getInfo(now_location);
}
function getInfo(now_location) {
    let x = now_location[0];
    let y = now_location[1];
    let line_info = $(`#l` + y).html();
    return line_info.substr(x, 1);
}

function ckctv(key_code) {
    return getKeyCodeValue(key_code);
}



