/*************************
Criado por Diogo Saúde
JS para modelo de turma
Modelo DS
producao        https://cdn.rawgit.com/SaudeDiogo/SyncMe/SyncMe/modeloDS/js/modeloDS.js
dev             https://rawgit.com/SaudeDiogo/SyncMe/SyncMe/modeloDS/js/modeloDS.js
**************************/

// inserindo modelo-DS em todas as paginas da turma ModeloDS
//
var css = document.createElement('link');
css.setAttribute('rel', 'stylesheet');
css.setAttribute('type', 'text/css');
css.setAttribute('href', 'https://rawgit.com/SaudeDiogo/SyncMe/SyncMe/modeloDS/css/curso.css');
//css.setAttribute('href', 'https://iesb.blackboard.com/bbcswebdav/institution/Ead/_disciplinas/_comum/css/modeloDS/curso.css');
css.setAttribute('media', 'screen, print');
document.getElementsByTagName('head')[0].appendChild(css); // fim da criação do css da sala modeloDS

//inserindo classe do modeloDS
//
document.body.classList.add('modeloDS');



//executa apenas na página inicío da turma modeloDS
//
if (document.querySelector('title').innerHTML === "Início – EAD-ModeloDS") {
    var css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('type', 'text/css');
    css.setAttribute('href', 'https://rawgit.com/SaudeDiogo/SyncMe/SyncMe/modeloDS/css/pagina-inicial.css');
    //css.setAttribute('href', 'https://iesb.blackboard.com/bbcswebdav/institution/Ead/_disciplinas/_comum/css/modeloDS/pagina-inicial.css');
    css.setAttribute('media', 'screen, print');
    document.getElementsByTagName('head')[0].appendChild(css);


    //inserindo classe da pagina inicial
    //
    document.querySelector('.shadow').classList.add('pagina-inicial');


    //inclusão de classes para carregar as imagens dos cartões da pagina início
    //
    var conteudoH3 = document.querySelectorAll("body.noteditmode.modeloDS .pagina-inicial ul#content_listContainer li.clearfix.read div.item.clearfix h3 a span");
    var tagH3 = document.querySelectorAll('body.noteditmode.modeloDS .pagina-inicial ul#content_listContainer li.clearfix.read div.item.clearfix h3');

    if (conteudoH3[0].innerText === "Aulas") {
        (tagH3[0]).addClassName('aulas');
    }
    if (conteudoH3[1].innerText === "Calendário Acadêmico") {
        (tagH3[1]).addClassName('calendario');
    }
    if (conteudoH3[2].innerText === "Novidades") {
        (tagH3[2]).addClassName('novidades');
    }
    if (conteudoH3[3].innerText === "Fórum de Dúvidas") {
        (tagH3[3]).addClassName('forum-de-duvidas');
    }
    if (conteudoH3[4].innerText === "Encontro Virtual") {
        (tagH3[4]).addClassName('encontro-virtual');
    }
    if (conteudoH3[5].innerText === "Biblioteca Virtual") {
        (tagH3[5]).addClassName('biblioteca-virtual');
    }
    if (conteudoH3[6].innerText === "Notas") {
        (tagH3[6]).addClassName('notas');
    }
    if (conteudoH3[7].innerText === "Avaliações") {
        (tagH3[7]).addClassName('avaliacoes');
    }
}
//executa apenas na página plano de ensino da turma modeloDS
//
else if (document.querySelector('title').innerHTML === "Plano de Ensino – EAD-ModeloDS") {


}
