/*************************
Criado por Diogo Saúde
JS para modelo de turma
Modelo DS
producao    https://cdn.rawgit.com/SaudeDiogo/SyncMe/SyncMe/modeloDS/js/modeloDS.js
dev         https://rawgit.com/SaudeDiogo/SyncMe/SyncMe/modeloDS/js/modeloDS.js
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
//executa apenas na página inicío da turma modeloDS
//
var css = document.createElement('link');
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
{
var conteudoH3 = document.querySelectorAll("body.noteditmode.modeloDS .pagina-inicial ul#content_listContainer li.clearfix.read div.item.clearfix h3 a span");
var tagH3 = document.querySelectorAll('body.noteditmode.modeloDS .pagina-inicial ul#content_listContainer li.clearfix.read div.item.clearfix h3');

if (conteudoH3[0].innerHTML === "Aulas") {
    (tagH3[0]).addClassName('aulas');
}
if (conteudoH3[1].innerHTML === "Calendário") {
    (tagH3[1]).addClassName('calendario');

}
if (conteudoH3[2].innerHTML === "Novidades") {
    (tagH3[2]).addClassName('novidades');

}
if (conteudoH3[3].innerHTML === "Fórum de Dúvidas") {
    (tagH3[3]).addClassName('forum-de-duvidas');

}
if (conteudoH3[4].innerHTML === "Encontro Virtual") {
    (tagH3[4]).addClassName('encontro-virtual');

}
if (conteudoH3[5].innerHTML === "Biblioteca Virtual") {
    (tagH3[5]).addClassName('biblioteca-virtual');

}
if (conteudoH3[6].innerHTML === "Notas") {
    (tagH3[6]).addClassName('notas');

}
if (conteudoH3[7].innerHTML === "Avaliações") {
    (tagH3[7]).addClassName('avaliacoes');
}
}
// inicio personalização da turma
//
//document.getElementById('courseMapButton').addClass('hideoff'); //esconder icones
