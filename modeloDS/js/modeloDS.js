/*************************
Criado por Diogo Saúde
JS para modelo de turma
Modelo DS
v1.0
**************************/

//************************
// inserindo modelo-DS
var css = document.createElement('link');
css.setAttribute('rel', 'stylesheet');
css.setAttribute('type', 'text/css');
css.setAttribute('href', 'https://iesb.blackboard.com/bbcswebdav/institution/Ead/_disciplinas/_comum/css/modeloDS/curso.css');
css.setAttribute('media', 'screen, print');
document.getElementsByTagName('head')[0].appendChild(css); // fim da criação do css da sala modeloDS

var css = document.createElement('link');
css.setAttribute('rel', 'stylesheet');
css.setAttribute('type', 'text/css');
css.setAttribute('href', 'https://iesb.blackboard.com/bbcswebdav/institution/Ead/_disciplinas/_comum/css/modeloDS/pagina-inicial.css');
css.setAttribute('media', 'screen, print');
document.getElementsByTagName('head')[0].appendChild(css);


document.body.classList.add('modeloDS'); //inserindo classe do modeloDS



if (document.querySelector('title').innerHTML == "Início – EAD-ModeloDS" ) {
    document.querySelector('.shadow').classList.add('pagina-inicial'); //inserindo classe da pagina inicial
}



if (document.querySelectorAll('body.modeloDS .pagina-inicial ul#content_listContainer li.clearfix.read div.item.clearfix h3 a span').innerHTML == "Aulas" ) {
    document.querySelectorAll('body.modeloDS .pagina-inicial ul#content_listContainer li.clearfix.read').classList.add('cartao-aulas');
}



//************************
// inicio personalização da turma
//document.getElementById('courseMapButton').addClass('hideoff'); //esconder icones
