export const FAQ_ITEMS = [
  {
    question: 'Why does a "1,000Wh" power station only deliver around 830Wh to my appliances?',
    answer:
      'Every portable power station stores DC energy in its internal battery cells and uses a 120V pure-sine-wave inverter to power standard household plugs. That DC-to-AC conversion plus cooling fans and BMS circuitry consumes 12% to 18% of the battery capacity. In my Jacksonville load tests, a 1,024Wh unit like the EcoFlow DELTA 2 delivers roughly 850–880Wh of net usable AC power—which is the real number you should use when planning fridge or CPAP runtimes.',
  },
  {
    question: 'What is the difference between Running Watts and Surge Watts—and why did my fridge trip my battery?',
    answer:
      'Running watts are what an appliance draws once it is operating steadily (around 120W–160W for a modern refrigerator). Surge watts (locked-rotor amps) are the brief 0.3-to-1.0 second spike required to start an inductive motor or compressor—often 1,000W to 2,100W for refrigerators, window ACs, and basement sump pumps. Always check that your power station’s real surge rating clears your largest motor startup.',
  },
  {
    question: 'Should I insist on LiFePO4 (LFP) battery chemistry over older NMC lithium-ion in 2026?',
    answer:
      'Yes, for almost every homeowner. LiFePO4 (Lithium Iron Phosphate) batteries—used in the EcoFlow DELTA 2 series, Jackery Plus series, Bluetti AC180/AC60, and Anker SOLIX line—deliver 3,000 to 4,000 charge cycles before dropping to 80% capacity and are far more thermally stable indoors than older 500-cycle NMC batteries like the legacy Goal Zero Yeti 1500X.',
  },
  {
    question: 'How long will a 1,000Wh vs. 2,000Wh power station actually run a full-size kitchen refrigerator?',
    answer:
      'Because a refrigerator compressor cycles on and off (running roughly 40%–50% of the time if you keep the door closed), a 1,000Wh station typically runs a standard 20 cu. ft. fridge for 12 to 16 hours. Stepping up to a 2,048Wh unit (like the EcoFlow DELTA 2 Max) extends fridge runtime to 26–34 hours—giving you a full overnight buffer before solar recharging starts the next morning.',
  },
  {
    question: 'Can I use third-party solar panels with EcoFlow, Jackery, Bluetti, or Anker power stations?',
    answer:
      'Absolutely—and doing so often saves $300 to $800 over proprietary brand panels. The single ironclad rule is that your solar panel Open-Circuit Voltage (VOC) must never exceed the power station’s maximum solar input voltage limit (for example, 60V max on the EcoFlow DELTA 2 or Bluetti AC180). You just need the right MC4-to-XT60i or DC8020 adapter cable.',
  },
  {
    question: 'How do I double my CPAP machine runtime during a multi-day blackout?',
    answer:
      'Two steps: first, turn off the heated humidifier plate and heated hose (which cuts power draw from ~55W down to ~15W–20W). Second, use a $25 12V/24V DC cigarette-lighter or USB-C adapter cord made for your ResMed or Philips CPAP instead of plugging its AC brick into the 120V outlets, so you don’t waste 15W/hour keeping the power station’s AC inverter awake all night.',
  },
  {
    question: 'Is it safe to store my portable power station in my garage between storm seasons?',
    answer:
      'If your garage regularly climbs above 90°F (32°C) in summer or drops below 20°F (-6°C) in winter, store the battery inside an indoor closet instead. High ambient heat accelerates calendar aging even when the unit isn’t being used, and LiFePO4 batteries permanently lock out charging if their internal cell temperature is below 32°F (0°C).',
  },
  {
    question: 'What happens when I book a Custom Appliance Load Audit or Storm Blueprint on BleakBot.in?',
    answer:
      'You send us your appliance list (or a photo of your breaker panel / dealer solar quote) along with your state and target outage hours. Within 24 hours, Marcus sends back a complete watt-hour + surge spreadsheet, exact runtime calculations, and the most cost-effective station and solar wiring combinations for your home.',
  },
];
