import React from 'react';
import ContentSlide from '../components/ContentSlide';
import { IMAGES, CREDITS } from '../images';

export function Slide06Cartoes() {
  return (
    <ContentSlide
      index={6}
      eyebrow="Automação de dados"
      title="Cartões Perfurados"
      summary="A ideia que nasceu em teares de tecido acabou fundando a maior empresa de computadores do século XX."
      image={IMAGES.hollerith}
      imageCaption={CREDITS.hollerith}
      bullets={[
        { icon: 'jacquard', title: 'Joseph Jacquard', text: '1801 — usou cartões perfurados para automatizar padrões em teares de tecido.' },
        { icon: 'hollerith', title: 'Herman Hollerith', text: '1890 — criou uma máquina tabuladora que processou o censo dos EUA em meses, não anos.' },
        { icon: 'ibm', title: 'Origem da IBM', text: '1911 — a empresa de Hollerith se funde a outras e, em 1924, se torna a IBM.' }
      ]}
      notes="O cartão perfurado é um dos elos mais interessantes da história da
      computação: a ideia surgiu na indústria têxtil, não na matemática.
      Joseph Marie Jacquard usou cartões perfurados em 1801 para controlar
      automaticamente quais fios um tear deveria levantar, permitindo tecer
      padrões complexos sem intervenção manual constante — e Babbage se
      inspirou diretamente nisso para a entrada de dados da Máquina Analítica.
      Quase um século depois, Herman Hollerith adaptou a técnica para
      processar dados do censo dos Estados Unidos: sua máquina tabuladora
      reduziu de anos para meses o tempo necessário para contar e cruzar dados
      de milhões de pessoas em 1890. Hollerith fundou a Tabulating Machine
      Company, que em 1911 se fundiu a outras empresas formando a
      Computing-Tabulating-Recording Company — renomeada, em 1924, para
      International Business Machines: a IBM."
    />
  );
}

export function Slide07Eletromecanicos() {
  return (
    <ContentSlide
      index={7}
      eyebrow="Guerra e engenharia"
      title="Computadores Eletromecânicos"
      summary="Relés eletromecânicos deram os primeiros passos rumo à computação programável."
      image={IMAGES.zuseZ3}
      imageCaption={CREDITS.zuseZ3}
      bullets={[
        { icon: 'zuse', title: 'Zuse Z3', text: '1941 — de Konrad Zuse, na Alemanha; primeiro computador programável totalmente automático.' },
        { icon: 'harvard', title: 'Harvard Mark I', text: '1944 — construído com a IBM; usado pela Marinha dos EUA em cálculos balísticos.' },
        { icon: 'guerra', title: 'Contexto da 2ª Guerra Mundial', text: 'O conflito acelerou drasticamente o financiamento e o desenvolvimento da computação.' }
      ]}
      notes="Entre o mecânico puro e o eletrônico, existiu uma geração de máquinas
      eletromecânicas baseadas em relés — dispositivos que abrem e fecham
      circuitos eletricamente, mas de forma muito mais lenta que válvulas ou
      transistores. O Z3, construído pelo engenheiro alemão Konrad Zuse em
      1941, é considerado o primeiro computador programável e automaticamente
      controlado do mundo, embora seu trabalho tenha ficado isolado durante a
      guerra e pouco conhecido no Ocidente por décadas. Nos Estados Unidos, o
      Harvard Mark I (1944), construído em parceria com a IBM, tinha mais de
      15 metros de comprimento e foi usado pela Marinha para cálculos de
      artilharia. Não é coincidência que essas máquinas tenham surgido durante
      a Segunda Guerra Mundial: a necessidade de calcular trajetórias, decifrar
      códigos e resolver problemas logísticos em larga escala transformou a
      computação em prioridade estratégica de governos."
    />
  );
}

export function Slide08Turing() {
  return (
    <ContentSlide
      index={8}
      eyebrow="Fundamentos teóricos"
      title="Alan Turing"
      summary="Definiu, no papel, o que uma máquina pode calcular — antes mesmo de computadores existirem."
      image={IMAGES.turing}
      imageCaption={CREDITS.turing}
      bullets={[
        { icon: 'turingMachine', title: 'Máquina de Turing', text: '1936 — modelo matemático abstrato que define os limites do que é computável.' },
        { icon: 'criptoanalise', title: 'Criptoanálise', text: '1939-1945 — liderou a quebra do código Enigma nazista em Bletchley Park.' },
        { icon: 'turingTest', title: 'Teste de Turing', text: '1950 — proposta para avaliar se uma máquina exibe comportamento inteligente.' }
      ]}
      notes="Alan Turing é considerado um dos pais da ciência da computação teórica.
      Em 1936, antes de qualquer computador eletrônico existir, publicou um
      artigo descrevendo a 'Máquina de Turing': um modelo matemático simples —
      uma fita infinita e um conjunto de regras — capaz de representar
      qualquer processo computável. Esse conceito ainda hoje fundamenta a
      ciência da computação teórica. Durante a Segunda Guerra Mundial, Turing
      liderou uma equipe em Bletchley Park, no Reino Unido, que quebrou o
      código da máquina Enigma alemã, encurtando a guerra em anos, segundo
      historiadores — trabalho que permaneceu em sigilo por décadas. Em 1950,
      propôs o 'Jogo da Imitação', hoje conhecido como Teste de Turing: um
      critério prático para avaliar se o comportamento de uma máquina é
      indistinguível do de um ser humano, ideia que ainda orienta debates sobre
      inteligência artificial. Turing morreu em 1954, perseguido por sua
      homossexualidade, então criminalizada no Reino Unido."
    />
  );
}

export function Slide09Eniac() {
  return (
    <ContentSlide
      index={9}
      eyebrow="A era eletrônica"
      title="ENIAC"
      summary="O gigante de 30 toneladas que provou que a computação eletrônica era viável em larga escala."
      image={IMAGES.eniac}
      imageCaption={CREDITS.eniac}
      bullets={[
        { icon: 'eniac', title: 'Primeiro computador eletrônico de grande porte', text: '1945/46 — construído na Universidade da Pensilvânia, EUA.' },
        { icon: 'valvula', title: 'Características', text: '~18.000 válvulas, 30 toneladas, 167 m² — programado manualmente por cabos e chaves.' },
        { icon: 'aplicacoes', title: 'Aplicações', text: 'Cálculos balísticos e, depois, simulações para o projeto da bomba de hidrogênio.' }
      ]}
      notes="O ENIAC (Electronic Numerical Integrator and Computer) foi concluído em
      1945 e apresentado ao público em 1946, na Universidade da Pensilvânia.
      Diferente das máquinas eletromecânicas anteriores, usava válvulas a
      vácuo — cerca de 18 mil delas — o que o tornava mil vezes mais rápido que
      seus predecessores. Ocupava uma sala inteira, pesava cerca de 30
      toneladas e consumia tanta energia que, segundo relatos da época, luzes
      da vizinhança oscilavam quando era ligado. Programá-lo era um processo
      físico: operadoras (majoritariamente mulheres, muitas vezes esquecidas
      pela história) reconfiguravam manualmente cabos e chaves para cada nova
      tarefa, processo que podia levar dias. Foi usado inicialmente para
      calcular tabelas de tiro de artilharia para o Exército dos EUA e, mais
      tarde, para simulações relacionadas ao desenvolvimento da bomba de
      hidrogênio — um lembrete de como ciência da computação e contexto
      bélico caminharam juntos nesse período."
    />
  );
}
