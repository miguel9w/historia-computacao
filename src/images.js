import babbageImg from './assets/babbage.jpg';
import adaLovelaceImg from './assets/adalovelace.jpg';
import hollerithImg from './assets/hollerith.jpg';
import zuseImg from './assets/zuse.jpg';
import turingImg from './assets/turing.jpg';
import eniacImg from './assets/eniac.jpg';
import transistorImg from './assets/transistor.jpg';

export const IMAGES = {
  babbage: babbageImg,
  adaLovelace: adaLovelaceImg,
  hollerith: hollerithImg,
  zuseZ3: zuseImg,
  turing: turingImg,
  eniac: eniacImg,
  transistor: transistorImg
};

const CREDIT = (name) => `Imagem: ${name} — acervo de domínio público / museu de história da computação.`;

export const CREDITS = {
  babbage: CREDIT('Charles Babbage'),
  adaLovelace: CREDIT('Ada Lovelace'),
  hollerith: CREDIT('Herman Hollerith'),
  zuseZ3: CREDIT('Zuse Z3'),
  turing: CREDIT('Alan Turing'),
  eniac: CREDIT('ENIAC'),
  transistor: CREDIT('Intel 4004 — primeiro microprocessador comercial')
};
