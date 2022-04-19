
function izvadaTekstu() {
    const m = nolasa();
    if (m) {
        m1 = m.m1;
        m2 = m.m2;
        m3 = m.m3;
        teksts = rezultats(m1, m2, m3);
        p = lielumi(m1,m2,m3);
        if (teksts) {
        } else {
            
        }
        const sakne = document.getElementById("izvade");
        const raksti = document.createElement("p");
        sakne.innerHTML = teksts;
        sakne.appendChild(raksti);
    }
}
function lielumi(m1, m2, m3) {
    console.log("Malas garumi: " + m1 + " " + m2 + " " + m3);

    p = perimetrs(m1, m2, m3);
    console.log("Perimetrs: " + p);

    pusper = pusperimetrs(m1, m2, m3);
    console.log("Pusperimetrs: " + pusper);

    S = laukums(m1, m2, m3);
    console.log("Laukums: " + S);
    return {p, pusper, S};
}

function nolasa(m1, m2, m3) {
    let malas = document.getElementsByClassName("mala");
    m1 = parseFloat(mala1.value);
    m2 = parseFloat(mala2.value);
    m3 = parseFloat(mala3.value);
    return { m1, m2, m3 };
}
function rezultats(m1, m2, m3) {
    var t = "";
    if (typeof m1 == 'number' && typeof m2 == 'number' && typeof m3 == 'number' && !isNaN(m1) && !isNaN(m2) && !isNaN(m3)) {
        if (m1 > 0 && m2 > 0 && m3 > 0) {
            if (m1 < m2 + m3 && m2 < m1 + m3 && m3 < m1 + m2) {
                if(m1**2 + m2**2 == m3**2 || m2**2 + m3**2 == m1**2 || m1**2 + m3**2 == m2**2) {
                    console.log("Veidojas taisnleņķa trijstūris");
                    t = "Veidojas taisnleņķa trijstūris";
                    p = perimetrs(m1,m2,m3);
                    t += ";\nPerimetrs ir " + p;
                    S = laukums(m1,m2,m3);
                    t += ";\nLaukums ir " + S;
                    return t;
                } else {
                    console.log("Veidojas trijstūris");
                    t = "Veidojas trijstūris";
                    p = perimetrs(m1,m2,m3);
                    t += ";\nPerimetrs ir " + p;
                    S = laukums(m1,m2,m3);
                    t += ";\nLaukums ir " + S;
                    return t;
                }
            } else {
                console.log("Trijstūris neveidojas");
                t = "Trijstūris neveidojas";
                return t;
            }
        } else {
            console.log("Datiem jābūt nenegatīviem!");
            t = "Datiem jābūt nenegatīviem!";
            return "Datiem jābūt nenegatīviem!";
        }
    } else {
        console.log("Datiem jābūt cipara veidā!");
        t = "Datiem jābūt cipara veidā!";
        return t;
    }
}

function perimetrs(m1, m2, m3) {
    let p = m1 + m2 + m3;
    return p;
}

function pusperimetrs(m1, m2, m3) {
    let pusper = (m1 + m2 + m3) / 2;
    return pusper;
}


function laukums(m1, m2, m3) {
    const pusper = pusperimetrs(m1, m2, m3);
    let tlaukums = Math.sqrt(pusper * ((pusper - m1) * (pusper - m2) * (pusper - m3)));
    return tlaukums;
}