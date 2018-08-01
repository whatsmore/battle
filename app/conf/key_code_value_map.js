const KEY_CODE_VALUE_MAP = {
    "k65": "A",
    "k66": "B",
    "k67": "C",
    "k68": "D",
    "k69": "E",
    "k70": "F",
    "k71": "G",
    "k72": "H",
    "k73": "I",
    "k74": "J",
    "k75": "K",
    "k76": "L",
    "k77": "M",
    "k78": "N",
    "k79": "O",
    "k80": "P",
    "k81": "Q",
    "k82": "R",
    "k83": "S",
    "k84": "T",
    "k85": "U",
    "k86": "V",
    "k87": "W",
    "k88": "X",
    "k89": "Y",
    "k90": "Z",
    "k48": "0",
    "k49": "1",
    "k50": "2",
    "k51": "3",
    "k52": "4",
    "k53": "5",
    "k54": "6",
    "k55": "7",
    "k56": "8",
    "k57": "9",
    "k96": "0",
    "k97": "1",//小数字键盘
    "k98": "2",
    "k99": "3",
    "k100": "4",
    "k101": "5",
    "k102": "6",
    "k103": "7",
    "k104": "8",
    "k105": "9",
    "k106": "*",
    "k107": "+",
    "k108": "Enter",
    "k109": "-",
    "k110": ".",
    "k111": "/",
    "k112": "F1",
    "k113": "F2",
    "k114": "F3",
    "k115": "F4",
    "k116": "F5",
    "k117": "F6",
    "k118": "F7",
    "k119": "F8",
    "k120": "F9",
    "k121": "F10",
    "k122": "F11",
    "k123": "F12",
    "k8": "BackSpace",
    "k9": "Tab",
    "k12": "Clear",
    "k13": "Enter",
    "k16": "Shift",
    "k17": "Control",
    "k18": "Alt",
    "k20": "Cape Lock",
    "k27": "Esc",
    "k32": "Spacebar",
    "k33": "Page Up",
    "k34": "Page Down",
    "k35": "End",
    "k36": "Home",
    "k37": "Left Arrow",
    "k38": "Up Arrow",
    "k39": "ight Arrow",
    "k40": "w Arrow",
    "k45": "Insert",
    "k46": "Delete",
    "k144": "Num Lock",
    "k186": ";:",
    "k187": "=+",
    "k188": ",<",
    "k189": "-_",
    "k190": ".>",
    "k191": "/?",
    "k192": "~",
    "k219": "[{",
    "k220": "\|",
    "k221": "]}",
    "k222": "\'\""
};
function getKeyCodeValue(key_code) {
    return KEY_CODE_VALUE_MAP[`k${key_code}`];
}