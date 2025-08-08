// IPv4 address validator
function isValidIPv4(ip){
    let parts = ip.split(".");
    if (parts.length !== 4) {
        return false;
    }
    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        if (!/^\d+$/.test(part)) {
            return false;
        }
        let num = Number(part);
        if (num < 0 || num > 255 || (part.length > 1 && part[0] === '0')) {
            return false;
        }
    }
    return true;
}
let ip = "192.168.1.1";

if (isValidIPv4(ip)) {
    console.log("Valid ");
} else {
    console.log("Invalid ");
}