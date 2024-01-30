encriptar = () => {
    let entrada = document.getElementById("in").value;
    let cifrado = "";
    for (let c = 0; c < entrada.length; c++) {
        if (entrada[c] == 'e') cifrado += "enter";
        else if (entrada[c] == 'i') cifrado += "imes";
        else if (entrada[c] == 'a') cifrado += "ai";
        else if (entrada[c] == 'o') cifrado += "ober";
        else if (entrada[c] == 'u') cifrado += "ufat";
        else cifrado += entrada[c];
    }
    document.getElementById("out").value = cifrado;
}

desencriptar = () => {
    let entrada = document.getElementById("in").value;
    let descifrado = "";
    for (let c = 0; c < entrada.length; c++) {
        if (entrada[c] == 'e') {descifrado += entrada[c];c+=4;}
        else if (entrada[c] == 'i' || entrada[c] == 'o' || entrada[c] == 'u') {descifrado += entrada[c];c+=3;}
        else if (entrada[c] == 'a') {descifrado += entrada[c];c++;}
        else descifrado += entrada[c];
    }
    document.getElementById("out").value = descifrado;
}

copiar = () => {
    let temp = document.getElementById("out");
    navigator.clipboard.writeText(temp.value);
    alert('¡Copiado!');
}

l = ['.','|','C|','C ','Ci|','Ci ','Cif|','Cif ','Cifr|','Cifr ','Cifra|','Cifra ','Cifrad|','Cifrad ','Cifrado|','Cifrado ','Cifrador|','Cifrador '];
for (let i = l.length-1; i>=1; i--) l.push(l[i]);
let i = 0;
cambiarTexto = () => document.getElementById("titulo").innerHTML = l[i++ % l.length];
setInterval(cambiarTexto, 425);