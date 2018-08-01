const VALUE_ENERGY_MAP = {
    //pure
    "Q":"¤",//(light)",
    "W":"～",//(gas)",
    "E":"≈",//(water)",
    "R":"⊙",//(soil)",
    "T":"＋",//(heal))",
    "S":"◎",//(shield)",
    //evil
    "H":"々",//(lightning)",
    "J":"б",//(wind)",
    "K":"∠",//(metal)",
    "Y":"д",//(thunder)",
    "U":"●",//(stone)",
    "I":"§",//(ice)",
    "O":"★",//(dark)",
    "P":"д",//(fire)",
};
function getEnergyValue(value) {
    return VALUE_ENERGY_MAP[`${value}`];
}