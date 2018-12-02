function aksarakan(kataLampung) {
    var aksara = kataLampung;

    const aksaraA = `a`;
    const nga = `;`;
    const nya = `'`;
    const gha = `f`;
    const ang = `]`;
    const an = `p`;
    const ah = `=`;
    const ar = `[`;
    const ai = `-`;
    const au = `w`;
    const nengen = `z`;

    const regexng = /(ng)[aiueoAIUEO]/g;
    const regexny = /(ny)[aiueoAIUEOkKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHh]/g;
    const regexgh = /(gh)[aiueoAIUEOkKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHh]/g;

    const regexvocal = /^[iIuUeEoO]/;

    const regexang = /[aiueoIUEO](ng)[kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHhnr\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]/g;
    const regexan = /[aiueoIUEO]n[kKQqpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHhnr\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]/g;
    const regexah = /[aiueoIUEO]h[kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHhnr\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]/g;
    const regexar = /[aiueoIUEO]r[kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHhnr\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]/g;
    const regexai = /[aiueoIUEO]i[kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHhnr\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]/g;
    const regexau = /[aiueoIUEO]u[kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHhnr\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]/g;

    const regextandabaca = /[\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]/;
    const regexxawal = /[aiueoIUEO][kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWH][kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWH][aiueoIUEO]/g; 
    const regexx = /[aiueoIUEO]([kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWHnhriu]|ng)[\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]?$/g; 

    const regexangx = /[aiueoIUEO]ngx/g;
    const regexanx = /[aiueoIUEO]nx/g;
    const regexahx = /[aiueoIUEO]hx/g;
    const regexarx = /[aiueoIUEO]rx/g;
    const regexaix = /[aiueoIUEO]ix/g;
    const regexaux = /[aiueoIUEO]ux/g;

    const regexa = /[kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHhnr][a]/g;

    const regexawal = /^[iIuUeEoOXNAR]/g; 

    aksara = aksara.replace(regexng, function (a) {
        return nga + (a[2] ? a[2]  : '');
        });
    aksara = aksara.replace(regexny, function (a) {
        return nya + (a[2] ? a[2]  : '');
        });
    aksara = aksara.replace(regexgh, function (a) {
        return gha + (a[2] ? a[2]  : '');
        });
    aksara = aksara.replace(regexang, function (a) {
        return (a[0].search(regexvocal) != -1  ? a[0]  : '') + ang + (a[2] ? a[2]  : '');
    });
    aksara = aksara.replace(regexan, function (a) {
        return (a[0].search(regexvocal) != -1  ? a[0]  : '') + an + (a[2] ? a[2]  : '');
    });
    aksara = aksara.replace(regexah, function (a) {
        return (a[0].search(regexvocal) != -1 ? a[0]  : '') + ah + (a[2] ? a[2]  : '');
    });
    aksara = aksara.replace(regexar, function (a) {
        return (a[0].search(regexvocal) != -1  ? a[0]  : '') + ar + (a[2] ? a[2]  : '');
    });
    aksara = aksara.replace(regexai, function (a) {
        return (a[0].search(regexvocal) != -1  ? a[0]  : '') + ai + (a[2] ? a[2]  : '');
    });
    aksara = aksara.replace(regexau, function (a) {
        return (a[0].search(regexvocal) != -1  ? a[0]  : '') + au + (a[2] ? a[2]  : '');
    });

    aksara = aksara.replace(regexxawal, function (a) {
        return a[0] + a[1] + nengen + a[2] + a[3];
    }); // karakter 1 dan 2 tidak dihapus, harusnya ditambahkan karakter 3 yaitu x
    
    aksara = aksara.replace(regexx, function (a) {
        return (a.search(regextandabaca) != -1  ? a.substring(0, a.length-1) + nengen + a.substring(a.length-1) : a + nengen) ;
    }); // karakter 1 dan 2 tidak dihapus, harusnya ditambahkan karakter 3 yaitu x
    
    aksara = aksara.replace(regexangx, function (a) {
        return (a[0].search(regexvocal) != -1  ? a[0]  : '') + nengen;
    });
    aksara = aksara.replace(regexanx, function (a) {
        return (a[0].search(regexvocal) != -1  ? a[0]  : '') + an;
    });
    aksara = aksara.replace(regexahx, function (a) {
        return (a[0].search(regexvocal) != -1 ? a[0]  : '') + ah;
    });
    aksara = aksara.replace(regexarx, function (a) {
        return (a[0].search(regexvocal) != -1  ? a[0]  : '') + ar;
    });
    aksara = aksara.replace(regexaix, function (a) {
        return (a[0].search(regexvocal) != -1  ? a[0]  : '') + ai;
    });
    aksara = aksara.replace(regexaux, function (a) {
        return (a[0].search(regexvocal) != -1  ? a[0]  : '') + au;
    });
    
    aksara = aksara.replace(regexa, function (a) {
        return a[0] + (a[2] ? a[2]  : '');
    }); //karakter 1 dan 3 harusnya tidak dihapus
    
    aksara = aksara.replace(regexawal, function (a) {
        return aksaraA + a;
    }); // Ditambahkan karakter a di depan
    
    return aksara;
};

function alfabetkan(aksaraLampung) {
    var kata = aksaraLampung;

    // Induk Huruf
    const regexKa = /[Kk]/g;
    const regexGa = /[Gg]/g;
    const regexNga = /\;/g;
    const regexPa = /[Vv]/g;
    const regexBa = /[Bb]/g;
    const regexMa = /[Mm]/g;
    const regexTa = /[Tt]/g;
    const regexDa = /[Dd]/g;
    const regexNa = /[Nn]/g;
    const regexCa = /[Cc]/g;
    const regexJa = /[Jj]/g;
    const regexNya = /\'/g;
    const regexYa = /[Yy]/g;
    const regexA = /[Aa]/g;
    const regexLa = /[Ll]/g;
    const regexRa = /[Rr]/g;
    const regexSa = /[Ss]/g;
    const regexWa = /[Xx]/g;
    const regexHa = /[Hh]/g;
    const regexGha = /[Ff]/g;

    // Anak Huruf
    const regexNengen = /a[Zz]/g;
    const regexUlan1 = /a[Ii]/g;
    const regexUlan2 = /a[Oo]/g;
    const regexBicek = /a[Uu]/g;
    const regexBitan1 = /a[Qq]/g;
    const regexBitan2 = /a[Ee]/g;
    const regexTekelubang = /\]/g;
    const regexRejunjung = /\[/g;
    const regexDatasan = /[Pp]/g;
    const regexTekelungau = /[Ww]/g;
    const regexTekelungai = /\-/g;
    const regexKeleniah = /\=/g;

    // Kombinasi anak huruf yang perlu dipertimbangkan
    // eu, ei, ou, oi, iu, io, eo

    // harus sebelum anak huruf
    kata = kata.replace(regexNa, 'na');

    // anak huruf harus sebelum induk huruf
    kata = kata.replace(regexTekelungau, 'u');
    kata = kata.replace(regexDatasan, 'n');

    // Induk huruf
    kata = kata.replace(regexA, 'a');
    kata = kata.replace(regexKa, 'ka');
    kata = kata.replace(regexGa, 'ga');
    kata = kata.replace(regexPa, 'pa');
    kata = kata.replace(regexBa, 'ba');
    kata = kata.replace(regexMa, 'ma');
    kata = kata.replace(regexTa, 'ta');
    kata = kata.replace(regexDa, 'da');
    kata = kata.replace(regexCa, 'ca');
    kata = kata.replace(regexJa, 'ja');
    kata = kata.replace(regexYa, 'ya');
    kata = kata.replace(regexLa, 'la');
    kata = kata.replace(regexRa, 'ra');
    kata = kata.replace(regexSa, 'sa');
    kata = kata.replace(regexWa, 'wa');
    kata = kata.replace(regexHa, 'ha');
    kata = kata.replace(regexGha, 'gha');
    kata = kata.replace(regexNga, 'nga');
    kata = kata.replace(regexNya, 'nya');

    // Anak huruf
    kata = kata.replace(regexNengen, function (a) {
        return a.substring(0, a.length-2) + '';
        });
    kata = kata.replace(regexUlan1, function (a) {
        return a.substring(0, a.length-2) + 'i';
        });
    kata = kata.replace(regexUlan2, function (a) {
        return a.substring(0, a.length-2) + 'é';
        }); // Perlu dipertimbangkan alternatif untuk huruf é
    kata = kata.replace(regexBicek, function (a) {
        return a.substring(0, a.length-2) + 'e';
        });
    kata = kata.replace(regexBitan1, function (a) {
        return a.substring(0, a.length-2) + 'o';
        });
    kata = kata.replace(regexBitan2, function (a) {
        return a.substring(0, a.length-2) + 'u';
        });
    kata = kata.replace(regexTekelubang, 'ng');
    kata = kata.replace(regexRejunjung, 'r');
    kata = kata.replace(regexTekelungai, 'i');
    kata = kata.replace(regexKeleniah, 'h');

    const regextandabaca = /[\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]/;
    kata = kata.replace(regextandabaca, '');

    return kata;
};