const result = document.getElementById("result");

function appendToDisplay (input) {
    result.value += input;
}

function clearDisplay () {
    result.value = ""
}

function deleteToDisplay () {
    result.value = result.value.slice(0, -1)
}

function calculate () {
    try {
        result.value = eval(result.value);
    }
    catch (error) {
        result.value = ""
    }
}