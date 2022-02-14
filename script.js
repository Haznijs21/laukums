
function nolasa(m1, m2, m3) {
    let malas = document.getElementsByClassName("mala");
    m1 = parseFloat(mala1.value);
    m2 = parseFloat(mala2.value);
    m3 = parseFloat(mala3.value);
    if (m1 > 0 && m2 > 0 && m3 > 0) {
        console.log({m1,m2,m3});
        return{m1,m2,m3};
    } else {
        console.log(false);
        return false;
    }
}
