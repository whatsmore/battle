const VALUE_ENERGY_MAP = {
    //pure
    "Q":"light",//¤
    "W":"gas",//～
    "E":"water",//≈
    "R":"soil",//⊙
    "T":"heal",//＋
    "S":"shield",//◎
    //evil
    "H":"lightning",//々
    "J":"wind",//б
    "K":"metal",//∠
    "Y":"thunder",//д
    "U":"stone",//●
    "I":"ice",//§
    "O":"dark",//★
    "P":"fire",//д
};
function getEnergyValue(value) {
    return VALUE_ENERGY_MAP[`${value}`];
}