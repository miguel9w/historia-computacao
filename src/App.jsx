import React from 'react';
import { Deck, Slide, Heading, Text, FlexBox, Notes } from 'spectacle';
import { colors, fonts } from './theme';

import { Slide02Definicao, Slide04Babbage, Slide05Ada } from './slides/part1';
import { Slide06Cartoes, Slide07Eletromecanicos, Slide08Turing, Slide09Eniac } from './slides/part2';
import { Slide11Gen1, Slide12Gen2, Slide13Gen3, Slide14Gen4, Slide15Gen5 } from './slides/part3';
import { Slide16Linguagens, Slide17SistemasOperacionais, Slide18Internet, Slide19Atual, Slide20Futuro } from './slides/part4';
import { Slide22Curiosidades, Slide23Conclusao, Slide24Referencias } from './slides/part5';
import {
  Slide03InstrumentosComAbaco,
  SlideVacuumTubeDeep,
  SlideTransistorDeep,
  SlideAIDeep,
  SlideQuantumDeep
} from './slides/experiments';

function Slide01Capa() {
  return (
    <Slide backgroundColor={colors.bg}>
      <FlexBox height="100%" flexDirection="column">
        <span style={{
          fontFamily: fonts.mono, fontSize: '11px', color: colors.accentCyan,
          textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '16px'
        }}>
          Fundamentos da Computação
        </span>
        <Heading fontFamily={fonts.header} fontSize="54px" color={colors.white} fontWeight={700} margin="0 0 10px 0">
          História da Computação
        </Heading>
        <Text fontFamily={fonts.text} fontSize="18px" color={colors.muted} lineHeight={1.6} margin="0 0 40px 0" style={{ maxWidth: '600px', textAlign: 'center' }}>
          Do ábaco à inteligência artificial — uma jornada de mais de 5 mil anos de inovação.
        </Text>
        <div style={{ width: '80px', height: '3px', background: colors.accent, borderRadius: '2px' }} />
      </FlexBox>
      <Notes>Slide de abertura: apresentar o tema e contextualizar a linha do tempo que será percorrida.</Notes>
    </Slide>
  );
}

function Slide10Transistor() {
  return (
    <Slide backgroundColor={colors.bg}>
      <div style={{ padding: '50px 60px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <span style={{
          fontFamily: fonts.mono, fontSize: '11px', color: colors.accentCyan,
          textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px'
        }}>
          Invenção revolucionária
        </span>
        <h2 style={{ fontFamily: fonts.header, fontSize: '36px', fontWeight: 700, color: colors.white, margin: '0 0 14px 0' }}>
          A Invenção do Transistor
        </h2>
        <Text fontFamily={fonts.text} fontSize="16px" color={colors.muted} lineHeight={1.7} margin="0 0 10px 0" style={{ maxWidth: '700px' }}>
          1947 — Nos laboratórios Bell, John Bardeen, Walter Brattain e William Shockley
          criam o primeiro transistor do mundo: um pequeno dispositivo de estado sólido
          que substituiria as frágeis e volumosas válvulas a vácuo.
        </Text>
        <Text fontFamily={fonts.text} fontSize="14px" color={colors.muted} lineHeight={1.6} style={{ maxWidth: '600px', fontStyle: 'italic' }}>
          Este componente, hoje fabricado na casa dos trilhões por ano, é a base de
          todo computador, smartphone e dispositivo digital moderno.
        </Text>
      </div>
      <Notes>Contexto: o transistor foi inventado em 1947 nos Bell Labs, mas levaria cerca
      de uma década para substituir amplamente as válvulas. Seus inventores ganharam o
      Prêmio Nobel de Física em 1956.</Notes>
    </Slide>
  );
}

export default function App() {
  return (
    <Deck theme={{
      fonts: {
        header: fonts.header,
        text: fonts.text,
        monospace: fonts.mono
      },
      colors: {
        primary: colors.white,
        secondary: colors.muted,
        tertiary: colors.accent,
        quaternary: colors.bg
      },
      size: {
        width: 1280,
        height: 720
      }
    }}>
      <Slide01Capa />
      <Slide02Definicao />
      <Slide03InstrumentosComAbaco />
      <Slide04Babbage />
      <Slide05Ada />
      <Slide06Cartoes />
      <Slide07Eletromecanicos />
      <Slide08Turing />
      <Slide09Eniac />
      <SlideVacuumTubeDeep />
      <Slide10Transistor />
      <SlideTransistorDeep />
      <Slide11Gen1 />
      <Slide12Gen2 />
      <Slide13Gen3 />
      <Slide14Gen4 />
      <Slide15Gen5 />
      <Slide16Linguagens />
      <Slide17SistemasOperacionais />
      <Slide18Internet />
      <Slide19Atual />
      <SlideAIDeep />
      <Slide20Futuro />
      <SlideQuantumDeep />
      <Slide22Curiosidades />
      <Slide23Conclusao />
      <Slide24Referencias />
    </Deck>
  );
}
