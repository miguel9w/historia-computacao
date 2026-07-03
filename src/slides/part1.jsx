import React from 'react';
import ContentSlide from '../components/ContentSlide';
import IconGrid from '../components/IconGrid';
import { IMAGES, CREDITS } from '../images';

export function Slide02Definicao() {
  return (
    <IconGrid
      index={2}
      eyebrow="Fundamentos"
      title="O que é Computação?"
      summary="A ciência de processar informação de forma automática — a base invisível de quase tudo que fazemos hoje."
      columns={3}
      items={[
        {
          icon: 'definicao',
          title: 'Definição',
          text: 'Estudo dos processos, algoritmos e sistemas usados para armazenar, transformar e comunicar informação.'
        },
        {
          icon: 'objetivo',
          title: 'Objetivo',
          text: 'Automatizar cálculos e tarefas repetitivas, ampliando a capacidade humana de resolver problemas complexos.'
        },
        {
          icon: 'importancia',
          title: 'Importância na sociedade',
          text: 'Move economias, conecta pessoas, acelera a ciência e está presente em praticamente todo objeto do dia a dia.'
        }
      ]}
      notes="Antes de mergulhar na história, é importante alinhar o conceito. Computação
      não é sinônimo de 'computador' — é o campo mais amplo que estuda como
      processar informação de forma sistemática e automática, usando
      algoritmos. O objetivo central sempre foi o mesmo desde o ábaco até a IA:
      reduzir o esforço humano em tarefas de cálculo e lógica, e ampliar o que
      conseguimos fazer com a informação disponível. Hoje a computação está tão
      entranhada na sociedade — bancos, hospitais, transporte, comunicação —
      que se tornou uma infraestrutura invisível, comparável à eletricidade ou
      à água encanada."
    />
  );
}

export function Slide03Instrumentos() {
  return (
    <ContentSlide
      index={3}
      eyebrow="As origens"
      title="Primeiros instrumentos de cálculo"
      summary="Muito antes da eletrônica, a humanidade já buscava formas mecânicas de calcular."
      image={IMAGES.abaco}
      imageCaption={CREDITS.abaco}
      bullets={[
        { icon: 'abaco', title: 'Ábaco', text: '~3000 a.C. — contas deslizantes para somar e subtrair; ainda usado hoje.' },
        { icon: 'napier', title: 'Ossos de Napier', text: '1617 — hastes numeradas que facilitavam multiplicações e divisões.' },
        { icon: 'regua', title: 'Régua de cálculo', text: '1622 — usava escalas logarítmicas; dominou a engenharia até os anos 1970.' },
        { icon: 'pascalina', title: 'Pascalina', text: '1642 — primeira calculadora mecânica de engrenagens, de Blaise Pascal.' },
        { icon: 'leibniz', title: 'Máquina de Leibniz', text: '1673 — o "stepped reckoner", capaz de somar, subtrair, multiplicar e dividir.' }
      ]}
      notes="Estes cinco instrumentos representam mais de quatro mil anos de tentativas
      de mecanizar o cálculo. O ábaco é o mais antigo e surpreendentemente
      eficiente — hábeis operadores competiam de igual para igual com
      calculadoras elétricas em testes no século XX. As réguas de cálculo,
      baseadas em logaritmos, foram ferramenta padrão de engenheiros até a
      calculadora eletrônica de bolso popularizar-se nos anos 1970 (incluindo
      cálculos da missão Apollo). A Pascalina de Blaise Pascal (1642) e a
      máquina de Leibniz (1673) já usavam engrenagens para automatizar as
      quatro operações básicas, antecipando ideias que Babbage retomaria dois
      séculos depois em escala muito maior."
    />
  );
}

export function Slide04Babbage() {
  return (
    <ContentSlide
      index={4}
      eyebrow="Pioneiros"
      title="Charles Babbage"
      summary="O matemático britânico que projetou, mas nunca viu funcionar, o computador do futuro."
      image={IMAGES.babbage}
      imageCaption={CREDITS.babbage}
      bullets={[
        { icon: 'babbage', title: 'Máquina Diferencial', text: '1822 — calculava tabelas matemáticas automaticamente, por diferenças finitas.' },
        { icon: 'algoritmo', title: 'Máquina Analítica', text: '1837 — projeto com memória, processador, entrada por cartões e saída impressa.' },
        { icon: 'historia', title: '"Pai do computador"', text: 'A Analítica reunia, pela primeira vez, todos os elementos de um computador moderno.' }
      ]}
      notes="Charles Babbage (1791–1871) nunca construiu uma máquina completa em vida —
      a tecnologia de usinagem da época não tinha precisão suficiente e o
      financiamento do governo britânico foi cortado. Ainda assim, seus
      projetos são notáveis: a Máquina Diferencial automatizava o cálculo de
      tabelas polinomiais (usadas em navegação e engenharia), eliminando erros
      humanos de cálculo manual. Já a Máquina Analítica, projetada a partir de
      1837, é considerada o primeiro projeto de computador de propósito geral:
      tinha uma unidade de processamento ('mill'), memória ('store'), entrada
      via cartões perfurados (inspirados no tear de Jacquard) e conseguia ser
      reprogramada. Por isso Babbage é chamado de 'pai do computador' — embora
      quem tenha realmente programado a máquina, ao menos no papel, tenha sido
      Ada Lovelace, tema do próximo slide."
    />
  );
}

export function Slide05Ada() {
  return (
    <ContentSlide
      index={5}
      eyebrow="Pioneiros"
      title="Ada Lovelace"
      summary="Filha do poeta Lord Byron, viu na Máquina Analítica muito mais do que números."
      image={IMAGES.adaLovelace}
      imageCaption={CREDITS.adaLovelace}
      bullets={[
        { icon: 'adaLovelace', title: 'Primeira programadora', text: 'Traduziu e ampliou um artigo sobre a Máquina Analítica de Babbage, em 1843.' },
        { icon: 'algoritmo', title: 'Primeiro algoritmo', text: 'Escreveu um método para calcular números de Bernoulli — o 1º programa da história.' },
        { icon: 'historia', title: 'Legado', text: 'Previu que máquinas poderiam manipular símbolos e até compor música, não só números.' }
      ]}
      notes="Augusta Ada King, Condessa de Lovelace (1815–1852), traduziu do francês um
      artigo sobre a Máquina Analítica de Babbage e o enriqueceu com notas
      próprias que, no fim, eram mais longas que o texto original. Na 'Nota G',
      ela detalhou um método passo a passo para a máquina calcular números de
      Bernoulli — reconhecido hoje como o primeiro algoritmo escrito para ser
      executado por uma máquina, o que lhe rendeu o título de primeira
      programadora da história. Mais impressionante ainda foi sua visão: Ada
      percebeu que a máquina poderia manipular qualquer símbolo, não apenas
      números, sugerindo que poderia um dia compor música ou processar
      imagens — uma intuição notável sobre computação de propósito geral, mais
      de um século antes de existir na prática. A linguagem de programação Ada,
      usada em sistemas críticos (aviação, defesa), foi batizada em sua honra."
    />
  );
}
