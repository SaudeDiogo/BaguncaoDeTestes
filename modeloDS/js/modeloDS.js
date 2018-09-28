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
//css.setAttribute('href', 'https://rawgit.com/SaudeDiogo/SyncMe/SyncMe/modeloDS/css/curso.css');
css.setAttribute('href', 'https://iesb.blackboard.com/bbcswebdav/institution/Ead/_disciplinas/_comum/modeloDS/curso.css');
css.setAttribute('media', 'screen, print');
document.getElementsByTagName('head')[0].appendChild(css);

//inserindo classe do modeloDS
//
document.body.classList.add('modeloDS');


//executa apenas na página inicío da turma modeloDS
//
if (document.querySelector('title').innerHTML === "Início – EAD-ModeloDS") {
    var css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('type', 'text/css');
    //    css.setAttribute('href', 'https://rawgit.com/SaudeDiogo/SyncMe/SyncMe/modeloDS/css/pagina-inicial.css');
    css.setAttribute('href', 'https://iesb.blackboard.com/bbcswebdav/institution/Ead/_disciplinas/_comum/modeloDS/pagina-inicial.css');
    css.setAttribute('media', 'screen, print');
    document.getElementsByTagName('head')[0].appendChild(css);

    //inserindo classe da pagina inicial
    //
    document.querySelector('.shadow').classList.add('pagina-inicial');

    //trocando palavra inico pela logo
    //
    var logo = document.querySelector('#pageTitleText>span');
    if (logo.innerHTML === 'Início') {
        //            logo.innerHTML = '<img src="https://iesb.blackboard.com/bbcswebdav/institution/Ead/_disciplinas/_comum/modeloDS/imgs/ead-iesb-logo.svg" alt="Logo do EAD IESB" class="logo-inicio">';
        logo.innerHTML = '<img src="https://cdn.rawgit.com/SaudeDiogo/SyncMe/SyncMe/imgs/geral/ead-iesb-logo.svg" alt="Logo do EAD IESB" class="logo-inicio">';
    }

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
    console.log('rodou if do inicial');
}

//executa apenas na página plano de ensino da turma modeloDS
//
else if (document.querySelector('title').innerHTML === "Plano de Ensino – EAD-ModeloDS") {
var css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('type', 'text/css');
    //    css.setAttribute('href', 'https://rawgit.com/SaudeDiogo/SyncMe/SyncMe/modeloDS/css/pagina-inicial.css');
    css.setAttribute('href', 'https://iesb.blackboard.com/bbcswebdav/institution/Ead/_disciplinas/_comum/modeloDS/plano-de-ensino.css');
    css.setAttribute('media', 'screen, print');
    document.getElementsByTagName('head')[0].appendChild(css);

    //inserindo classe da pagina inicial
    //
    document.querySelector('.shadow').classList.add('plano-de-ensino');
    document.querySelector('body.noteditmode.modeloDS .plano-de-ensino ul#content_listContainer li.clearfix.read div.item.clearfix:first-child').classList.add('hideoff');
    console.log('plano de ensino');
}
