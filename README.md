# Hours-Site
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hora do dia</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body onload="carregar()">
    <header>
        <h1>Hora do dia</h1>
    </header>
    <section>
        <div id="msg">
            Mensagem
        </div>
        <div id="foto">
            <img id="img" src="fotomanha.png" alt="foto do dia">
        </div>
    </section>
    <footer>
        <p>&copy; Pedro Henrique Renner</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>

//----------------------------------------------------------------------------------

body {
    background: rgb(56, 137, 230);
    font: normal 15pt Arial;
}

header {
    color: white;
    text-align: center;
}

section {
    background: white;
    border-radius: 10px;
    padding: 15px;
    width: 500px;
    margin: auto;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.329);
}

div{
    text-align: center;
    padding: 10px;
}

footer {
    color: white;
    text-align: center;
    font-style: italic;
    padding: 250px;
}

//--------------------------------------------------------------------------------

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
