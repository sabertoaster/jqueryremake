//event1
function alertGender(object) {
    let label_name = "label." + object.classList[0];
    var label = $(label_name).html();
    alert(`Bạn đã chọn giá trị: ${label}`);
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
    var text1 = $("#text_concatenation-1").val();
    var text2 = $("#text_concatenation-2").val();
    var text = $("#text_concatenation-display");
    text.html(text1 + " " + text2);
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
    var colorDisplay = $("#combo__box-color_display");
    var comboBoxInput = $("#combo__box-input");
    if (comboBoxInput.val() == "One") {
        colorDisplay.css("background-color", "black");
    }
    if (comboBoxInput.val() == "----") {
        colorDisplay.css("background-color", "#FFD966")
    }
}
//event7
function combobox__notify() {
    alert(`Bạn đã thay đổi giá trị của combo box`);
}
//event8
function isValidColor() {
    var text1 = $("#text_concatenation-1").val();
    var text2 = $("#text_concatenation-2").val();
    var s = new Option().style;
    // return 'false' if color wasn't assigned
    s.color = text1;
    var colorChecker1 = s.color == text1.toLowerCase();
    // return 'false' if color wasn't assigned
    s.color = text2;
    var colorChecker2 = s.color == text2.toLowerCase();
    console.log(colorChecker1, colorChecker2);
    if (!colorChecker1 && colorChecker2) {
        var myArr = $(".color_checker");
        myArr.css("background-color", text2);
    } else if (colorChecker1 && !colorChecker2) {
        var myArr = $(".color_checker");
        myArr.css("background-color", text1);
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
    if (result == $("#browser").val()) {
        alert(`Đúng trình duyệt ${hour}:${minutes}:${seconds}`)
    } else alert(`Sai trình duyệt ${day}/${month}/${year}`)
}

//event10
var origin = $(".color_checker").html();
var addText = `<textarea style="width:90%"></textarea>`;

function addTextBox() {
    if ($("#textarea").val() == "Add textbox" && $(".color_checker").html() != addText) {
        var prototypeTextBox = $(".color_checker").html();
        var position = prototypeTextBox.indexOf(">") + 1;
        var output = [prototypeTextBox.slice(0, position), addText, prototypeTextBox.slice(position)].join('');
        addText = output;
        $(".color_checker").html(output);
    } else if ($("#textarea").val() == "Remove textbox") {
        $(".color_checker").html("");
        addText = `<textarea style="width:90%"></textarea>`;
    }
}