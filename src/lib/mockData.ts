import type { Product } from './types';

const strainNames = [
  'Purple Haze', 'OG Kush', 'Northern Lights', 'Sour Diesel', 'Blue Dream',
  'Jack Herer', 'Granddaddy Purple', 'White Widow', 'Girl Scout Cookies', 'Amnesia Haze',
  'Pineapple Express', 'Durban Poison', 'Bubba Kush', 'Super Lemon Haze', 'Wedding Cake',
  'Gelato', 'Gorilla Glue', 'Strawberry Cough', 'AK-47', 'Skywalker OG',
  'Trainwreck', 'Chemdawg', 'LA Confidential', 'Master Kush', 'Critical Mass',
  'Green Crack', 'Tangie', 'Bruce Banner', 'Zkittlez', 'Do-Si-Dos',
  'Sunset Sherbet', 'GSC', 'Lemon Haze', 'Sour Kush', 'Cherry Pie',
  'Slurricane', 'Purple Punch', 'Mimosa', 'Runtz', 'Biscotti',
  'Tropicana Cookies', 'MAC', 'Forbidden Fruit', 'Vanilla Kush', 'Alien OG',
  'Fire OG', 'God Bud', 'Afghan Kush', 'Hindu Kush', 'Mango Kush'
];

const edibleNames = [
  { name: 'Cannabis Gummies', flavor: 'Mixed Berry' },
  { name: 'Cannabis Gummies', flavor: 'Watermelon' },
  { name: 'Cannabis Gummies', flavor: 'Strawberry' },
  { name: 'Cannabis Gummies', flavor: 'Grape' },
  { name: 'Cannabis Gummies', flavor: 'Orange' },
  { name: 'Chocolate Bar', flavor: 'Dark Chocolate' },
  { name: 'Chocolate Bar', flavor: 'Milk Chocolate' },
  { name: 'Chocolate Bar', flavor: 'White Chocolate' },
  { name: 'Chocolate Bar', flavor: 'Caramel' },
  { name: 'Chocolate Bar', flavor: 'Hazelnut' },
  { name: 'CBD Gummies', flavor: 'Tropical' },
  { name: 'CBD Gummies', flavor: 'Cherry' },
  { name: 'CBD Gummies', flavor: 'Lemon' },
  { name: 'Cookies', flavor: 'Double Chocolate' },
  { name: 'Cookies', flavor: 'Oatmeal Raisin' },
  { name: 'Cookies', flavor: 'Peanut Butter' },
  { name: 'Cookies', flavor: 'Snickerdoodle' },
  { name: 'Chews', flavor: 'Mango' },
  { name: 'Chews', flavor: 'Apple' },
  { name: 'Chews', flavor: 'Peach' },
  { name: 'Truffles', flavor: 'Mint Chocolate' },
  { name: 'Truffles', flavor: 'Raspberry' },
  { name: 'Slices', flavor: 'Sour Watermelon' },
  { name: 'Slices', flavor: 'Sweet Mango' },
  { name: 'Popcorn', flavor: 'Caramel' },
  { name: 'Popcorn', flavor: 'Butter' },
  { name: 'Drops', flavor: 'Lemon' },
  { name: 'Drops', flavor: 'Strawberry' },
  { name: 'Cups', flavor: 'Peanut Butter' },
  { name: 'Cups', flavor: 'Almond Butter' },
  { name: 'Rings', flavor: 'Peach' },
  { name: 'Rings', flavor: 'Sour Apple' },
  { name: 'Brownie Bites', flavor: 'Fudge' },
  { name: 'Brownie Bites', flavor: 'Walnut' },
  { name: 'Honey Sticks', flavor: 'Pure' },
  { name: 'Honey Sticks', flavor: 'Lavender' },
  { name: 'Macaroons', flavor: 'Coconut' },
  { name: 'Macaroons', flavor: 'Almond' },
  { name: 'Muffins', flavor: 'Blueberry' },
  { name: 'Muffins', flavor: 'Banana Nut' },
  { name: 'Taffy', flavor: 'Vanilla' },
  { name: 'Taffy', flavor: 'Chocolate' },
  { name: 'Lollipops', flavor: 'Cherry' },
  { name: 'Lollipops', flavor: 'Grape' },
  { name: 'Syrup', flavor: 'Maple' },
  { name: 'Syrup', flavor: 'Berry' },
  { name: 'Cereal Bar', flavor: 'Fruity' },
  { name: 'Cereal Bar', flavor: 'Chocolate' },
  { name: 'Energy Bites', flavor: 'Date & Nut' },
  { name: 'Energy Bites', flavor: 'Coconut' }
];

const paraphernalia = [
  { name: 'Glass Bong', size: '12 inch', price: 450 },
  { name: 'Glass Bong', size: '16 inch', price: 550 },
  { name: 'Glass Bong', size: '8 inch', price: 350 },
  { name: 'Beaker Bong', size: '14 inch', price: 480 },
  { name: 'Percolator Bong', size: '18 inch', price: 650 },
  { name: 'Rolling Papers', type: 'King Size', price: 45 },
  { name: 'Rolling Papers', type: 'Regular', price: 35 },
  { name: 'Rolling Papers', type: 'Hemp', price: 50 },
  { name: 'Rolling Papers', type: 'Ultra Thin', price: 55 },
  { name: 'Blunt Wraps', flavor: 'Natural', price: 40 },
  { name: 'Blunt Wraps', flavor: 'Grape', price: 40 },
  { name: 'Blunt Wraps', flavor: 'Strawberry', price: 40 },
  { name: 'Herb Grinder', chambers: '4 Chamber', price: 250 },
  { name: 'Herb Grinder', chambers: '3 Chamber', price: 200 },
  { name: 'Herb Grinder', chambers: '2 Chamber', price: 150 },
  { name: 'Metal Grinder', chambers: 'Diamond Teeth', price: 280 },
  { name: 'Glass Pipe', type: 'Spoon', price: 180 },
  { name: 'Glass Pipe', type: 'Sherlock', price: 220 },
  { name: 'Glass Pipe', type: 'Steamroller', price: 200 },
  { name: 'Bubbler Pipe', type: 'Mini', price: 240 },
  { name: 'Storage Jar Set', count: '3 Pack', price: 200 },
  { name: 'Storage Jar', size: 'Large', price: 120 },
  { name: 'Storage Jar', size: 'Medium', price: 90 },
  { name: 'Storage Jar', size: 'Small', price: 60 },
  { name: 'Rolling Tray', size: 'Large', price: 150 },
  { name: 'Rolling Tray', size: 'Medium', price: 120 },
  { name: 'Rolling Tray', size: 'Small', price: 90 },
  { name: 'Lighter', type: 'Clipper', price: 35 },
  { name: 'Torch Lighter', type: 'Butane', price: 120 },
  { name: 'Electric Lighter', type: 'USB', price: 150 },
  { name: 'Silicone Bong', type: 'Foldable', price: 320 },
  { name: 'Silicone Pipe', type: 'Portable', price: 180 },
  { name: 'Ash Tray', material: 'Glass', price: 85 },
  { name: 'Ash Tray', material: 'Ceramic', price: 95 },
  { name: 'Filter Tips', type: 'Natural', price: 30 },
  { name: 'Filter Tips', type: 'Pre-rolled', price: 40 },
  { name: 'Rolling Machine', size: '70mm', price: 80 },
  { name: 'Rolling Machine', size: '110mm', price: 100 },
  { name: 'Dab Rig', size: '10 inch', price: 550 },
  { name: 'Dab Rig', size: '8 inch', price: 450 },
  { name: 'Dab Tool', material: 'Titanium', price: 120 },
  { name: 'Dab Tool Set', count: '5 piece', price: 280 },
  { name: 'Carb Cap', type: 'Directional', price: 150 },
  { name: 'Quartz Banger', size: '14mm', price: 180 },
  { name: 'Smell Proof Bag', size: 'Large', price: 220 },
  { name: 'Smell Proof Bag', size: 'Small', price: 140 },
  { name: 'Rolling Box', type: 'Wooden', price: 320 },
  { name: 'Smoking Kit', type: 'Complete Set', price: 480 },
  { name: 'Cleaning Solution', size: '16oz', price: 90 },
  { name: 'Pipe Cleaners', count: '100 pack', price: 50 }
];

const generateProducts = (): Product[] => {
  const products: Product[] = [];
  let idCounter = 1;

  // Generate 50 Flower products
  strainNames.forEach((strain, index) => {
    const strainTypes: ('indica' | 'sativa' | 'hybrid')[] = ['indica', 'sativa', 'hybrid'];
    const strainType = strainTypes[index % 3];
    products.push({
      id: String(idCounter++),
      sku: `FL-${String(index + 1).padStart(3, '0')}`,
      name: strain,
      category: 'flower',
      description: `Premium ${strainType} strain with unique characteristics and exceptional quality. ${
        strainType === 'indica' ? 'Perfect for relaxation and evening use.' :
        strainType === 'sativa' ? 'Energizing and uplifting effects ideal for daytime.' :
        'Balanced hybrid offering the best of both worlds.'
      }`,
      thcPercentage: 15 + Math.floor(Math.random() * 13),
      cbdPercentage: Math.random() * 2,
      price: 180 + Math.floor(Math.random() * 270),
      stockQuantity: 20 + Math.floor(Math.random() * 80),
      imageUrl: '/images/placeholder-product.png',
      imageUrls: ['/images/placeholder-product.png'],
      strainType,
      isActive: true,
      createdAt: new Date().toISOString(),
    });
  });

  // Generate 50 Edible products
  edibleNames.forEach((edible, index) => {
    const thcDoses = [5, 10, 15, 20, 25, 30, 40, 50];
    const thc = thcDoses[index % thcDoses.length];
    const cbdOnly = edible.name.includes('CBD');
    products.push({
      id: String(idCounter++),
      sku: `ED-${String(index + 1).padStart(3, '0')}`,
      name: `${edible.name} - ${edible.flavor}`,
      category: 'edibles',
      description: `Delicious ${edible.flavor.toLowerCase()} flavored ${edible.name.toLowerCase()}. ${
        cbdOnly ? `25mg CBD per serving, perfect for relaxation without the high.` :
        `${thc}mg THC per serving. Start low and go slow for best experience.`
      }`,
      thcPercentage: cbdOnly ? 0 : thc,
      cbdPercentage: cbdOnly ? 25 : 0,
      price: 80 + Math.floor(Math.random() * 170),
      stockQuantity: 30 + Math.floor(Math.random() * 120),
      imageUrl: '/images/placeholder-product.png',
      imageUrls: ['/images/placeholder-product.png'],
      isActive: true,
      createdAt: new Date().toISOString(),
    });
  });

  // Generate 50 Paraphernalia products
  paraphernalia.forEach((item, index) => {
    const desc = item.size || item.type || item.chambers || item.count || item.flavor || item.material || '';
    products.push({
      id: String(idCounter++),
      sku: `PR-${String(index + 1).padStart(3, '0')}`,
      name: `${item.name} - ${desc}`,
      category: 'paraphernalia',
      description: `Premium quality ${item.name.toLowerCase()} ${desc.toLowerCase()}. ${
        item.name.includes('Bong') || item.name.includes('Pipe') ? 'Handcrafted with attention to detail.' :
        item.name.includes('Grinder') ? 'Durable construction with sharp teeth for consistent grinding.' :
        item.name.includes('Paper') || item.name.includes('Wrap') ? 'Slow-burning for a smooth experience.' :
        item.name.includes('Jar') ? 'Airtight seal with UV protection to keep herbs fresh.' :
        'Essential accessory for every enthusiast.'
      }`,
      price: item.price,
      stockQuantity: 20 + Math.floor(Math.random() * 180),
      imageUrl: '/images/placeholder-product.png',
      imageUrls: ['/images/placeholder-product.png'],
      isActive: true,
      createdAt: new Date().toISOString(),
    });
  });

  // Generate 25 Concentrate products
  const concentrateTypes = [
    { name: 'Shatter', desc: 'Glass-like concentrate', thc: 85, price: 350 },
    { name: 'Wax', desc: 'Soft, crumbly texture', thc: 78, price: 320 },
    { name: 'Live Resin', desc: 'Fresh frozen extract', thc: 80, price: 400 },
    { name: 'Rosin', desc: 'Solventless press', thc: 75, price: 450 },
    { name: 'Diamonds', desc: 'THCA crystals', thc: 90, price: 500 },
  ];

  for (let i = 0; i < 25; i++) {
    const concentrate = concentrateTypes[i % concentrateTypes.length];
    const strain = strainNames[i % strainNames.length];
    products.push({
      id: String(idCounter++),
      sku: `CO-${String(i + 1).padStart(3, '0')}`,
      name: `${concentrate.name} - ${strain}`,
      category: 'concentrates',
      description: `${concentrate.desc} extracted from premium ${strain} flowers. Ultra-pure and potent, ideal for experienced users. ${concentrate.thc}% THC content provides powerful effects.`,
      thcPercentage: concentrate.thc + Math.floor(Math.random() * 5),
      cbdPercentage: Math.random() * 2,
      price: concentrate.price + Math.floor(Math.random() * 100),
      stockQuantity: 15 + Math.floor(Math.random() * 35),
      imageUrl: '/images/placeholder-product.png',
      imageUrls: ['/images/placeholder-product.png'],
      isActive: true,
      createdAt: new Date().toISOString(),
    });
  }

  // Generate 25 Vape products
  const vapeTypes = [
    { name: 'Disposable Vape Pen', desc: 'All-in-one convenience', mg: 500, thc: 70, price: 280 },
    { name: '510 Cartridge', desc: 'Universal threading', mg: 1000, thc: 85, price: 350 },
    { name: 'Live Resin Cart', desc: 'Full spectrum', mg: 1000, thc: 90, price: 420 },
    { name: 'CBD Vape', desc: 'Non-psychoactive', mg: 500, thc: 0, price: 250 },
    { name: 'Vape Battery', desc: 'Adjustable voltage', mg: 0, thc: 0, price: 180 },
  ];

  for (let i = 0; i < 25; i++) {
    const vape = vapeTypes[i % vapeTypes.length];
    const isBattery = vape.name.includes('Battery');
    const isCBD = vape.name.includes('CBD');
    const strain = isBattery ? '' : strainNames[i % strainNames.length];
    products.push({
      id: String(idCounter++),
      sku: `VP-${String(i + 1).padStart(3, '0')}`,
      name: isBattery ? vape.name : `${vape.name} - ${strain}`,
      category: 'vapes',
      description: `${vape.desc}. ${
        isBattery ? 'Compatible with 510 thread cartridges. USB-C charging with LED indicator.' :
        isCBD ? `${vape.mg}mg CBD. Perfect for wellness without intoxication.` :
        `${vape.mg}mg THC distillate. ${vape.thc}% potency with natural terpenes for authentic flavor.`
      }`,
      thcPercentage: isBattery ? undefined : vape.thc,
      cbdPercentage: isCBD ? 50 : 0,
      price: vape.price + Math.floor(Math.random() * 80),
      stockQuantity: 40 + Math.floor(Math.random() * 60),
      imageUrl: '/images/placeholder-product.png',
      imageUrls: ['/images/placeholder-product.png'],
      isActive: true,
      createdAt: new Date().toISOString(),
    });
  }

  return products;
};

export const MOCK_PRODUCTS: Product[] = generateProducts();
