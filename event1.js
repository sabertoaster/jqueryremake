//event1
function alertGender(object) {
    let label_name = "label." + object.classList[0];
    var label = document.querySelector(label_name);
    alert(`Bạn đã chọn giá trị: ${label.innerHTML}`);
}
//event2
function uploadImage() {
    var value = document.querySelector("#textarea").value;
    var path = document.querySelector("#image_display-input");
    // path.value = value;
    console.log(path.value);
}
//event3
function textConcatenation() {
    var text1 = document.querySelector("#text_concatenation-1").value;
    var text2 = document.querySelector("#text_concatenation-2").value;
    var text = document.querySelector("#text_concatenation-display");
    text.innerHTML = text1 + " " + text2;
}
//event4
function replaceText() {
    var displayText = [];
    var displayText_index = 0;
    for (var i = 1; i <= 3; i++) {
        let myId = `input.language${i}`;
        if (document.querySelector(myId).checked) {
            let label_name = `label.${document.querySelector(myId).classList[0]}`;
            var label = document.querySelector(label_name).innerHTML;
            displayText[displayText_index] = label;
            displayText_index++;
        }
    }
    console.log(displayText);
    document.querySelector("#textDisplay").innerHTML = displayText.join(', ');
}
//event5 *done*
//event6
function combobox__colorChanger() {
    var colorDisplay = document.querySelector("#combo__box-color_display");
    if (document.querySelector("#combo__box-input").value == "One") {
        colorDisplay.style.backgroundColor = "black";

    }
    if (document.querySelector("#combo__box-input").value == "----") {
        colorDisplay.style.backgroundColor = "#FFD966";
    }

}
//event7
function combobox__notify() {
    alert(`Bạn đã thay đổi giá trị của combo box`);
}
//event8
function isValidColor() {
    var text1 = document.querySelector("#text_concatenation-1").value;
    var text2 = document.querySelector("#text_concatenation-2").value;
    var s = new Option().style;
    // return 'false' if color wasn't assigned
    s.color = text1;
    var colorChecker1 = s.color == text1.toLowerCase();
    // return 'false' if color wasn't assigned
    s.color = text2;
    var colorChecker2 = s.color == text2.toLowerCase();
    console.log(colorChecker1, colorChecker2);
    if (!colorChecker1 && colorChecker2) {
        var myArr = document.querySelectorAll(".color_checker");
        for (let i = 0; i < myArr.length; i++) {
            myArr[i].style.backgroundColor = text2;
        }
    } else if (colorChecker1 && !colorChecker2) {
        var myArr = document.querySelectorAll(".color_checker");
        for (let i = 0; i < myArr.length; i++) {
            myArr[i].style.backgroundColor = text1;
        }
    }
}

function textConcatenation__isValidColor() {
    isValidColor();
    textConcatenation();
}

//event9
function detectBrowser() {
    var result = '';
    const date = new Date();
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        result = 'Opera';
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        result = 'Chrome';
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        result = 'Safari';
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        result = 'Firefox';
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        result = 'IE'; //crap
    } else {
        result = 'Unknown';
    }
    if (result == document.querySelector("#browser").value) {
        alert(`Đúng trình duyệt ${hour}:${minutes}:${seconds}`)
    } else alert(`Sai trình duyệt ${day}/${month}/${year}`)
}

//event10
var origin = document.querySelector(".color_checker").outerHTML;
function addTextBox() {
    if (document.querySelector("#textarea").value == "Add textbox") {
        var prototypeTextBox = document.querySelector(".color_checker").outerHTML;
        var position = prototypeTextBox.indexOf(">")+1;
        var output = [prototypeTextBox.slice(0, position), `<textarea style="width:90%"></textarea>`, prototypeTextBox.slice(position)].join('');
        for (let i = 0; i < document.querySelectorAll(".color_checker").length; i++) {
            document.querySelectorAll(".color_checker")[i].outerHTML = output;
        } 
        
    } else if (document.querySelector("#textarea").value == "Remove textbox") {
        for (let i = 0; i < document.querySelectorAll(".color_checker").length; i++) {
            document.querySelectorAll(".color_checker")[i].outerHTML = origin;
        } 
    }
}