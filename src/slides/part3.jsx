import React from 'react';
import GenerationCard from '../components/GenerationCard';
import { IMAGES, CREDITS } from '../images';

export function Slide11Gen1() {
  return (
    <GenerationCard
      index={11}
      eyebrow="Gerações de computadores · 1 de 5"
      genNumber="1ª"
      genName="Primeira geração"
      period="1940 – 1956 · Válvulas a vácuo"
      summary="A era em que 'computador' significava uma sala cheia de tubos de vidro incandescentes."
      image={IMAGES.eniac}
      imageCaption={CREDITS.eniac}
      bullets={[
        { icon: 'valvula', text: 'Válvulas a vácuo faziam o papel de transistores atuais.' },
        { icon: 'eniac', text: 'ENIAC é o exemplo mais famoso desta geração.' },
        { icon: 'eniac', text: 'Alto consumo de energia e enorme geração de calor.' }
      ]}
      notes="A primeira geração de computadores (1940–1956) é definida pelo uso de
      válvulas a vácuo como componente eletrônico de chaveamento — o mesmo
      princípio usado em rádios antigos. Elas permitiam velocidades muito
      maiores que relés mecânicos, mas eram frágeis, geravam muito calor e
      queimavam com frequência, exigindo troca constante e equipes dedicadas
      apenas à manutenção. O ENIAC, apresentado no slide anterior, é o
      representante mais conhecido dessa geração, junto ao UNIVAC I — o
      primeiro computador comercial dos EUA, entregue ao Census Bureau em
      1951. O altíssimo consumo de energia e o tamanho das máquinas (salas
      inteiras) tornavam a computação acessível apenas a governos, grandes
      universidades e corporações."
    />
  );
}

export function Slide12Gen2() {
  return (
    <GenerationCard
      index={12}
      eyebrow="Gerações de computadores · 2 de 5"
      genNumber="2ª"
      genName="Segunda geração"
      period="1956 – 1963 · Transistores"
      summary="O transistor encolheu o computador e multiplicou sua confiabilidade."
      image={IMAGES.transistor}
      imageCaption={CREDITS.transistor}
      bullets={[
        { icon: 'transistor', text: 'Transistores substituem as frágeis válvulas a vácuo.' },
        { icon: 'valvula', text: 'Menor consumo de energia e muito menos calor gerado.' },
        { icon: 'circuito', text: 'Maior confiabilidade: máquinas quebravam com menor frequência.' }
      ]}
      notes="Inventado em 1947 nos Bell Labs (slide anterior mostrou uma réplica),
      o transistor levou cerca de uma década para substituir amplamente as
      válvulas a vácuo nos computadores comerciais, dando início à segunda
      geração. Sendo um componente de estado sólido, o transistor era muito
      menor, mais confiável, mais rápido e consumia uma fração da energia de
      uma válvula equivalente — sem os problemas de queima e superaquecimento.
      Computadores como o IBM 1401 e o PDP-1 tornaram-se práticos o bastante
      para universidades e empresas de médio porte, não apenas grandes
      governos. Essa geração também viu o surgimento das primeiras linguagens
      de programação de alto nível, como o FORTRAN e o COBOL, que serão vistas
      mais adiante."
    />
  );
}

export function Slide13Gen3() {
  return (
    <GenerationCard
      index={13}
      eyebrow="Gerações de computadores · 3 de 5"
      genNumber="3ª"
      genName="Terceira geração"
      period="1964 – 1971 · Circuitos integrados"
      summary="Milhares de transistores passam a caber em uma única pastilha de silício."
      bullets={[
        { icon: 'circuito', text: 'Circuitos integrados combinam vários transistores num só chip.' },
        { icon: 'memoria', text: 'Computadores ficam menores, mais rápidos e mais baratos.' },
        { icon: 'codigo', text: 'Surgem os primeiros sistemas operacionais, permitindo multitarefa.' }
      ]}
      notes="A partir da invenção do circuito integrado por Jack Kilby (Texas
      Instruments, 1958) e Robert Noyce (Fairchild Semiconductor), tornou-se
      possível colocar múltiplos transistores, resistores e capacitores numa
      única pastilha de silício. Isso disparou uma redução drástica em
      tamanho, custo e consumo de energia, ao mesmo tempo em que aumentava a
      velocidade de processamento. O exemplo mais emblemático é a família IBM
      System/360 (1964), que unificou hardware compatível entre diferentes
      portes de máquina — uma inovação de arquitetura tão importante quanto
      técnica. Esta geração também marca o nascimento dos sistemas
      operacionais modernos, que permitiam múltiplos programas compartilharem
      os recursos do computador de forma organizada, abrindo caminho para o
      uso corporativo em larga escala."
    />
  );
}

export function Slide14Gen4() {
  return (
    <GenerationCard
      index={14}
      eyebrow="Gerações de computadores · 4 de 5"
      genNumber="4ª"
      genName="Quarta geração"
      period="1971 – meados de 1980 · Microprocessadores"
      summary="Um computador inteiro cabe numa única pastilha — e nasce o PC."
      bullets={[
        { icon: 'microprocessador', text: 'Microprocessadores integram toda a CPU em um único chip.' },
        { icon: 'apple', text: 'Computadores pessoais tornam-se acessíveis a famílias e escritórios.' },
        { icon: 'apple', text: 'Apple e IBM PC popularizam a computação doméstica e corporativa.' }
      ]}
      notes="Em 1971, a Intel lançou o 4004, o primeiro microprocessador comercial —
      uma CPU inteira em um único chip. Isso reduziu drasticamente custo e
      tamanho, abrindo caminho para o computador pessoal. O Apple II (1977),
      da recém-fundada Apple de Steve Jobs e Steve Wozniak, e depois o IBM PC
      (1981) tornaram a computação acessível fora de laboratórios e grandes
      empresas, chegando a escritórios, escolas e, cada vez mais, a
      residências. Essa democratização teve efeito cultural profundo: pela
      primeira vez, pessoas comuns podiam programar, jogar e processar textos
      em casa. A rivalidade Apple vs. IBM (e depois Microsoft) desta época
      moldou boa parte da indústria de tecnologia como a conhecemos hoje."
    />
  );
}

export function Slide15Gen5() {
  return (
    <GenerationCard
      index={15}
      eyebrow="Gerações de computadores · 5 de 5"
      genNumber="5ª"
      genName="Quinta geração"
      period="Meados de 1980 até hoje · IA e além"
      summary="A geração atual não é definida por um único chip, mas por um ecossistema de tecnologias inteligentes e conectadas."
      bullets={[
        { icon: 'ia', text: 'Inteligência Artificial: sistemas que aprendem e tomam decisões.' },
        { icon: 'nuvem', text: 'Computação em nuvem: poder de processamento sob demanda, via internet.' },
        { icon: 'bigData', text: 'Big Data: análise de volumes massivos de dados em tempo real.' },
        { icon: 'quantico', text: 'Computação quântica: bits quânticos exploram novos paradigmas de cálculo.' },
        { icon: 'robotica', text: 'Robótica: sistemas físicos autônomos que interagem com o mundo real.' }
      ]}
      notes="A quinta geração é diferente das anteriores porque não é definida por um
      único salto de hardware, mas por um conjunto de tecnologias que avançam
      em paralelo desde meados dos anos 1980 até hoje. A Inteligência
      Artificial evoluiu de sistemas baseados em regras para redes neurais
      profundas capazes de gerar texto, imagem e código. A computação em
      nuvem eliminou a necessidade de cada empresa ou pessoa possuir seu
      próprio hardware potente, permitindo alugar capacidade de processamento
      sob demanda pela internet. O Big Data trouxe ferramentas para extrair
      valor de volumes de dados impensáveis há poucas décadas. A computação
      quântica, ainda em estágio inicial, promete resolver certos problemas de
      forma exponencialmente mais rápida usando qubits em vez de bits
      clássicos. E a robótica moderna combina tudo isso — sensores, IA,
      conectividade — em sistemas físicos autônomos. É provável que
      futuramente esta era seja subdividida pelos historiadores, assim como
      hoje subdividimos décadas passadas."
    />
  );
}
