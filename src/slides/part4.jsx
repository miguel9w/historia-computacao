import React from 'react';
import FlowChips from '../components/FlowChips';
import IconGrid from '../components/IconGrid';

export function Slide16Linguagens() {
  return (
    <FlowChips
      index={16}
      eyebrow="Software"
      title="Evolução da Programação"
      summary="De instruções binárias diretas ao chip até linguagens que se leem quase como inglês comum."
      items={[
        { icon: 'maquina', label: 'Linguagem de Máquina', sub: '1940s' },
        { icon: 'assembly', label: 'Assembly', sub: '1949' },
        { icon: 'fortran', label: 'FORTRAN', sub: '1957' },
        { icon: 'cobol', label: 'COBOL', sub: '1959' },
        { icon: 'cLang', label: 'C', sub: '1972' },
        { icon: 'cpp', label: 'C++', sub: '1985' },
        { icon: 'java', label: 'Java', sub: '1995' },
        { icon: 'python', label: 'Python', sub: '1991' },
        { icon: 'javascript', label: 'JavaScript', sub: '1995' },
        { icon: 'rust', label: 'Rust', sub: '2010' }
      ]}
      notes="A programação evoluiu em camadas de abstração crescente. No início, os
      programadores escreviam diretamente em linguagem de máquina — sequências
      de 0s e 1s específicas de cada processador. O Assembly (fim dos anos
      1940) deu nomes mnemônicos a essas instruções, mas ainda exigia pensar
      como o hardware. FORTRAN (1957) e COBOL (1959) foram pioneiras em
      permitir escrever em algo parecido com álgebra e inglês, voltadas
      respectivamente para cálculo científico e processamento comercial de
      dados — o COBOL, aliás, ainda roda em sistemas bancários e
      governamentais até hoje. C (1972) equilibrou controle de baixo nível com
      produtividade e influenciou quase todas as linguagens seguintes,
      incluindo C++ (1985, com orientação a objetos), Java (1995, 'escreva
      uma vez, rode em qualquer lugar') e JavaScript (1995, motor da web
      interativa). Python (1991) ganhou popularidade décadas depois por sua
      sintaxe simples, especialmente em ciência de dados e IA. Rust (2010) é a
      geração mais recente, buscando aliar a performance de C/C++ à segurança
      de memória automática."
    />
  );
}

export function Slide17SistemasOperacionais() {
  return (
    <FlowChips
      index={17}
      eyebrow="Software"
      title="Evolução dos Sistemas Operacionais"
      summary="O software que gerencia todo o resto — do mainframe ao smartphone no seu bolso."
      items={[
        { icon: 'unix', label: 'UNIX', sub: '1969' },
        { icon: 'msdos', label: 'MS-DOS', sub: '1981' },
        { icon: 'windows', label: 'Windows', sub: '1985' },
        { icon: 'linuxBrand', label: 'Linux', sub: '1991' },
        { icon: 'androidBrand', label: 'Android', sub: '2008' },
        { icon: 'iosBrand', label: 'iOS', sub: '2007' }
      ]}
      notes="O UNIX, criado em 1969 nos Bell Labs, introduziu conceitos que ainda hoje
      sustentam sistemas modernos: multitarefa, múltiplos usuários e um
      sistema de arquivos hierárquico. Sua filosofia influencia diretamente o
      Linux (1991), criado por Linus Torvalds como projeto pessoal e hoje base
      de servidores, supercomputadores e do próprio Android. No universo dos
      computadores pessoais, o MS-DOS (1981) da Microsoft dominou os primeiros
      IBM PCs com uma interface em linha de comando, sendo sucedido pelo
      Windows (a partir de 1985), que popularizou a interface gráfica para o
      público em geral. No mundo mobile, o iOS (2007, junto ao primeiro
      iPhone) e o Android (2008, liderado pelo Google) redefiniram o que
      esperamos de um sistema operacional: sempre conectado, orientado a
      toque e a aplicativos. Hoje, mais pessoas interagem diariamente com
      Android e iOS do que com qualquer sistema operacional de desktop."
    />
  );
}

export function Slide18Internet() {
  return (
    <FlowChips
      index={18}
      eyebrow="Conectividade"
      title="Evolução da Internet"
      summary="De uma rede militar experimental a uma infraestrutura global que conecta bilhões de pessoas."
      items={[
        { icon: 'rede', label: 'ARPANET', sub: '1969' },
        { icon: 'link', label: 'TCP/IP', sub: '1983' },
        { icon: 'globo', label: 'World Wide Web', sub: '1991' },
        { icon: 'wifi', label: 'Banda larga', sub: 'anos 2000' },
        { icon: 'smartphone', label: 'Internet móvel', sub: '2007+' },
        { icon: 'satelite', label: '5G', sub: '2019+' }
      ]}
      notes="A internet começou em 1969 como a ARPANET, uma rede experimental
      financiada pelo Departamento de Defesa dos EUA para conectar
      universidades e centros de pesquisa. A padronização do protocolo TCP/IP
      em 1983 permitiu que redes diferentes se comunicassem entre si — este é
      tecnicamente o nascimento da 'internet' como uma rede de redes. Em 1991,
      Tim Berners-Lee, no CERN, lançou a World Wide Web: um sistema de
      documentos interligados por hiperlinks, acessível por navegadores, que
      tornou a internet utilizável pelo público em geral (é comum confundir
      'internet' com 'web', mas a web é uma camada de aplicação que roda sobre
      a internet). Nos anos 2000, a banda larga substituiu as conexões
      discadas, permitindo streaming e uso constante. A partir de 2007, com o
      iPhone, a internet móvel colocou a rede no bolso das pessoas o tempo
      todo. E o 5G, implantado a partir de 2019, promete velocidades e
      latências que viabilizam aplicações como carros autônomos e cidades
      inteligentes."
    />
  );
}

export function Slide19Atual() {
  return (
    <IconGrid
      index={19}
      eyebrow="O presente"
      title="Computação Atual"
      summary="Um conjunto de tecnologias que já não vivem isoladas — elas se combinam em quase todo produto digital."
      columns={3}
      items={[
        { icon: 'ia', title: 'IA Generativa', text: 'Modelos que criam texto, imagem, código e áudio a partir de dados.' },
        { icon: 'nuvem', title: 'Computação em Nuvem', text: 'Processamento e armazenamento sob demanda, acessados pela internet.' },
        { icon: 'rede', title: 'Internet das Coisas', text: 'Sensores e objetos do dia a dia conectados e trocando dados.' },
        { icon: 'blocos', title: 'Blockchain', text: 'Registros distribuídos e à prova de adulteração, sem autoridade central.' },
        { icon: 'satelite', title: 'Edge Computing', text: 'Processamento feito perto de onde o dado é gerado, reduzindo latência.' },
        { icon: 'quantico', title: 'Computação Quântica', text: 'Uso de qubits para resolver certos problemas exponencialmente mais rápido.' }
      ]}
      notes="Diferente das gerações passadas, o momento atual não é definido por um
      único avanço, mas pela convergência de várias tecnologias. A IA
      Generativa (como os grandes modelos de linguagem) passou, em poucos
      anos, de curiosidade acadêmica a ferramenta de uso diário. A computação
      em nuvem virou padrão de mercado: startups não precisam mais comprar
      servidores próprios. A Internet das Coisas conecta desde geladeiras a
      sensores industriais, gerando volumes massivos de dados. O blockchain
      propôs uma forma de confiança distribuída sem depender de bancos ou
      governos como intermediários. Edge computing surge como resposta à
      necessidade de baixa latência (carros autônomos não podem esperar um
      dado viajar até um data center distante e voltar). E a computação
      quântica, embora ainda experimental, já mostra resultados em nichos
      específicos, como simulação de moléculas e otimização combinatória."
    />
  );
}

export function Slide20Futuro() {
  return (
    <IconGrid
      index={20}
      eyebrow="O que vem a seguir"
      title="O Futuro"
      summary="Tendências que já saem do laboratório e começam a moldar a próxima década da computação."
      columns={3}
      items={[
        { icon: 'cerebro', title: 'Inteligência Artificial Geral', text: 'Sistemas capazes de aprender e raciocinar em qualquer domínio, como humanos.' },
        { icon: 'circuito', title: 'Chips neuromórficos', text: 'Hardware inspirado na estrutura do cérebro, mais eficiente para IA.' },
        { icon: 'quantico', title: 'Computação quântica', text: 'Expansão de qubits estáveis e algoritmos práticos em escala comercial.' },
        { icon: 'cerebro', title: 'Interfaces cérebro-computador', text: 'Comunicação direta entre sinais neurais e sistemas digitais.' },
        { icon: 'robo', title: 'Robôs autônomos', text: 'Máquinas físicas que percebem, decidem e agem com pouca supervisão humana.' }
      ]}
      notes="Estas cinco tendências representam apostas atuais de pesquisadores e
      empresas para a próxima década. A Inteligência Artificial Geral (AGI) é
      um objetivo ainda debatido: sistemas que não apenas executam tarefas
      específicas, mas raciocinam com flexibilidade comparável à humana em
      qualquer domínio — há divergência real na comunidade científica sobre
      quão perto (ou longe) estamos disso. Chips neuromórficos tentam imitar a
      forma como neurônios biológicos processam informação, prometendo
      eficiência energética muito maior para tarefas de IA. A computação
      quântica precisa resolver desafios de estabilidade dos qubits antes de
      se tornar prática em larga escala. Interfaces cérebro-computador, como
      as pesquisadas pela Neuralink e por laboratórios acadêmicos, buscam
      conectar sinais neurais diretamente a sistemas digitais, com aplicações
      médicas já em teste. E robôs autônomos, combinando IA, sensores e
      atuadores físicos, devem se tornar mais comuns em logística, agricultura
      e até em ambientes domésticos. Vale destacar aos alunos que 'futuro' em
      tecnologia é sempre incerto — nem toda tendência promissora hoje se
      consolida amanhã."
    />
  );
}
