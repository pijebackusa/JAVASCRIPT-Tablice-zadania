// ===== ZADANIE 2 =====

function zad2(tab) {

    let min = tab[0];
    let max = tab[0];
    let suma = 0;
    let cyfry3 = 0;

    for(let i = 0; i < tab.length; i++) {

        if(tab[i] < min) min = tab[i];
        if(tab[i] > max) max = tab[i];

        suma += tab[i];

        let t = String(tab[i]);

        for(let j = 0; j < t.length; j++)
            if(t[j] == '3')
                cyfry3++;
    }

    let sr = suma / tab.length;

    let sortRos = [...tab].sort(function(a,b){
        return a-b;
    });

    let med;

    if(sortRos.length % 2 == 0)
        med = (sortRos[sortRos.length/2-1] + sortRos[sortRos.length/2]) / 2;
    else
        med = sortRos[Math.floor(sortRos.length/2)];

    let kw = [];

    for(let i = 0; i < tab.length; i++)
        kw[i] = tab[i] * tab[i];

    let parz = 0;
    let nieparz = 0;

    for(let i = 0; i < tab.length; i++)
        if(tab[i] % 2 == 0)
            parz++;
        else
            nieparz++;

    let podz3 = 0;

    for(let i = 0; i < tab.length; i++)
        if(tab[i] % 3 == 0)
            podz3++;

    return {
        min,
        max,
        sr,
        cyfry3,
        med,
        kw,
        parz,
        nieparz,
        podz3
    };
}

// ===== ZADANIE 3 =====

function zad3(wyraz) {

    let tab = wyraz.split("");

    let zam = [];

    for(let i = 0; i < tab.length; i++)
        if(tab[i] == tab[i].toUpperCase())
            zam[i] = tab[i].toLowerCase();
        else
            zam[i] = tab[i].toUpperCase();

    let los = [...tab];

    for(let i = los.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        let t = los[i];
        los[i] = los[j];
        los[j] = t;
    }

    return {
        tab,
        zam,
        los
    };
}

// ===== ZADANIE 4 =====

function zad4(tab, a) {

    let max = tab[0];

    for(let i = 1; i < tab.length; i++)
        if(tab[i] > max)
            max = tab[i];

    let ileMax = 0;

    for(let i = 0; i < tab.length; i++)
        if(tab[i] == max)
            ileMax++;

    let nieparzyste = [];

    for(let i = 0; i < tab.length; i++)
        if(tab[i] % 2 != 0)
            nieparzyste.push(tab[i]);

    let nieparzysteInd = [];

    for(let i = 1; i < tab.length; i += 2)
        nieparzysteInd.push(tab[i]);

    let przedzial = 0;

    for(let i = 0; i < tab.length; i++)
        if(tab[i] >= -5 && tab[i] <= 15)
            przedzial++;

    let bliska = tab[0];

    for(let i = 1; i < tab.length; i++)
        if(Math.abs(tab[i]-a) < Math.abs(bliska-a))
            bliska = tab[i];

    let min = tab[0];
    let ind = 0;

    for(let i = 1; i < tab.length; i++)
        if(tab[i] < min){
            min = tab[i];
            ind = i;
        }

    let gt10 = [];

    for(let i = 0; i < tab.length; i++)
        if(tab[i] > 10)
            gt10.push(tab[i]);

    let B = [];

    B[0] = tab[0];

    for(let i = 1; i < tab.length; i++)
        B[i] = B[i-1] + tab[i];

    let malejaco = [...tab].sort(function(a,b){
        return b-a;
    });

    let count = {};

    for(let i = 0; i < tab.length; i++) {

        if(count[tab[i]])
            count[tab[i]]++;
        else
            count[tab[i]] = 1;
    }

    let min3 = [];

    for(let x in count)
        if(count[x] >= 3)
            min3.push(Number(x));

    return {
        max,
        ileMax,
        nieparzyste,
        nieparzysteInd,
        przedzial,
        bliska,
        poprzednik: tab[ind-1],
        nastepnik: tab[ind+1],
        gt10,
        B,
        malejaco,
        min3
    };
}

// ===== ZADANIE 5 =====

function fibonacci() {

    let tab = [];

    tab[0] = 0;
    tab[1] = 1;

    for(let i = 2; i < 100; i++)
        tab[i] = tab[i-1] + tab[i-2];

    return tab;
}

function potegi2() {

    let tab = [];

    tab[0] = 1;

    for(let i = 1; i < 100; i++)
        tab[i] = tab[i-1] * 2;

    return tab;
}

function ciag3() {

    let tab = [];

    for(let i = 0; i < 100; i++)
        tab[i] = (i + 1) * 3;

    return tab;
}

function ciag2() {

    let tab = [];

    tab[0] = 2;

    for(let i = 1; i < 100; i++)
        tab[i] = tab[i-1] * 2;

    return tab;
}
