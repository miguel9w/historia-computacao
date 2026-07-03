import React from 'react';
import { Slide, Text, FlexBox, Notes } from 'spectacle';
import Abacus from '../components/experiments/Abacus';
import VacuumTubeSim from '../components/experiments/VacuumTubeSim';
import TransistorSwitch from '../components/experiments/TransistorSwitch';
import NeuralNetworkVis from '../components/experiments/NeuralNetworkVis';
import QuantumBloch from '../components/experiments/QuantumBloch';
import Icon from '../components/Icon';
import { colors, fonts } from '../theme';

const slideStyle = { padding: '30px 50px', height: '100%', display: 'flex', flexDirection: 'column' };
const titleStyle = { fontFamily: fonts.header, fontSize: '28px', fontWeight: 700, color: colors.white, margin: '0 0 4px 0' };
const eyebrowStyle = { fontFamily: fonts.mono, fontSize: '11px', color: colors.accentCyan, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '6px' };

export function Slide03InstrumentosComAbaco() {
  const bullets = [
    { icon: 'abaco', title: 'Ábaco', text: '~3000 a.C. — contas deslizantes para somar e subtrair; ainda usado hoje.' },
    { icon: 'napier', title: 'Ossos de Napier', text: '1617 — hastes numeradas que facilitavam multiplicações e divisões.' },
    { icon: 'regua', title: 'Régua de cálculo', text: '1622 — usava escalas logarítmicas; dominou a engenharia até os anos 1970.' },
    { icon: 'pascalina', title: 'Pascalina', text: '1642 — primeira calculadora mecânica de engrenagens, de Blaise Pascal.' },
    { icon: 'leibniz', title: 'Máquina de Leibniz', text: '1673 — o "stepped reckoner", capaz de somar, subtrair, multiplicar e dividir.' }
  ];
  return (
    <Slide backgroundColor={colors.bg}>
      <FlexBox style={{ height: '100%', padding: '30px 40px' }}>
        <div style={{ flex: 1, paddingRight: '24px' }}>
          <span style={{
            fontFamily: fonts.mono, fontSize: '11px', color: colors.accentCyan,
            textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '8px'
          }}>
            As origens
          </span>
          <h2 style={{
            fontFamily: fonts.header, fontSize: '30px', fontWeight: 700, color: colors.white,
            margin: '0 0 8px 0', lineHeight: 1.2
          }}>
            Primeiros instrumentos de cálculo
          </h2>
          <Text fontFamily={fonts.text} fontSize="14px" color={colors.muted} lineHeight={1.6} margin="0 0 16px 0">
            Muito antes da eletrônica, a humanidade já buscava formas mecânicas de calcular.
          </Text>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '8px',
                  background: colors.bgPanel, border: `1px solid ${colors.line}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <Icon name={b.icon} size={14} color={colors.accent} />
                </div>
                <div>
                  <span style={{ fontFamily: fonts.header, fontWeight: 600, fontSize: '14px', color: colors.white, display: 'block' }}>
                    {b.title}
                  </span>
                  <span style={{ fontFamily: fonts.text, fontSize: '12px', color: colors.muted, lineHeight: 1.5 }}>
                    {b.text}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: '0 0 500px' }}>
          <Abacus />
        </div>
      </FlexBox>
      <Notes>Estes cinco instrumentos representam mais de quatro mil anos de tentativas
      de mecanizar o cálculo. O ábaco é o mais antigo e surpreendentemente
      eficiente — hábeis operadores competiam de igual para igual com
      calculadoras elétricas em testes no século XX. As réguas de cálculo,
      baseadas em logaritmos, foram ferramenta padrão de engenheiros até a
      calculadora eletrônica de bolso popularizar-se nos anos 1970 (incluindo
      cálculos da missão Apollo). A Pascalina de Blaise Pascal (1642) e a
      máquina de Leibniz (1673) já usavam engrenagens para automatizar as
      quatro operações básicas, antecipando ideias que Babbage retomaria dois
      séculos depois em escala muito maior.</Notes>
    </Slide>
  );
}

export function SlideVacuumTubeDeep() {
  return (
    <Slide backgroundColor={colors.bg}>
      <div style={slideStyle}>
        <span style={eyebrowStyle}>Salto Computacional · Válvulas</span>
        <h2 style={titleStyle}>Como Funciona uma Válvula a Vácuo (Triodo)</h2>
        <Text fontFamily={fonts.text} fontSize="14px" color={colors.muted} lineHeight={1.6} margin="0 0 6px 0" style={{ maxWidth: '700px' }}>
          O triodo usa <strong style={{ color: colors.white }}>emissão termiônica</strong>: o filamento aquece o cátodo,
          que libera elétrons. A <strong style={{ color: colors.white }}>grade</strong> controla o fluxo: tensão negativa
          repele elétrons (corte), positiva permite passagem. O <strong style={{ color: colors.white }}>ânodo</strong> os coleta,
          gerando corrente amplificada.
        </Text>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <VacuumTubeSim />
        </div>
        <p style={{ fontFamily: fonts.mono, fontSize: '10px', color: colors.muted, textAlign: 'center', margin: 0 }}>
          ENIAC usava ~18.000 válvulas · Cada válvula consumia ~5W · Temperatura interna chegava a 50°C
        </p>
      </div>
      <Notes>
        A válvula triodo tem três elementos: filamento (aquece), cátodo (emite elétrons por efeito termiônico),
        grade (controla o fluxo) e placa/ânodo (coleta). No experimento, o slider controla a tensão da grade:
        valores negativos criam uma barreira que impede os elétrons de chegar ao ânodo (corte);
        valores positivos aceleram os elétrons. A corrente de placa medida é proporcional à intensidade
        do feixe. Este princípio de 'portão controlado por voltagem' é exatamente o mesmo que
        um transistor FET usa — a tecnologia mudou, mas o conceito subjacente permanece.
      </Notes>
    </Slide>
  );
}

export function SlideTransistorDeep() {
  return (
    <Slide backgroundColor={colors.bg}>
      <div style={slideStyle}>
        <span style={eyebrowStyle}>Salto Computacional · Transistores</span>
        <h2 style={titleStyle}>Como Funciona um Transistor como Chave</h2>
        <Text fontFamily={fonts.text} fontSize="14px" color={colors.muted} lineHeight={1.6} margin="0 0 6px 0" style={{ maxWidth: '700px' }}>
          Um transistor <strong style={{ color: colors.white }}>NPN</strong> tem três regiões: <strong style={{ color: colors.white }}>emissor</strong>,
          <strong style={{ color: colors.white }}> base</strong> e <strong style={{ color: colors.white }}>coletor</strong>.
          Uma pequena corrente na base controla uma corrente muito maior entre coletor e emissor
          (ganho típico β = 100–800). Três regiões de operação: <strong style={{ color: '#ef5350' }}>corte</strong>
          (Vbe &lt; 0.55V, transistor OFF), <strong style={{ color: '#ff9800' }}>ativo</strong> (Vbe 0.55–0.75V, amplificando),
          <strong style={{ color: '#34d399' }}>saturação</strong> (Vbe &gt; 0.75V, totalmente ON).
        </Text>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <TransistorSwitch />
        </div>
        <p style={{ fontFamily: fonts.mono, fontSize: '10px', color: colors.muted, textAlign: 'center', margin: 0 }}>
          Chips modernos têm bilhões de transistores por mm² · Menor transistor atual ≈ 2nm
        </p>
      </div>
      <Notes>
        No transistor NPN, a junção base-emissor funciona como um diodo: precisa de ~0.7V para
        começar a conduzir. Abaixo disso, o transistor está em corte (OFF). Entre 0.7V e ~1V,
        opera na região ativa: a corrente de coletor é aproximadamente β × corrente de base
        (amplificação). Acima disso, entra em saturação: a tensão coletor-emissor cai para ~0.2V
        e o transistor age como uma chave fechada (ON). É este modo chaveado que cria os 0s e 1s
        da lógica digital. A miniaturização seguiu a Lei de Moore: de 10μm nos anos 1970 para
        ~2nm hoje, permitindo bilhões de transistores num chip do tamanho de uma unha.
      </Notes>
    </Slide>
  );
}

export function SlideAIDeep() {
  return (
    <Slide backgroundColor={colors.bg}>
      <div style={slideStyle}>
        <span style={eyebrowStyle}>Salto Computacional · Inteligência Artificial</span>
        <h2 style={titleStyle}>Como Funciona uma Rede Neural</h2>
        <Text fontFamily={fonts.text} fontSize="14px" color={colors.muted} lineHeight={1.6} margin="0 0 6px 0" style={{ maxWidth: '700px' }}>
          Inspirada no cérebro: <strong style={{ color: colors.white }}>neurônios artificiais</strong> recebem entradas,
          multiplicam por <strong style={{ color: colors.white }}>pesos</strong> (importância de cada conexão),
          somam com um <strong style={{ color: colors.white }}>viés</strong> (bias) e aplicam uma
          <strong style={{ color: colors.white }}> função de ativação</strong> (ex: sigmoide).
          O <strong style={{ color: colors.white }}>treinamento</strong> ajusta os pesos via
          retropropagação para minimizar o erro.
        </Text>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <NeuralNetworkVis />
        </div>
        <p style={{ fontFamily: fonts.mono, fontSize: '10px', color: colors.muted, textAlign: 'center', margin: 0 }}>
          GPT-4 tem ~1.8 trilhão de parâmetros (pesos) · Redes modernas têm centenas de camadas
        </p>
      </div>
      <Notes>
        O experimento mostra uma rede 3-4-2 totalmente conectada com pesos fixos
        (pré-treinados para um problema de classificação). Cada neurônio da camada oculta
        calcula: h_j = sigmoid(Σ w_ij × x_i + b_j). O brilho e tamanho de cada neurônio
        refletem seu valor de ativação. As conexões mais brilhantes indicam pesos maiores.
        No treinamento real (backpropagation), o erro na saída é propagado de volta pela
        rede, e cada peso é ajustado na direção que reduz o erro (gradiente descendente).
        Este processo repete-se milhões de vezes com milhares de exemplos até a rede
        convergir. O que torna o deep learning poderoso é a capacidade de aprender
        representações hierárquicas: primeiras camadas detectam bordas, camadas médias
        detectam formas, camadas finais detectam objetos completos.
      </Notes>
    </Slide>
  );
}

export function SlideQuantumDeep() {
  return (
    <Slide backgroundColor={colors.bg}>
      <div style={slideStyle}>
        <span style={eyebrowStyle}>Salto Computacional · Computação Quântica</span>
        <h2 style={titleStyle}>Como Funciona um Qubit</h2>
        <Text fontFamily={fonts.text} fontSize="14px" color={colors.muted} lineHeight={1.6} margin="0 0 6px 0" style={{ maxWidth: '700px' }}>
          Diferente do bit clássico (0 ou 1), o <strong style={{ color: colors.white }}>qubit</strong> existe em
          <strong style={{ color: colors.white }}> superposição</strong>: ambas as probabilidades simultaneamente.
          A <strong style={{ color: colors.white }}>Esfera de Bloch</strong> representa o estado quântico:
          θ (teta) controla a probabilidade de |0⟩ vs |1⟩,
          φ (phi) controla a <strong style={{ color: colors.white }}>fase</strong> relativa.
          <strong style={{ color: colors.white }}> Emaranhamento</strong> conecta múltiplos qubits.
        </Text>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <QuantumBloch />
        </div>
        <p style={{ fontFamily: fonts.mono, fontSize: '10px', color: colors.muted, textAlign: 'center', margin: 0 }}>
          n qubits em superposição = 2ⁿ estados simultâneos · 300 qubits &gt; átomos no universo
        </p>
      </div>
      <Notes>
        A esfera de Bloch é uma representação geométrica do estado puro de um qubit.
        Qualquer estado pode ser escrito como |ψ⟩ = cos(θ/2)|0⟩ + e^(iφ) sin(θ/2)|1⟩.
        θ define a probabilidade de medir 0 ou 1: P(|0⟩) = cos²(θ/2), P(|1⟩) = sin²(θ/2).
        Quando θ = 0, o qubit está em |0⟩ puro. θ = 180° = |1⟩ puro. θ = 90° =
        superposição perfeita (50% cada). A fase φ não afeta as probabilidades de medição,
        mas interfere com outros qubits via emaranhamento — é aí que mora o poder
        quântico. Algoritmos como o de Shor (fatoração) e Grover (busca) exploram
        interferência construtiva/destrutiva entre amplitudes para encontrar respostas
        exponencialmente mais rápido que algoritmos clássicos.
      </Notes>
    </Slide>
  );
}
