
function nolasa(m1, m2, m3) {
    let malas = document.getElementsByClassName("mala");
    m1 = parseFloat(mala1.value);
    m2 = parseFloat(mala2.value);
    m3 = parseFloat(mala3.value);
    if (m1 > 0 && m2 > 0 && m3 > 0) {
        console.log("Malas garumi: " + m1 + " " + m2 + " " + m3);
        perimetrs(m1, m2, m3);
        vaiVeidojas(m1,m2,m3);
        return { m1, m2, m3 };
    } else {
        console.log(false);
        return false;
    }
}

function perimetrs(m1, m2, m3) {
    let p = m1 + m2 + m3;
    console.log("Perimetrs: " + p);
    return p;
}

function pusperimetrs(m1, m2, m3) {
    let pusper = (m1 + m2 + m3) / 2;
    console.log("Pusperimetrs: " + pusper);
    return pusper;
}

function vaiVeidojas(m1, m2, m3) {
    if(m1 >= m2+m3 || m2 >= m1+m3 || m3 >= m1+m2 ) {
        console.log("Neveidojas");
        return false;
    } else {
        console.log("Veidojas");
        laukums(m1,m2,m3);
        return true;
    }
}

function laukums(m1,m2,m3) {
    const pusper = pusperimetrs(m1, m2, m3);
    let tlaukums = Math.sqrt(pusper * ((pusper-m1) * (pusper-m2) * (pusper-m3)));
    console.log("Laukums: " + tlaukums);
    return tlaukums;
}