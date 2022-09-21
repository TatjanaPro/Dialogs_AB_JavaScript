expires = new Date('2022-09-11T17:00:00.000');

const str = document.cookie;
if(str==''){
    console.log('No cookie');
}
else {
    console.log(str);
}

//document.cookie = `username=admin; path=/; expires=${expires.toGMTString()}`;

//let intervalID = setInterval(check_cookie, 1000);

function check_cookie() {
    var current = new Date();
    console.log(current);
    const str = document.cookie;
    console.log(str);
    if(str=='') {
        clearInterval(intervalID);
    }
}
