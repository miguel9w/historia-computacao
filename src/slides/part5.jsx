import React from 'react';
import { Heading, Text, Box, FlexBox } from 'spectacle';
import SlideFrame from '../components/SlideFrame';
import IconGrid from '../components/IconGrid';
import Icon from '../components/Icon';
import { colors, fonts } from '../theme';

export function Slide22Curiosidades() {
  return (
    <IconGrid
      index={22}
      eyebrow="Bônus"
      title="Curiosidades"
      summary="Pequenos marcos que raramente aparecem nos livros, mas ajudam a humanizar a história da tecnologia."
      columns={5}
      items={[
        { icon: 'bug', title: 'Primeiro "bug"', text: '1947 — uma mariposa presa a um relé travou o Harvard Mark II.' },
        { icon: 'email', title: 'Primeiro e-mail', text: '1971 — Ray Tomlinson envia a si mesmo a 1ª mensagem, usando o símbolo @.' },
        { icon: 'virus', title: 'Primeiro vírus', text: '1971 — o "Creeper" se autorreplicava e exibia uma mensagem provocativa.' },
        { icon: 'website', title: 'Primeiro website', text: '1991 — publicado por Tim Berners-Lee no CERN; ainda existe como réplica.' },
        { icon: 'smartphone', title: 'Primeiro smartphone', text: '1994 — o IBM Simon já unia telefone, agenda e tela sensível ao toque.' }
      ]}
      notes="Estas curiosidades ajudam a fechar a apresentação de forma leve. O termo
      'bug' já era usado em engenharia antes de 1947, mas ficou famoso quando a
      equipe de Grace Hopper encontrou literalmente uma mariposa presa a um
      relé do Harvard Mark II, atrapalhando seu funcionamento — o inseto foi
      colado ao registro de manutenção com a anotação 'first actual case of
      bug being found'. O primeiro e-mail foi enviado por Ray Tomlinson em
      1971 entre dois computadores lado a lado em uma sala, e foi ele quem
      escolheu o símbolo @ para separar nome de usuário e máquina — escolha
      que persiste até hoje. O 'Creeper' (1971) é considerado o primeiro
      vírus de computador experimental, exibindo a mensagem 'I'M THE CREEPER:
      CATCH ME IF YOU CAN'. O primeiro site, publicado por Tim Berners-Lee em
      1991, explicava o que era a própria World Wide Web — e uma réplica dele
      ainda está no ar em info.cern.ch. Por fim, o IBM Simon (1994) já reunia
      telefone, calendário, bloco de notas e tela sensível ao toque, mais de
      uma década antes do iPhone."
    />
  );
}

export function Slide23Conclusao() {
  const eras = [
    { icon: 'abaco', label: 'Mecânica' },
    { icon: 'zuse', label: 'Eletromecânica' },
    { icon: 'eniac', label: 'Eletrônica' },
    { icon: 'microprocessador', label: 'Pessoal' },
    { icon: 'ia', label: 'Inteligente' }
  ];
  return (
    <SlideFrame
      index={23}
      eyebrow="Encerramento"
      notes="Para fechar, vale reforçar a ideia central: a computação não avançou por
      um único gênio isolado, mas por uma cadeia contínua de contribuições —
      de Ada Lovelace a Turing, de Hollerith à equipe do ENIAC, de Kilby e
      Noyce aos times que constroem IA hoje. Cada geração resolveu as
      limitações da anterior (tamanho, custo, velocidade, energia) e, ao
      fazer isso, abriu espaço para aplicações antes impensáveis. Também vale
      destacar que a velocidade da mudança está acelerando: o ábaco levou
      milênios sem grandes mudanças; já saímos do primeiro smartphone para a
      IA generativa em menos de vinte anos. Encerre convidando a turma a
      refletir: qual será o próximo grande salto, e como cada um deles pode
      participar dessa história?"
    >
      <Heading fontFamily={fonts.header} fontSize="38px" color={colors.white} margin="0 0 22px 0" fontWeight={700}>
        Conclusão
      </Heading>
      <Text
        fontFamily={fonts.text}
        fontSize="19px"
        color={colors.mutedBlue}
        lineHeight={1.7}
        margin="0 0 46px 0"
        style={{ maxWidth: '920px' }}
      >
        Em pouco mais de 5 mil anos, a computação percorreu um caminho que vai do{' '}
        <span style={{ color: colors.white, fontWeight: 600 }}>ábaco</span> à{' '}
        <span style={{ color: colors.white, fontWeight: 600 }}>inteligência artificial generativa</span>.
        Cada geração — mecânica, eletromecânica, eletrônica, pessoal e inteligente —
        resolveu os limites da anterior e ampliou o que máquinas podem fazer pela
        humanidade. Hoje a computação não é mais uma ferramenta especializada: é
        infraestrutura essencial para ciência, economia, saúde e comunicação —
        e sua história continua sendo escrita, com cada nova geração chegando
        mais rápido que a anterior.
      </Text>

      <FlexBox style={{ gap: '0' }} alignItems="center">
        {eras.map((e, i) => (
          <React.Fragment key={e.label}>
            <FlexBox flexDirection="column" alignItems="center" style={{ minWidth: '110px' }}>
              <FlexBox
                alignItems="center"
                justifyContent="center"
                width="52px"
                height="52px"
                margin="0 0 10px 0"
                style={{ borderRadius: '50%', background: colors.bgPanel, border: `2px solid ${colors.accent}` }}
              >
                <Icon name={e.icon} size={22} color={colors.accentCyan} />
              </FlexBox>
              <Text fontFamily={fonts.mono} fontSize="12px" color={colors.mutedBlue} margin={0}>
                {e.label}
              </Text>
            </FlexBox>
            {i < eras.length - 1 && (
              <Box style={{ width: '46px', height: '2px', background: colors.line, marginBottom: '24px' }} />
            )}
          </React.Fragment>
        ))}
      </FlexBox>
    </SlideFrame>
  );
}

const REFERENCES = [
  { name: 'Computer History Museum', desc: 'computerhistory.org — acervo, artefatos e linha do tempo interativa.' },
  { name: 'IEEE (Institute of Electrical and Electronics Engineers)', desc: 'Marcos históricos e publicações técnicas revisadas por pares.' },
  { name: 'ACM (Association for Computing Machinery)', desc: 'Artigos fundadores e biografias de pioneiros da computação.' },
  { name: 'IBM Archives', desc: 'ibm.com/history — documentação da trajetória de Hollerith à IBM atual.' },
  { name: 'Museu da Computação', desc: 'Acervos nacionais e internacionais de hardware histórico.' },
  { name: 'Livros clássicos de História da Computação', desc: 'Ex.: "The Innovators" (W. Isaacson), "Turing\u2019s Cathedral" (G. Dyson).' }
];

export function Slide24Referencias() {
  return (
    <SlideFrame
      index={24}
      eyebrow="Fontes"
      notes="É importante que a turma saiba que esta apresentação foi construída a
      partir de fontes reconhecidas na área de história da computação. O
      Computer History Museum e o IBM Archives mantêm acervos digitais
      abertos, ótimos para quem quiser se aprofundar visualmente. IEEE e ACM
      são as duas principais organizações profissionais da computação
      mundial, com registros de marcos técnicos e biografias verificadas.
      Museus de computação — presenciais ou digitais — permitem ver de perto
      máquinas como as apresentadas aqui. E livros como 'The Innovators', de
      Walter Isaacson, e 'Turing's Cathedral', de George Dyson, oferecem
      narrativas aprofundadas para quem quiser ir além do que foi visto hoje.
      Obrigado a todos pela atenção!"
    >
      <Heading fontFamily={fonts.header} fontSize="36px" color={colors.white} margin="0 0 8px 0" fontWeight={700}>
        Referências
      </Heading>
      <Text
        fontFamily={fonts.text}
        fontSize="16px"
        color={colors.accentCyan}
        margin="0 0 30px 0"
        style={{ fontStyle: 'italic' }}
      >
        Fontes confiáveis para aprofundar cada tópico desta apresentação.
      </Text>
      <Box>
        {REFERENCES.map((r, i) => (
          <FlexBox key={i} alignItems="flex-start" style={{ gap: '16px' }} margin="0 0 18px 0">
            <FlexBox
              alignItems="center"
              justifyContent="center"
              width="36px"
              height="36px"
              flexShrink={0}
              style={{ borderRadius: '8px', background: colors.bgPanel, border: `1px solid ${colors.line}` }}
            >
              <Icon name="livro" size={16} color={colors.accentCyan} />
            </FlexBox>
            <Box>
              <Text fontFamily={fonts.header} fontSize="17px" fontWeight={700} color={colors.white} margin="0 0 2px 0">
                {r.name}
              </Text>
              <Text fontFamily={fonts.text} fontSize="14px" color={colors.mutedBlue} margin={0}>
                {r.desc}
              </Text>
            </Box>
          </FlexBox>
        ))}
      </Box>
    </SlideFrame>
  );
}
