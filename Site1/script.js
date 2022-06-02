var intervald = window.setInterval(() => {carregar()
        
},1000);

function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundos} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#a7dcfc'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#feb684'
    } else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#1a3139'
    }
}