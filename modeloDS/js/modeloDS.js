/*************************
Criado por Diogo Saúde
JS para modelo de turma
Modelo DS
producao    https://cdn.rawgit.com/SaudeDiogo/SyncMe/SyncMe/modeloDS/js/modeloDS.js
dev         https://rawgit.com/SaudeDiogo/SyncMe/SyncMe/modeloDS/js/modeloDS.js
**************************/

// inserindo modelo-DS em todas as paginas da turma ModeloDS
//
function ready(callback) {
    // in case the document is already rendered
    if (document.readyState != 'loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function () {
        if (document.readyState == 'complete') callback();
    });
}

ready(function () {
    var css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('type', 'text/css');
    css.setAttribute('href', 'https://rawgit.com/SaudeDiogo/SyncMe/SyncMe/modeloDS/css/curso.css');
    //css.setAttribute('href', 'https://iesb.blackboard.com/bbcswebdav/institution/Ead/_disciplinas/_comum/css/modeloDS/curso.css');
    css.setAttribute('media', 'screen, print');
    document.getElementsByTagName('head')[0].appendChild(css); // fim da criação do css da sala modeloDS
    //executa apenas na página inicío da turma modeloDS
    //
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('type', 'text/css');
    css.setAttribute('href', 'https://rawgit.com/SaudeDiogo/SyncMe/SyncMe/modeloDS/css/pagina-inicial.css');
    //css.setAttribute('href', 'https://iesb.blackboard.com/bbcswebdav/institution/Ead/_disciplinas/_comum/css/modeloDS/pagina-inicial.css');
    css.setAttribute('media', 'screen, print');
    document.getElementsByTagName('head')[0].appendChild(css);


    document.body.classList.add('modeloDS'); //inserindo classe do modeloDS


    if (document.querySelector('title').innerHTML === "Início – EAD-ModeloDS") {
        document.querySelector('.shadow').classList.add('pagina-inicial'); //inserindo classe da pagina inicial
    }
});
// inicio personalização da turma
//
//document.getElementById('courseMapButton').addClass('hideoff'); //esconder icones
