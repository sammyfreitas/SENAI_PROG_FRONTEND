function TimeEscolhido(){
	var nome = document.getElementById("nomeUsuario").value;
	
	var opcaoSelecionada = document.getElementById("times").value;
    var textoOpcao = document.getElementById("lbl_resposta");

    switch (opcaoSelecionada) {
        case "time1":
            textoOpcao.innerHTML  =  nome + ", o <b>Botafogo </b>teve uma excelente campanha,<br> mas não conseguiu ser <u>campeão</u> :-(";
			
            break;
        case "time2":
            textoOpcao.innerHTML  = nome + ", <br>o Flamengo é o melhor time do Rio e <br>está melhor colocado na tabela do Brasileirão :-D";
            break;
        case "time3":
            textoOpcao.innerHTML  =  nome + ", <br>o Fluminense focou na Libertadores e cagou pro Brasileirão! <br>Cada um escolhe suas batalhas! :-)";
            break;
		case "time4":
            textoOpcao.innerHTML  =  nome + ", <br>o Vasco está numa colocação difícil, <br>vamos torcer para ele se manter na Série A. :-(";
            break;
        default:
            textoOpcao.textContent = ""; // Limpa o texto se nenhuma opção válida for selecionada
    }
}


    
	
    - Projeto 6 - 
    
    - Projeto Integrador - Portal - 5 páginas dele + Hiperlinks para suas próprias páginas externas (imagem representando os projetos ou print da tela do projeto)
    (Começar imediatamente e fazer integrando o que for fazendo no decorrer do curso)
    (Pagina Portfolio contendo todos os projetos - precisará ter mais de uma página associada) com Menu superior:
    Home, Projetos, Curriculo, Parceiros, Sobre
        Hiperlink, imagens (quadradas, redondas, canto arredondado), tabelas, listas ordenadas, uso de CSS e JavaScript somente nas páginas que tem projetos com javascript
		
		
		
		
Código disponível no repositório - Pegar o código para usarmos na aula de 11/12/23

Estilização com criatividade para ficar uma página interessante e atrativa.
Acrescentar as redes sociais em botões na parte superior e um rodapé com:
Desenvolvido por <ALUNO> sob orientação do prof. Anthony Freitas (hiperlink para https://sammyfreitas.github.io/portfolioSite/) durante o Curso de Programador Front-End (hiperlink: https://www.firjansenai.com.br/cursorio/portal/detalhe-do-curso/cursos_02/programador-front-end/48897/disponivel)  do SENAI Maracanã (hiperlink: https://www.firjansenai.com.br/cursorio/portal/index.php

Competências: HTML, CSS, JavaScript, API (Até  15/12)