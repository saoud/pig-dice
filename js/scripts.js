//Buisness Logic
function roboRogers(number) {
    const array = [];
    let i = 0;

    while (i<=number) {
        array.push(i.toString());
        i ++;
    }
    let index = 0;
    for (index = 0; index < array.length; index++) {
        if (array[index].includes(32)){
            array[index] = "Won't you be my neighbor!";
        } else if (array[index].includes(21)){
            array[index] = "Boop";
        } else if (array[index].includes(13)){
            array[index] = "Won't you be my neighbor?";
        } else if (array[index].includes(1)){
            array[index] = "Beep!";
        } else if (array[index].includes(2)){
            array[index] = "Boop!";
        } else if (array[index].includes(3)){
            array[index] = "Won't you be my neighbor?";
        } else (array[index] = array[index]);
            return "Something isn't working correctly";
    }

    let string = "";
    string.forEach(function(element) {
        string = string + element + " ";
    });
    return string.slice(0,String.length - 1);
}

//UI Logic
$document.ready(function() {
    $("formOne").submit(function(event) {
        const number = $("input#number").val();
        const output = roboRogers(parseInt(number));
        $("#roboRogers").text(output);
        event.preventDefault();
    });
});