let question = document.querySelector('#question'),
    oui = document.querySelector('.rep1'),
    non = document.querySelector('.rep2'),
    rep = document.querySelector('.rep'),
    reptitle= document.querySelector('.resultat'),
    reptext= document.querySelector('.text'),
    next= document.querySelector('.next'),
    rond1 = document.querySelector('.rond1'),
    rond2 = document.querySelector('.rond2'),
    rond3 = document.querySelector('.rond3'),
    rond4 = document.querySelector('.rond4'),
    rond5 = document.querySelector('.rond5'),
    mouton = document.querySelector('.mouton img');

    let bonnereponse= {
        "rond1" : 0,
        "rond2" : 0,
        "rond3" : 0,
        "rond4" : 0,
        "rond5" : 0
    };

    console.log(bonnereponse);
    let scene = 0;

    let reponse1 ="Dans le Coran à la Sourate 4 Verset 103 : Quand vous avez accompli la <span style='font-weight:bold'>Salât</span>, invoquez le nom d’Allah, debout, assis ou couchés sur vos côtés. Puis lorsque vous êtes en sécurité, accomplissez <span style='font-weight:bold'>la Salât </span>(normalement), car <span style='font-weight:bold'> la Salât </span> demeure, pour les croyants, une prescription, à des temps déterminés. <span style='font-weight:bold'> **(Le mot Salât = prière)</span>";

    let reponse2 ="Le voile est écris dans le coran : <br>Dans le Coran à la Sourate 24 Verset 31 : Et dis aux croyantes de baisser leurs regards, de garder leur chasteté, et de ne montrer de leurs atours que ce qui en paraît et qu'elles rabattent <span style='font-weight:bold'>leur voile sur leurs poitrines</span>;";

    let reponse3 ="Les musulmans croient bien en jesus, mais en tant que prophète : <br>Dans le Coran à la Sourate 2 Verset 87 : Certes, Nous avons donné le Livre à Moïse; Nous avons envoyé après lui des prophètes successifs. Et Nous avons donné des preuves à <span style='font-weight:bold'>jésus fils de Marie</span>, et Nous l'avons renforcé du Saint-Esprit. Est-ce qu'à chaque fois, qu'un Messager vous apportait des vérités contraires à vos souhaits vous vous enfliez d'orgueil? Vous traitiez les uns d'imposteurs et vous tuiez les autres.";
    
    let reponse4 ="Le Racisme n'est pas toléré; Le Prophète Mohamed (que la paix et le benediction de dieu soit sur lui) à dit dans sont dernier sermon : <br> [...] Toute l’humanité descend d’Adam et Eve. Un Arabe n’est pas supérieur à un non-Arabe et un non-Arabe n’est pas supérieur à un Arabe. Un blanc n’est pas supérieur à un noir et un noir n’est pas supérieur à un blanc – seulement par la piété et la bonne action.";
    
    let reponse5 ="Le musulman doit avoir un bon comportement et peux s'amusé comme tout être humain : Aïcha ,qu’Allah l’agrée (La femme du prophète mohamed que la paix et le benediction de dieu soit sur lui),  rapporte : « J’accompagnais le prophète dans un de ses voyages alors que j’étais encore une jeune fille mince et svelte, puis le Prophète dit aux gens : « Avancez ! » Ils avancèrent, puis il me dit : « Viens faire la course avec moi. » Nous fîmes la course ensemble et je le battis. Il ne m’en parla plus pendant un long moment jusqu’à oublier ce fait. Plus tard, lorsque je pris du poids et je forcis, je l’accompagnais une nouvelle fois dans un de ses voyages, puis il dit aux gens : « Avancez ! » Ils avancèrent, puis il me dit : « Viens faire la course avec moi. » Nous fîmes la course ensemble et cette fois, il me battit. Il ria en disant : « cette fois c’est la revanche (de la première course perdue). » Rapporté par Ahmad et Aboû Dawoûd et authentifié par Al-Albâny.";



    function question1(){
        scene = 1;
        
        window.scroll(0, 0);

        mouton.style.left = "8%";
        
        question.innerHTML="La prière est elle obligatoire pour les musulmans ?";

        oui.addEventListener("click", function(){
            rep.className += " reptotal";
            next.className +=" active";
            reptitle.innerHTML="<span style ='color:green';> Bonne réponse </span>";
            reptext.innerHTML= reponse1;
            bonnereponse.rond1 = 1;   
        });

        non.addEventListener("click", function(){
            rep.className += " reptotal";
            reptitle.innerHTML="<span style ='color:red';> Mauvaise réponse </span>";
            reptext.innerHTML= reponse1 ;
            next.className +=" active";
            bonnereponse.rond1 = 2;
        })  
    }

    function question2(){
        question.innerHTML="Le voile est-il écris dans le Coran ?";
        mouton.style.left = "28%";
        window.scroll(0, 0);
        scene = 2;
        
        oui.addEventListener("click", function(){
            rep.className += " reptotal";
            next.className +=" active";
            reptitle.innerHTML="<span style ='color:green';> Bonne réponse </span>";
            reptext.innerHTML= reponse2;
            bonnereponse.rond2 = 1;
        });

        non.addEventListener("click", function(){
            rep.className += " reptotal";
            reptitle.innerHTML="<span style ='color:red';> Mauvaise réponse </span>";
            reptext.innerHTML= reponse2 ;
            next.className +=" active";
            bonnereponse.rond2 = 2;
        })
    }

    function question3(){
        question.innerHTML="Les musulmans ne croient pas en jesus ?";
         scene = 3;
         mouton.style.left = "48%";
         window.scroll(0, 0);
         oui.innerHTML ="VRAI";
         non.innerHTML ="FAUX";
        oui.addEventListener("click", function(){
            rep.className += " reptotal";
            next.className +=" active";
            reptitle.innerHTML="<span style ='color:red';> Mauvaise réponse </span>" ;
            reptext.innerHTML= reponse3;
           bonnereponse.rond3 = 2;
        });

        non.addEventListener("click", function(){
            rep.className += " reptotal";
            reptitle.innerHTML="<span style ='color:green';> Bonne réponse </span>";
            reptext.innerHTML= reponse3 ;
            next.className +=" active";
            bonnereponse.rond3 = 1;
        })
    }

    function question4(){
        question.innerHTML="En islam, le racisme est-il toléré ?";
        mouton.style.left = "68%";
         scene = 4;
         window.scroll(0, 0);
         oui.innerHTML ="OUI";
         non.innerHTML ="NON";
         oui.addEventListener("click", function(){
            rep.className += " reptotal";
            next.className +=" active";
            reptitle.innerHTML="<span style ='color:red';> Mauvaise réponse </span>" ;
            reptext.innerHTML= reponse4;
            bonnereponse.rond4 = 2;
        });

        non.addEventListener("click", function(){
            rep.className += " reptotal";
            reptitle.innerHTML="<span style ='color:green';> Bonne réponse </span>";
            reptext.innerHTML= reponse4 ;
            next.className +=" active";
            bonnereponse.rond4 = 1;
        })
    }

    function question5(){
        question.innerHTML="Le musulman ne peux pas s'amusé ?";
        mouton.style.left = "88%";
         scene = 5;
         window.scroll(0, 0);
         oui.innerHTML ="VRAI";
         non.innerHTML ="FAUX";
         oui.addEventListener("click", function(){
            rep.className += " reptotal";
            next.className +=" active";
            next.innerHTML="<a href='fin.html' style='text-decoration:none; color:white; text-align:center'> Fin Du Questionnaire </a>"
            reptitle.innerHTML="<span style ='color:red';> Mauvaise réponse </span>" ;
            reptext.innerHTML= reponse5;
            bonnereponse.rond5 = 2;
        });

        non.addEventListener("click", function(){
            rep.className += " reptotal";
            reptitle.innerHTML="<span style ='color:green';> Bonne réponse </span>";
            reptext.innerHTML= reponse5 ;
            next.className +=" active";
            next.innerHTML="<a href='fin.html' style='text-decoration:none; color:white; text-align:center'> Fin Du Questionnaire </a>"
            bonnereponse.rond5 = 1;
        })
    }

    

    question1();

    next.addEventListener("click",()=>{
      
        if(scene === 1){
            rep.className = "rep";
            next.className ="next";
            reptitle.innerHTML="";
            reptext.innerHTML= "" ;
          if(bonnereponse.rond1 === 1){

            rond1.style.background= "green";
            question2();
          }else{
            rond1.style.background= "red";
            question2();
          }
            

           
        }else if(scene === 2){
            rep.className = "rep";
            next.className ="next";
            reptitle.innerHTML="";
            reptext.innerHTML= "" ;
            if(bonnereponse.rond2 === 1){

                rond2.style.background= "green";
                question3();
            }else{
                rond2.style.background= "red";
                question3();
            }

        }else if(scene === 3){
        
            rep.className = "rep";
            next.className ="next";
            reptitle.innerHTML="";
            reptext.innerHTML= "" ;
            if(bonnereponse.rond3 === 1){

                rond3.style.background= "green";
                question4();
            }else{
                rond3.style.background= "red";
                question4();
            }
        }else if(scene === 4){
            rep.className = "rep";
            next.className ="next";
            reptitle.innerHTML="";
            reptext.innerHTML= "" ;
            if(bonnereponse.rond4 === 1){

                rond4.style.background= "green";
                question5();
            }else{
                rond4.style.background= "red";
                question5();
            }

        }else if(scene === 5){
            if(bonnereponse.rond5 === 1){

                rond5.style.background= "green";
                fin();
            }else{
                rond5.style.background= "red";
                fin();
            }
            
        }
    })