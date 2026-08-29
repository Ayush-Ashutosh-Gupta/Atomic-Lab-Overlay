import React, { useState, useEffect, useRef, useMemo } from 'react';
import './Popup.css';

interface ElementInfo {
  z: number;
  sym: string;
  name: string;
  mass: number;
  neutrons: number;
  category: string;
  period: number;
  group: number;
  block: 's' | 'p' | 'd' | 'f';
}

type ModelType = 'planar' | 'spherical' | 'quantum';
type ThemeMode = 'dark' | 'light' | 'deepspace';

// All 118 Elements with standard stable isotope neutron counts
const ELEMENTS: ElementInfo[] = [
  { z: 1, sym: 'H', name: 'Hydrogen', mass: 1.008, neutrons: 0, category: 'Reactive Nonmetal', period: 1, group: 1, block: 's' },
  { z: 2, sym: 'He', name: 'Helium', mass: 4.0026, neutrons: 2, category: 'Noble Gas', period: 1, group: 18, block: 's' },
  { z: 3, sym: 'Li', name: 'Lithium', mass: 6.94, neutrons: 4, category: 'Alkali Metal', period: 2, group: 1, block: 's' },
  { z: 4, sym: 'Be', name: 'Beryllium', mass: 9.0122, neutrons: 5, category: 'Alkaline Earth Metal', period: 2, group: 2, block: 's' },
  { z: 5, sym: 'B', name: 'Boron', mass: 10.81, neutrons: 6, category: 'Metalloid', period: 2, group: 13, block: 'p' },
  { z: 6, sym: 'C', name: 'Carbon', mass: 12.011, neutrons: 6, category: 'Reactive Nonmetal', period: 2, group: 14, block: 'p' },
  { z: 7, sym: 'N', name: 'Nitrogen', mass: 14.007, neutrons: 7, category: 'Reactive Nonmetal', period: 2, group: 15, block: 'p' },
  { z: 8, sym: 'O', name: 'Oxygen', mass: 15.999, neutrons: 8, category: 'Reactive Nonmetal', period: 2, group: 16, block: 'p' },
  { z: 9, sym: 'F', name: 'Fluorine', mass: 18.998, neutrons: 10, category: 'Halogen', period: 2, group: 17, block: 'p' },
  { z: 10, sym: 'Ne', name: 'Neon', mass: 20.180, neutrons: 10, category: 'Noble Gas', period: 2, group: 18, block: 'p' },
  { z: 11, sym: 'Na', name: 'Sodium', mass: 22.990, neutrons: 12, category: 'Alkali Metal', period: 3, group: 1, block: 's' },
  { z: 12, sym: 'Mg', name: 'Magnesium', mass: 24.305, neutrons: 12, category: 'Alkaline Earth Metal', period: 3, group: 2, block: 's' },
  { z: 13, sym: 'Al', name: 'Aluminium', mass: 26.982, neutrons: 14, category: 'Post-transition Metal', period: 3, group: 13, block: 'p' },
  { z: 14, sym: 'Si', name: 'Silicon', mass: 28.085, neutrons: 14, category: 'Metalloid', period: 3, group: 14, block: 'p' },
  { z: 15, sym: 'P', name: 'Phosphorus', mass: 30.974, neutrons: 16, category: 'Reactive Nonmetal', period: 3, group: 15, block: 'p' },
  { z: 16, sym: 'S', name: 'Sulfur', mass: 32.06, neutrons: 16, category: 'Reactive Nonmetal', period: 3, group: 16, block: 'p' },
  { z: 17, sym: 'Cl', name: 'Chlorine', mass: 35.45, neutrons: 18, category: 'Halogen', period: 3, group: 17, block: 'p' },
  { z: 18, sym: 'Ar', name: 'Argon', mass: 39.948, neutrons: 22, category: 'Noble Gas', period: 3, group: 18, block: 'p' },
  { z: 19, sym: 'K', name: 'Potassium', mass: 39.098, neutrons: 20, category: 'Alkali Metal', period: 4, group: 1, block: 's' },
  { z: 20, sym: 'Ca', name: 'Calcium', mass: 40.078, neutrons: 20, category: 'Alkaline Earth Metal', period: 4, group: 2, block: 's' },
  { z: 21, sym: 'Sc', name: 'Scandium', mass: 44.956, neutrons: 24, category: 'Transition Metal', period: 4, group: 3, block: 'd' },
  { z: 22, sym: 'Ti', name: 'Titanium', mass: 47.867, neutrons: 26, category: 'Transition Metal', period: 4, group: 4, block: 'd' },
  { z: 23, sym: 'V', name: 'Vanadium', mass: 50.942, neutrons: 28, category: 'Transition Metal', period: 4, group: 5, block: 'd' },
  { z: 24, sym: 'Cr', name: 'Chromium', mass: 51.996, neutrons: 28, category: 'Transition Metal', period: 4, group: 6, block: 'd' },
  { z: 25, sym: 'Mn', name: 'Manganese', mass: 54.938, neutrons: 30, category: 'Transition Metal', period: 4, group: 7, block: 'd' },
  { z: 26, sym: 'Fe', name: 'Iron', mass: 55.845, neutrons: 30, category: 'Transition Metal', period: 4, group: 8, block: 'd' },
  { z: 27, sym: 'Co', name: 'Cobalt', mass: 58.933, neutrons: 32, category: 'Transition Metal', period: 4, group: 9, block: 'd' },
  { z: 28, sym: 'Ni', name: 'Nickel', mass: 58.693, neutrons: 31, category: 'Transition Metal', period: 4, group: 10, block: 'd' },
  { z: 29, sym: 'Cu', name: 'Copper', mass: 63.546, neutrons: 35, category: 'Transition Metal', period: 4, group: 11, block: 'd' },
  { z: 30, sym: 'Zn', name: 'Zinc', mass: 65.38, neutrons: 35, category: 'Transition Metal', period: 4, group: 12, block: 'd' },
  { z: 31, sym: 'Ga', name: 'Gallium', mass: 69.723, neutrons: 39, category: 'Post-transition Metal', period: 4, group: 13, block: 'p' },
  { z: 32, sym: 'Ge', name: 'Germanium', mass: 72.630, neutrons: 41, category: 'Metalloid', period: 4, group: 14, block: 'p' },
  { z: 33, sym: 'As', name: 'Arsenic', mass: 74.922, neutrons: 42, category: 'Metalloid', period: 4, group: 15, block: 'p' },
  { z: 34, sym: 'Se', name: 'Selenium', mass: 78.971, neutrons: 45, category: 'Reactive Nonmetal', period: 4, group: 16, block: 'p' },
  { z: 35, sym: 'Br', name: 'Bromine', mass: 79.904, neutrons: 45, category: 'Halogen', period: 4, group: 17, block: 'p' },
  { z: 36, sym: 'Kr', name: 'Krypton', mass: 83.798, neutrons: 48, category: 'Noble Gas', period: 4, group: 18, block: 'p' },
  { z: 37, sym: 'Rb', name: 'Rubidium', mass: 85.468, neutrons: 48, category: 'Alkali Metal', period: 5, group: 1, block: 's' },
  { z: 38, sym: 'Sr', name: 'Strontium', mass: 87.62, neutrons: 50, category: 'Alkaline Earth Metal', period: 5, group: 2, block: 's' },
  { z: 39, sym: 'Y', name: 'Yttrium', mass: 88.906, neutrons: 50, category: 'Transition Metal', period: 5, group: 3, block: 'd' },
  { z: 40, sym: 'Zr', name: 'Zirconium', mass: 91.224, neutrons: 51, category: 'Transition Metal', period: 5, group: 4, block: 'd' },
  { z: 41, sym: 'Nb', name: 'Niobium', mass: 92.906, neutrons: 52, category: 'Transition Metal', period: 5, group: 5, block: 'd' },
  { z: 42, sym: 'Mo', name: 'Molybdenum', mass: 95.95, neutrons: 54, category: 'Transition Metal', period: 5, group: 6, block: 'd' },
  { z: 43, sym: 'Tc', name: 'Technetium', mass: 98, neutrons: 55, category: 'Transition Metal', period: 5, group: 7, block: 'd' },
  { z: 44, sym: 'Ru', name: 'Ruthenium', mass: 101.07, neutrons: 57, category: 'Transition Metal', period: 5, group: 8, block: 'd' },
  { z: 45, sym: 'Rh', name: 'Rhodium', mass: 102.91, neutrons: 58, category: 'Transition Metal', period: 5, group: 9, block: 'd' },
  { z: 46, sym: 'Pd', name: 'Palladium', mass: 106.42, neutrons: 60, category: 'Transition Metal', period: 5, group: 10, block: 'd' },
  { z: 47, sym: 'Ag', name: 'Silver', mass: 107.87, neutrons: 61, category: 'Transition Metal', period: 5, group: 11, block: 'd' },
  { z: 48, sym: 'Cd', name: 'Cadmium', mass: 112.41, neutrons: 64, category: 'Transition Metal', period: 5, group: 12, block: 'd' },
  { z: 49, sym: 'In', name: 'Indium', mass: 114.82, neutrons: 66, category: 'Post-transition Metal', period: 5, group: 13, block: 'p' },
  { z: 50, sym: 'Sn', name: 'Tin', mass: 118.71, neutrons: 69, category: 'Post-transition Metal', period: 5, group: 14, block: 'p' },
  { z: 51, sym: 'Sb', name: 'Antimony', mass: 121.76, neutrons: 71, category: 'Metalloid', period: 5, group: 15, block: 'p' },
  { z: 52, sym: 'Te', name: 'Tellurium', mass: 127.60, neutrons: 76, category: 'Metalloid', period: 5, group: 16, block: 'p' },
  { z: 53, sym: 'I', name: 'Iodine', mass: 126.90, neutrons: 74, category: 'Halogen', period: 5, group: 17, block: 'p' },
  { z: 54, sym: 'Xe', name: 'Xenon', mass: 131.29, neutrons: 77, category: 'Noble Gas', period: 5, group: 18, block: 'p' },
  { z: 55, sym: 'Cs', name: 'Caesium', mass: 132.91, neutrons: 78, category: 'Alkali Metal', period: 6, group: 1, block: 's' },
  { z: 56, sym: 'Ba', name: 'Barium', mass: 137.33, neutrons: 81, category: 'Alkaline Earth Metal', period: 6, group: 2, block: 's' },
  { z: 57, sym: 'La', name: 'Lanthanum', mass: 138.91, neutrons: 82, category: 'Lanthanide', period: 6, group: 3, block: 'f' },
  { z: 58, sym: 'Ce', name: 'Cerium', mass: 140.12, neutrons: 82, category: 'Lanthanide', period: 6, group: 3, block: 'f' },
  { z: 59, sym: 'Pr', name: 'Praseodymium', mass: 140.91, neutrons: 82, category: 'Lanthanide', period: 6, group: 3, block: 'f' },
  { z: 60, sym: 'Nd', name: 'Neodymium', mass: 144.24, neutrons: 84, category: 'Lanthanide', period: 6, group: 3, block: 'f' },
  { z: 61, sym: 'Pm', name: 'Promethium', mass: 145, neutrons: 84, category: 'Lanthanide', period: 6, group: 3, block: 'f' },
  { z: 62, sym: 'Sm', name: 'Samarium', mass: 150.36, neutrons: 88, category: 'Lanthanide', period: 6, group: 3, block: 'f' },
  { z: 63, sym: 'Eu', name: 'Europium', mass: 151.96, neutrons: 89, category: 'Lanthanide', period: 6, group: 3, block: 'f' },
  { z: 64, sym: 'Gd', name: 'Gadolinium', mass: 157.25, neutrons: 93, category: 'Lanthanide', period: 6, group: 3, block: 'f' },
  { z: 65, sym: 'Tb', name: 'Terbium', mass: 158.93, neutrons: 94, category: 'Lanthanide', period: 6, group: 3, block: 'f' },
  { z: 66, sym: 'Dy', name: 'Dysprosium', mass: 162.50, neutrons: 97, category: 'Lanthanide', period: 6, group: 3, block: 'f' },
  { z: 67, sym: 'Ho', name: 'Holmium', mass: 164.93, neutrons: 98, category: 'Lanthanide', period: 6, group: 3, block: 'f' },
  { z: 68, sym: 'Er', name: 'Erbium', mass: 167.26, neutrons: 99, category: 'Lanthanide', period: 6, group: 3, block: 'f' },
  { z: 69, sym: 'Tm', name: 'Thulium', mass: 168.93, neutrons: 100, category: 'Lanthanide', period: 6, group: 3, block: 'f' },
  { z: 70, sym: 'Yb', name: 'Ytterbium', mass: 173.05, neutrons: 103, category: 'Lanthanide', period: 6, group: 3, block: 'f' },
  { z: 71, sym: 'Lu', name: 'Lutetium', mass: 174.97, neutrons: 104, category: 'Lanthanide', period: 6, group: 3, block: 'd' },
  { z: 72, sym: 'Hf', name: 'Hafnium', mass: 178.49, neutrons: 106, category: 'Transition Metal', period: 6, group: 4, block: 'd' },
  { z: 73, sym: 'Ta', name: 'Tantalum', mass: 180.95, neutrons: 108, category: 'Transition Metal', period: 6, group: 5, block: 'd' },
  { z: 74, sym: 'W', name: 'Tungsten', mass: 183.84, neutrons: 110, category: 'Transition Metal', period: 6, group: 6, block: 'd' },
  { z: 75, sym: 'Re', name: 'Rhenium', mass: 186.21, neutrons: 111, category: 'Transition Metal', period: 6, group: 7, block: 'd' },
  { z: 76, sym: 'Os', name: 'Osmium', mass: 190.23, neutrons: 114, category: 'Transition Metal', period: 6, group: 8, block: 'd' },
  { z: 77, sym: 'Ir', name: 'Iridium', mass: 192.22, neutrons: 115, category: 'Transition Metal', period: 6, group: 9, block: 'd' },
  { z: 78, sym: 'Pt', name: 'Platinum', mass: 195.08, neutrons: 117, category: 'Transition Metal', period: 6, group: 10, block: 'd' },
  { z: 79, sym: 'Au', name: 'Gold', mass: 196.97, neutrons: 118, category: 'Transition Metal', period: 6, group: 11, block: 'd' },
  { z: 80, sym: 'Hg', name: 'Mercury', mass: 200.59, neutrons: 121, category: 'Transition Metal', period: 6, group: 12, block: 'd' },
  { z: 81, sym: 'Tl', name: 'Thallium', mass: 204.38, neutrons: 123, category: 'Post-transition Metal', period: 6, group: 13, block: 'p' },
  { z: 82, sym: 'Pb', name: 'Lead', mass: 207.2, neutrons: 125, category: 'Post-transition Metal', period: 6, group: 14, block: 'p' },
  { z: 83, sym: 'Bi', name: 'Bismuth', mass: 208.98, neutrons: 126, category: 'Post-transition Metal', period: 6, group: 15, block: 'p' },
  { z: 84, sym: 'Po', name: 'Polonium', mass: 209, neutrons: 125, category: 'Post-transition Metal', period: 6, group: 16, block: 'p' },
  { z: 85, sym: 'At', name: 'Astatine', mass: 210, neutrons: 125, category: 'Halogen', period: 6, group: 17, block: 'p' },
  { z: 86, sym: 'Rn', name: 'Radon', mass: 222, neutrons: 136, category: 'Noble Gas', period: 6, group: 18, block: 'p' },
  { z: 87, sym: 'Fr', name: 'Francium', mass: 223, neutrons: 136, category: 'Alkali Metal', period: 7, group: 1, block: 's' },
  { z: 88, sym: 'Ra', name: 'Radium', mass: 226, neutrons: 138, category: 'Alkaline Earth Metal', period: 7, group: 2, block: 's' },
  { z: 89, sym: 'Ac', name: 'Actinium', mass: 227, neutrons: 138, category: 'Actinide', period: 7, group: 3, block: 'f' },
  { z: 90, sym: 'Th', name: 'Thorium', mass: 232.04, neutrons: 142, category: 'Actinide', period: 7, group: 3, block: 'f' },
  { z: 91, sym: 'Pa', name: 'Protactinium', mass: 231.04, neutrons: 140, category: 'Actinide', period: 7, group: 3, block: 'f' },
  { z: 92, sym: 'U', name: 'Uranium', mass: 238.03, neutrons: 146, category: 'Actinide', period: 7, group: 3, block: 'f' },
  { z: 93, sym: 'Np', name: 'Neptunium', mass: 237, neutrons: 144, category: 'Actinide', period: 7, group: 3, block: 'f' },
  { z: 94, sym: 'Pu', name: 'Plutonium', mass: 244, neutrons: 150, category: 'Actinide', period: 7, group: 3, block: 'f' },
  { z: 95, sym: 'Am', name: 'Americium', mass: 243, neutrons: 148, category: 'Actinide', period: 7, group: 3, block: 'f' },
  { z: 96, sym: 'Cm', name: 'Curium', mass: 247, neutrons: 151, category: 'Actinide', period: 7, group: 3, block: 'f' },
  { z: 97, sym: 'Bk', name: 'Berkelium', mass: 247, neutrons: 150, category: 'Actinide', period: 7, group: 3, block: 'f' },
  { z: 98, sym: 'Cf', name: 'Californium', mass: 251, neutrons: 153, category: 'Actinide', period: 7, group: 3, block: 'f' },
  { z: 99, sym: 'Es', name: 'Einsteinium', mass: 252, neutrons: 153, category: 'Actinide', period: 7, group: 3, block: 'f' },
  { z: 100, sym: 'Fm', name: 'Fermium', mass: 257, neutrons: 157, category: 'Actinide', period: 7, group: 3, block: 'f' },
  { z: 101, sym: 'Md', name: 'Mendelevium', mass: 258, neutrons: 157, category: 'Actinide', period: 7, group: 3, block: 'f' },
  { z: 102, sym: 'No', name: 'Nobelium', mass: 259, neutrons: 157, category: 'Actinide', period: 7, group: 3, block: 'f' },
  { z: 103, sym: 'Lr', name: 'Lawrencium', mass: 266, neutrons: 163, category: 'Actinide', period: 7, group: 3, block: 'd' },
  { z: 104, sym: 'Rf', name: 'Rutherfordium', mass: 267, neutrons: 163, category: 'Transition Metal', period: 7, group: 4, block: 'd' },
  { z: 105, sym: 'Db', name: 'Dubnium', mass: 268, neutrons: 163, category: 'Transition Metal', period: 7, group: 5, block: 'd' },
  { z: 106, sym: 'Sg', name: 'Seaborgium', mass: 269, neutrons: 163, category: 'Transition Metal', period: 7, group: 6, block: 'd' },
  { z: 107, sym: 'Bh', name: 'Bohrium', mass: 270, neutrons: 163, category: 'Transition Metal', period: 7, group: 7, block: 'd' },
  { z: 108, sym: 'Hs', name: 'Hassium', mass: 269, neutrons: 161, category: 'Transition Metal', period: 7, group: 8, block: 'd' },
  { z: 109, sym: 'Mt', name: 'Meitnerium', mass: 278, neutrons: 169, category: 'Transition Metal', period: 7, group: 9, block: 'd' },
  { z: 110, sym: 'Ds', name: 'Darmstadtium', mass: 281, neutrons: 171, category: 'Transition Metal', period: 7, group: 10, block: 'd' },
  { z: 111, sym: 'Rg', name: 'Roentgenium', mass: 282, neutrons: 171, category: 'Transition Metal', period: 7, group: 11, block: 'd' },
  { z: 112, sym: 'Cn', name: 'Copernicium', mass: 285, neutrons: 173, category: 'Transition Metal', period: 7, group: 12, block: 'd' },
  { z: 113, sym: 'Nh', name: 'Nihonium', mass: 286, neutrons: 173, category: 'Post-transition Metal', period: 7, group: 13, block: 'p' },
  { z: 114, sym: 'Fl', name: 'Flerovium', mass: 289, neutrons: 175, category: 'Post-transition Metal', period: 7, group: 14, block: 'p' },
  { z: 115, sym: 'Mc', name: 'Moscovium', mass: 290, neutrons: 175, category: 'Post-transition Metal', period: 7, group: 15, block: 'p' },
  { z: 116, sym: 'Lv', name: 'Livermorium', mass: 293, neutrons: 177, category: 'Post-transition Metal', period: 7, group: 16, block: 'p' },
  { z: 117, sym: 'Ts', name: 'Tennessine', mass: 294, neutrons: 177, category: 'Halogen', period: 7, group: 17, block: 'p' },
  { z: 118, sym: 'Og', name: 'Oganesson', mass: 294, neutrons: 176, category: 'Noble Gas', period: 7, group: 18, block: 'p' }
];

// Madelung Rule order of filling
const ORBITAL_ORDER: Array<{ n: number; l: number; cap: number; label: string }> = [
  { n: 1, l: 0, cap: 2, label: '1s' },
  { n: 2, l: 0, cap: 2, label: '2s' },
  { n: 2, l: 1, cap: 6, label: '2p' },
  { n: 3, l: 0, cap: 2, label: '3s' },
  { n: 3, l: 1, cap: 6, label: '3p' },
  { n: 4, l: 0, cap: 2, label: '4s' },
  { n: 3, l: 2, cap: 10, label: '3d' },
  { n: 4, l: 1, cap: 6, label: '4p' },
  { n: 5, l: 0, cap: 2, label: '5s' },
  { n: 4, l: 2, cap: 10, label: '4d' },
  { n: 5, l: 1, cap: 6, label: '5p' },
  { n: 6, l: 0, cap: 2, label: '6s' },
  { n: 4, l: 3, cap: 14, label: '4f' },
  { n: 5, l: 2, cap: 10, label: '5d' },
  { n: 6, l: 1, cap: 6, label: '6p' },
  { n: 7, l: 0, cap: 2, label: '7s' },
  { n: 5, l: 3, cap: 14, label: '5f' },
  { n: 6, l: 2, cap: 10, label: '6d' },
  { n: 7, l: 1, cap: 6, label: '7p' }
];

function getElectronConfiguration(atomicNumber: number): number[] {
  let rem = atomicNumber;
  const shellMap: { [n: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
  for (const orb of ORBITAL_ORDER) {
    if (rem <= 0) break;
    const add = Math.min(rem, orb.cap);
    shellMap[orb.n] = (shellMap[orb.n] || 0) + add;
    rem -= add;
  }
  const result: number[] = [];
  for (let n = 1; n <= 7; n++) {
    if (shellMap[n] > 0) result.push(shellMap[n]);
  }
  return result;
}

const Popup: React.FC = () => {
  const [selectedZ, setSelectedZ] = useState<number>(6); // Default: Carbon
  const [modelType, setModelType] = useState<ModelType>('spherical');
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSimRunning, setIsSimRunning] = useState<boolean>(true);
  const [simSpeed, setSimSpeed] = useState<number>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [inPageStatus, setInPageStatus] = useState<string>('');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rotRef = useRef<{ x: number; y: number; vx: number; vy: number; isDown: boolean; lastX: number; lastY: number }>({
    x: 0.3,
    y: 0.5,
    vx: 0.002,
    vy: 0.004,
    isDown: false,
    lastX: 0,
    lastY: 0
  });

  const selectedElement = useMemo(() => {
    return ELEMENTS.find((e) => e.z === selectedZ) || ELEMENTS[0];
  }, [selectedZ]);

  const shellConfig = useMemo(() => {
    return getElectronConfiguration(selectedElement.z);
  }, [selectedElement]);

  const filteredElements = useMemo(() => {
    if (!searchQuery.trim()) return ELEMENTS;
    const q = searchQuery.toLowerCase();
    return ELEMENTS.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        e.sym.toLowerCase().includes(q) ||
        e.z.toString() === q ||
        e.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Handle in-page overlay toggle via Chrome tabs messaging / activeTab execution
  const triggerInPageOverlay = async () => {
    try {
      setInPageStatus('Launching overlay...');
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab || !tab.id) {
        setInPageStatus('No active tab found');
        setTimeout(() => setInPageStatus(''), 2500);
        return;
      }

      // Helper to send the toggle message with retry logic
      const sendToggleMessage = (tabId: number, attempt = 0): Promise<boolean> => {
        return new Promise((resolve) => {
          try {
            chrome.tabs.sendMessage(
              tabId,
              { action: 'TOGGLE_ATOMIC_SIMULATION', elementZ: selectedZ, modelType },
              (response) => {
                if (chrome.runtime.lastError || !response || !response.success) {
                  // Content script not loaded yet — retry up to 5 times
                  if (attempt < 5) {
                    setTimeout(() => {
                      sendToggleMessage(tabId, attempt + 1).then(resolve);
                    }, 120);
                  } else {
                    resolve(false);
                  }
                } else {
                  resolve(true);
                }
              }
            );
          } catch (err) {
            resolve(false);
          }
        });
      };

      // First try direct message (content script may already be loaded)
      const messageSent = await sendToggleMessage(tab.id);

      if (!messageSent) {
        // Content script not ready — inject it dynamically first
        try {
          setInPageStatus('Initializing overlay engine...');
          await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content.js']
          });

          // Wait for the content script to initialize and send the message
          let injected = false;
          for (let attempt = 0; attempt < 5; attempt++) {
            await new Promise((r) => setTimeout(r, 200));
            injected = await sendToggleMessage(tab.id);
            if (injected) break;
          }

          if (!injected) {
            setInPageStatus('Could not initialize overlay');
            setTimeout(() => setInPageStatus(''), 2500);
            return;
          }
        } catch (err) {
          setInPageStatus('Cannot overlay on this page');
          setTimeout(() => setInPageStatus(''), 2500);
          return;
        }
      }

      setInPageStatus('In-page overlay active!');
      setTimeout(() => setInPageStatus(''), 2500);
    } catch (err) {
      setInPageStatus('Failed to launch');
      setTimeout(() => setInPageStatus(''), 2500);
    }
  };

  // 3D Canvas Rendering Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    // Relative sizes: Proton & Neutron are large nucleons (~4px visual base), Electron is tiny point (~1.6px)
    const nucleonRadius = 3.6;
    const electronRadius = 1.6;

    // Generate packed nucleus cluster (protons + neutrons)
    const totalNucleons = selectedElement.z + selectedElement.neutrons;
    const maxVisualNucleons = Math.min(totalNucleons, 48); // Cap for dense visually aesthetic cluster
    const nucleons: Array<{ x: number; y: number; z: number; isProton: boolean }> = [];

    // Golden spiral distribution inside a sphere for compact nucleus
    const phi = (1 + Math.sqrt(5)) / 2;
    const nucleusScale = Math.max(6, Math.cbrt(maxVisualNucleons) * 4.8);

    for (let i = 0; i < maxVisualNucleons; i++) {
      const theta = 2 * Math.PI * i / phi;
      const u = (i / maxVisualNucleons) * 2 - 1;
      const r = Math.sqrt(1 - u * u) * Math.pow(Math.random() * 0.5 + 0.5, 0.4) * nucleusScale;
      nucleons.push({
        x: r * Math.cos(theta),
        y: r * Math.sin(theta),
        z: u * nucleusScale,
        isProton: i % 2 === 0
      });
    }

    // Pre-generate stars for deep space canvas background
    const stars: Array<{ x: number; y: number; size: number; alpha: number }> = [];
    for (let s = 0; s < 75; s++) {
      stars.push({
        x: Math.random() * 360,
        y: Math.random() * 260,
        size: Math.random() * 1.5 + 0.4,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    // Quantum cloud points generator
    const quantumPoints: Array<{ x: number; y: number; z: number; alpha: number }> = [];
    const numCloudPoints = 420;
    for (let q = 0; q < numCloudPoints; q++) {
      // Exponential orbital probability distribution
      const rCloud = (Math.log(1 / (1 - Math.random() * 0.95)) * 14 + 10) * (selectedElement.period * 0.6 + 0.4);
      const thetaC = Math.random() * Math.PI * 2;
      const phiC = Math.acos(2 * Math.random() - 1);
      quantumPoints.push({
        x: rCloud * Math.sin(phiC) * Math.cos(thetaC),
        y: rCloud * Math.sin(phiC) * Math.sin(thetaC),
        z: rCloud * Math.cos(phiC),
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    const render = () => {
      time += 0.016 * simSpeed;
      const rot = rotRef.current;

      // Apply inertia damping
      if (!rot.isDown) {
        rot.x += rot.vx;
        rot.y += rot.vy;
        rot.vx *= 0.96;
        rot.vy *= 0.96;
        if (Math.abs(rot.vx) < 0.0005) rot.vx = 0.002;
        if (Math.abs(rot.vy) < 0.0005) rot.vy = 0.003;
      }

      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      // Clear & Draw Background
      if (theme === 'light') {
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, w, h);
      } else if (theme === 'deepspace') {
        const bgGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, w * 0.8);
        bgGrad.addColorStop(0, '#0c1626');
        bgGrad.addColorStop(1, '#02060d');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, w, h);
      } else {
        // Dark theme default
        const bgGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, w * 0.7);
        bgGrad.addColorStop(0, '#0f172a');
        bgGrad.addColorStop(1, '#070d17');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, w, h);
      }

      // Draw subtle stars
      if (theme !== 'light') {
        ctx.fillStyle = '#94a3b8';
        stars.forEach((st) => {
          ctx.globalAlpha = st.alpha * (0.8 + 0.2 * Math.sin(time * 2 + st.x));
          ctx.beginPath();
          ctx.arc(st.x, st.y, st.size, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.globalAlpha = 1.0;
      }

      // 3D Rotation Matrix Calculation
      const cosX = Math.cos(modelType === 'planar' ? 0 : rot.x);
      const sinX = Math.sin(modelType === 'planar' ? 0 : rot.x);
      const cosY = Math.cos(modelType === 'planar' ? 0 : rot.y);
      const sinY = Math.sin(modelType === 'planar' ? 0 : rot.y);

      const project = (x: number, y: number, z: number) => {
        if (modelType === 'planar') {
          // Strictly flat 2D projection
          return {
            px: cx + x * zoomLevel,
            py: cy + y * zoomLevel,
            pz: z,
            scale: zoomLevel
          };
        }
        // Rotate Y
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        // Rotate X
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        const fov = 340;
        const scale = (fov / (fov + z2)) * zoomLevel;
        return {
          px: cx + x1 * scale,
          py: cy + y2 * scale,
          pz: z2,
          scale
        };
      };

      // Draw Quantum Cloud Model
      if (modelType === 'quantum') {
        quantumPoints.forEach((p) => {
          // Slight orbital breathing
          const pulse = Math.sin(time * 3 + p.x) * 1.5;
          const prj = project(p.x + pulse, p.y + pulse, p.z);
          ctx.beginPath();
          ctx.arc(prj.px, prj.py, Math.max(0.8, 1.4 * prj.scale), 0, Math.PI * 2);
          ctx.fillStyle = theme === 'light' ? '#0284c7' : '#00f2fe';
          ctx.globalAlpha = p.alpha * 0.45;
          ctx.fill();
        });
        ctx.globalAlpha = 1.0;
      }

      // Draw Orbit Rings & Electrons
      const depthItems: Array<{ type: 'electron' | 'nucleon' | 'ring'; z: number; draw: () => void }> = [];

      if (modelType === 'planar') {
        // Planar / Bohr Model: Exact 2D concentric rings on the same plane
        shellConfig.forEach((eCount, shellIdx) => {
          const ringRadius = 32 + shellIdx * 20;

          // Draw orbital ring
          ctx.beginPath();
          ctx.arc(cx, cy, ringRadius * zoomLevel, 0, Math.PI * 2);
          ctx.strokeStyle = theme === 'light' ? 'rgba(14, 165, 233, 0.4)' : 'rgba(56, 189, 248, 0.35)';
          ctx.lineWidth = 1.2;
          ctx.setLineDash([3, 4]);
          ctx.stroke();
          ctx.setLineDash([]);

          // Orbit speed inversely proportional to radius
          const orbitSpeed = (1.8 / (shellIdx + 1)) * (shellIdx % 2 === 0 ? 1 : -1);

          for (let e = 0; e < eCount; e++) {
            const angle = (Math.PI * 2 * e) / eCount + time * orbitSpeed;
            const ex = Math.cos(angle) * ringRadius;
            const ey = Math.sin(angle) * ringRadius;
            const prj = project(ex, ey, 0);

            depthItems.push({
              type: 'electron',
              z: 0,
              draw: () => {
                // Electron Glow
                const glow = ctx.createRadialGradient(prj.px, prj.py, 0, prj.px, prj.py, 7 * prj.scale);
                glow.addColorStop(0, '#38f9d7');
                glow.addColorStop(0.5, '#43e97b');
                glow.addColorStop(1, 'rgba(67, 233, 123, 0)');
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(prj.px, prj.py, 7 * prj.scale, 0, Math.PI * 2);
                ctx.fill();

                // Electron Core
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(prj.px, prj.py, electronRadius * prj.scale, 0, Math.PI * 2);
                ctx.fill();
              }
            });
          }
        });
      } else if (modelType === 'spherical') {
        // Spherical 3D Great Circles using Fibonacci orientation
        shellConfig.forEach((eCount, shellIdx) => {
          const ringRadius = 32 + shellIdx * 22;
          const tiltAngle = (shellIdx * Math.PI) / (shellConfig.length + 1);

          // Sample 3D ring path
          const ringPoints: Array<{ x: number; y: number; z: number }> = [];
          for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.2) {
            const rx = Math.cos(a) * ringRadius;
            const ry = Math.sin(a) * Math.cos(tiltAngle) * ringRadius;
            const rz = Math.sin(a) * Math.sin(tiltAngle) * ringRadius;
            ringPoints.push({ x: rx, y: ry, z: rz });
          }

          // Draw orbital trace
          ctx.beginPath();
          ringPoints.forEach((pt, idx) => {
            const prj = project(pt.x, pt.y, pt.z);
            if (idx === 0) ctx.moveTo(prj.px, prj.py);
            else ctx.lineTo(prj.px, prj.py);
          });
          ctx.strokeStyle = theme === 'light' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(0, 242, 254, 0.28)';
          ctx.lineWidth = 1;
          ctx.setLineDash([2, 4]);
          ctx.stroke();
          ctx.setLineDash([]);

          // Add electrons orbiting along this great circle
          const orbitSpeed = (1.6 / (shellIdx + 1)) * (shellIdx % 2 === 0 ? 1 : -1);
          for (let e = 0; e < eCount; e++) {
            const angle = (Math.PI * 2 * e) / eCount + time * orbitSpeed;
            const ex = Math.cos(angle) * ringRadius;
            const ey = Math.sin(angle) * Math.cos(tiltAngle) * ringRadius;
            const ez = Math.sin(angle) * Math.sin(tiltAngle) * ringRadius;
            const prj = project(ex, ey, ez);

            depthItems.push({
              type: 'electron',
              z: prj.pz,
              draw: () => {
                const glow = ctx.createRadialGradient(prj.px, prj.py, 0, prj.px, prj.py, 6 * prj.scale);
                glow.addColorStop(0, '#00f2fe');
                glow.addColorStop(0.5, '#4facfe');
                glow.addColorStop(1, 'rgba(79, 172, 254, 0)');
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(prj.px, prj.py, 6 * prj.scale, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#e0f2fe';
                ctx.beginPath();
                ctx.arc(prj.px, prj.py, electronRadius * prj.scale, 0, Math.PI * 2);
                ctx.fill();
              }
            });
          }
        });
      }

      // Add Nucleus Protons and Neutrons to depth items
      nucleons.forEach((nuc, idx) => {
        // Slow internal nucleonic oscillation
        const ox = nuc.x + Math.sin(time * 2 + idx) * 0.8;
        const oy = nuc.y + Math.cos(time * 2 + idx) * 0.8;
        const oz = nuc.z;
        const prj = project(ox, oy, oz);

        depthItems.push({
          type: 'nucleon',
          z: prj.pz,
          draw: () => {
            const rad = nucleonRadius * prj.scale;
            ctx.beginPath();
            ctx.arc(prj.px, prj.py, Math.max(1.5, rad), 0, Math.PI * 2);

            const nucGrad = ctx.createRadialGradient(
              prj.px - rad * 0.3,
              prj.py - rad * 0.3,
              rad * 0.1,
              prj.px,
              prj.py,
              rad
            );

            if (nuc.isProton) {
              // Proton (Red/Coral)
              nucGrad.addColorStop(0, '#ff9999');
              nucGrad.addColorStop(0.6, '#ef4444');
              nucGrad.addColorStop(1, '#991b1b');
            } else {
              // Neutron (Blue/Cyan)
              nucGrad.addColorStop(0, '#93c5fd');
              nucGrad.addColorStop(0.6, '#3b82f6');
              nucGrad.addColorStop(1, '#1e3a8a');
            }

            ctx.fillStyle = nucGrad;
            ctx.fill();

            // Specular highlight
            ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
            ctx.beginPath();
            ctx.arc(prj.px - rad * 0.3, prj.py - rad * 0.3, rad * 0.3, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });

      // Painter's algorithm: Sort back to front (largest pz to smallest pz)
      depthItems.sort((a, b) => b.z - a.z);
      depthItems.forEach((item) => item.draw());

      if (isSimRunning) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [selectedElement, shellConfig, modelType, theme, isSimRunning, simSpeed, zoomLevel]);

  // Mouse interaction handlers for 3D drag & inertia
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    rotRef.current.isDown = true;
    rotRef.current.lastX = e.clientX;
    rotRef.current.lastY = e.clientY;
    rotRef.current.vx = 0;
    rotRef.current.vy = 0;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!rotRef.current.isDown) return;
    const dx = e.clientX - rotRef.current.lastX;
    const dy = e.clientY - rotRef.current.lastY;
    rotRef.current.y += dx * 0.01;
    rotRef.current.x += dy * 0.01;
    rotRef.current.vy = dx * 0.004;
    rotRef.current.vx = dy * 0.004;
    rotRef.current.lastX = e.clientX;
    rotRef.current.lastY = e.clientY;
  };

  const handleMouseUp = () => {
    rotRef.current.isDown = false;
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setZoomLevel((prev) => Math.min(2.5, Math.max(0.4, prev + (e.deltaY < 0 ? 0.1 : -0.1))));
  };

  return (
    <div className={`popup-container ${theme}`}>
      {/* Header Bar */}
      <header className="header-bar flex items-center justify-between px-3 py-2 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-sm shadow-cyan-500/30">
            ⚛
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              Atomic Lab Overlay
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-mono">v1.0</span>
            </h1>
          </div>
        </div>

        {/* Theme Switcher */}
        <div className="flex items-center space-x-1 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60 text-xs">
          <button
            onClick={() => setTheme('dark')}
            title="Dark Theme"
            className={`px-1.5 py-0.5 rounded transition ${theme === 'dark' ? 'bg-cyan-500/30 text-cyan-300 font-medium' : 'text-slate-400 hover:text-slate-200'}`}
          >
            🌙
          </button>
          <button
            onClick={() => setTheme('deepspace')}
            title="Deep Space Theme"
            className={`px-1.5 py-0.5 rounded transition ${theme === 'deepspace' ? 'bg-purple-500/30 text-purple-300 font-medium' : 'text-slate-400 hover:text-slate-200'}`}
          >
            🌌
          </button>
          <button
            onClick={() => setTheme('light')}
            title="Light Theme"
            className={`px-1.5 py-0.5 rounded transition ${theme === 'light' ? 'bg-amber-500/30 text-amber-300 font-medium' : 'text-slate-400 hover:text-slate-200'}`}
          >
            ☀️
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="p-3 space-y-2.5">
        {/* Element Selector with Search Dropdown */}
        <div className="relative">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-semibold uppercase tracking-wider text-[10px] text-slate-400">Select Element (1–118)</span>
            <span className="text-cyan-400 font-mono">Z = {selectedElement.z}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search element by name, symbol, or Z..."
                value={searchQuery}
                onFocus={() => setShowDropdown(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowDropdown(true);
                }}
                className="w-full text-xs px-2.5 py-1.5 rounded-md bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-xs font-mono text-cyan-300 flex items-center gap-1"
            >
              <span className="font-bold">{selectedElement.sym}</span>
              <span className="text-[10px] text-slate-400">▼</span>
            </button>
          </div>

          {/* Search Dropdown list */}
          {showDropdown && (
            <div className="absolute z-50 left-0 right-0 mt-1 max-h-48 overflow-y-auto bg-slate-900 border border-slate-700 rounded-lg shadow-xl divide-y divide-slate-800">
              {filteredElements.map((el) => (
                <button
                  key={el.z}
                  onClick={() => {
                    setSelectedZ(el.z);
                    setShowDropdown(false);
                    setSearchQuery('');
                  }}
                  className={`w-full px-3 py-1.5 text-left text-xs flex items-center justify-between hover:bg-cyan-950/40 transition ${
                    el.z === selectedElement.z ? 'bg-cyan-900/30 text-cyan-300 font-semibold' : 'text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] w-5 text-slate-400">{el.z}</span>
                    <span className="font-bold text-cyan-400 w-6">{el.sym}</span>
                    <span>{el.name}</span>
                  </div>
                  <span className="text-[10px] text-slate-400">{el.category}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 3D Viewport Canvas */}
        <div className="relative rounded-xl overflow-hidden border border-slate-700/80 shadow-inner bg-black flex flex-col items-center">
          <canvas
            ref={canvasRef}
            width={376}
            height={200}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            className="cursor-grab active:cursor-grabbing w-full h-[200px]"
          />

          {/* Viewport Overlay Controls */}
          <div className="absolute top-2 left-2 flex items-center space-x-1 bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-slate-700/60 text-[10px] text-slate-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="font-mono">{modelType.toUpperCase()}</span>
          </div>

          <div className="absolute top-2 right-2 flex items-center space-x-1 bg-slate-900/80 backdrop-blur-sm px-1.5 py-0.5 rounded-lg border border-slate-700/60 text-[11px] text-slate-300">
            <button
              onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.15))}
              className="px-1 hover:text-cyan-300 font-bold"
              title="Zoom In"
            >
              +
            </button>
            <span className="text-[10px] font-mono text-slate-400">{Math.round(zoomLevel * 100)}%</span>
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.4, z - 0.15))}
              className="px-1 hover:text-cyan-300 font-bold"
              title="Zoom Out"
            >
              −
            </button>
          </div>

          <div className="absolute bottom-2 left-2 text-[9px] text-slate-400 font-mono bg-slate-900/70 px-1.5 py-0.5 rounded backdrop-blur-sm">
            Drag to rotate • Scroll to zoom
          </div>

          <button
            onClick={() => setIsSimRunning(!isSimRunning)}
            className="absolute bottom-2 right-2 px-2 py-0.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 rounded text-[10px] border border-slate-600 flex items-center gap-1 backdrop-blur-sm"
          >
            {isSimRunning ? '⏸ Pause' : '▶ Play'}
          </button>
        </div>

        {/* Model Architecture Selector */}
        <div className="space-y-1">
          <label className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Model Architecture</label>
          <div className="grid grid-cols-3 gap-1.5">
            <button
              onClick={() => setModelType('planar')}
              className={`px-2 py-1.5 rounded-lg text-xs font-medium border text-center transition ${
                modelType === 'planar'
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm shadow-cyan-500/20'
                  : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              2D Bohr
            </button>
            <button
              onClick={() => setModelType('spherical')}
              className={`px-2 py-1.5 rounded-lg text-xs font-medium border text-center transition ${
                modelType === 'spherical'
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm shadow-cyan-500/20'
                  : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              3D Spherical
            </button>
            <button
              onClick={() => setModelType('quantum')}
              className={`px-2 py-1.5 rounded-lg text-xs font-medium border text-center transition ${
                modelType === 'quantum'
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm shadow-cyan-500/20'
                  : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              Quantum Cloud
            </button>
          </div>
        </div>

        {/* Element Intelligence & Madelung Electron Configuration */}
        <div className="bg-slate-800/60 rounded-xl p-2.5 border border-slate-700/60 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-white">{selectedElement.name}</span>
              <span className="text-xs font-mono font-bold text-cyan-400">({selectedElement.sym})</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-700 text-slate-300 font-medium">
              {selectedElement.category}
            </span>
          </div>

          {/* Subatomic Particle Quantities */}
          <div className="grid grid-cols-3 gap-1.5 text-center">
            <div className="bg-slate-900/60 p-1.5 rounded-lg border border-red-500/30">
              <div className="text-[10px] text-red-400 flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Protons
              </div>
              <div className="text-xs font-bold text-white font-mono">{selectedElement.z}</div>
            </div>

            <div className="bg-slate-900/60 p-1.5 rounded-lg border border-blue-500/30">
              <div className="text-[10px] text-blue-400 flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Neutrons
              </div>
              <div className="text-xs font-bold text-white font-mono">{selectedElement.neutrons}</div>
            </div>

            <div className="bg-slate-900/60 p-1.5 rounded-lg border border-cyan-500/30">
              <div className="text-[10px] text-cyan-400 flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Electrons
              </div>
              <div className="text-xs font-bold text-white font-mono">{selectedElement.z}</div>
            </div>
          </div>

          {/* Aufbau/Madelung Shell Configuration Pills */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span>Madelung Shell Distribution (K → Q):</span>
              <span className="font-mono text-cyan-300 font-semibold">{shellConfig.join(' → ')}</span>
            </div>
            <div className="flex items-center gap-1 flex-wrap">
              {shellConfig.map((count, idx) => {
                const shellNames = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];
                return (
                  <div
                    key={idx}
                    className="flex-1 min-w-[36px] bg-slate-900/90 border border-slate-700/80 rounded px-1.5 py-0.5 text-center"
                  >
                    <span className="text-[8px] text-slate-400 block">{shellNames[idx]} (n={idx + 1})</span>
                    <span className="text-[11px] font-bold text-cyan-400 font-mono">{count}e⁻</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Primary In-Page Simulation Trigger Button */}
        <div>
          <button
            onClick={triggerInPageOverlay}
            className="w-full py-2.5 px-3 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:scale-[0.99] text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 text-xs transition duration-150"
          >
            <span className="text-base">🚀</span>
            <span>Launch Webpage Full Overlay Simulation</span>
          </button>
          {inPageStatus && (
            <p className="text-center text-[10px] text-cyan-300 mt-1 font-mono animate-fade-in">
              {inPageStatus}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;