'use strict';
/* Programa editável em código. Nenhum registro pessoal é enviado à rede. */
window.TAF_PLAN = {
  days: [
    {
      short:'SEG', name:'Segunda-feira', description:'Força superior + técnica na água',
      sessions:[
        {id:'superior-forca',title:'A • Membros superiores — FORÇA',modality:'Musculação',duration:'50–60 min',schedule:'À tarde',goal:'Progredir em barra fixa, supino e remada, preservando 1–3 repetições em reserva.',warmup:'6–8 min de mobilidade dinâmica de ombros e escápulas; 1–2 séries leves de supino e puxada. Evite falhar no aquecimento.',
         exercises:[
          {name:'Barra fixa pronada',sets:4,reps:'4–6',rest:'2–3 min',rir:'2',cues:'Segure a barra com as palmas para a frente e tronco firme. Inicie deprimindo as escápulas, puxe até o queixo ultrapassar a barra sem projetar o pescoço e desça de forma controlada até estender os cotovelos. Evite balanços.',adapt:'Se 6 repetições forem fáceis em todas as séries, aumente a dificuldade com carga adicional segura; se não alcançar 4, utilize assistência.'},
          {name:'Supino na estação',sets:4,reps:'5–8',rest:'2–3 min',rir:'2',cues:'Ajuste o assento para as alças ficarem próximas à linha média do peito. Mantenha costas apoiadas e punhos alinhados; empurre sem travar violentamente os cotovelos e retorne controlando a carga.',adapt:'Aumente um nível da máquina ao completar 4 × 8 sem perder a amplitude.'},
          {name:'Remada na polia baixa',sets:3,reps:'6–8',rest:'2 min',rir:'2',cues:'Sentado e com coluna neutra, puxe a alça em direção ao abdômen levando os cotovelos para trás. Evite inclinar o tronco para roubar movimento. Retorne estendendo os braços de forma controlada.'},
          {name:'Desenvolvimento de ombros',sets:3,reps:'6–8',rest:'90–120 s',rir:'2–3',cues:'Com mochila ou halteres seguros, mantenha abdômen firme e mãos próximas à altura dos ombros. Empurre acima da cabeça em trajetória confortável, sem arquear a lombar. Desça lentamente.',adapt:'Se não tiver peso que permita execução segura, substitua por flexão inclinada com foco em ombros.'},
          {name:'Tríceps na polia',sets:2,reps:'8–10',rest:'60–90 s',rir:'2',cues:'Cotovelos ao lado do corpo; estenda-os até quase travar e retorne sem deixar os ombros se moverem. Mantenha tronco estável.'},
          {name:'Rosca bíceps na polia',sets:2,reps:'8–10',rest:'60–90 s',rir:'2',cues:'Em pé, cotovelos próximos ao tronco, flexione os braços sem balançar o corpo. Desça devagar.'}
         ],cooldown:'3–5 min de mobilidade suave. Anote carga, repetições reais e RIR.'},
        {id:'natacao-tecnica',title:'Natação • Técnica e eficiência',modality:'Natação',duration:'30–40 min • 750–850 m',schedule:'Noite, entre 18h e 21h',goal:'Melhorar alinhamento, respiração e economia do crawl para os 100 m do TAF.',warmup:'200 m crawl leve, pausa conforme necessário.',
         exercises:[
          {name:'Crawl — 6 × 25 m técnica',sets:6,reps:'25 m',rest:'20–30 s',cues:'Alterne 25 m focados em alinhamento do corpo, 25 m em rotação suave e 25 m com respiração lateral natural; repita a sequência. Não prenda a respiração de forma prolongada.',distance:150},
          {name:'Crawl — 6 × 50 m confortável',sets:6,reps:'50 m',rest:'20–30 s',cues:'Nade em velocidade constante, mantenha o corpo alinhado e expire debaixo d’água de forma confortável. Priorize braçadas eficientes, não velocidade.',distance:300},
          {name:'Crawl — soltura',sets:1,reps:'100–200 m',rest:'Livre',cues:'Nade muito leve para concluir a sessão, sem buscar tempo.',distance:150}
         ],cooldown:'Volume total aproximado: 200 + 150 + 300 + 100–200 = 750–850 m. Treine com supervisão e não faça apneia prolongada.'}
      ]
    },
    {
      short:'TER',name:'Terça-feira',description:'Força de pernas + base aeróbica',sessions:[
        {id:'inferior-forca',title:'B • Membros inferiores — FORÇA',modality:'Musculação',duration:'50–60 min',schedule:'À tarde',goal:'Desenvolver força de pernas, quadril e panturrilhas usando cargas disponíveis e exercícios unilaterais.',warmup:'5–8 min de caminhada e mobilidade dinâmica de tornozelos/quadril; 1 série leve de agachamento.',
         exercises:[
          {name:'Agachamento com mochila',sets:4,reps:'6–8',rest:'2–3 min',rir:'2',cues:'Mantenha a mochila firme junto ao peito ou costas e pés na largura confortável. Flexione quadril e joelhos, desça até amplitude sem dor mantendo coluna neutra e suba empurrando o chão.',adapt:'Use carga estável; se ficar fácil, aumente o peso ou priorize o agachamento unilateral assistido.'},
          {name:'Afundo reverso',sets:3,reps:'6–8 por perna',rest:'90–120 s',rir:'2',cues:'Dê um passo para trás, flexione ambos os joelhos mantendo o joelho da frente alinhado ao pé e retorne pela perna da frente. Apoie-se para equilíbrio, se necessário.'},
          {name:'Levantamento romeno',sets:3,reps:'6–10',rest:'2 min',rir:'2',cues:'Com mochila ou pesos seguros junto ao corpo, mantenha joelhos levemente flexionados. Empurre o quadril para trás até sentir alongar a parte posterior das coxas, sem arredondar a coluna; retorne contraindo glúteos.'},
          {name:'Cadeira extensora',sets:3,reps:'8–10',rest:'90 s',rir:'2',cues:'Ajuste o equipamento para alinhar o eixo próximo ao joelho. Estenda os joelhos sem impulso e desça controladamente. Pare se houver dor articular.'},
          {name:'Panturrilha unilateral',sets:3,reps:'10–15 por perna',rest:'60 s',rir:'2',cues:'Apoie uma mão para equilibrar, suba na ponta de um pé, faça uma breve pausa e desça lentamente. Evite impulsos.'},
          {name:'Prancha frontal',sets:3,reps:'30–45 s',rest:'45–60 s',cues:'Apoie antebraços e pontas dos pés, mantenha quadril alinhado e abdômen contraído, respirando naturalmente. Encerre quando perder a postura.'}
         ],cooldown:'Caminhe alguns minutos. Evite levar pernas à falha porque haverá corrida leve depois.'},
        {id:'corrida-leve',title:'Corrida • Base aeróbica leve',modality:'Corrida',duration:'25–35 min + aquecimento',schedule:'À noite',goal:'Construir resistência e melhorar recuperação sem prejudicar a força.',warmup:'8–10 min de caminhada e trote progressivo.',exercises:[
          {name:'Corrida leve contínua',sets:1,reps:'25–35 min',rest:'Sem pausas obrigatórias',cues:'Ritmo de conversa: você deve conseguir falar frases completas. Se as pernas estiverem pesadas do treino de força, reduza para 20–25 min ou substitua por caminhada. Não persiga ritmo por km.'}
         ],cooldown:'5 min caminhando. Se aparecer pontada abdominal, reduza ou interrompa; se recorrente, busque avaliação médica.'}
      ]
    },
    {
      short:'QUA',name:'Quarta-feira',description:'Hipertrofia superior + velocidade na água',sessions:[
        {id:'superior-hipertrofia',title:'C • Membros superiores — HIPERTROFIA',modality:'Musculação',duration:'50–60 min',schedule:'À tarde',goal:'Aumentar o volume de trabalho para peito, costas, ombros e braços com boa amplitude.',warmup:'5–8 min de movimentos para ombros e 1–2 séries leves de supino e puxador.',exercises:[
          {name:'Supino na estação',sets:3,reps:'8–12',rest:'90–120 s',rir:'1–3',cues:'Alças na altura do peito, costas apoiadas. Empurre em ritmo controlado e desça até amplitude confortável sem soltar a tensão.'},
          {name:'Puxador alto',sets:3,reps:'8–12',rest:'90–120 s',rir:'1–3',cues:'Segure a barra acima da largura dos ombros. Puxe até a parte superior do peito levando cotovelos para baixo; mantenha tronco estável e evite puxar atrás da nuca.'},
          {name:'Flexão de braços convencional',sets:3,reps:'10–20',rest:'90 s',rir:'2',cues:'Mãos próximas da linha dos ombros, corpo alinhado da cabeça aos calcanhares. Flexione os cotovelos até amplitude confortável e retorne estendendo-os sem deixar o quadril cair.',adapt:'Se 20 repetições forem fáceis, use uma variação mais desafiadora em vez de fazer séries intermináveis.'},
          {name:'Remada na polia baixa',sets:3,reps:'10–12',rest:'90 s',rir:'2',cues:'Puxe cotovelos para trás em direção às costelas, sem jogar o tronco para trás. Controle o retorno.'},
          {name:'Elevação lateral',sets:3,reps:'12–15',rest:'60–75 s',rir:'2–3',cues:'Com cargas leves seguras, eleve os braços lateralmente até aproximadamente a altura dos ombros com cotovelos suaves. Evite encolher ombros ou balançar.'},
          {name:'Rosca bíceps na polia',sets:2,reps:'10–15',rest:'60 s',rir:'1–2',cues:'Mantenha cotovelos fixos e flexione os braços. Retorne lentamente sem usar impulso.'},
          {name:'Tríceps na polia',sets:2,reps:'10–15',rest:'60 s',rir:'1–2',cues:'Cotovelos próximos do tronco, estenda os braços sem movimentar o ombro.'}
         ],cooldown:'Registre cargas e repetições efetivas. Não chegue à falha em todas as séries.'},
        {id:'natacao-velocidade',title:'Natação • Velocidade nos 100 m',modality:'Natação',duration:'30–45 min • 650–750 m',schedule:'Noite, entre 18h e 21h',goal:'Aprimorar saída, virada, velocidade sustentável e recuperação entre estímulos.',warmup:'200 m de crawl confortável.',exercises:[
          {name:'Crawl — 6 × 25 m rápidos',sets:6,reps:'25 m',rest:'45–60 s',cues:'Cada tiro rápido, mas tecnicamente estável; retorne à respiração normal entre repetições. Não faça apneia prolongada.',distance:150},
          {name:'Crawl — 4 × 50 m forte controlado',sets:4,reps:'50 m',rest:'60–90 s',cues:'Ritmo forte e constante nas duas piscinas de 25 m. Faça a virada com segurança e preserve a técnica até o final.',distance:200},
          {name:'Crawl — soltura',sets:1,reps:'100–200 m',rest:'Livre',cues:'Desacelere para concluir a sessão.',distance:150}
         ],cooldown:'Total: 200 + 150 + 200 + 100–200 = 650–750 m. Faça em piscina supervisionada.'}
      ]
    },
    {
      short:'QUI',name:'Quinta-feira',description:'Corrida intervalada e mobilidade',sessions:[
        {id:'corrida-intervalada',title:'Corrida • Intervalos para 2.400 m',modality:'Corrida',duration:'35–45 min',schedule:'Preferencialmente à noite',goal:'Melhorar ritmo e tolerância ao esforço dos 2.400 m sem correr todos os dias no máximo.',warmup:'10–12 min de trote leve + 3 acelerações suaves de 40–60 m, com recuperação completa.',exercises:[
          {name:'Corrida intervalada — 5 × 400 m',sets:5,reps:'400 m',rest:'2 min caminhando/trotando',cues:'Faça os cinco trechos em ritmo forte, porém controlado e semelhante entre eles. Na primeira semana, priorize completar todas as repetições sem esgotar-se; não precisa atingir o ritmo-alvo de prova.',distance:2000},
          {name:'Mobilidade pós-corrida',sets:1,reps:'5–8 min',rest:'Livre',cues:'Mobilidade confortável de tornozelos, quadril e panturrilhas. Evite forçar alongamentos dolorosos.'}
         ],cooldown:'Trote/caminhada de 5–10 min. Dor significativa, progressiva ou recorrente: interrompa e procure orientação clínica.'}
      ]
    },
    {
      short:'SEX',name:'Sexta-feira',description:'Hipertrofia inferior e abdômen',sessions:[
        {id:'inferior-hipertrofia',title:'D • Membros inferiores + CORE',modality:'Musculação',duration:'50–60 min',schedule:'À tarde',goal:'Aumentar massa muscular e resistência de pernas e tronco, sem comprometer a corrida de sábado.',warmup:'5–8 min de caminhada e mobilidade dinâmica do quadril, joelho e tornozelo.',exercises:[
          {name:'Agachamento búlgaro',sets:3,reps:'8–12 por perna',rest:'90–120 s',rir:'2–3',cues:'Apoie o peito do pé de trás em uma superfície estável e baixa. Flexione a perna da frente com tronco estável, desça até amplitude confortável e suba pelo pé da frente. Apoie-se se necessário.'},
          {name:'Agachamento com mochila',sets:3,reps:'10–15',rest:'90 s',rir:'2–3',cues:'Mantenha mochila firme e coluna neutra. Desça controladamente, distribuindo a pressão nos pés, e retorne sem perder o alinhamento dos joelhos.'},
          {name:'Levantamento romeno',sets:3,reps:'10–12',rest:'90–120 s',rir:'2–3',cues:'Quadril vai para trás, joelhos levemente flexionados, coluna neutra e carga próxima ao corpo. Retorne com glúteos.'},
          {name:'Cadeira extensora',sets:3,reps:'12–15',rest:'60–90 s',rir:'2',cues:'Estenda e flexione os joelhos lentamente dentro de amplitude sem dor e sem trancos.'},
          {name:'Panturrilha unilateral',sets:3,reps:'12–20 por perna',rest:'60 s',rir:'2',cues:'Suba e desça com controle e equilíbrio, usando apoio leve para segurança.'},
          {name:'Abdominal conforme TAF',sets:3,reps:'15–25',rest:'60 s',rir:'2–3',cues:'Reproduza a execução validada na sua comissão do TAF, com amplitude completa e sem puxar o pescoço. Confirme o tipo exigido antes do próximo teste.'},
          {name:'Prancha lateral',sets:2,reps:'30–45 s por lado',rest:'45 s',cues:'Antebraço sob o ombro e corpo em linha reta. Eleve o quadril, mantenha respiração natural e evite rotação do tronco.'}
         ],cooldown:'Não leve todos os exercícios à falha; a corrida do sábado precisa ser preservada.'}
      ]
    },
    {
      short:'SÁB',name:'Sábado',description:'Ritmo ou resistência, alternando semanas',sessions:[
        {id:'corrida-sabado',title:'Corrida • Ritmo ou resistência',modality:'Corrida',duration:'30–45 min',schedule:'Preferencialmente à noite',goal:'Consolidar base aeróbica e ritmo de prova sem acumular excesso de fadiga.',warmup:'8–10 min de caminhada/trote leve.',exercises:[
          {name:'Corrida contínua de resistência',sets:1,reps:'30–40 min (semanas alternadas)',rest:'Sem pausas obrigatórias',cues:'Nas semanas ímpares, mantenha ritmo leve de conversa. Caminhe se necessário. Não transforme a sessão em teste de 2.400 m.'},
          {name:'Corrida de ritmo controlado',sets:1,reps:'10–15 min moderado (semanas alternadas)',rest:'Integrado à corrida',cues:'Nas semanas pares, após aquecimento faça 10–15 minutos moderados (fala em frases curtas), mais 5–10 min leves para terminar. Execute somente uma das duas opções acima por sábado.'}
         ],cooldown:'5–10 min de caminhada. A sessão de sábado é apenas uma das alternativas, não a soma das duas.'}
      ]
    },
    {short:'DOM',name:'Domingo',description:'Recuperação e sono',sessions:[
      {id:'descanso',title:'Descanso e recuperação',modality:'Mobilidade',duration:'Livre',schedule:'Sem treino obrigatório',goal:'Assimilar os estímulos da semana e preparar-se para a próxima.',warmup:'Não necessário.',exercises:[
        {name:'Caminhada opcional',sets:1,reps:'15–30 min se desejar',rest:'Livre',cues:'Caminhe confortavelmente; não é uma sessão obrigatória.'},
        {name:'Mobilidade leve opcional',sets:1,reps:'5–10 min',rest:'Livre',cues:'Movimentos suaves e sem dor para as regiões mais tensas.'}
      ],cooldown:'Priorize alimentação habitual, sono e recuperação. Não compense treinos perdidos neste dia.'}
    ]}
  ],
  phases:[
    {from:1,to:3,title:'Adaptação e técnica',text:'Semanas 1–2: faça aproximadamente 2 séries nos acessórios e até 3 nos exercícios principais; mantenha 2–3 RIR. Na semana 3, aumente gradualmente se estiver recuperando bem. Corridas controladas.'},
    {from:4,to:4,title:'Semana de recuperação',text:'Reduza em aproximadamente 30–40% as séries de musculação. Corrida e natação com menor volume; não faça testes máximos.'},
    {from:5,to:7,title:'Construção de força e massa',text:'Aproxime-se do número completo de séries indicado. Busque aumentar repetições e, depois, cargas, sem sacrificar amplitude ou recuperação.'},
    {from:8,to:8,title:'Semana de recuperação',text:'Reduza novamente o volume em 30–40% para facilitar a recuperação e a progressão do bloco seguinte.'},
    {from:9,to:11,title:'Consolidação de desempenho',text:'Mantenha cargas desafiadoras com 1–3 RIR, controle a fadiga das pernas e aprimore ritmo de corrida e técnica de natação.'},
    {from:12,to:12,title:'Reavaliação',text:'Reduza o volume no início da semana e avalie testes em dias separados e em boas condições, evitando avaliações máximas com fadiga ou dor.'}
  ],
  progression:[
    {title:'Como aumentar as cargas',body:'Progressão dupla: se o alvo é 3 × 8–12, use uma carga que permita ao menos 8 repetições limpas. Avance até 12 em todas as séries; então aumente a carga no menor incremento e volte à faixa inferior.'},
    {title:'Quanto descansar',body:'Movimentos principais de força: 2–3 min. Exercícios acessórios: cerca de 60–120 s. Descanse mais se perder muita qualidade técnica. Registre RIR e descanso quando variar.'},
    {title:'Ajustes se a semana pesar',body:'Se pernas pesadas prejudicarem a corrida ou houver cansaço acumulado, reduza 1 série de exercícios de pernas, mantenha terça-feira leve e suspenda tiros intensos até recuperar. Não compense sessões perdidas.'},
    {title:'Corrida e desconforto',body:'Use refeições habituais e hidratação gradual. Se a pontada à direita reaparecer, reduza ou interrompa o esforço. Por ter sido recorrente, procure avaliação médica antes de novas provas máximas.'},
    {title:'Natação segura',body:'Evite prender a respiração por muito tempo ou fazer treinos de apneia, sobretudo sozinho. Faça os tiros com recuperação suficiente, em piscina supervisionada.'}
  ]
};
