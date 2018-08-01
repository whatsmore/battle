const HAND_AREA = { L: "left", R: "right" };
const LEFT_HAND_VALUE = ["Q", "W", "E", "R", "T",
    "A", "S", "D", "F", "G",
    "Z", "X", "C", "V"];
const RIGHT_HAND_VALUE = ["Y", "U", "I", "O", "P",
    "H", "J", "K", "L",
    "B", "N", "M"];

function getHandAreaByValue(value) {
    if (LEFT_HAND_VALUE.indexOf(value) >= 0) {
        return HAND_AREA.L;
    } else if (RIGHT_HAND_VALUE.indexOf(value) >= 0) {
        return HAND_AREA.R;
    }
}