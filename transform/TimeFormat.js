(function (i) {
    var value = parseFloat(i)
    var date = new Date(parseInt(value) * 1000);
    var weekDay = "";
    var day = "";
    var month = "";
    var year = "";
    var hours = "";
    var minutes = "";
    var seconds = "";

    //Sun, 03/03/2018 17:55:16
    switch (date.getDay()) {
        case 0:
            weekDay = "So";
            break;
        case 1:
            weekDay = "Mo";
            break;
        case 2:
            weekDay = "Di";
            break;
        case 3:
            weekDay = "Mi";
            break;
        case 4:
            weekDay = "Do";
            break;
        case 5:
            weekDay = "Fr";
            break;
        case 6:
            weekDay = "Sa";
            break;
    }
    if (date.getDate() < 10) {
        day = '0' + date.getDate().toString();
    } else {
        day = date.getDate().toString();
    }
    if (date.getMonth() < 10) {
        month = '0' + date.getMonth().toString();
    } else {
        month = date.getMonth().toString();
    }
    year = (date.getFullYear() - 2000).toString();
    if (date.getHours() < 10) {
        hours = '0' + date.getHours().toString();
    } else {
        hours = date.getHours().toString();
    }
    if (date.getMinutes() < 10) {
        minutes = '0' + date.getMinutes().toString();
    } else {
        minutes = date.getMinutes().toString();
    }
    if (date.getSeconds() < 10) {
        seconds = '0' + date.getSeconds().toString();
    } else {
        seconds = date.getSeconds().toString();
    }
    //var result = weekDay + ', ' + day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
    var result = hours + ':' + minutes + ' Uhr';
    return result;
})(input)