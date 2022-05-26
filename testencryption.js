const bcrypt = require("bcrypt");
const stub = (..._) => {};
const send = stub;
const sql = stub;

const a = (b, s) => {
    const c = bcrypt.genSaltSync(10);
    console.log(c);
    const pass = bcrypt.hashSync(b, c);
    console.log(pass);
    console.log(bcrypt.compareSync(b,pass));
}

// a("pass","email")

function clientSidePassSend(email,pass) {
    const hashedPass = bcrypt.hashSync(pass,10);
    send(email,hashedPass);
}

function serverSidePassVerify(email,hashedPass) {
    const realPass = sql({where: {email:email},attribute:["hashedPass"]});
    bcrypt.compareSync()
}