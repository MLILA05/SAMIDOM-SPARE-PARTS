const english = {
  brandLine: 'SPARE PARTS AND SERVICES', parts: 'Spare Parts', visit: 'Visit Us',
  street: 'MSIMBAZI STREET', heading: 'Spare parts for your next repair.',
  intro: 'SAMIDOM supplies quality vehicle spare parts to drivers, mechanics, and garages. Browse our catalog and ask us about fit, price, and availability before visiting.',
  browse: 'Browse Spare Parts', heroAlt: 'Steering racks and boxed spare parts at SAMIDOM',
  vehicles: 'VEHICLE MAKES', choose: 'Choose a category to see its parts.',
  pickup: 'Collect your parts from our shop on Msimbazi Street.',
  directions: 'Get Directions', call: 'Call Shop', hours: 'Opening Hours',
  week: 'Monday–Saturday', time: '8:00 AM–6:30 PM', sunday: 'Sunday', sundayTime: '8:00 AM–2:30 PM',
  number: 'Part number', availability: 'Confirm availability on WhatsApp before visiting.',
  ask: 'Ask for price on WhatsApp', check: 'Check on WhatsApp',
  fullPhoto: 'View full-size photo', showcaseLabel: 'PARTS FOR YOUR VEHICLE'
};

const swahili = {
  brandLine: 'VIPURI NA HUDUMA', parts: 'Vipuri', visit: 'Tutembelee',
  street: 'MTAA WA MSIMBAZI', heading: 'Vipuri kwa ajili ya ukarabati wa gari lako.',
  intro: 'SAMIDOM inauza vipuri vya magari kwa madereva, mafundi na gereji. Angalia katalogi yetu kisha tuulize kuhusu ulinganifu wa kipuri, bei na upatikanaji kabla ya kutembelea duka.',
  browse: 'Angalia Vipuri', heroAlt: 'Reki za usukani na masanduku ya vipuri katika duka la SAMIDOM',
  vehicles: 'CHAPA ZA MAGARI', choose: 'Chagua kategoria ili kuona vipuri vyake.',
  pickup: 'Chukua vipuri vyako dukani kwetu, Mtaa wa Msimbazi.',
  directions: 'Pata Maelekezo', call: 'Piga Simu', hours: 'Saa za Kazi',
  week: 'Jumatatu–Jumamosi', time: '08:00–18:30', sunday: 'Jumapili', sundayTime: '08:00–14:30',
  number: 'Namba ya kipuri', availability: 'Thibitisha upatikanaji kupitia WhatsApp kabla ya kuja dukani.',
  ask: 'Uliza bei kupitia WhatsApp', check: 'Uliza kupitia WhatsApp',
  fullPhoto: 'Fungua picha kwa ukubwa kamili', showcaseLabel: 'VIPURI VYA GARI LAKO'
};

const categories = [
  ['brakes', 'Brakes', 'Breki'], ['clutch', 'Clutch', 'Klachi'],
  ['steering', 'Steering', 'Usukani'], ['suspension', 'Suspension', 'Mfumo wa Kusimamisha Gari'],
  ['bearings', 'Bearings & Hubs', 'Bearing na Hub'], ['belts', 'Belts', 'Mikanda'],
  ['pumps', 'Pumps', 'Pampu'], ['seals', 'Oil Seals', 'Sili za Mafuta'],
  ['flanges', 'Flanges', 'Flanji'], ['engine', 'Engine Parts', 'Vipuri vya Injini'],
  ['drivetrain', 'Axles & Drive Shafts', 'Ekseli na Shafuti']
];

const parts = [
  ['bearings', [1], 'Tapered roller bearing', 'Bearing ya rola za koni', '90366-20003', 'Toyota tapered roller bearing shown with its packaging.', 'Bearing ya Toyota yenye rola za koni, pamoja na kifurushi chake.'],
  ['steering', [2, 3], 'Steering rack assemblies', 'Reki za usukani', '', 'Steering rack assemblies with protective boots. Ask the shop which version fits your vehicle.', 'Reki za usukani zenye mipira ya kinga. Uliza dukani aina inayolingana na gari lako.'],
  ['pumps', [4], 'Vacuum pump', 'Pampu ya utupu', '14650-7T411', 'Gear-driven vacuum pump. Check compatibility with the shop.', 'Pampu ya utupu inayoendeshwa kwa gia. Thibitisha ulinganifu dukani.'],
  ['brakes', [5], 'Toyota brake drum', 'Daramu ya breki ya Toyota', '42431-60250', 'Toyota brake drum with the part number marked on the rim.', 'Daramu ya breki ya Toyota yenye namba ya kipuri kwenye ukingo.'],
  ['brakes', [25], 'Toyota brake drum', 'Daramu ya breki ya Toyota', '42431-0K120', 'Toyota brake drum shown with its labelled packaging. Ask the shop to confirm fit for your vehicle.', 'Daramu ya breki ya Toyota iliyoonyeshwa pamoja na boksi lenye lebo. Thibitisha dukani kama inafaa gari lako.'],
  ['belts', [6], 'Toyota drive belt', 'Mkanda wa Toyota', '90916-T2006', 'Multi-rib drive belt. Confirm the correct belt for your engine.', 'Mkanda wenye mbavu nyingi. Thibitisha mkanda unaofaa injini yako.'],
  ['suspension', [7], 'Suspension coil springs', 'Springi za kusimamisha gari', '', 'Coil springs for the suspension system. Share your vehicle details to check fit.', 'Springi za mfumo wa kusimamisha gari. Tuma taarifa za gari lako ili kuthibitisha ulinganifu.'],
  ['bearings', [8], 'Wheel hub assembly', 'Hub ya gurudumu', '', 'Wheel hub assembly with a splined centre and mounting studs.', 'Hub ya gurudumu yenye meno katikati na bolti za kufungia.'],
  ['brakes', [9], 'Toyota brake disc', 'Diski ya breki ya Toyota', '43512-60150', 'Toyota brake disc shown alongside its labelled packaging.', 'Diski ya breki ya Toyota pamoja na kifurushi chenye lebo.'],
  ['clutch', [10], 'Toyota clutch disc', 'Diski ya klachi ya Toyota', '31250-60430', 'Clutch disc with the part number marked on the centre plate.', 'Diski ya klachi yenye namba ya kipuri kwenye sehemu ya katikati.'],
  ['clutch', [11], 'EXEDY clutch disc', 'Diski ya klachi ya EXEDY', '30100-VB201', 'EXEDY replacement clutch disc with a sprung centre.', 'Diski mbadala ya klachi ya EXEDY yenye springi katikati.'],
  ['clutch', [12, 16], 'Clutch master cylinder', 'Silinda kuu ya klachi', '', 'Hydraulic clutch component with a pushrod and mounting studs. Confirm fit with the shop.', 'Sehemu ya mfumo wa majimaji wa klachi yenye fimbo ya kusukuma na bolti za kufungia. Thibitisha ulinganifu dukani.'],
  ['clutch', [13], 'Toyota clutch disc', 'Diski ya klachi ya Toyota', '31250-0K205', 'Toyota clutch disc shown with its labelled box.', 'Diski ya klachi ya Toyota pamoja na boksi lenye lebo.'],
  ['clutch', [31, 14], 'Nissan clutch cover', 'Kifuniko cha klachi cha Nissan', '30210-C8000', 'Nissan clutch cover shown with its labelled packaging.', 'Kifuniko cha klachi cha Nissan pamoja na kifurushi chenye lebo.'],
  ['bearings', [15], 'Toyota hub bearing', 'Bearing ya hub ya Toyota', '90369-T0003', 'Toyota hub bearing in protective wrapping alongside its labelled box.', 'Bearing ya hub ya Toyota kwenye kifurushi cha kinga, pamoja na boksi lenye lebo.'],
  ['brakes', [17, 20], 'Toyota Land Cruiser brake pad kit', 'Seti ya pedi za breki ya Toyota Land Cruiser', '04466-60190', 'Disc brake pad kit labelled for Land Cruiser. Ask the shop to confirm the exact model fit.', 'Seti ya pedi za breki yenye lebo ya Land Cruiser. Thibitisha dukani kama inafaa toleo la gari lako.'],
  ['bearings', [18], 'Toyota Land Cruiser wheel and hub bearings', 'Bearing za gurudumu na hub za Toyota Land Cruiser', '90368-49084 / 90368-45087', 'Two bearing references are shown. Ask which part number fits your Land Cruiser 78 or 79, Prado 150 rear axle, or Land Cruiser LC300.', 'Picha inaonyesha bearing zenye namba mbili tofauti. Uliza ni namba ipi inayofaa Land Cruiser 78 au 79, ekseli ya nyuma ya Prado 150, au Land Cruiser LC300.', null, 'Land Cruiser 78 / 79, Prado 150 rear, or Land Cruiser LC300', 'Land Cruiser 78 / 79, Prado 150 (nyuma), au Land Cruiser LC300'],
  ['brakes', [19], 'Toyota disc brake pad kit', 'Seti ya pedi za breki za diski za Toyota', '04466-60020', 'Disc brake pad kit shown with its labelled packaging. Ask the shop to confirm vehicle fit.', 'Seti ya pedi za breki za diski pamoja na boksi lenye lebo. Thibitisha dukani kama inafaa gari lako.'],
  ['seals', [21], 'Toyota oil seal', 'Sili ya mafuta ya Toyota', '90311-62001', 'Toyota Type T oil seal shown in its labelled packaging.', 'Sili ya mafuta ya Toyota aina T kwenye kifurushi chenye lebo.'],
  ['seals', [22], 'Toyota oil seal', 'Sili ya mafuta ya Toyota', '90310-35010', 'Toyota Type T oil seal shown in its labelled packaging.', 'Sili ya mafuta ya Toyota aina T kwenye kifurushi chenye lebo.'],
  ['seals', [23], 'Toyota oil seal', 'Sili ya mafuta ya Toyota', '90310-35001', 'Toyota Type T oil seal shown in its labelled packaging.', 'Sili ya mafuta ya Toyota aina T kwenye kifurushi chenye lebo.'],
  ['flanges', [24], 'Toyota Land Cruiser flange', 'Flanji ya Toyota Land Cruiser', '', 'Flange with a splined centre. Send your vehicle model and chassis number so the shop can confirm fit.', 'Flanji yenye meno katikati. Tuma modeli na namba ya chasi ili duka lithibitishe kama inafaa gari lako.'],
  ['brakes', [26], 'Toyota front brake disc', 'Diski ya breki ya mbele ya Toyota', '43512-60141', 'Ventilated front brake disc shown with its labelled packaging.', 'Diski ya breki ya mbele yenye nafasi za kupitisha hewa, pamoja na boksi lenye lebo.'],
  ['engine', [27], 'IZUMI 4D33 cylinder liner set', 'Seti ya liner za silinda za IZUMI 4D33', 'ME013333', 'The package is labelled for the 4D33 engine and contains four liners per set.', 'Lebo inaonyesha seti ya liner nne kwa injini ya 4D33.'],
  ['drivetrain', [28], 'Stub axle', 'Spindeli ya ekseli', '', 'Stub axle with a threaded end and a mounting flange.', 'Spindeli ya ekseli yenye ncha ya uzi na flanji ya kufungia.'],
  ['steering', [29], 'Power steering pump', 'Pampu ya usukani wa majimaji', '', 'Hydraulic steering pump with a pulley and fluid reservoir.', 'Pampu ya usukani wa majimaji yenye puli na hifadhi ya mafuta.'],
  ['steering', [30], 'Steering damper', 'Damper ya usukani', '', 'Steering damper shown alongside its packaging.', 'Damper ya usukani pamoja na kifurushi chake.'],
  ['seals', [32], 'Nissan crankshaft oil seal', 'Sili ya mafuta ya crankshaft ya Nissan', '12279-43G05', 'Crankshaft oil seal shown with its mounting housing.', 'Sili ya mafuta ya crankshaft iliyoonyeshwa pamoja na nyumba yake ya kufungia.'],
  ['drivetrain', [33], 'CV drive shaft', 'Shafuti ya kuendesha gurudumu (CV)', '', 'CV drive shaft with inner and outer joints. Ask the shop to confirm the side and vehicle fit.', 'Shafuti yenye viungio vya CV vya ndani na nje. Thibitisha dukani upande na ulinganifu wake.'],
  ['suspension', [34], 'Toyota Hilux Revo shock absorbers', 'Shock absorber za Toyota Hilux Revo', '', 'Shock absorbers for Toyota Hilux Revo. Ask the shop to confirm fit for your model year.', 'Shock absorber za Toyota Hilux Revo. Thibitisha dukani kama zinafaa mwaka wa gari lako.']
];

const catalog = document.querySelector('#categories');
const controls = document.createElement('div');
controls.className = 'category-controls';
const results = document.createElement('section');
results.className = 'category-results';
results.id = 'category-results';
results.setAttribute('aria-labelledby', 'category-title');
catalog.append(controls, results);

let language = 'en';
let selectedCategory = null;

function photo(id, name) {
  return `<span class="product-image"><img src="assets/part-${id}.jpg" alt="${name}" loading="lazy" width="400" height="205"></span>`;
}

function renderPart(part, copy, openParts) {
  const [, images, enName, swName, number, enDescription, swDescription, price, enFitment, swFitment] = part;
  const name = language === 'en' ? enName : swName;
  const description = language === 'en' ? enDescription : swDescription;
  const reference = number ? `${name} (${number})` : name;
  const fitment = language === 'en' ? enFitment : swFitment;
  const inquiryReference = fitment ? `${reference} [${fitment}]` : reference;
  const message = language === 'en'
    ? `Hello SAMIDOM, can you confirm fit, price, and availability for ${inquiryReference}?`
    : `Habari SAMIDOM, naomba kuthibitisha ulinganifu, bei na upatikanaji wa ${inquiryReference}.`;
  const priceText = price == null ? '' : new Intl.NumberFormat(language === 'en' ? 'en-TZ' : 'sw-TZ', {
    style: 'currency', currency: 'TZS', currencyDisplay: 'code', maximumFractionDigits: 0
  }).format(price);
  const photoLinks = images.map((id, index) => {
    const label = images.length === 1 ? copy.fullPhoto : `${copy.fullPhoto} ${index + 1}`;
    return `<a href="assets/part-${id}.jpg" target="_blank" rel="noopener">
      ${index > 0 ? photo(id, '') : ''}<span>${label}</span>
    </a>`;
  }).join('');
  return `<details class="product" data-part="${images[0]}" ${openParts.has(String(images[0])) ? 'open' : ''}>
    <summary>${photo(images[0], '')}<span class="product-title">${reference}</span></summary>
    <div class="product-content">
      <p>${description}</p>
      ${number ? `<p>${copy.number} <span class="part-number">${number}</span></p>` : ''}
      ${priceText ? `<p><strong>${priceText}</strong></p>` : ''}
      <p class="availability">${copy.availability}</p>
      <div class="product-photos">${photoLinks}</div>
      <a class="button primary" href="https://wa.me/255787804365?text=${encodeURIComponent(message)}">${priceText ? copy.check : copy.ask}</a>
    </div>
  </details>`;
}

function renderCatalog(preserveOpen = false) {
  const copy = language === 'en' ? english : swahili;
  const label = language === 'en' ? 1 : 2;
  const openParts = new Set(preserveOpen
    ? Array.from(results.querySelectorAll('details[open]'), element => element.dataset.part)
    : []);
  Array.from(controls.children).forEach((button, index) => {
    const category = categories[index];
    const selected = category[0] === selectedCategory;
    button.setAttribute('aria-expanded', String(selected));
    button.replaceChildren(category[label]);
    const icon = document.createElement('span');
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = selected ? '−' : '+';
    button.append(icon);
  });
  const active = categories.find(category => category[0] === selectedCategory);
  results.hidden = !active;
  results.innerHTML = active
    ? `<h3 id="category-title" tabindex="-1">${active[label]}</h3><div class="products">${parts
        .filter(part => part[0] === selectedCategory)
        .map(part => renderPart(part, copy, openParts))
        .join('')}</div>`
    : '';
}

for (const [id] of categories) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'category';
  button.setAttribute('aria-controls', results.id);
  button.addEventListener('click', () => {
    selectedCategory = selectedCategory === id ? null : id;
    renderCatalog();
    results.querySelector('h3')?.focus();
  });
  controls.append(button);
}

for (const button of document.querySelectorAll('[data-lang]')) {
  button.addEventListener('click', () => {
    language = button.dataset.lang;
    const copy = language === 'en' ? english : swahili;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-copy]').forEach(element => {
      element.textContent = copy[element.dataset.copy];
    });
    document.querySelectorAll('[data-alt]').forEach(element => {
      element.alt = copy[element.dataset.alt];
    });
    document.querySelectorAll('[data-lang]').forEach(option => {
      option.setAttribute('aria-pressed', String(option === button));
    });
    renderCatalog(true);
  });
}

renderCatalog();
