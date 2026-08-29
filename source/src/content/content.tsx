// Atomic Lab Overlay Content Script Engine
// Injected into web pages to provide floating FAB, slide-in dark sidebar, and full-screen 3D atom simulation
(function () {
  'use strict';

  // Guard against multiple injections
  if ((window as any).__AL4_LOADED__) return;
  (window as any).__AL4_LOADED__ = true;

  // Prefix rule: all elements prefixed with __al4_
  var PREFIX = '__al4_';

  // State
  var state = {
    isSidebarOpen: false,
    isSimRunning: false,
    selectedZ: 6, // Carbon
    modelType: 'spherical' as 'planar' | 'spherical' | 'quantum',
    theme: 'dark' as 'dark' | 'light' | 'deepspace',
    zoomLevel: 1.0,
    simSpeed: 1.0,
    rotX: 0.3,
    rotY: 0.5,
    vx: 0.002,
    vy: 0.004,
    isDragging: false,
    lastMouseX: 0,
    lastMouseY: 0,
    lastPinchDist: 0
  };

  // Full 118 Elements dataset
  var ELEMENTS: Array<{ z: number; sym: string; name: string; mass: number; neutrons: number; cat: string }> = [
    { z: 1, sym: 'H', name: 'Hydrogen', mass: 1.008, neutrons: 0, cat: 'Reactive Nonmetal' },
    { z: 2, sym: 'He', name: 'Helium', mass: 4.002, neutrons: 2, cat: 'Noble Gas' },
    { z: 3, sym: 'Li', name: 'Lithium', mass: 6.94, neutrons: 4, cat: 'Alkali Metal' },
    { z: 4, sym: 'Be', name: 'Beryllium', mass: 9.012, neutrons: 5, cat: 'Alkaline Earth' },
    { z: 5, sym: 'B', name: 'Boron', mass: 10.81, neutrons: 6, cat: 'Metalloid' },
    { z: 6, sym: 'C', name: 'Carbon', mass: 12.011, neutrons: 6, cat: 'Reactive Nonmetal' },
    { z: 7, sym: 'N', name: 'Nitrogen', mass: 14.007, neutrons: 7, cat: 'Reactive Nonmetal' },
    { z: 8, sym: 'O', name: 'Oxygen', mass: 15.999, neutrons: 8, cat: 'Reactive Nonmetal' },
    { z: 9, sym: 'F', name: 'Fluorine', mass: 18.998, neutrons: 10, cat: 'Halogen' },
    { z: 10, sym: 'Ne', name: 'Neon', mass: 20.18, neutrons: 10, cat: 'Noble Gas' },
    { z: 11, sym: 'Na', name: 'Sodium', mass: 22.99, neutrons: 12, cat: 'Alkali Metal' },
    { z: 12, sym: 'Mg', name: 'Magnesium', mass: 24.305, neutrons: 12, cat: 'Alkaline Earth' },
    { z: 13, sym: 'Al', name: 'Aluminium', mass: 26.982, neutrons: 14, cat: 'Post-transition' },
    { z: 14, sym: 'Si', name: 'Silicon', mass: 28.085, neutrons: 14, cat: 'Metalloid' },
    { z: 15, sym: 'P', name: 'Phosphorus', mass: 30.974, neutrons: 16, cat: 'Reactive Nonmetal' },
    { z: 16, sym: 'S', name: 'Sulfur', mass: 32.06, neutrons: 16, cat: 'Reactive Nonmetal' },
    { z: 17, sym: 'Cl', name: 'Chlorine', mass: 35.45, neutrons: 18, cat: 'Halogen' },
    { z: 18, sym: 'Ar', name: 'Argon', mass: 39.948, neutrons: 22, cat: 'Noble Gas' },
    { z: 19, sym: 'K', name: 'Potassium', mass: 39.098, neutrons: 20, cat: 'Alkali Metal' },
    { z: 20, sym: 'Ca', name: 'Calcium', mass: 40.078, neutrons: 20, cat: 'Alkaline Earth' },
    { z: 21, sym: 'Sc', name: 'Scandium', mass: 44.956, neutrons: 24, cat: 'Transition Metal' },
    { z: 22, sym: 'Ti', name: 'Titanium', mass: 47.867, neutrons: 26, cat: 'Transition Metal' },
    { z: 23, sym: 'V', name: 'Vanadium', mass: 50.942, neutrons: 28, cat: 'Transition Metal' },
    { z: 24, sym: 'Cr', name: 'Chromium', mass: 51.996, neutrons: 28, cat: 'Transition Metal' },
    { z: 25, sym: 'Mn', name: 'Manganese', mass: 54.938, neutrons: 30, cat: 'Transition Metal' },
    { z: 26, sym: 'Fe', name: 'Iron', mass: 55.845, neutrons: 30, cat: 'Transition Metal' },
    { z: 27, sym: 'Co', name: 'Cobalt', mass: 58.933, neutrons: 32, cat: 'Transition Metal' },
    { z: 28, sym: 'Ni', name: 'Nickel', mass: 58.693, neutrons: 31, cat: 'Transition Metal' },
    { z: 29, sym: 'Cu', name: 'Copper', mass: 63.546, neutrons: 35, cat: 'Transition Metal' },
    { z: 30, sym: 'Zn', name: 'Zinc', mass: 65.38, neutrons: 35, cat: 'Transition Metal' },
    { z: 31, sym: 'Ga', name: 'Gallium', mass: 69.723, neutrons: 39, cat: 'Post-transition' },
    { z: 32, sym: 'Ge', name: 'Germanium', mass: 72.63, neutrons: 41, cat: 'Metalloid' },
    { z: 33, sym: 'As', name: 'Arsenic', mass: 74.922, neutrons: 42, cat: 'Metalloid' },
    { z: 34, sym: 'Se', name: 'Selenium', mass: 78.971, neutrons: 45, cat: 'Reactive Nonmetal' },
    { z: 35, sym: 'Br', name: 'Bromine', mass: 79.904, neutrons: 45, cat: 'Halogen' },
    { z: 36, sym: 'Kr', name: 'Krypton', mass: 83.798, neutrons: 48, cat: 'Noble Gas' },
    { z: 37, sym: 'Rb', name: 'Rubidium', mass: 85.468, neutrons: 48, cat: 'Alkali Metal' },
    { z: 38, sym: 'Sr', name: 'Strontium', mass: 87.62, neutrons: 50, cat: 'Alkaline Earth' },
    { z: 39, sym: 'Y', name: 'Yttrium', mass: 88.906, neutrons: 50, cat: 'Transition Metal' },
    { z: 40, sym: 'Zr', name: 'Zirconium', mass: 91.224, neutrons: 51, cat: 'Transition Metal' },
    { z: 41, sym: 'Nb', name: 'Niobium', mass: 92.906, neutrons: 52, cat: 'Transition Metal' },
    { z: 42, sym: 'Mo', name: 'Molybdenum', mass: 95.95, neutrons: 54, cat: 'Transition Metal' },
    { z: 43, sym: 'Tc', name: 'Technetium', mass: 98, neutrons: 55, cat: 'Transition Metal' },
    { z: 44, sym: 'Ru', name: 'Ruthenium', mass: 101.07, neutrons: 57, cat: 'Transition Metal' },
    { z: 45, sym: 'Rh', name: 'Rhodium', mass: 102.91, neutrons: 58, cat: 'Transition Metal' },
    { z: 46, sym: 'Pd', name: 'Palladium', mass: 106.42, neutrons: 60, cat: 'Transition Metal' },
    { z: 47, sym: 'Ag', name: 'Silver', mass: 107.87, neutrons: 61, cat: 'Transition Metal' },
    { z: 48, sym: 'Cd', name: 'Cadmium', mass: 112.41, neutrons: 64, cat: 'Transition Metal' },
    { z: 49, sym: 'In', name: 'Indium', mass: 114.82, neutrons: 66, cat: 'Post-transition' },
    { z: 50, sym: 'Sn', name: 'Tin', mass: 118.71, neutrons: 69, cat: 'Post-transition' },
    { z: 51, sym: 'Sb', name: 'Antimony', mass: 121.76, neutrons: 71, cat: 'Metalloid' },
    { z: 52, sym: 'Te', name: 'Tellurium', mass: 127.6, neutrons: 76, cat: 'Metalloid' },
    { z: 53, sym: 'I', name: 'Iodine', mass: 126.9, neutrons: 74, cat: 'Halogen' },
    { z: 54, sym: 'Xe', name: 'Xenon', mass: 131.29, neutrons: 77, cat: 'Noble Gas' },
    { z: 55, sym: 'Cs', name: 'Caesium', mass: 132.91, neutrons: 78, cat: 'Alkali Metal' },
    { z: 56, sym: 'Ba', name: 'Barium', mass: 137.33, neutrons: 81, cat: 'Alkaline Earth' },
    { z: 57, sym: 'La', name: 'Lanthanum', mass: 138.91, neutrons: 82, cat: 'Lanthanide' },
    { z: 58, sym: 'Ce', name: 'Cerium', mass: 140.12, neutrons: 82, cat: 'Lanthanide' },
    { z: 59, sym: 'Pr', name: 'Praseodymium', mass: 140.91, neutrons: 82, cat: 'Lanthanide' },
    { z: 60, sym: 'Nd', name: 'Neodymium', mass: 144.24, neutrons: 84, cat: 'Lanthanide' },
    { z: 61, sym: 'Pm', name: 'Promethium', mass: 145, neutrons: 84, cat: 'Lanthanide' },
    { z: 62, sym: 'Sm', name: 'Samarium', mass: 150.36, neutrons: 88, cat: 'Lanthanide' },
    { z: 63, sym: 'Eu', name: 'Europium', mass: 151.96, neutrons: 89, cat: 'Lanthanide' },
    { z: 64, sym: 'Gd', name: 'Gadolinium', mass: 157.25, neutrons: 93, cat: 'Lanthanide' },
    { z: 65, sym: 'Tb', name: 'Terbium', mass: 158.93, neutrons: 94, cat: 'Lanthanide' },
    { z: 66, sym: 'Dy', name: 'Dysprosium', mass: 162.5, neutrons: 97, cat: 'Lanthanide' },
    { z: 67, sym: 'Ho', name: 'Holmium', mass: 164.93, neutrons: 98, cat: 'Lanthanide' },
    { z: 68, sym: 'Er', name: 'Erbium', mass: 167.26, neutrons: 99, cat: 'Lanthanide' },
    { z: 69, sym: 'Tm', name: 'Thulium', mass: 168.93, neutrons: 100, cat: 'Lanthanide' },
    { z: 70, sym: 'Yb', name: 'Ytterbium', mass: 173.05, neutrons: 103, cat: 'Lanthanide' },
    { z: 71, sym: 'Lu', name: 'Lutetium', mass: 174.97, neutrons: 104, cat: 'Lanthanide' },
    { z: 72, sym: 'Hf', name: 'Hafnium', mass: 178.49, neutrons: 106, cat: 'Transition Metal' },
    { z: 73, sym: 'Ta', name: 'Tantalum', mass: 180.95, neutrons: 108, cat: 'Transition Metal' },
    { z: 74, sym: 'W', name: 'Tungsten', mass: 183.84, neutrons: 110, cat: 'Transition Metal' },
    { z: 75, sym: 'Re', name: 'Rhenium', mass: 186.21, neutrons: 111, cat: 'Transition Metal' },
    { z: 76, sym: 'Os', name: 'Osmium', mass: 190.23, neutrons: 114, cat: 'Transition Metal' },
    { z: 77, sym: 'Ir', name: 'Iridium', mass: 192.22, neutrons: 115, cat: 'Transition Metal' },
    { z: 78, sym: 'Pt', name: 'Platinum', mass: 195.08, neutrons: 117, cat: 'Transition Metal' },
    { z: 79, sym: 'Au', name: 'Gold', mass: 196.97, neutrons: 118, cat: 'Transition Metal' },
    { z: 80, sym: 'Hg', name: 'Mercury', mass: 200.59, neutrons: 121, cat: 'Transition Metal' },
    { z: 81, sym: 'Tl', name: 'Thallium', mass: 204.38, neutrons: 123, cat: 'Post-transition' },
    { z: 82, sym: 'Pb', name: 'Lead', mass: 207.2, neutrons: 125, cat: 'Post-transition' },
    { z: 83, sym: 'Bi', name: 'Bismuth', mass: 208.98, neutrons: 126, cat: 'Post-transition' },
    { z: 84, sym: 'Po', name: 'Polonium', mass: 209, neutrons: 125, cat: 'Post-transition' },
    { z: 85, sym: 'At', name: 'Astatine', mass: 210, neutrons: 125, cat: 'Halogen' },
    { z: 86, sym: 'Rn', name: 'Radon', mass: 222, neutrons: 136, cat: 'Noble Gas' },
    { z: 87, sym: 'Fr', name: 'Francium', mass: 223, neutrons: 136, cat: 'Alkali Metal' },
    { z: 88, sym: 'Ra', name: 'Radium', mass: 226, neutrons: 138, cat: 'Alkaline Earth' },
    { z: 89, sym: 'Ac', name: 'Actinium', mass: 227, neutrons: 138, cat: 'Actinide' },
    { z: 90, sym: 'Th', name: 'Thorium', mass: 232.04, neutrons: 142, cat: 'Actinide' },
    { z: 91, sym: 'Pa', name: 'Protactinium', mass: 231.04, neutrons: 140, cat: 'Actinide' },
    { z: 92, sym: 'U', name: 'Uranium', mass: 238.03, neutrons: 146, cat: 'Actinide' },
    { z: 93, sym: 'Np', name: 'Neptunium', mass: 237, neutrons: 144, cat: 'Actinide' },
    { z: 94, sym: 'Pu', name: 'Plutonium', mass: 244, neutrons: 150, cat: 'Actinide' },
    { z: 95, sym: 'Am', name: 'Americium', mass: 243, neutrons: 148, cat: 'Actinide' },
    { z: 96, sym: 'Cm', name: 'Curium', mass: 247, neutrons: 151, cat: 'Actinide' },
    { z: 97, sym: 'Bk', name: 'Berkelium', mass: 247, neutrons: 150, cat: 'Actinide' },
    { z: 98, sym: 'Cf', name: 'Californium', mass: 251, neutrons: 153, cat: 'Actinide' },
    { z: 99, sym: 'Es', name: 'Einsteinium', mass: 252, neutrons: 153, cat: 'Actinide' },
    { z: 100, sym: 'Fm', name: 'Fermium', mass: 257, neutrons: 157, cat: 'Actinide' },
    { z: 101, sym: 'Md', name: 'Mendelevium', mass: 258, neutrons: 157, cat: 'Actinide' },
    { z: 102, sym: 'No', name: 'Nobelium', mass: 259, neutrons: 157, cat: 'Actinide' },
    { z: 103, sym: 'Lr', name: 'Lawrencium', mass: 266, neutrons: 163, cat: 'Actinide' },
    { z: 104, sym: 'Rf', name: 'Rutherfordium', mass: 267, neutrons: 163, cat: 'Transition Metal' },
    { z: 105, sym: 'Db', name: 'Dubnium', mass: 268, neutrons: 163, cat: 'Transition Metal' },
    { z: 106, sym: 'Sg', name: 'Seaborgium', mass: 269, neutrons: 163, cat: 'Transition Metal' },
    { z: 107, sym: 'Bh', name: 'Bohrium', mass: 270, neutrons: 163, cat: 'Transition Metal' },
    { z: 108, sym: 'Hs', name: 'Hassium', mass: 269, neutrons: 161, cat: 'Transition Metal' },
    { z: 109, sym: 'Mt', name: 'Meitnerium', mass: 278, neutrons: 169, cat: 'Transition Metal' },
    { z: 110, sym: 'Ds', name: 'Darmstadtium', mass: 281, neutrons: 171, cat: 'Transition Metal' },
    { z: 111, sym: 'Rg', name: 'Roentgenium', mass: 282, neutrons: 171, cat: 'Transition Metal' },
    { z: 112, sym: 'Cn', name: 'Copernicium', mass: 285, neutrons: 173, cat: 'Transition Metal' },
    { z: 113, sym: 'Nh', name: 'Nihonium', mass: 286, neutrons: 173, cat: 'Post-transition' },
    { z: 114, sym: 'Fl', name: 'Flerovium', mass: 289, neutrons: 175, cat: 'Post-transition' },
    { z: 115, sym: 'Mc', name: 'Moscovium', mass: 290, neutrons: 175, cat: 'Post-transition' },
    { z: 116, sym: 'Lv', name: 'Livermorium', mass: 293, neutrons: 177, cat: 'Post-transition' },
    { z: 117, sym: 'Ts', name: 'Tennessine', mass: 294, neutrons: 177, cat: 'Halogen' },
    { z: 118, sym: 'Og', name: 'Oganesson', mass: 294, neutrons: 176, cat: 'Noble Gas' }
  ];

  // Aufbau/Madelung Calculator
  function calculateShells(z: number): number[] {
    var order = [
      { n: 1, cap: 2 }, { n: 2, cap: 2 }, { n: 2, cap: 6 },
      { n: 3, cap: 2 }, { n: 3, cap: 6 }, { n: 4, cap: 2 },
      { n: 3, cap: 10 }, { n: 4, cap: 6 }, { n: 5, cap: 2 },
      { n: 4, cap: 10 }, { n: 5, cap: 6 }, { n: 6, cap: 2 },
      { n: 4, cap: 14 }, { n: 5, cap: 10 }, { n: 6, cap: 6 },
      { n: 7, cap: 2 }, { n: 5, cap: 14 }, { n: 6, cap: 10 }, { n: 7, cap: 6 }
    ];
    var rem = z;
    var map: { [n: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    for (var i = 0; i < order.length; i++) {
      if (rem <= 0) break;
      var take = Math.min(rem, order[i].cap);
      map[order[i].n] = (map[order[i].n] || 0) + take;
      rem -= take;
    }
    var res: number[] = [];
    for (var n = 1; n <= 7; n++) {
      if (map[n] > 0) res.push(map[n]);
    }
    return res;
  }

  // DOM Elements
  var fabEl: HTMLElement | null = null;
  var sidebarEl: HTMLElement | null = null;
  var canvasEl: HTMLCanvasElement | null = null;
  var animFrameId: number = 0;

  function initOverlay() {
    try {
      // 1. Floating Action Button (FAB)
      fabEl = document.createElement('div');
      fabEl.id = PREFIX + 'fab';
      fabEl.style.cssText =
        'position: fixed !important; bottom: 24px !important; right: 24px !important; width: 56px !important; height: 56px !important; border-radius: 50% !important; background: linear-gradient(135deg, #00f2fe, #4facfe) !important; box-shadow: 0 4px 20px rgba(0, 242, 254, 0.4) !important; cursor: pointer !important; z-index: 2147483646 !important; display: flex !important; align-items: center !important; justify-content: center !important; transition: transform 0.2s, box-shadow 0.2s !important; user-select: none !important; font-family: system-ui, sans-serif !important;';
      fabEl.innerHTML =
        '<span style="font-size: 26px; color: #ffffff; text-shadow: 0 0 8px rgba(0,0,0,0.3);">⚛</span>';
      
      fabEl.addEventListener('mouseenter', function () {
        if (fabEl) fabEl.style.transform = 'scale(1.08)';
      });
      fabEl.addEventListener('mouseleave', function () {
        if (fabEl) fabEl.style.transform = 'scale(1)';
      });
      fabEl.addEventListener('click', function () {
        toggleSidebar();
      });
      document.body.appendChild(fabEl);

      // 2. Full-Screen Simulation Canvas Container
      canvasEl = document.createElement('canvas');
      canvasEl.id = PREFIX + 'canvas';
      canvasEl.style.cssText =
        'position: fixed !important; top: 0 !important; left: 0 !important; width: 100vw !important; height: 100vh !important; z-index: 2147483640 !important; display: none !important; cursor: grab !important;';
      document.body.appendChild(canvasEl);

      // Canvas Interaction Handlers — Full pointer controls (rotate + pan + zoom)
      var pointerStates: { [id: number]: { x: number; y: number } } = {};
      var pointerDown = false;
      var panOffset = { x: 0, y: 0 };
      var isPanning = false;
      var lastPanX = 0;
      var lastPanY = 0;

      // Pointer down: detect left-button (rotate) vs right/middle (pan)
      canvasEl.addEventListener('pointerdown', function (e: PointerEvent) {
        pointerStates[e.pointerId] = { x: e.clientX, y: e.clientY };
        pointerDown = true;

        // Primary button (0) = rotate, secondary (2) = pan
        if (e.button === 2) {
          isPanning = true;
          lastPanX = e.clientX;
          lastPanY = e.clientY;
          e.preventDefault();
        } else {
          isPanning = false;
          state.isDragging = true;
          state.lastMouseX = e.clientX;
          state.lastMouseY = e.clientY;
          state.vx = 0;
          state.vy = 0;
        }
      });

      // Pointer move: handle rotation, panning, and multi-pointer pinch-zoom
      window.addEventListener('pointermove', function (e: PointerEvent) {
        if (!(e.pointerId in pointerStates)) return;

        var prev = pointerStates[e.pointerId];
        var dxm = e.clientX - prev.x;
        var dym = e.clientY - prev.y;
        pointerStates[e.pointerId] = { x: e.clientX, y: e.clientY };

        if (isPanning && pointerDown) {
          // Pan the atom (translate the scene)
          panOffset.x += dxm * 0.5;
          panOffset.y += dym * 0.5;
          return;
        }

        if (state.isDragging) {
          state.rotY += dxm * 0.008;
          state.rotX += dym * 0.008;
          state.vy = dxm * 0.0025;
          state.vx = dym * 0.0025;
          state.lastMouseX = e.clientX;
          state.lastMouseY = e.clientY;
        }

        // Multi-pointer pinch zoom
        var pointers = Object.keys(pointerStates).map(function (k) { return pointerStates[parseInt(k)]; });
        if (pointers.length === 2) {
          var dist = Math.sqrt(
            Math.pow(pointers[0].x - pointers[1].x, 2) +
            Math.pow(pointers[0].y - pointers[1].y, 2)
          );
          if (state.lastPinchDist) {
            var scaleFactor = dist / state.lastPinchDist;
            state.zoomLevel = Math.min(3.5, Math.max(0.3, state.zoomLevel * scaleFactor));
          }
          state.lastPinchDist = dist;
        }
      });

      window.addEventListener('pointerup', function (e: PointerEvent) {
        delete pointerStates[e.pointerId];
        if (Object.keys(pointerStates).length === 0) {
          state.isDragging = false;
          pointerDown = false;
          isPanning = false;
          state.lastPinchDist = 0;
        }
      });

      window.addEventListener('pointercancel', function () {
        pointerStates = {};
        state.isDragging = false;
        pointerDown = false;
        isPanning = false;
        state.lastPinchDist = 0;
      });

      // Prevent context menu on right-click for panning
      canvasEl.addEventListener('contextmenu', function (e: Event) {
        e.preventDefault();
      });

      canvasEl.addEventListener('wheel', function (e: WheelEvent) {
        e.preventDefault();
        state.zoomLevel = Math.min(3.5, Math.max(0.3, state.zoomLevel + (e.deltaY < 0 ? 0.12 : -0.12)));
      });

      // 3. Sliding Dark Sidebar HUD
      sidebarEl = document.createElement('div');
      sidebarEl.id = PREFIX + 'sidebar';
      sidebarEl.style.cssText =
        'position: fixed !important; top: 0 !important; right: -320px !important; width: 320px !important; height: 100vh !important; background: #07101e !important; color: #f1f5f9 !important; z-index: 2147483647 !important; box-shadow: -6px 0 24px rgba(0,0,0,0.6) !important; transition: right 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important; font-family: system-ui, -apple-system, sans-serif !important; display: flex !important; flex-direction: column !important; box-sizing: border-box !important; border-left: 1px solid rgba(56, 189, 248, 0.2) !important;';

      renderSidebarContent();
      document.body.appendChild(sidebarEl);

      // Keyboard Esc to exit simulation
      window.addEventListener('keydown', function (e: KeyboardEvent) {
        if (e.key === 'Escape' && state.isSimRunning) {
          setSimulationRunning(false);
        }
      });
    } catch (err) {
      console.error('[Atomic Lab Overlay] Failed to initialize overlay:', err);
    }
  }

  function toggleSidebar() {
    state.isSidebarOpen = !state.isSidebarOpen;
    if (sidebarEl) {
      sidebarEl.style.right = state.isSidebarOpen ? '0px' : '-320px';
    }
    if (fabEl) {
      fabEl.style.background = state.isSimRunning
        ? 'linear-gradient(135deg, #43e97b, #38f9d7)'
        : state.isSidebarOpen
        ? 'linear-gradient(135deg, #38f9d7, #4facfe)'
        : 'linear-gradient(135deg, #00f2fe, #4facfe)';
    }
  }

  function setSimulationRunning(running: boolean) {
    state.isSimRunning = running;
    if (canvasEl) {
      canvasEl.style.display = running ? 'block' : 'none';
      if (running) {
        resizeCanvas();
        startCanvasLoop();
      } else {
        cancelAnimationFrame(animFrameId);
      }
    }
    if (fabEl) {
      fabEl.style.background = running
        ? 'linear-gradient(135deg, #43e97b, #38f9d7)'
        : 'linear-gradient(135deg, #00f2fe, #4facfe)';
    }
    renderSidebarContent();
  }

  function resizeCanvas() {
    if (!canvasEl) return;
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;
  }

  window.addEventListener('resize', function () {
    if (state.isSimRunning) resizeCanvas();
  });

  function renderSidebarContent() {
    if (!sidebarEl) return;
    var curEl = ELEMENTS.find(function (e) { return e.z === state.selectedZ; }) || ELEMENTS[5];
    var shells = calculateShells(curEl.z);

    var optionsHtml = '';
    for (var i = 0; i < ELEMENTS.length; i++) {
      var e = ELEMENTS[i];
      var isSel = e.z === state.selectedZ ? 'selected' : '';
      optionsHtml += '<option value="' + e.z + '" ' + isSel + '>' + e.z + '. ' + e.name + ' (' + e.sym + ')</option>';
    }

    var pillsHtml = '';
    var shellLetters = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];
    for (var s = 0; s < shells.length; s++) {
      pillsHtml +=
        '<span style="background: rgba(14, 165, 233, 0.15); border: 1px solid rgba(56, 189, 248, 0.3); color: #38bdf8; font-size: 11px; padding: 2px 6px; border-radius: 4px; font-family: monospace;">' +
        shellLetters[s] +
        ':' +
        shells[s] +
        'e⁻</span>';
    }

    sidebarEl.innerHTML =
      '<div style="padding: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: space-between;">' +
        '<div style="display: flex; align-items: center; gap: 8px;">' +
          '<span style="font-size: 20px;">⚛</span>' +
          '<strong style="font-size: 15px; letter-spacing: -0.3px; color: #fff;">Atomic Lab Overlay</strong>' +
        '</div>' +
        '<button id="' + PREFIX + 'close_btn" style="background: none; border: none; color: #94a3b8; font-size: 18px; cursor: pointer;">✕</button>' +
      '</div>' +

      '<div style="flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 14px;">' +
        // Simulation Toggle Card
        '<div style="background: rgba(15, 23, 42, 0.8); border: 1px solid ' + (state.isSimRunning ? '#10b981' : 'rgba(56, 189, 248, 0.3)') + '; border-radius: 10px; padding: 12px;">' +
          '<div style="font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 600; margin-bottom: 6px;">Simulation Engine</div>' +
          '<button id="' + PREFIX + 'sim_toggle" style="width: 100%; padding: 10px; border-radius: 8px; border: none; font-weight: bold; font-size: 13px; cursor: pointer; background: ' + (state.isSimRunning ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #00f2fe, #4facfe)') + '; color: #fff; box-shadow: 0 2px 10px rgba(0, 242, 254, 0.2);">' +
            (state.isSimRunning ? '⏹ Stop Fullscreen Simulation' : '▶ Run Simulation Overlay') +
          '</button>' +
        '</div>' +

        // Element Select Dropdown
        '<div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px;">' +
          '<div style="font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 600; margin-bottom: 6px;">Select Element (118)</div>' +
          '<select id="' + PREFIX + 'elem_select" style="width: 100%; padding: 8px; border-radius: 6px; background: #0f172a; border: 1px solid #334155; color: #f8fafc; font-size: 12px; outline: none;">' +
            optionsHtml +
          '</select>' +
        '</div>' +

        // Model Type Select
        '<div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px;">' +
          '<div style="font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 600; margin-bottom: 6px;">Atomic Model</div>' +
          '<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4px;">' +
            '<button id="' + PREFIX + 'btn_planar" style="padding: 6px; font-size: 11px; border-radius: 6px; border: 1px solid ' + (state.modelType === 'planar' ? '#38bdf8' : '#334155') + '; background: ' + (state.modelType === 'planar' ? 'rgba(56, 189, 248, 0.2)' : 'transparent') + '; color: ' + (state.modelType === 'planar' ? '#38bdf8' : '#94a3b8') + '; cursor: pointer;">2D Bohr</button>' +
            '<button id="' + PREFIX + 'btn_spherical" style="padding: 6px; font-size: 11px; border-radius: 6px; border: 1px solid ' + (state.modelType === 'spherical' ? '#38bdf8' : '#334155') + '; background: ' + (state.modelType === 'spherical' ? 'rgba(56, 189, 248, 0.2)' : 'transparent') + '; color: ' + (state.modelType === 'spherical' ? '#38bdf8' : '#94a3b8') + '; cursor: pointer;">3D Sphere</button>' +
            '<button id="' + PREFIX + 'btn_quantum" style="padding: 6px; font-size: 11px; border-radius: 6px; border: 1px solid ' + (state.modelType === 'quantum' ? '#38bdf8' : '#334155') + '; background: ' + (state.modelType === 'quantum' ? 'rgba(56, 189, 248, 0.2)' : 'transparent') + '; color: ' + (state.modelType === 'quantum' ? '#38bdf8' : '#94a3b8') + '; cursor: pointer;">Quantum</button>' +
          '</div>' +
        '</div>' +

        // Element Info Details Card
        '<div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px;">' +
          '<div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 8px;">' +
            '<strong style="font-size: 16px; color: #fff;">' + curEl.name + '</strong>' +
            '<span style="font-size: 12px; font-weight: bold; color: #38bdf8; font-family: monospace;">Z = ' + curEl.z + '</span>' +
          '</div>' +
          '<div style="font-size: 11px; color: #94a3b8; margin-bottom: 8px;">Category: <span style="color: #cbd5e1;">' + curEl.cat + '</span></div>' +
          '<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4px; text-align: center; margin-bottom: 10px;">' +
            '<div style="background: #0f172a; padding: 6px 2px; border-radius: 6px; border: 1px solid rgba(239, 68, 68, 0.3); font-size: 10px; color: #f87171;">Protons<br><strong style="font-size: 12px; color: #fff;">' + curEl.z + '</strong></div>' +
            '<div style="background: #0f172a; padding: 6px 2px; border-radius: 6px; border: 1px solid rgba(59, 130, 246, 0.3); font-size: 10px; color: #60a5fa;">Neutrons<br><strong style="font-size: 12px; color: #fff;">' + curEl.neutrons + '</strong></div>' +
            '<div style="background: #0f172a; padding: 6px 2px; border-radius: 6px; border: 1px solid rgba(6, 182, 212, 0.3); font-size: 10px; color: #22d3ee;">Electrons<br><strong style="font-size: 12px; color: #fff;">' + curEl.z + '</strong></div>' +
          '</div>' +
          '<div style="font-size: 10px; color: #94a3b8; margin-bottom: 4px;">Electron Configuration:</div>' +
          '<div style="display: flex; gap: 4px; flex-wrap: wrap;">' + pillsHtml + '</div>' +
        '</div>' +

        // Controls hint
        '<div style="font-size: 10px; color: #64748b; line-height: 1.4; padding: 0 4px;">' +
          '• Left-click & drag canvas to rotate<br>' +
          '• Mouse wheel to zoom in/out<br>' +
          '• Press Esc to exit simulation overlay' +
        '</div>' +
      '</div>';

    // Hook listeners
    var closeBtn = document.getElementById(PREFIX + 'close_btn');
    if (closeBtn) closeBtn.addEventListener('click', toggleSidebar);

    var simBtn = document.getElementById(PREFIX + 'sim_toggle');
    if (simBtn) simBtn.addEventListener('click', function () {
      setSimulationRunning(!state.isSimRunning);
    });

    var elemSel = document.getElementById(PREFIX + 'elem_select') as HTMLSelectElement;
    if (elemSel) {
      elemSel.addEventListener('change', function () {
        state.selectedZ = parseInt(elemSel.value, 10);
        renderSidebarContent();
      });
    }

    var btnP = document.getElementById(PREFIX + 'btn_planar');
    if (btnP) btnP.addEventListener('click', function () { state.modelType = 'planar'; renderSidebarContent(); });

    var btnS = document.getElementById(PREFIX + 'btn_spherical');
    if (btnS) btnS.addEventListener('click', function () { state.modelType = 'spherical'; renderSidebarContent(); });

    var btnQ = document.getElementById(PREFIX + 'btn_quantum');
    if (btnQ) btnQ.addEventListener('click', function () { state.modelType = 'quantum'; renderSidebarContent(); });
  }

  // Real-time Canvas Rendering Loop
  function startCanvasLoop() {
    if (!canvasEl) return;
    var ctx = canvasEl.getContext('2d');
    if (!ctx) return;

    var curElement = ELEMENTS.find(function (e) { return e.z === state.selectedZ; }) || ELEMENTS[5];
    var shells = calculateShells(curElement.z);
    var time = 0;

    // Generate packed nucleus cluster
    var totalNucleons = Math.min(curElement.z + curElement.neutrons, 50);
    var nucleons: Array<{ x: number; y: number; z: number; isProton: boolean }> = [];
    var phi = (1 + Math.sqrt(5)) / 2;
    var nucleusScale = Math.max(12, Math.cbrt(totalNucleons) * 8.5);

    for (var i = 0; i < totalNucleons; i++) {
      var theta = 2 * Math.PI * i / phi;
      var u = (i / totalNucleons) * 2 - 1;
      var r = Math.sqrt(1 - u * u) * Math.pow(Math.random() * 0.5 + 0.5, 0.4) * nucleusScale;
      nucleons.push({
        x: r * Math.cos(theta),
        y: r * Math.sin(theta),
        z: u * nucleusScale,
        isProton: i % 2 === 0
      });
    }

    // Stars
    var stars: Array<{ x: number; y: number; s: number; a: number }> = [];
    for (var st = 0; st < 300; st++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        s: Math.random() * 1.8 + 0.3,
        a: Math.random() * 0.7 + 0.2
      });
    }

    // Quantum Cloud Points
    var quantumCloud: Array<{ x: number; y: number; z: number; a: number }> = [];
    for (var q = 0; q < 600; q++) {
      var rC = (Math.log(1 / (1 - Math.random() * 0.95)) * 32 + 20);
      var thetaC = Math.random() * Math.PI * 2;
      var phiC = Math.acos(2 * Math.random() - 1);
      quantumCloud.push({
        x: rC * Math.sin(phiC) * Math.cos(thetaC),
        y: rC * Math.sin(phiC) * Math.sin(thetaC),
        z: rC * Math.cos(phiC),
        a: Math.random() * 0.4 + 0.15
      });
    }

    function loop() {
      if (!state.isSimRunning || !canvasEl || !ctx) return;
      time += 0.016;

      if (!state.isDragging) {
        state.rotX += state.vx;
        state.rotY += state.vy;
        state.vx *= 0.96;
        state.vy *= 0.96;
        if (Math.abs(state.vx) < 0.0005) state.vx = 0.002;
        if (Math.abs(state.vy) < 0.0005) state.vy = 0.003;
      }

      var w = canvasEl.width;
      var h = canvasEl.height;
      var cx = w / 2;
      var cy = h / 2;

      // Deep space radial background
      var bgGrad = ctx.createRadialGradient(cx, cy, 50, cx, cy, w * 0.7);
      bgGrad.addColorStop(0, '#0a1628');
      bgGrad.addColorStop(1, '#020810');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Render Starfield
      ctx.fillStyle = '#ffffff';
      for (var s = 0; s < stars.length; s++) {
        var star = stars[s];
        ctx.globalAlpha = star.a * (0.8 + 0.2 * Math.sin(time * 2 + star.x));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.s, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      // Projection Math
      var cosX = Math.cos(state.modelType === 'planar' ? 0 : state.rotX);
      var sinX = Math.sin(state.modelType === 'planar' ? 0 : state.rotX);
      var cosY = Math.cos(state.modelType === 'planar' ? 0 : state.rotY);
      var sinY = Math.sin(state.modelType === 'planar' ? 0 : state.rotY);

      function project(x: number, y: number, z: number) {
        if (state.modelType === 'planar') {
          return { px: cx + x * state.zoomLevel + panOffset.x, py: cy + y * state.zoomLevel + panOffset.y, pz: z, scale: state.zoomLevel };
        }
        var x1 = x * cosY + z * sinY;
        var z1 = -x * sinY + z * cosY;
        var y2 = y * cosX - z1 * sinX;
        var z2 = y * sinX + z1 * cosX;
        var fov = 700;
        var scale = (fov / (fov + z2)) * state.zoomLevel;
        return { px: cx + x1 * scale + panOffset.x, py: cy + y2 * scale + panOffset.y, pz: z2, scale: scale };
      }

      // Render Quantum Probability Density — volumetric-style soft point cloud
      if (state.modelType === 'quantum') {
        // Depth-sort points for proper opacity falloff (back-to-front rendering)
        var cloudSorted: Array<{ px: number; py: number; pz: number; scale: number; alpha: number; radius: number; hue: number }> = [];
        for (var qc = 0; qc < quantumCloud.length; qc++) {
          var p = quantumCloud[qc];
          var prjQ = project(p.x, p.y, p.z);

          // Depth-based opacity: stronger toward center of screen (viewer-facing), fades at edges
          var depthFactor = 1.0 / (1.0 + Math.abs(prjQ.pz) * 0.002);
          // Radius falloff — denser core, softer edges
          var distFromCenter = Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z) / 140;
          var radialFalloff = Math.max(0.15, 1.0 - distFromCenter * 0.55);

          // Subtle color variation by shell radius (inner = cyan, outer = violet)
          var hueShift = Math.min(1, distFromCenter) * 40; // cyan → blue-violet

          // Soft sprite size with depth perspective
          var spriteSize = Math.max(1.2, 3.2 * prjQ.scale * (0.6 + radialFalloff));

          cloudSorted.push({
            px: prjQ.px,
            py: prjQ.py,
            pz: prjQ.pz,
            scale: prjQ.scale,
            alpha: p.a * depthFactor * radialFalloff,
            radius: spriteSize,
            hue: hueShift
          });
        }

        // Sort back-to-front for additive blending
        cloudSorted.sort(function (a, b) { return b.pz - a.pz; });

        // Additive blending for volumetric feel
        ctx.globalCompositeOperation = 'lighter';

        for (var qi = 0; qi < cloudSorted.length; qi++) {
          var cp = cloudSorted[qi];
          if (cp.alpha < 0.02) continue;

          // Soft circular sprite: radial gradient (soft center, diffuse edge)
          var spriteRad = cp.radius * 3.2; // sprite extends 3.2x beyond core
          var spriteGrad = ctx!.createRadialGradient(cp.px, cp.py, 0, cp.px, cp.py, spriteRad);

          // Color: cyan core → blue-violet edge by shell
          var r = 0;
          var g = 150 + (1 - cp.hue / 40) * 100;
          var b = 200 + (cp.hue / 40) * 55;
          spriteGrad.addColorStop(0, 'rgba(' + r + ',' + g + ',' + b + ',' + cp.alpha + ')');
          spriteGrad.addColorStop(0.25, 'rgba(' + Math.round(g * 0.4) + ',' + Math.round(b * 0.5) + ',' + Math.round(b * 0.8) + ',' + cp.alpha * 0.6 + ')');
          spriteGrad.addColorStop(0.6, 'rgba(50, 150, 200, ' + cp.alpha * 0.2 + ')');
          spriteGrad.addColorStop(1, 'rgba(50, 150, 200, 0)');

          ctx!.fillStyle = spriteGrad;
          ctx!.beginPath();
          ctx!.arc(cp.px, cp.py, spriteRad, 0, Math.PI * 2);
          ctx!.fill();
        }

        // Restore default composite operation
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1.0;
      }

      var depthItems: Array<{ z: number; draw: () => void }> = [];

      // Render Bohr Model Orbits — Hyper-realistic electrons with glow trails
      // Pre-generate trail points for motion blur effect
      var electronTrails: Array<Array<{ x: number; y: number; z: number }>> = [];

      if (state.modelType === 'planar') {
        // Pre-compute trail positions per electron for motion blur
        electronTrails = [];
        var trailSteps = 7;
        for (var si = 0; si < shells.length; si++) {
          var eCount = shells[si];
          var ringR = 60 + si * 42;
          var speed = (1.5 / (si + 1)) * (si % 2 === 0 ? 1 : -1);
          for (var ei = 0; ei < eCount; ei++) {
            var trailPts: Array<{ x: number; y: number; z: number }> = [];
            for (var t = 0; t < trailSteps; t++) {
              var trailAngle = (Math.PI * 2 * ei) / eCount + time * speed - t * 0.12 * speed;
              trailPts.push({
                x: Math.cos(trailAngle) * ringR,
                y: Math.sin(trailAngle) * ringR,
                z: 0
              });
            }
            electronTrails.push(trailPts);
          }
        }

        var trailIdx = 0;
        for (var si = 0; si < shells.length; si++) {
          var eCount = shells[si];
          var ringR = 60 + si * 42;

          // Enhanced orbital ring with subtle energy glow
          ctx.beginPath();
          ctx.arc(cx, cy, ringR * state.zoomLevel, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
          ctx.lineWidth = 1.8;
          ctx.setLineDash([4, 6]);
          ctx.stroke();
          ctx.setLineDash([]);

          // Secondary soft halo ring
          ctx.beginPath();
          ctx.arc(cx, cy, ringR * state.zoomLevel, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
          ctx.lineWidth = 6;
          ctx.stroke();

          var speed = (1.5 / (si + 1)) * (si % 2 === 0 ? 1 : -1);
          for (var ei = 0; ei < eCount; ei++) {
            var angle = (Math.PI * 2 * ei) / eCount + time * speed;
            var ex = Math.cos(angle) * ringR;
            var ey = Math.sin(angle) * ringR;
            var prj = project(ex, ey, 0);
            // Do not create a scaled jitter; keep a dedicated per-electron variable
            // Use fixed -0.002 to avoid duplicate declaration with later code
            var trailPts = electronTrails[trailIdx] || trailPts;
            trailIdx++;
            var motionBlurScale = prj.scale;

            depthItems.push({
              z: prj.pz,
              draw: (function (px, py, pScale, tPts) {
                return function () {
                  // --- Motion blur / energy trail ---
                  for (var ti = tPts.length - 1; ti >= 0; ti--) {
                    var tp = project(tPts[ti].x, tPts[ti].y, tPts[ti].z);
                    var trailAlpha = (1 - ti / (tPts.length + 1)) * 0.35;
                    var trailRad = (2.2 - ti * 0.12) * pScale;
                    if (trailRad < 0.3) continue;
                    var trailGlow = ctx!.createRadialGradient(tp.px, tp.py, 0, tp.px, tp.py, trailRad * 5);
                    trailGlow.addColorStop(0, 'rgba(56, 249, 215, ' + trailAlpha + ')');
                    trailGlow.addColorStop(0.5, 'rgba(56, 249, 215, ' + trailAlpha * 0.4 + ')');
                    trailGlow.addColorStop(1, 'rgba(56, 249, 215, 0)');
                    ctx!.fillStyle = trailGlow;
                    ctx!.beginPath();
                    ctx!.arc(tp.px, tp.py, trailRad * 5, 0, Math.PI * 2);
                    ctx!.fill();
                  }

                  // Main electron halo glow
                  var glow = ctx!.createRadialGradient(px, py, 0, px, py, 14 * pScale);
                  glow.addColorStop(0, 'rgba(160, 255, 225, 0.95)');
                  glow.addColorStop(0.35, 'rgba(56, 249, 215, 0.5)');
                  glow.addColorStop(0.7, 'rgba(67, 233, 123, 0.15)');
                  glow.addColorStop(1, 'rgba(67, 233, 123, 0)');
                  ctx!.fillStyle = glow;
                  ctx!.beginPath();
                  ctx!.arc(px, py, 14 * pScale, 0, Math.PI * 2);
                  ctx!.fill();

                  // Electron core — bright emissive sphere with specular highlight
                  var coreRad = 3.0 * pScale;
                  var coreGrad = ctx!.createRadialGradient(
                    px - coreRad * 0.35,
                    py - coreRad * 0.35,
                    coreRad * 0.08,
                    px,
                    py,
                    coreRad
                  );
                  coreGrad.addColorStop(0, '#ffffff');
                  coreGrad.addColorStop(0.3, '#c4fff0');
                  coreGrad.addColorStop(0.65, '#4de8c8');
                  coreGrad.addColorStop(1, '#1a8f7a');
                  ctx!.fillStyle = coreGrad;
                  ctx!.beginPath();
                  ctx!.arc(px, py, Math.max(0.8, coreRad), 0, Math.PI * 2);
                  ctx!.fill();

                  // Sharp specular highlight
                  ctx!.fillStyle = 'rgba(255, 255, 255, 0.9)';
                  ctx!.beginPath();
                  ctx!.arc(px - coreRad * 0.35, py - coreRad * 0.35, coreRad * 0.35, 0, Math.PI * 2);
                  ctx!.fill();
                };
              })(prj.px, prj.py, motionBlurScale, trailPts)
            });
          }
        }
      } else if (state.modelType === 'spherical') {
        // Spherical Great Circles — preserved as-is with enhanced particle materials
        for (var si2 = 0; si2 < shells.length; si2++) {
          var eCount2 = shells[si2];
          var ringR2 = 60 + si2 * 45;
          var tilt = (si2 * Math.PI) / (shells.length + 1);

          // Enhanced orbital ring
          ctx.beginPath();
          for (var a = 0; a <= Math.PI * 2 + 0.1; a += 0.15) {
            var rx = Math.cos(a) * ringR2;
            var ry = Math.sin(a) * Math.cos(tilt) * ringR2;
            var rz = Math.sin(a) * Math.sin(tilt) * ringR2;
            var prjR = project(rx, ry, rz);
            if (a === 0) ctx.moveTo(prjR.px, prjR.py);
            else ctx.lineTo(prjR.px, prjR.py);
          }
          ctx.strokeStyle = 'rgba(0, 242, 254, 0.35)';
          ctx.lineWidth = 1.3;
          ctx.setLineDash([3, 5]);
          ctx.stroke();
          ctx.setLineDash([]);

          var speed2 = (1.4 / (si2 + 1)) * (si2 % 2 === 0 ? 1 : -1);
          for (var ei2 = 0; ei2 < eCount2; ei2++) {
            (function (index, total, radius, tAngle, spd) {
              var angle = (Math.PI * 2 * index) / total + time * spd;
              var ex = Math.cos(angle) * radius;
              var ey = Math.sin(angle) * Math.cos(tAngle) * radius;
              var ez = Math.sin(angle) * Math.sin(tAngle) * radius;
              var prj = project(ex, ey, ez);

              depthItems.push({
                z: prj.pz,
                draw: function () {
                  // Glowing halo
                  var glow = ctx!.createRadialGradient(prj.px, prj.py, 0, prj.px, prj.py, 12 * prj.scale);
                  glow.addColorStop(0, 'rgba(0, 242, 254, 0.9)');
                  glow.addColorStop(0.4, 'rgba(79, 172, 254, 0.4)');
                  glow.addColorStop(1, 'rgba(79, 172, 254, 0)');
                  ctx!.fillStyle = glow;
                  ctx!.beginPath();
                  ctx!.arc(prj.px, prj.py, 12 * prj.scale, 0, Math.PI * 2);
                  ctx!.fill();

                  // Electron 3D core with specular highlight
                  var rad = 2.8 * prj.scale;
                  var eGrad = ctx!.createRadialGradient(
                    prj.px - rad * 0.3,
                    prj.py - rad * 0.3,
                    rad * 0.05,
                    prj.px,
                    prj.py,
                    rad
                  );
                  eGrad.addColorStop(0, '#ffffff');
                  eGrad.addColorStop(0.5, '#baf3ff');
                  eGrad.addColorStop(1, '#38bdf8');
                  ctx!.fillStyle = eGrad;
                  ctx!.beginPath();
                  ctx!.arc(prj.px, prj.py, Math.max(0.8, rad), 0, Math.PI * 2);
                  ctx!.fill();

                  ctx!.fillStyle = 'rgba(255, 255, 255, 0.8)';
                  ctx!.beginPath();
                  ctx!.arc(prj.px - rad * 0.3, prj.py - rad * 0.3, rad * 0.3, 0, Math.PI * 2);
                  ctx!.fill();
                }
              });
            })(ei2, eCount2, ringR2, tilt, speed2);
          }
        }
      }

      // Add Nucleon Spheres (Protons / Neutrons) — PBR-style 3D packed spheres
      for (var ni = 0; ni < nucleons.length; ni++) {
        (function (nuc) {
          var prj = project(nuc.x, nuc.y, nuc.z);
          depthItems.push({
            z: prj.pz,
            draw: function () {
              var rad = Math.max(2, 5.5 * prj.scale);

              // Falloff / ambient occlusion shading
              var baseShade = 0.7 + 0.3 * Math.sin(nuc.y * 0.5 + time * 0.2);

              // PBR-style gradient: strong specular top-left, ambient bounce, deep core
              var nGrad = ctx!.createRadialGradient(
                prj.px - rad * 0.4,
                prj.py - rad * 0.4,
                rad * 0.05,
                prj.px,
                prj.py,
                rad
              );

              if (nuc.isProton) {
                // Proton — subtle warm emissive red material with metallic sheen
                nGrad.addColorStop(0, 'rgba(255, 235, 230, ' + baseShade + ')');      // hot core highlight
                nGrad.addColorStop(0.25, 'rgba(255, 120, 110, ' + baseShade + ')');   // warm main
                nGrad.addColorStop(0.65, '#e04848');                                  // mid-tone red
                nGrad.addColorStop(1, '#8a1a1a');                                     // dark rim (metalness)
              } else {
                // Neutron — neutral grey/white with subtle cool tint (not blue)
                nGrad.addColorStop(0, 'rgba(255, 255, 255, ' + baseShade + ')');     // bright specular
                nGrad.addColorStop(0.3, '#d8dde3');                                  // light grey
                nGrad.addColorStop(0.7, '#9aa0a8');                                  // mid grey
                nGrad.addColorStop(1, '#5a6068');                                    // dark metal rim
              }
              ctx!.fillStyle = nGrad;
              ctx!.beginPath();
              ctx!.arc(prj.px, prj.py, rad, 0, Math.PI * 2);
              ctx!.fill();

              // Secondary ambient-occlusion shadow (soft inner darkness toward edge)
              var aoGrad = ctx!.createRadialGradient(
                prj.px - rad * 0.2,
                prj.py - rad * 0.2,
                rad * 0.3,
                prj.px,
                prj.py,
                rad * 1.05
              );
              aoGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
              aoGrad.addColorStop(0.7, 'rgba(0, 0, 0, 0.1)');
              aoGrad.addColorStop(1, 'rgba(0, 0, 0, 0.45)');
              ctx!.fillStyle = aoGrad;
              ctx!.beginPath();
              ctx!.arc(prj.px, prj.py, rad, 0, Math.PI * 2);
              ctx!.fill();

              // Sharp specular highlight (catch light)
              ctx!.fillStyle = nuc.isProton ? 'rgba(255, 220, 210, 0.9)' : 'rgba(255, 255, 255, 0.9)';
              ctx!.beginPath();
              ctx!.arc(prj.px - rad * 0.4, prj.py - rad * 0.4, rad * 0.3, 0, Math.PI * 2);
              ctx!.fill();

              // Tiny secondary bounce-light dot
              ctx!.fillStyle = nuc.isProton ? 'rgba(255, 180, 170, 0.5)' : 'rgba(255, 255, 255, 0.5)';
              ctx!.beginPath();
              ctx!.arc(prj.px + rad * 0.3, prj.py + rad * 0.2, rad * 0.12, 0, Math.PI * 2);
              ctx!.fill();

              // Subtle proton emissive halo
              if (nuc.isProton) {
                var pGlow = ctx!.createRadialGradient(prj.px, prj.py, 0, prj.px, prj.py, rad * 2.2);
                pGlow.addColorStop(0, 'rgba(255, 80, 80, 0.15)');
                pGlow.addColorStop(1, 'rgba(255, 80, 80, 0)');
                ctx!.fillStyle = pGlow;
                ctx!.beginPath();
                ctx!.arc(prj.px, prj.py, rad * 2.2, 0, Math.PI * 2);
                ctx!.fill();
              }
            }
          });
        })(nucleons[ni]);
      }

      // Depth sort painter's algorithm
      depthItems.sort(function (a, b) { return b.z - a.z; });
      for (var d = 0; d < depthItems.length; d++) {
        depthItems[d].draw();
      }

      animFrameId = requestAnimationFrame(loop);
    }

    loop();
  }

  // Runtime messaging listener from Popup or Background Action
  if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onMessage) {
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
      if (message && message.action === 'TOGGLE_ATOMIC_SIMULATION') {
        if (message.elementZ) state.selectedZ = message.elementZ;
        if (message.modelType) state.modelType = message.modelType;
        if (!state.isSidebarOpen) toggleSidebar();
        setSimulationRunning(true);
        sendResponse({ success: true });
        return true;
      }
      if (message && message.action === 'TOGGLE_SIDEBAR') {
        toggleSidebar();
        sendResponse({ success: true });
        return true;
      }
      sendResponse({ success: false });
      return true;
    });
  }

  // Self initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOverlay);
  } else {
    initOverlay();
  }
})();

export {};