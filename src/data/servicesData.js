export const SERVICE_CATEGORIES = [
  {
    id: 'load-engineering',
    name: 'Home Outage Sizing & Load Engineering',
    badge: 'Pillar 1 • Sizing & Wiring',
    shortDesc:
      'Stop guessing watt-hours or tripping inverters on compressor surge. We audit your actual household appliances and design a transfer-switch or portable architecture that works on outage night.',
  },
  {
    id: 'solar-ups-rescue',
    name: 'Solar Matching, UPS & Battery Rescue',
    badge: 'Pillar 2 • Solar & Reliability',
    shortDesc:
      'Match third-party solar arrays safely to your MPPT controller limits, configure sub-20ms zero-downtime CPAP & sump pump backup, and calibrate LiFePO4 batteries.',
  },
  {
    id: 'regional-storm-plans',
    name: 'Regional Storm & Blackout Blueprints',
    badge: 'Pillar 3 • Regional Readiness',
    shortDesc:
      'Custom multi-day blackout playbooks engineered for Hurricane Coast humidity, Tornado Alley storm cellars, and sub-freezing Winter Grid-Freeze furnace backup.',
  },
];

export const CALCULATOR_APPLIANCES = [
  {
    id: 'fridge',
    name: 'Full-Size Refrigerator (Compressor Cycled)',
    category: 'Kitchen Critical',
    avgWatts: 145,
    surgeWatts: 1200,
    dutyCycle: 0.45,
    defaultSelected: true,
    tip: 'Modern Energy Star fridges pull ~140–180W when the compressor runs (~45% of the day), but need 1,000–1,200W for 0.5 seconds on startup.',
  },
  {
    id: 'cpap',
    name: 'CPAP Machine (DC Mode / Heated Hose Off)',
    category: 'Medical Critical',
    avgWatts: 38,
    surgeWatts: 75,
    dutyCycle: 1.0,
    defaultSelected: true,
    tip: 'Using a $25 DC barrel/USB-C converter instead of the 120V AC wall brick cuts CPAP power consumption by nearly 40% overnight.',
  },
  {
    id: 'wifi',
    name: 'Wi-Fi Router + Fiber ONT Modem',
    category: 'Communications',
    avgWatts: 22,
    surgeWatts: 35,
    dutyCycle: 1.0,
    defaultSelected: true,
    tip: 'Fiber internet often stays live during neighborhood transformer outages if your indoor ONT box and router have battery backup.',
  },
  {
    id: 'sump',
    name: '1/3 HP Basement Sump Pump (Intermittent)',
    category: 'Flood Prevention',
    avgWatts: 800,
    surgeWatts: 2100,
    dutyCycle: 0.15,
    defaultSelected: false,
    tip: 'Sump pumps run only a few minutes per hour, but their locked-rotor startup surge (1,800W–2,200W) will trip undersized 1,000W inverters immediately.',
  },
  {
    id: 'freezer',
    name: 'Garage Chest Freezer (7–10 cu. ft.)',
    category: 'Kitchen Critical',
    avgWatts: 110,
    surgeWatts: 950,
    dutyCycle: 0.4,
    defaultSelected: false,
    tip: 'A full chest freezer kept closed holds safe temperatures for 24–36 hours; cycling a power station onto it for 3 hours morning and night saves huge battery capacity.',
  },
  {
    id: 'window-ac',
    name: 'Window / Portable AC (5,000–6,000 BTU)',
    category: 'Cooling',
    avgWatts: 520,
    surgeWatts: 1650,
    dutyCycle: 0.65,
    defaultSelected: false,
    tip: 'In post-hurricane Florida or Gulf humidity, cooling a single bedroom at night requires at least a 2,000Wh+ battery and 400W–800W of daytime solar recovery.',
  },
  {
    id: 'furnace',
    name: 'Natural Gas Furnace Blower Fan',
    category: 'Winter Heating',
    avgWatts: 420,
    surgeWatts: 1150,
    dutyCycle: 0.5,
    defaultSelected: false,
    tip: 'Your gas furnace uses natural gas for heat, but its 120V blower motor and igniter need 400W–600W of clean pure-sine-wave AC power via a single-circuit transfer switch.',
  },
  {
    id: 'fans-lights',
    name: '2x Box Fans + LED Room Lamps + Phone Charging',
    category: 'Comfort',
    avgWatts: 95,
    surgeWatts: 160,
    dutyCycle: 0.85,
    defaultSelected: true,
    tip: 'High-airflow 20-inch box fans draw 60–75W on high; DC brushless air circulators move the same air at 18–25W.',
  },
];

export const SERVICES_LIST = [
  {
    id: 'custom-appliance-load-audit',
    categoryId: 'load-engineering',
    categoryName: 'Home Outage Sizing & Load Engineering',
    title: 'Custom Appliance Wattage & Surge Load Audit',
    badge: 'Most Popular • 1-on-1 Audit',
    priceRange: '$49 Flat Audit',
    turnaround: '24-Hour Custom Load Sheet',
    summary:
      'We calculate your exact continuous watt-hours, duty cycles, and compressor starting surges so you never buy an under-sized unit that shuts off when your fridge kicks on.',
    symptoms: [
      'Confused by Wh vs. W vs. Surge Watts on manufacturer spec sheets',
      'Worried a 1,000Wh or 1,500Wh station will trip when your refrigerator or sump pump starts',
      'Want an exact hour-by-hour runtime schedule before spending $800–$3,000',
    ],
    deliverables: [
      'Appliance-by-appliance running watt + peak starting surge spreadsheet tailored to your home',
      'Real-world usable Wh calculation (accounting for the 12%–18% AC inverter conversion loss spec sheets hide)',
      'Top 2 specific power station recommendations across budget and expandable tiers',
    ],
    relatedPostSlug: 'what-id-tell-every-homeowner-before-they-buy',
  },
  {
    id: 'whole-home-vs-essential-architecture',
    categoryId: 'load-engineering',
    categoryName: 'Home Outage Sizing & Load Engineering',
    title: 'Whole-Home vs. Essential-Circuit Backup Architecture',
    badge: 'System Blueprint',
    priceRange: '$79 Consultation',
    turnaround: '45-Min Video + Blueprint PDF',
    summary:
      'Should you buy a modular 3,600Wh–7,600Wh LiFePO4 battery system (like EcoFlow DELTA Pro or Anker SOLIX F3800), a dual-fuel inverter generator, or two smaller portable units?',
    symptoms: [
      'Debating between one giant 100-lb wheel-around station vs. two portable 1,000Wh–1,800Wh units',
      'Trying to decide if a dual-fuel propane generator + smaller LiFePO4 battery hybrid makes more sense for 5-day outages',
      'Need 240V split-phase output for a well pump or central AC soft-starter',
    ],
    deliverables: [
      'Side-by-side cost-per-usable-Wh and weight/mobility comparison for your floorplan',
      'Hybrid Battery + Quiet Dual-Fuel Inverter Generator charging architecture (run generator 2 hrs/day, run silent battery 22 hrs/day)',
      'Expansion battery ROI analysis so you never overpay for proprietary add-on packs',
    ],
    relatedPostSlug: 'ecoflow-delta-pro-vs-anker-solix-f3800',
  },
  {
    id: 'transfer-switch-inlet-planning',
    categoryId: 'load-engineering',
    categoryName: 'Home Outage Sizing & Load Engineering',
    title: '30A / 50A Transfer Switch & Power Inlet Planning',
    badge: 'Pre-Electrician Prep',
    priceRange: '$65 Blueprint',
    turnaround: '48-Hour Circuit Schedule',
    summary:
      'Stop running extension cords through cracked windows in the rain. We prepare a clean 6-to-10 circuit manual transfer switch or breaker interlock plan to hand to your local licensed electrician.',
    symptoms: [
      'Want to power hardwired gas furnace blowers, kitchen fridge outlets, and overhead bedroom lights directly from your panel',
      'Confused by TT-30P (120V 30A) vs. L14-30P (120V/240V 30A) vs. SS2-50P plugs and neutral-ground bonding faults',
      'Want to walk into an electrician quote knowing exactly which circuits and transfer hardware you need',
    ],
    deliverables: [
      'Prioritized 6-circuit or 10-circuit load-balancing schedule for Pro/Tran2 or panel interlock setups',
      'Neutral-ground bonding compatibility check (preventing GFCI trips on EcoFlow, Anker, and Bluetti units)',
      'Exact hardware shopping list (inlet box, cord gauge, adapter plug) ready for your licensed electrician to install',
    ],
    relatedPostSlug: 'goal-zero-yeti-vs-ecoflow-delta-pro',
  },
  {
    id: 'solar-bundle-quote-audit',
    categoryId: 'load-engineering',
    categoryName: 'Home Outage Sizing & Load Engineering',
    title: 'Overpriced Solar Bundle & Dealer Quote Second-Opinion',
    badge: 'Save $600–$2,200',
    priceRange: '$39 Quote Audit',
    turnaround: 'Same-Day Review',
    summary:
      'Before you click checkout on a $4,500 "Hurricane Solar Bundle" or sign a $12,000 salesman quote, let Marcus audit every line item and strip out the 200% markup accessories.',
    symptoms: [
      'Looking at a brand bundle that pairs a great power station with $900 folding solar panels you could replace for $260',
      'Unsure if an older-generation NMC battery (like legacy Yeti 1500X or older Explorer models) is being sold at 2026 LiFePO4 prices',
      'Want to know which seasonal sales and refurbished manufacturer warranties are genuinely safe',
    ],
    deliverables: [
      'Line-by-line audit showing exact cost per Wh and cost per solar watt',
      'Direct swap recommendations for compatible third-party rigid/portable solar panels and MC4-to-XT60i cables',
      'Clear verdict on battery chemistry cycle life (3,000+ cycle LiFePO4 vs. 500–800 cycle NMC)',
    ],
    relatedPostSlug: 'goal-zero-yeti-1500x-review',
  },
  {
    id: 'third-party-solar-mppt-matching',
    categoryId: 'solar-ups-rescue',
    categoryName: 'Solar Matching, UPS & Battery Rescue',
    title: 'Third-Party Solar Array & MPPT Voltage Matching',
    badge: 'Solar Engineering',
    priceRange: '$55 Wiring Plan',
    turnaround: '24-Hour Wiring Diagram',
    summary:
      'Match high-output 200W–400W solar panels in series or parallel to your Jackery, EcoFlow, Bluetti, or Anker input ports without exceeding Open-Circuit Voltage (VOC) limits.',
    symptoms: [
      'Getting only 90W of solar input from a "200W" panel because of amperage clipping or wrong adapter cables (XT60 vs. XT60i)',
      'Afraid of connecting panels in series and frying your station’s 60V or 150V MPPT solar charge controller on a cold morning',
      'Need 30-to-50 ft low-loss 10AWG solar extension cables so your power station stays cool indoors while panels sit in the yard',
    ],
    deliverables: [
      'Series vs. parallel VOC + temperature-coefficient safety calculation for your exact power station model',
      'Pinout & adapter spec (including EcoFlow XT60i sense-pin activation to unlock full 15A–25A solar charging)',
      'Low-voltage-drop cable gauge and weatherproof placement checklist',
    ],
    relatedPostSlug: 'best-power-station-under-1500',
  },
  {
    id: 'cpap-sump-ups-configuration',
    categoryId: 'solar-ups-rescue',
    categoryName: 'Solar Matching, UPS & Battery Rescue',
    title: 'Zero-Downtime CPAP & Sump Pump UPS Configuration',
    badge: 'Medical & Flood Safety',
    priceRange: '$45 Setup Guide',
    turnaround: '24-Hour Custom Guide',
    summary:
      'Configure automatic <20ms EPS/UPS switchover for sleep apnea CPAP machines, home servers, and basement sump pumps—plus DC-direct wiring that doubles overnight battery life.',
    symptoms: [
      'Waking up gasping when a 2:00 AM flicker resets your CPAP or drains a small battery in 5 hours because the heated humidifier stayed on AC',
      'Need automatic pass-through backup for a basement sump pump when you are away from home during a thunderstorm',
      'Confused about whether leaving a LiFePO4 station plugged into the wall 24/7 in UPS mode degrades the cells',
    ],
    deliverables: [
      'Model-specific DC converter guide for ResMed AirSense 10/11 and Philips DreamStation (saving 35%–45% watt draw)',
      'UPS switchover latency verification (<10ms vs. <20ms vs. 30ms) and safe State-of-Charge (SoC) ceiling settings (85%–90%)',
      'High-water alarm + sump pump float-switch surge test protocol',
    ],
    relatedPostSlug: 'anker-solix-c800-review',
  },
  {
    id: 'lifepo4-bms-garage-rescue',
    categoryId: 'solar-ups-rescue',
    categoryName: 'Solar Matching, UPS & Battery Rescue',
    title: 'LiFePO4 BMS Calibration & Garage Heat Storage Rescue',
    badge: 'Battery Troubleshooting',
    priceRange: '$39 Diagnostic',
    turnaround: 'Same-Day Fix Protocol',
    summary:
      'Fix sudden battery display drops (jumping from 65% straight to 0%), clear tripped BMS overload codes, and set up safe storage routines for humid 95°F southern garages.',
    symptoms: [
      'Power station screen shows 40% remaining and then suddenly shuts off under load',
      'Storing backup batteries in a hot Florida, Texas, or Georgia garage and worried about capacity fade or swollen cells',
      'Solar or AC charging stops at 88% or throws an Over-Temperature / BMS communication warning',
    ],
    deliverables: [
      'Step-by-step BMS full-cycle recalibration procedure (0%–100% slow AC reset) for EcoFlow, Bluetti, Jackery, and Anker',
      'Seasonal 60% SoC quarterly maintenance calendar and insulated indoor closet placement guide',
      'Warranty claim documentation checklist if cell imbalance requires a manufacturer RMA',
    ],
    relatedPostSlug: 'jackery-vs-bluetti',
  },
  {
    id: 'hurricane-coast-5-day-blueprint',
    categoryId: 'regional-storm-plans',
    categoryName: 'Regional Storm & Blackout Blueprints',
    title: 'Hurricane Coast 5-Day Grid-Down Blueprint (FL, GA, TX, Carolinas)',
    badge: 'Hurricane Coast Special',
    priceRange: '$69 Regional Plan',
    turnaround: 'Custom 5-Day Playbook',
    summary:
      'Built from real Jacksonville hurricane seasons: how to ration watt-hours across 5 muggy days, cycle refrigerators, run a bedroom window AC at night, and recharge under overcast skies.',
    symptoms: [
      'Living in Florida, coastal Georgia, the Carolinas, or the Texas/Louisiana Gulf Coast where post-hurricane outages last 3 to 7 days',
      'High nighttime heat and 85% humidity make sleeping impossible without a fan or small 5,000 BTU window AC strategy',
      'Worried that post-storm cloud cover will leave your solar panels producing only 25% of rated wattage',
    ],
    deliverables: [
      'Day-1 to Day-5 timed appliance rotation schedule (cutting refrigerator watt consumption by 40% safely with thermal ice ballast)',
      'Overcast-sky solar over-paneling blueprint + car alternator 800W DC-DC fast-charging backup plan',
      'Pre-landfall 72-hour countdown checklist (firmware lock, ice-block staging, fuel/water buffer)',
    ],
    relatedPostSlug: 'how-to-prep-backup-power-hurricane-season',
  },
  {
    id: 'tornado-alley-shelter-sump-plan',
    categoryId: 'regional-storm-plans',
    categoryName: 'Regional Storm & Blackout Blueprints',
    title: 'Tornado Alley Fast-Grab Shelter & Sump Plan (OK, KS, MO, Midwest)',
    badge: 'Tornado & Severe Storm',
    priceRange: '$59 Regional Plan',
    turnaround: 'Custom Storm Playbook',
    summary:
      'When sirens sound in Oklahoma, Kansas, or Missouri, you have 4 minutes—not 4 days. We design a two-tier setup: a grab-and-go IP65 shelter unit plus automated upstairs fridge/sump backup.',
    symptoms: [
      'Need a rugged, dust/water-resistant <25 lb power station pre-staged in a storm cellar or interior safe room for NOAA radios, phones, and medical gear',
      'Spring supercells knock out neighborhood feeder lines while dumping 4 inches of rain into your basement sump pit',
      'Need fast 60-minute wall recharging between back-to-back severe weather waves',
    ],
    deliverables: [
      'Two-tier storm-cellar + main-floor kitchen/sump architecture matched to your budget',
      'Rapid 1-hour AC hyper-charge settings (and when to toggle slow-charge back on to protect cell health)',
      'Emergency cellular / Starlink Mini low-wattage communications backup wiring',
    ],
    relatedPostSlug: 'best-backup-power-oklahoma',
  },
  {
    id: 'winter-grid-freeze-furnace-plan',
    categoryId: 'regional-storm-plans',
    categoryName: 'Regional Storm & Blackout Blueprints',
    title: 'Winter Ice-Storm & Furnace Blower Backup Plan',
    badge: 'Winter Freeze Protection',
    priceRange: '$65 Regional Plan',
    turnaround: 'Custom Winter Playbook',
    summary:
      'Keep your natural-gas furnace blower, pellet stove, or pipe heat-tape running indoors during sub-freezing ice storms—plus prevent LiFePO4 low-temperature charge lockouts.',
    symptoms: [
      'Experienced winter grid blackouts (Texas ERCOT freeze, Northeast ice storms, Midwest polar vortex) where indoor pipes risk bursting',
      'Want to power your gas furnace blower fan (~450W) without running a noisy gas generator in snow and ice',
      'Know that LiFePO4 batteries refuse to charge below 32°F (0°C) and need an indoor thermal staging plan',
    ],
    deliverables: [
      'Single-circuit EZ Generator Switch wiring guide for natural-gas and propane furnace blower motors',
      'Cold-weather LiFePO4 thermal management guide (preventing <32°F charge cutoffs)',
      'Wattage trap warnings: why electric space heaters (1,500W) drain batteries in 60 minutes vs. heated blankets (60W) and gas furnace blowers',
    ],
    relatedPostSlug: 'bluetti-ac180-review',
  },
];

export const OUTAGE_WARNING_SIGNS = [
  {
    id: 'surge-overload',
    title: '1. The Compressor Surge Trap (W vs. Surge W)',
    symptom: 'Your station says "1,200W Output," yet trips off the second your 150W refrigerator or 800W sump pump tries to start.',
    fix: 'Inductive motors demand 3x to 6x their running wattage for 300 milliseconds at startup. We size your inverter for real locked-rotor surge, not just average watts.',
  },
  {
    id: 'inverter-tare-loss',
    title: '2. Hidden 15% Inverter & Idle Tare Drain',
    symptom: 'A "1,000Wh" battery runs a 50W load for only 14 hours instead of the 20 hours promised on the box.',
    fix: 'Every AC inverter burns 12W–25W just staying awake, plus 15% conversion loss. We calculate true net usable Wh and switch small loads (CPAP, router) to direct 12V/USB-C.',
  },
  {
    id: 'overcast-solar-gap',
    title: '3. The Single-200W Solar Panel Illusion',
    symptom: 'A bundle includes one 200W folding panel that delivers only 45W–80W under humid post-hurricane cloud haze.',
    fix: 'Real-world flat-angle solar averages 60%–70% of rated STC watts on clear days and 20%–30% under clouds. We match affordable third-party panels up to your controller’s max VOC.',
  },
  {
    id: 'garage-heat-rot',
    title: '4. 98°F Garage Storage & BMS Drift',
    symptom: 'Leaving a fully charged 100% power station in a hot southern garage for 8 months degrades cells and throws off the BMS percentage meter.',
    fix: 'Store LiFePO4 units indoors at 50%–60% State of Charge and run one full 0%–100% calibration cycle every 90 days before storm season.',
  },
];

export const TESTING_CHECKPOINTS = [
  {
    step: '01',
    title: 'Measured Usable Wh Discharge (Not Nameplate Wh)',
    detail: 'Every unit is drained at a constant 300W AC load through a calibrated inline watt-hour meter until inverter cutoff to measure true usable efficiency (typically 82%–88%).',
  },
  {
    step: '02',
    title: 'Refrigerator & Sump Pump Locked-Rotor Surge Test',
    detail: 'Connected to a real 21 cu. ft. kitchen refrigerator and a 1/3 HP Zoeller sump pump to verify whether "X-Boost" / "Power Lifting" voltage-drop modes actually start inductive motors.',
  },
  {
    step: '03',
    title: 'CPAP Overnight Watt-Hour & UPS Drop Test',
    detail: 'Tested over an 8-hour sleep cycle with wall power pulled at 2:00 AM to verify <20ms switchover and compare 120V AC vs. 12V/24V DC barrel efficiency.',
  },
  {
    step: '04',
    title: 'Jacksonville Backyard Solar Input Stress Test',
    detail: 'Connected to both brand-name folding panels and budget rigid 200W/400W panels in 91°F Florida sun and afternoon cloud cover to log real MPPT wattage.',
  },
  {
    step: '05',
    title: '6-Foot Bedroom Acoustic dB Noise Measurement',
    detail: 'Fan noise measured in decibels at 6 feet under 300W load and 1,200W fast-charging—because a 62 dB cooling fan next to your bed during an outage is miserable.',
  },
  {
    step: '06',
    title: '80%-to-0% BMS Calibration & App Independence Check',
    detail: 'Verified whether critical settings (AC timeout, charge speed, DC output) work when home Wi-Fi and cellular towers are completely down.',
  },
];
