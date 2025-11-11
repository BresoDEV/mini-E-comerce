const PRODUCTS = [
    {
        id: 1,
        nome: 'Thunderstruck',
        preco: 89.90,
        imagem: 'img/1.jpg',
        desc: `Imagina só a cena: esse vinho aqui é o AC/DC engarrafado. 
        <br>Ele não foi feito numa adega chique, foi forjado na porrada do rock! 
        <br>A lenda é que essa safra veio de um vinhedo que ficava perto de uma torre de energia, e um dia, durante um show da banda que tocava no volume máximo, um raio caiu bem em cima da parreira. Em vez de queimar, a uva absorveu aquela carga. 
        <br>Por isso, quando você abre essa garrafa, você sente a energia do Angus Young correndo pelo palco. É o vinho que você bebe quando quer dar um "start" na noite ou quando a festa já está no volume máximo. 
        <br>É Hard Rock puro, sem frescura.`
    },
    {
        id: 2,
        nome: 'Halloween',
        preco: 199.90,
        imagem: 'img/2.jpg',
        desc: `
        🎃 A Lenda por Trás da Garrafa<br>
        <br>Este aqui é o vinho perfeito para a Noite das Bruxas. A história que corre no vinhedo é que ele só é colhido na madrugada do dia 31 de Outubro, debaixo daquela lua cheia estranha, a mesma que iluminou a fuga do Michael Myers de Smith's Grove.
        <br>Ele tem aquele ar de cidade pequena, de subúrbio americano que parece tranquilo, mas que esconde algo pesado. Você dá o primeiro gole e não sente nada... mas a cada minuto a tensão aumenta, e você percebe que está sendo observado.<br><br> É o vinho do terror que não precisa de sangue para te arrepiar, só daquela música icônica na sua cabeça.
        `
    },
    {
        id: 3,
        nome: 'Die My Darling',
        preco: 59.90,
        imagem: 'img/3.jpg',
        desc: `
         <div class="story">
             <h3>🎸 A Lenda por Trás da Garrafa (Horror Punk Edition)</h3>
             <p>Este não é um vinho. É uma poção, uma ode ao terror de cinema B com um toque de chiclete mascado. Diz a lenda que as uvas para este corte foram cultivadas no cemitério de uma cidadezinha onde as lápides eram a única fonte de sombra. Na noite da colheita, os viticultores usaram lanternas de abóbora (aquelas do Misfits, claro!) e só podiam trabalhar sob a luz da lua cheia, cantando <strong>“Skulls”</strong> em uníssono.</p>
             <p>O resultado é um vinho com a cor daquele sangue de mentira que usavam nos filmes de terror antigos, com a acidez agressiva e rápida de um solo de guitarra de dois minutos. É para quem curte o lado mais dark, mas com um sorriso maluco no rosto. É o <strong>Horror Punk</strong> engarrafado: potente, rápido e deixa um gosto inconfundível de rebeldia gótica e filme de zumbi.</p>
             <p><em>Perfeito para acompanhar uma pizza de cemitério ou um prato de "cereais de monstro".</em></p>
         </div> 
        `
    },
    {
        id: 4,
        nome: 'Iommi',
        preco: 59.90,
        imagem: 'img/4.jpg',
        desc: `
         <div class="story">
         <h3>🎸 A Lenda por Trás da Garrafa (O Riff Mais Pesado)</h3>
         <p>Este vinho é dedicado àquele que inventou o som do peso e da escuridão: Tony Iommi. As uvas deste Petit Verdot não cresceram em solo comum; elas foram plantadas em terra que continha minério de ferro, absorvendo a densidade e o peso de um riff lento e maciço. Dizem que a adega onde ele estagiou era à prova de som, e o silêncio era tão opressor que o vinho ficou <strong>concentrado</strong> e <strong>sombrio</strong>. É um tinto feito para ser bebido em um porão, à luz de velas, enquanto o disco <em>Master of Reality</em> toca na vitrola.</p>
         <p>Cada gole tem a força e a persistência do Iommi, que transformou uma adversidade (a perda das pontas dos dedos) na sua marca registrada. Ele é <strong>profundo</strong>, é <strong>denso</strong>, e te abraça com uma escuridão tânica que não te larga mais. É o verdadeiro vinho do <strong>Doom Metal</strong>, feito para os momentos de introspecção e peso.</p>
         <p><em>Combina perfeitamente com carnes de caça ou um longo e sombrio pedaço de chocolate amargo.</em></p>
     </div>
        `
    },
    {
        id: 5,
        nome: 'Burzum',
        preco: 59.90,
        imagem: 'img/5.jpg',
        desc: `
         <h3>🎸 A Lenda por Trás da Garrafa (Frio Norueguês)</h3>
         <p>Este aqui não é um vinho. É uma experiência de isolamento. O <strong>'Aske'</strong> nasceu nas profundezas da floresta norueguesa, num solo frio e vulcânico (a cinza do título), onde a luz do sol é uma raridade. Diz a lenda que as uvas são colhidas no auge do inverno, e o vinho é fermentado em barris que foram queimados por dentro em um antigo ritual pagão, para dar-lhe a cor da escuridão e o peso da solidão.</p>
         <p>Ele é feito para ser cru e não filtrado, exatamente como o som mais primitivo do Black Metal. Sabe aquele ruído de gravação "lo-fi" que você sente nos álbuns? É a acidez selvagem deste vinho. Ele começa gelado e etéreo, como as paisagens de <em>Hvis Lyset Tar Oss</em>, mas logo revela uma intensidade surpreendente, com um final longo e repetitivo, como um riff hipnótico que não te abandona.</p>
         <p><em>Perfeito para contemplação solitária, bebido lentamente, enquanto a neve cai lá fora.</em></p>
        `
    },
    {
        id: 6,
        nome: 'Kiss',
        preco: 59.90,
        imagem: 'img/6.jpg',
        desc: `
         <h3>🎸 A Lenda por Trás da Garrafa (O Show Tem Que Continuar)</h3>
         <p>Esqueça a seriedade. Este vinho é pura festa, pirotecnia e maquiagem exagerada. O 'Rock and Roll All Nite' não podia ser um tinto comum; tinha que ser um <strong>Espumante Rosé Brut</strong> para celebrar a explosão de um show do Kiss. Diz a lenda que as garrafas são agitadas manualmente pelos fãs mais dedicados da banda, para garantir que as bolhas sejam tão efervescentes quanto o ânimo de <strong>Gene Simmons</strong> cuspindo fogo.</p>
         <p>É um vinho que brilha, tem um toque de glamour e é feito para ser estourado e compartilhado (e talvez derramado) no meio da pista de dança. A cor rosé é uma homenagem ao batom vermelho e às luzes estroboscópicas. É leve, mas tem atitude. É para a noite toda: fácil de beber, mas que te deixa pronto para gritar o refrão mais alto que puder. Se o seu objetivo é "festejar todos os dias e fazer rock a noite toda", você encontrou o seu vinho.</p>
         <p><em>Ideal para celebrar o fim de uma dieta ou para ser servido gelado no backstage.</em></p>
        `
    },
    {
        id: 7,
        nome: 'Paranoid',
        preco: 59.90,
        imagem: 'img/7.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (O Primeiro Grito do Metal)</h3>
        <p>Este não é um vinho. É uma experiência sônica. O 'Paranoid' Barolo capta a melancolia chuvosa de Birmingham, a cidade natal do Black Sabbath. Diz a lenda que as uvas Nebbiolo que o compõem cresceram em um vinhedo que ficava exatamente ao lado de uma igreja abandonada. O vinho foi envelhecido em barricas de carvalho que antes serviram para a cura de incenso, emprestando-lhe um aroma denso e quase litúrgico.</p>
        <p>Este é um Barolo, o "Rei dos Vinhos", que aqui se transforma no <strong>Rei do Metal</strong>. Ele te abraça com a densidade do som de Geezer Butler, a fúria do solo de Tony Iommi e a voz assombrada de Ozzy Osbourne. É um vinho complexo, que exige tempo e respeito, e te deixa com aquela sensação de que algo misterioso está prestes a acontecer. É a escuridão, a angústia e o peso de um riff que mudou a história da música, engarrafados em um líquido profundo e eterno.</p>
        <p><em>Perfeito para uma noite de inverno, bebido na solidão, à luz de velas e ouvindo o som de um sino distante.</em></p>
        `
    },
    {
        id: 8,
        nome: 'Nightmares',
        preco: 59.90,
        imagem: 'img/8.jpg',
        desc: `
        <h3>🔪 A Lenda por Trás da Garrafa (O Pesadelo Doce)</h3>
        <p>Este vinho é uma armadilha. Assim como o sorriso de Freddy Krueger, ele te atrai com um aroma enganosamente doce e floral. A lenda diz que as videiras foram plantadas nos terrenos baldios de Elm Street, e as uvas só eram colhidas quando as vítimas de Freddy finalmente conseguiam dormir. Por isso, a colheita é feita no auge do sono REM, no momento em que a realidade começa a se dissolver.</p>
        <p>Escolhemos um Gewürztraminer por ser um vinho branco aromático, complexo e com um toque quase oleoso. É o contraste perfeito: é delicioso e perfumado no nariz, mas possui uma acidez que te "acorda" de repente, como o susto de um pesadelo. Você bebe para relaxar, mas ele te deixa alerta. Ele é floral, com notas de lichia e rosas, mas esconde um final metálico e picante, uma referência às luvas de lâminas. É o vinho que te acompanha até você cair no sono... e é aí que o verdadeiro terror começa.</p>
        <p><em>Ideal para ser bebido gelado, enquanto se luta para ficar acordado e não fechar os olhos.</em></p>
        `
    },
    {
        id: 9,
        nome: 'The Trooper',
        preco: 59.90,
        imagem: 'img/9.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (A Carga da Cavalaria)</h3>
        <p>Este é o vinho de batalha, o néctar dos heróis e das lendas históricas que inspiram o Iron Maiden. O <strong>'The Trooper'</strong> é um clássico <strong>Bordeaux Blend</strong> (corte de Cabernet Sauvignon, Merlot e Cabernet Franc), porque ele tem a complexidade e a nobreza de uma saga. Diz a lenda que as uvas foram cultivadas em um vinhedo que ficava no topo de uma colina, em uma formação de ataque, e o vinho só é engarrafado quando a lua cheia está na mesma posição da capa do single.</p>
        <p>Cada gole é como uma investida de cavalaria: a abertura é intensa e forte (o ataque de bateria), o corpo é maciço e estruturado (o baixo implacável de <strong>Steve Harris</strong>), e o final é longo, deixando um sabor de glória e história na boca. É um vinho que exige tempo no decanter, pois ele conta uma história em evolução. Se você procura um vinho com épico e força, com notas de carvalho envelhecido e frutas escuras que lembram as crônicas da humanidade, este é o seu rótulo. É o som de Bruce Dickinson atingindo a nota mais alta.</p>
        <p><em>Ideal para ser bebido ao som de "Fear of the Dark" e acompanhado de um assado digno de um banquete medieval.</em></p>
        `
    },
    {
        id: 10,
        nome: 'Creatures of the Night',
        preco: 59.90,
        imagem: 'img/10.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (O Pacto dos Quatro)</h3>
        <p>Este vinho é a personificação dos quatro deuses do rock: o Demônio (Gene Simmons), o Garoto Estelar (Paul Stanley), o Homem do Espaço (Ace Frehley/Tommy Thayer) e o Gato (Peter Criss/Eric Singer). O <strong>'Creatures of the Night'</strong> é um <em>blend</em> tinto de quatro uvas diferentes (por exemplo, Merlot, Cabernet, Zinfandel e Petit Verdot), cada uma representando a personalidade de um membro. A lenda diz que as uvas são colhidas à meia-noite, sob a luz de quatro tochas, e o processo de corte é um ritual secreto que harmoniza o caos do palco.</p>
        <p>Este vinho não é só festa; é a magia e a teatralidade. Ele tem a força da voz de Stanley, a densidade rítmica de Simmons e o toque quase místico da pirotecnia. É encorpado, com uma profundidade sedutora, mas com um final que explode no paladar, como um solo de guitarra inesperado. O sabor é complexo, refletindo a dualidade da banda: a diversão pop misturada com o peso do hard rock. Um brinde àqueles que vivem pela música e se transformam em seres da noite.</p>
        <p><em>Perfeito para um jantar dramático ou para iniciar a metamorfose antes de sair para o show.</em></p>
        `
    },
    {
        id: 11,
        nome: 'Stairway',
        preco: 59.90,
        imagem: 'img/11.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (O Vinho da Jornada)</h3>
        <p>Este não é um vinho para ser bebido apressadamente, mas sim para ser <strong>meditado</strong>, como uma longa jam session. O 'Stairway to Heaven' é um tinto de guarda, um <strong>Bordeaux Blend</strong> (Corte Clássico) que representa a complexidade e a evolução musical do Led Zeppelin. A lenda diz que as uvas foram cultivadas em um vinhedo escondido nas colinas, perto de uma antiga ruína, e o vinho estagiou em barricas de carvalho no subsolo por longos anos, absorvendo o silêncio e a história.</p>
        <p>A primeira taça é leve e acústica, com notas suaves de frutas e terra, como o dedilhado inicial de <strong>Jimmy Page</strong>. Mas, à medida que o vinho respira e evolui na taça (e na garrafa), ele ganha corpo, densidade e complexidade, explodindo em taninos robustos e sabores profundos, ecoando a bateria poderosa de <strong>John Bonham</strong> e o vocal alto de <strong>Robert Plant</strong>. É a jornada completa: começa no folk, passa pelo blues e termina no heavy rock mais glorioso. É o vinho da alquimia, da evolução e da mística do rock and roll.</p>
        <p><em>Perfeito para uma longa noite de inverno, onde a última taça é sempre a mais poderosa e reveladora.</em></p>
        `
    },
    {
        id: 12,
        nome: 'Bloody Sabbath',
        preco: 59.90,
        imagem: 'img/12.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (O Ritual Profano)</h3>
        <p>Este vinho é a personificação do nome da banda, evocando a escuridão e o peso de um Sabbath Negro. O 'Sabbath Bloody Sabbath' é um Tannat Reserva, uma das uvas mais potentes e tânicas do mundo, escolhida por sua cor quase negra e sua estrutura imponente. Diz a lenda que o vinho é fermentado apenas sob a luz da lua nova (a mais escura), e as vinhas são regadas com água de chuva coletada em cemitérios de catedrais góticas, para garantir a sua essência sombria.</p>
        <p>Este é um vinho brutalmente encorpado, com taninos que te agarram e não soltam — a força inabalável de Geezer Butler no baixo. No nariz, é intenso, com notas de alcaçuz, tabaco e terra molhada, um cheiro que remete a um encontro secreto em uma capela abandonada. O sabor é um soco, com um final longo e pesado, como o eco do último acorde de Tony Iommi. É a definição de Heavy Metal líquido, feito para honrar a capa de um álbum que te olha de volta.</p>
        <p><em>Perfeito para harmonizar com carne de porco assada lentamente ou para ser bebido em um ritual particular, longe de olhares curiosos.</em></p>
        `
    },
    {
        id: 13,
        nome: 'Lotta Love',
        preco: 59.90,
        imagem: 'img/13.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (O Blues no Volume Máximo)</h3>
        <p>Se o primeiro vinho do Zeppelin era a jornada mística, este aqui é a fúria e o calor do blues distorcido. O 'Whole Lotta Love' é um Zinfandel de alto álcool e maturação, uma uva conhecida por gerar vinhos quentes e opulentos. A lenda diz que as videiras foram plantadas em um terreno árido e pedregoso, e as uvas só eram colhidas após serem "cozidas" ao sol, refletindo o calor e o drive sexual do rock & roll.</p>
        <p>Este vinho tem a cor intensa e a densidade de um bar enfumaçado de Chicago, onde a banda buscou sua inspiração no blues. Ele explode no nariz com frutas maduras, notas de especiarias (pimenta e cravo) e um toque de baunilha defumada, a assinatura do amplificador de Jimmy Page no talo. É um vinho encorpado e ardente, com um final longo e vibrante, que ecoa a batida incontrolável de John Bonham. É a definição de excesso, poder e a entrega total ao groove.</p>
        <p><em>Perfeito para uma noite de verão, quando a única opção é ligar o som no máximo e se entregar ao ritmo.</em></p>
        `
    },
    {
        id: 14,
        nome: 'Sweet Child',
        preco: 59.90,
        imagem: 'img/14.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (O Riff Inesquecível)</h3>
        <p>Este vinho é dedicado ao guitarrista com a cartola mais famosa do rock, Slash. O <strong>'Sweet Child o' Mine'</strong> é um Cabernet Sauvignon puro, escolhido por sua estrutura clássica, mas com uma intensidade rebelde que reflete o glamour sujo de Hollywood. A lenda diz que as uvas para esta safra cresceram nos arredores de Sunset Strip, absorvendo o caos, a fumaça e a energia das madrugadas.</p>
        <p>A primeira nota no nariz é de frutas escuras e pimenta, mas logo se revela um toque de carvalho tostado e fumaça de tabaco, o cheiro de um camarim antes do show. Ele é encorpado, com taninos presentes, mas que são polidos e sedosos, como a fluidez de um solo de guitarra que nunca erra. É um vinho que te conquista com uma introdução suave e melódica, mas que explode no paladar com a ferocidade de um riff inesquecível. Ele tem a atitude do Guns N' Roses, mas a elegância atemporal de um guitarrista lendário.</p>
        <p><em>Perfeito para ser aberto quando o sol se põe e a cidade acende, acompanhando uma noite de excessos.</em></p>
        `
    },
    {
        id: 15,
        nome: 'Ace of Spades',
        preco: 59.90,
        imagem: 'img/15.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (Nascido para Perder, Feito para Vencer)</h3>
        <p>Este vinho é a personificação do Motörhead: um tiro na cabeça. O 'Ace of Spades' é um Zinfandel clássico, escolhido por sua natureza robusta, rústica e o alto teor alcoólico que atinge você rápido e forte. A lenda é que este vinho não estagia em barricas chiques; ele é fermentado em tanques de metal barulhentos, exposto à vibração constante do amplificador de baixo de Lemmy no volume máximo. É a definição de Rock and Roll em líquido.</p>
        <p>Ele não tem a complexidade de um Barolo, mas tem a honestidade de um soco no estômago. No nariz, é intenso, com cheiro de pólvora, tabaco, cereja preta e graxa de motor. É um vinho seco, direto, com taninos agressivos e um final que te deixa pronto para a próxima rodada. Você não "degusta" este vinho; você o vira com atitude. É para quem sabe que a vida é um jogo e você precisa ir com tudo. É o som do Heavy Metal misturado com a sujeira do Punk, sem pedir desculpas.</p>
        <p><em>Perfeito para acompanhar um prato de "speed metal", como uma porção de fritas bem gordurosa, ou o clássico "Jack e Coke" (se você se atrever a misturar!).</em></p>
        `
    },
    {
        id: 16,
        nome: 'Highway to Hell',
        preco: 59.90,
        imagem: 'img/16.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (Sem Parar a Festa)</h3>
        <p>Este vinho é a personificação da estrada infinita, da atitude rebelde e do Hard Rock australiano em sua forma mais pura. O <strong>'Highway to Hell'</strong> tinha que ser um Shiraz (o Syrah australiano), pois esta uva é conhecida por ser robusta, apimentada e vibrante, refletindo a energia implacável da banda. Diz a lenda que as videiras crescem ao lado de rodovias empoeiradas, absorvendo o calor do asfalto e a fumaça dos motores V8.</p>
        <p>Ele é um vinho que te atinge como um choque elétrico. No nariz, é pura fruta preta madura misturada com especiarias e um toque de licor, quente e convidativo como o vocal rouco de Bon Scott. No paladar, ele é potente e direto, sem firulas, com taninos firmes que representam o ritmo sólido de Malcolm Young. É para ser bebido alto, rápido e sem pensar muito. É o combustível perfeito para fazer Rock and Roll a noite toda, sem olhar para trás. É a essência do "Powerage" em cada gole.</p>
        <p><em>Perfeito para acompanhar um grande churrasco na piscina ou ser servido em um copo sujo de bar, direto da garrafa.</em></p>
        `
    },
    {
        id: 17,
        nome: 'War Pigs',
        preco: 59.90,
        imagem: 'img/17.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (O Som da Profecia)</h3>
        <p>Este vinho é uma jornada psicodélica, um tributo à fase mais experimental e politicamente engajada do <strong>Black Sabbath</strong>. O <strong>'War Pigs'</strong> é um <em>blend</em> de diferentes safras de vinhos muito antigos (vinhos "velhos" ou tawny), escolhido para refletir a profundidade temporal e a visão profética da banda. A lenda diz que as uvas para este vinho só podiam ser colhidas sob os efeitos de um denso nevoeiro, e o líquido foi envelhecido em barris gravados com símbolos arcanos, absorvendo o peso das profecias.</p>
        <p>Ele tem uma cor que lembra o solo de um campo de batalha, e um aroma complexo que começa com notas de frutos secos e tabaco, evoluindo para um toque de especiarias e mofo, o cheiro de um livro de magia antiga. Não é um vinho para ser bebido, é para ser <strong>meditado</strong>. No paladar, ele é denso e tânico, com um final que se estende infinitamente, ecoando as mudanças de tempo e o caos controlado da música. É o vinho que te convida a olhar para a escuridão e questionar o mundo, feito para acompanhar a longa e épica jornada de uma canção.</p>
        <p><em>Perfeito para uma longa sessão de audição noturna, enquanto se debatem os mistérios do universo.</em></p>
        `
    },
    {
        id: 18,
        nome: 'Story of My Life',
        preco: 59.90,
        imagem: 'img/18.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (O Blues da Rua)</h3>
        <p>Este vinho é a trilha sonora de uma vida de altos e baixos, dedicada a Mike Ness e ao espírito do Social Distortion. O <strong>'Story of My Life'</strong> é um <em>blend</em> com a atitude forte do Zinfandel misturada com a rusticidade do Cabernet Franc, refletindo a fusão única de punk, country e blues. A lenda diz que as uvas para este vinho foram cultivadas em terrenos que sobreviveram a incêndios e tempestades, ganhando uma casca dura, mas com um interior doce e surpreendente.</p>
        <p>Ele tem a cor de um pôr do sol sujo sobre a Califórnia e um aroma que é uma mistura de contradições: frutas escuras e pimenta, com um toque de fumaça de cigarro e couro velho. É um vinho sincero, sem maquiagem. A acidez e os taninos são a agressividade do punk rock, mas há uma doçura subjacente no final, a melancolia e a esperança da redenção. É o vinho que você bebe enquanto pensa na estrada percorrida, nos erros cometidos e na beleza de ter sobrevivido para contar a história. É o blues engarrafado com um moicano.</p>
        <p><em>Perfeito para ser bebido em um posto de gasolina abandonado, acompanhando a reflexão solitária.</em></p>
        `
    },
    {
        id: 19,
        nome: 'Zombies',
        preco: 59.90,
        imagem: 'img/19.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (Terror de Cinema B e Velocidade)</h3>
        <p>Este vinho é dedicado à fase mais rápida e de ficção científica trash do Misfits, a época dos filmes de monstro barato e dos riffs diretos. O 'Astro Zombies' é um Gamay Jovem (como os Beaujolais Nouveau), escolhido porque é um vinho que deve ser bebido agora, sem espera, refletindo o ritmo acelerado do Horror Punk. A lenda diz que as uvas para este rótulo são colhidas em plena velocidade, antes mesmo de estarem totalmente maduras, garantindo uma acidez frenética.</p>
        <p>A cor é um vermelho brilhante e vívido, como a maquiagem da caveira Crimson Ghost recém-aplicada. No nariz, é frutado e explosivo, mas com uma acidez que te dá um susto. Ele não é denso ou tânico; é leve e perigosamente fácil de beber, como um filme de terror trash que você não consegue parar de assistir. É o vinho que te acompanha durante a fuga de um monstro ou enquanto você corre para o pit. É o Horror Punk em sua forma mais divertida e energética: um choque de fruta vermelha com um final rápido e inconfundível. Woah!</p>
        <p><em>Perfeito para ser servido ligeiramente gelado, em uma festa que vai durar apenas trinta minutos intensos.</em></p>
        `
    },
    {
        id: 20,
        nome: 'Lick It Up',
        preco: 59.90,
        imagem: 'img/20.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (A Força Desmascarada)</h3>
        <p>Este vinho celebra o momento em que o KISS tirou as máscaras, revelando um som mais cru, pesado e direto do Hard Rock dos anos 80. O 'Lick It Up' é um Sangiovese Grosso (a uva de Brunello), escolhido por sua força e estrutura que não precisam de maquiagem para impressionar. A lenda diz que as videiras cresceram em solo vulcânico, absorvendo o calor do rock de estádio e a adrenalina da nova fase da banda.</p>
        <p>A cor é de um rubi intenso, vibrante e sem o drama do preto. No nariz, ele é direto: frutas vermelhas maduras, tabaco e um toque de cedro, refletindo a atitude de um solo de guitarra sem efeitos. Este vinho é encorpado e cheio de vida, com taninos firmes que representam o ritmo sólido e inegável da banda, provando que a música era forte o suficiente sem o artifício da maquiagem. É o Hard Rock destilado, o prazer de um som que te convida a morder mais do que você pode mastigar e, claro, lamber o que restou.</p>
        <p><em>Perfeito para ser servido em uma taça de cristal (ou direto da garrafa, se preferir), acompanhando um bife suculento.</em></p>
        `
    },
    {
        id: 21,
        nome: 'Eddie',
        preco: 59.90,
        imagem: 'img/21.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (O Imortal de Múltiplas Faces)</h3>
        <p>Este vinho não representa uma música, mas sim o próprio ícone imortal do Iron Maiden, Eddie. O <strong>'Eddie's Legacy'</strong> é um <em>Corte Múltiplo</em> de cinco ou mais uvas diferentes, representando as inúmeras encarnações do mascote — do zumbi cirúrgico ao faraó egípcio, passando pelo soldado de guerra e pelo ciborgue do futuro. A lenda diz que as uvas para este vinho são colhidas em safras completamente diferentes (um Multi-Vintage), para capturar a passagem do tempo e a evolução de Eddie.</p>
        <p>A cor é profunda e sempre levemente turva, como a névoa que precede sua aparição. No nariz, ele é complexo e mutável; você sente um aroma de frutas escuras e pimenta (o peso inicial), mas logo surgem notas terrosas e minerais (o passado histórico) e um toque de algo etéreo (a ficção científica). No paladar, ele é estruturado, mas surpreendente, com camadas de sabor que se revelam a cada gole. É um vinho que exige que você preste atenção para entender todas as suas faces. É o legado épico e imortal do metal em uma garrafa.</p>
        <p><em>Perfeito para ser bebido em uma noite de debate sobre qual capa de álbum do Eddie é a melhor.</em></p>
        `
    },
    {
        id: 22,
        nome: 'Deep Purple',
        preco: 59.90,
        imagem: 'img/22.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (O Fogo sobre o Lago)</h3>
        <p>Este vinho é um tributo ao momento mais icônico do Deep Purple — o incêndio no cassino de Montreux e o riff que virou hino mundial. O <strong>'Smoke on the Water'</strong> é um Nebbiolo Jovem, escolhido por ser uma uva que é tânica, forte, mas que, quando jovem, exibe uma pureza e um brilho que refletem o gênio de Ritchie Blackmore no riff. A lenda diz que as uvas para este vinho cresceram nas encostas íngremes de um lago, e a safra foi colhida na única noite em que a lua tinha uma cor alaranjada, como a fumaça sobre a água.</p>
        <p>A cor é de um rubi vibrante, quase transparente, mas com uma intensidade que esconde sua força. No nariz, ele é um contraste: começa com a leveza e a acidez do rock clássico, com notas de cereja e rosa (o toque de classe), mas logo surge um fundo defumado e mineral, a lembrança do fogo. É um vinho estruturado, que te atinge com a precisão da bateria de Ian Paice e o vocal potente de Ian Gillan. É o rock pesado que se encontra com a melodia clássica. É o vinho perfeito para celebrar um momento histórico.</p>
        <p><em>Perfeito para ser servido levemente fresco, enquanto se admira a beleza de um caos bem-sucedido.</em></p>
        `
    },
    {
        id: 23,
        nome: 'Blitzkrieg',
        preco: 59.90,
        imagem: 'img/23.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (1, 2, 3, 4!)</h3>
        <p>Este não é um vinho para ser analisado. É para ser bebido, rápido, antes que a música acabe. O <strong>'Blitzkrieg Bop'</strong> é um Beaujolais Nouveau ou um Gamay de maceração carbônica, escolhido pela sua natureza simples, jovem e por ser o único vinho que pode ser engarrafado e consumido em 2 minutos e 4 segundos, a duração perfeita de um hit dos Ramones. A lenda diz que as uvas para este vinho foram cultivadas em um vinhedo do Queens, debaixo de uma ponte, e a colheita é feita por quatro caras vestindo jaquetas de couro e tênis.</p>
        <p>A cor é de um vermelho brilhante e rebelde. No nariz, ele é puro suco de fruta vermelha, sem complicação, sem carvalho e sem frescura — é o som cru e direto de um baixo e uma bateria implacáveis. Ele é leve, de corpo magro, mas tem uma acidez que chuta, a energia punk que te faz pular. É o vinho que celebra a beleza da simplicidade, provando que você não precisa de complexidade para ser eterno. É o brinde perfeito para a juventude, a rebeldia e a batida incessante.</p>
        <p><em>Perfeito para ser servido bem gelado em copos de plástico, enquanto se prepara para um show que não vai durar mais de quarenta minutos.</em></p>
        `
    },
    {
        id: 24,
        nome: 'Beth',
        preco: 59.90,
        imagem: 'img/24.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (O Momento de Calmaria)</h3>
        <p>Este vinho é a antítese da pirotecnia; ele representa o lado mais suave, melódico e surpreendente do KISS—a balada atemporal <strong>'Beth'</strong>. É um Vinho de Sobremesa Late Harvest (Colheita Tardia), um néctar doce e dourado, que celebra o momento em que a fumaça se dissipa, as luzes se apagam e a emoção entra em cena. A lenda diz que as uvas para este vinho são deixadas na parreira até o último momento possível, ganhando uma concentração de açúcar e um toque de podridão nobre (Botrytis), refletindo a beleza inesperada que surge do caos.</p>
        <p>A cor é de um ouro líquido e sedutor. No nariz, ele é intenso, com notas de mel, damasco seco e flores brancas, o cheiro de um romance secreto. Ele é doce, mas tem uma acidez que o equilibra, impedindo-o de ser enjoativo — é a voz rouca de Peter Criss que toca a alma. Este é o vinho para o pós-show: quando a maquiagem está borrada, as luzes estão baixas e o momento é de sedução e vulnerabilidade. É a prova de que até a banda mais barulhenta do mundo tem seu lado terno.</p>
        <p><em>Perfeito para ser servido gelado, acompanhando o pedido de desculpas por ter feito muito barulho na noite anterior.</em></p>
        `
    },
    {
        id: 25,
        nome: 'Powerslave',
        preco: 59.90,
        imagem: 'img/25.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (O Espírito da Batalha)</h3>
        <p>Este vinho representa a encarnação de Eddie como o Faraó Egípcio e, mais amplamente, o soldado de guerra que não pode morrer, como visto em <em>'The Trooper'</em> e <em>'Powerslave'</em>. O <strong>'Powerslave'</strong> é um <em>blend</em> robusto de Tannat e Malbec, escolhido por sua cor profunda, taninos de batalha e a capacidade de envelhecer por séculos (como uma múmia). A lenda diz que o vinho estagiou em barricas que foram mantidas em uma câmara escura, e as uvas foram cultivadas em solo que continha relíquias de ferro e areia.</p>
        <p>A cor é de um tinto quase negro, impenetrável, digno de uma tumba real. No nariz, ele é grandioso e histórico: couro velho, tabaco, especiarias e um toque mineral, o cheiro de pó de tumba e armadura. Ele é monumental na boca, com taninos que se levantam como as pirâmides. Este é o vinho para a vitória, o brinde após o fim da batalha, que carrega o peso de mil anos de história e a força implacável de um exército de zumbis. É o metal mais épico e complexo, engarrafado para a glória.</p>
        <p><em>Perfeito para ser harmonizado com pratos exóticos e complexos ou para acompanhar a leitura de antigas crônicas de guerra.</em></p>
        `
    },
    {
        id: 26,
        nome: 'I Wanna Be Sedated',
        preco: 59.90,
        imagem: 'img/26.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (A Anarquia na Sala de Aula)</h3>
        <p>Este vinho é um grito de tédio na sala de aula, a trilha sonora perfeita para a fuga da escola e para as festas no porão. O <strong>'I Wanna Be Sedated'</strong> é um Lambrusco Seco (espumante tinto italiano), escolhido por ser um vinho borbulhante, de baixa graduação, que reflete o ritmo frenético e a atitude despreocupada dos Ramones. Diz a lenda que as uvas para esta safra foram pisadas em uma quadra de basquete abandonada e que as garrafas foram agitadas por cheerleaders rebeldes.</p>
        <p>A cor é de um rubi vibrante e inconformado, com bolhas que estouram no copo como a bateria de Marky Ramone. No nariz, ele é pura cereja e morango fresco, sem a complexidade de um adulto — é o cheiro do chiclete mascado e do verniz do armário da escola. Ele é leve, efervescente e tem uma acidez que é o puro "punk-pop" — simples, divertido e viciante. É o vinho que te acompanha quando você quer ligar o som no máximo, esquecer as regras e sentir-se jovem e entediado novamente. É o Rock 'n' Roll High School engarrafado: rápido, bobo e essencial.</p>
        <p><em>Perfeito para ser servido bem gelado em copos de plástico ou diretamente nos corredores da escola (depois do horário de aula, claro!).</em></p>
        `
    },
    {
        id: 27,
        nome: 'Raining Blood',
        preco: 59.90,
        imagem: 'img/27.jpg',
        desc: `
        <h3>🎸 A Lenda por Trás da Garrafa (O Ataque Sanguinário)</h3>
        <p>Este vinho é dedicado à banda que definiu a fúria do Thrash Metal. O <strong>'Raining Blood'</strong> é um Cabernet Franc puro, escolhido pela sua estrutura agressiva, notas herbáceas e o cheiro "verde" que, de alguma forma, evoca o cheiro de metal e sangue. A lenda diz que as uvas para esta safra cresceram em um solo tão pedregoso e seco que parecia ter sido queimado, e a fermentação é induzida sob o som do blast beat da bateria de Dave Lombardo para garantir a violência rítmica.</p>
        <p>A cor é de um vermelho escuro e opaco, como o sangue na capa de <em>Reign in Blood</em>. No nariz, ele é intenso, com um ataque de pimenta preta, notas de tabaco, grafite e um toque mineral, o cheiro de um pátio de matadouro. No paladar, ele é seco, ácido e implacável, com taninos que rasgam a boca como o riff de Kerry King e Jeff Hanneman. Este não é um vinho para relaxar; é para lutar. Ele é a essência da raiva engarrafada, terminando em um final longo e brutal, como um grito de guerra que nunca cessa.</p>
        <p><em>Perfeito para ser bebido em um porão escuro, enquanto se contempla a inevitabilidade da destruição.</em></p>
        `
    }
];


function alert(s, tt = 3000) {

    const div = document.createElement('div')
    div.style.position = 'fixed'
    div.style.left = '3px'
    div.style.top = '3px'

    div.style.backgroundColor = '#00ff0055'

    if (s.includes('ERRO')) {
        div.style.backgroundColor = '#ff0000'
    }

    //div.style.width='50vw'
    div.style.padding = '15px'
    div.style.borderRadius = '5px'
    div.textContent = s

    document.body.append(div)
    setTimeout(() => {
        div.remove()
    }, tt);
}