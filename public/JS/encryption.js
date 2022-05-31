function encrypt(text,password) {
    return CryptoJS.AES.encrypt(text,password).toString();
}

function decrypt(EncryptedValue,password) {
    return CryptoJS.AES.decrypt(EncryptedValue,password).toString(CryptoJS.enc.Utf8);
}

const password = localStorage.getItem("password");

$("#new").submit((event)=>{
    const body = JSON.stringify({
        name: $("#name").val(),
        username: $("#username").val(),
        website: $("#website").val(),
        password: encrypt($("#password").val(), password)
    })
    console.log(body)
    event.preventDefault();
    fetch('../api/passwords/', {method:'post', headers: {
        "Content-Type": 'application/json'
      },body
    }).then((res)=>{
        console.log(res);
    });
});

// $("#new").submit((event)=>{
//     const body = JSON.stringify({
//         name: $("#name").val(),
//         username: $("#username").val(),
//         website: $("#website").val(),
//         password: encrypt($("#password").val(), password)
//     })
//     console.log(body)
//     event.preventDefault();
//     fetch('../api/passwords/', {method:'post', headers: {
//         "Content-Type": 'application/json'
//       },body
//     }).then((res)=>{
//         console.log(res);
//     });
// });