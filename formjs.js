/**
 * Created by VAIO on 9/26/2016.
 */
function mail () {
    {

        var name = document.getElementById('NAME');
        var email = document.getElementById('EMAIL');
        var number = document.getElementById('CONTACT');
        var message = document.getElementById('MESSAGE');

        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var filter2 = /^\d{11}$/;
    }

    if (name=='' || email == '' || number == '') {
        alert("pleasr fill required fields")

    }
    else if (!filter.test(email.value))
    {
        alert("email")
    }

    else if(!filter2.test(number.value))
    {
        alert("number")
    }

    else {

        $('#tbl-body')
            .append('<td>' + name.value+ '</td>')
            .append('<td>' + email.value+ '</td>')
            .append('<td>' + number.value+ '</td>')
            .append('<td>' + message.value+ '</td>')

        return false;
    }










}/**
 * Created by VAIO on 10/3/2016.
 */
