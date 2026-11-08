export const US_OUTAGE_REGIONS = [
  {
    id: 'fl-jacksonville-atlantic',
    state: 'Florida (Jacksonville & Atlantic/Gulf Coast)',
    primaryThreat: 'Hurricanes, Tropical Squalls & Afternoon Lightning',
    typicalOutageWindow: '24 Hours to 6 Days',
    climateChallenge: '90°F+ Post-Storm Humidity & High Garage Storage Temps',
    recommendedTier: '2,048Wh–3,600Wh Expandable LiFePO4 + 400W–600W Solar',
    marcusNote:
      'Here in Jacksonville, your biggest enemy after a storm passes is 88% humidity and a warming refrigerator. Size for fridge + box fans + night window AC, and keep batteries out of the hot garage.',
  },
  {
    id: 'tx-ercot-grid',
    state: 'Texas (ERCOT Grid — Houston, Dallas, Austin)',
    primaryThreat: 'Summer Heatwave Rolling Blackouts, Gulf Hurricanes & Winter Freezes',
    typicalOutageWindow: '12 Hours to 5 Days',
    climateChallenge: '102°F Summer Load Peaks & Sudden February Ice Events',
    recommendedTier: '3,000Wh+ Modular Home Backup + 30A Transfer Switch',
    marcusNote:
      'Texas homeowners face two opposite extremes: summer AC blackouts along the Gulf and winter gas-furnace blower outages during ice freezes. A modular 30A transfer-switch system handles both.',
  },
  {
    id: 'ga-piedmont-coast',
    state: 'Georgia (Atlanta Metro, Savannah & Coastal Pines)',
    primaryThreat: 'Inland Tropical Windfalls (Falling Pines on Overhead Lines) & Severe Thunderstorms',
    typicalOutageWindow: '18 Hours to 4 Days',
    climateChallenge: 'Dense Tree Canopy Shading Yard Solar Panels',
    recommendedTier: '1,500Wh–2,048Wh LiFePO4 (EcoFlow DELTA 2 Max) + 30ft Solar Extension Cords',
    marcusNote:
      'Georgia’s tall pines take down neighborhood feeder lines fast—and those same trees shade your patio. Always pair your solar panels with a 30-foot 10AWG MC4 extension cable to chase sunlit patches.',
  },
  {
    id: 'ok-tornado-alley',
    state: 'Oklahoma, Kansas & Missouri (Tornado Alley)',
    primaryThreat: 'EF2–EF5 Tornadoes, Straight-Line Derechos & Spring Supercells',
    typicalOutageWindow: '4 Hours to 72 Hours',
    climateChallenge: 'Zero-Warning Grid Cuts & Heavy Rain Basement Sump Loads',
    recommendedTier: 'Two-Tier Setup: <25 lb Shelter Unit (Bluetti AC60/AC180) + 2,000W Kitchen/Sump Unit',
    marcusNote:
      'When tornado sirens go off, you cannot haul a 95-pound battery down cellar stairs. Keep an IP65-rated compact unit in the shelter and a high-surge unit upstairs for your fridge and sump pump.',
  },
  {
    id: 'nc-sc-carolinas',
    state: 'North & South Carolina (Coastal & Foothills)',
    primaryThreat: 'Atlantic Hurricanes, Inland Flash Flooding & Winter Ice Storms',
    typicalOutageWindow: '24 Hours to 5 Days',
    climateChallenge: 'Multi-Day Overcast Skies After Tropical Remnants',
    recommendedTier: '2,048Wh LiFePO4 + Dual-Source Recharging (Solar + Car Alternator Charger)',
    marcusNote:
      'Whether you are on the Charleston coast or in the western Carolina foothills, post-storm rain clouds can linger for 48 hours. An 800W alternator charger lets your car top up a 2kWh battery in 2.5 hours.',
  },
  {
    id: 'la-ms-al-gulf',
    state: 'Louisiana, Mississippi & Alabama (Gulf Coast)',
    primaryThreat: 'Major Category 3+ Hurricanes & Feeder Transmission Collapse',
    typicalOutageWindow: '3 Days to 10+ Days',
    climateChallenge: 'Extended Multi-Day Grid Loss in Extreme Heat',
    recommendedTier: 'Hybrid Setup: 2,000Wh LiFePO4 Battery + Quiet Dual-Fuel Propane Inverter Generator',
    marcusNote:
      'For 7-to-10 day Gulf Coast outages, the smartest move is a hybrid: run a quiet propane generator for 2 hours each afternoon to fast-charge a 2,000Wh battery, then enjoy 22 hours of silent indoor power.',
  },
  {
    id: 'ca-psps-wildfire',
    state: 'California (PG&E / SCE / SDG&E PSPS Wildfire Zones)',
    primaryThreat: 'Planned Public Safety Power Shutoffs (PSPS) & High-Wind Fire Events',
    typicalOutageWindow: '24 Hours to 72 Hours',
    climateChallenge: 'Strict CARB Generator Bans & High Daytime Solar Potential',
    recommendedTier: '2,048Wh–4,000Wh Solar Generator + 400W–800W Folding Solar Array',
    marcusNote:
      'California PSPS shutoffs happen during bone-dry, sunny Santa Ana or Diablo wind events—meaning solar panels perform at peak 85%+ efficiency while gas generators face local restrictions.',
  },
  {
    id: 'ne-noreaster-corridor',
    state: 'New England & New York (Nor’easter & Ice Corridor)',
    primaryThreat: 'Wet Snow Limb Falls, Coastal Nor’easters & Sub-Zero Wind Chills',
    typicalOutageWindow: '12 Hours to 4 Days',
    climateChallenge: 'Keeping Gas/Oil Furnace Blowers & Basement Sump Pumps Running in Freezing Temps',
    recommendedTier: '1,800W–2,400W Continuous LiFePO4 + Furnace Single-Circuit Transfer Switch',
    marcusNote:
      'Without 450W of AC power for the blower fan and control board, a natural-gas or oil furnace goes dead. Wire a $110 single-circuit transfer switch at the furnace and keep your battery indoors above 40°F.',
  },
  {
    id: 'midwest-sump-belt',
    state: 'Illinois, Ohio, Indiana & Michigan (Great Lakes Belt)',
    primaryThreat: 'Summer Derechos, Lake-Effect Ice & Basement Sump Pump Flooding',
    typicalOutageWindow: '8 Hours to 72 Hours',
    climateChallenge: 'High Locked-Rotor Sump Pump Surge (1,800W–2,200W) During Heavy Storms',
    recommendedTier: '1,800W Continuous / 3,600W Surge Station (Bluetti AC180 / EcoFlow DELTA 2 Max)',
    marcusNote:
      'A flooded finished basement costs $10,000+. Make sure your backup station supports <20ms automatic UPS pass-through and at least 2,400W of real surge capacity for your primary sump pump.',
  },
  {
    id: 'pnw-windstorm-zone',
    state: 'Washington & Oregon (Pacific Northwest Wind & Ice Zone)',
    primaryThreat: 'Atmospheric River Windstorms, Evergreen Treefalls & Freezing Rain',
    typicalOutageWindow: '24 Hours to 5 Days',
    climateChallenge: 'Heavy Winter Cloud Cover Limiting Solar Recharging to 15%–25%',
    recommendedTier: '2,048Wh Expandable Battery + Alternator / Mini-Generator Fast-Charge Strategy',
    marcusNote:
      'During a November atmospheric river in Seattle or Portland, solar panels under Douglas firs will barely trickle-charge. Size your upfront battery capacity for 48 full hours before needing a recharge.',
  },
  {
    id: 'va-md-pa-midatlantic',
    state: 'Virginia, Maryland & Pennsylvania (Mid-Atlantic)',
    primaryThreat: 'Summer Derechos, Remnant Hurricanes & Winter Ice Accumulation',
    typicalOutageWindow: '12 Hours to 72 Hours',
    climateChallenge: 'Well-Pump 240V Needs in Rural Counties vs. Suburban Sump/Fridge Loads',
    recommendedTier: '1,024Wh–2,048Wh LiFePO4 (3,600Wh Split-Phase for 240V Well Pumps)',
    marcusNote:
      'Suburban homes on municipal water only need 120V for the fridge, router, and sump pump—whereas rural homes on a 240V deep-well pump require a split-phase unit like the Anker SOLIX F3800.',
  },
  {
    id: 'az-nv-monsoon-heat',
    state: 'Arizona & Nevada (Monsoon Microburst & Extreme Heat Grid)',
    primaryThreat: 'Summer Monsoon Microbursts Knocking Out Transformers in 110°F+ Heat',
    typicalOutageWindow: '4 Hours to 24 Hours',
    climateChallenge: 'Critical Medical Cooling, CPAP & Preventing Battery Thermal Cutoff',
    recommendedTier: '1,024Wh–2,048Wh LiFePO4 (EcoFlow DELTA 2 / Jackery 1000 Plus) Stored Indoors',
    marcusNote:
      'Never store or operate a lithium power station in a 120°F Phoenix garage—the BMS thermal protection will lock out around 113°F (45°C). Keep units inside conditioned living spaces.',
  },
];
