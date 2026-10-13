import waffles from "@/assets/waffles.jpg";
import avocado from "@/assets/avocado-toast.jpg";
import tuna from "@/assets/tuna-sandwich.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import pie from "@/assets/key-lime-pie.jpg";
import bagel from "@/assets/bagel-panini.jpg";

export const HIGHLIGHTS = [
  {
    name: "Artisan Coffee & Cappuccino",
    tag: "Coffee & Tea",
    note: "Velvety micro-foam, single-origin espresso and floral tea cups.",
    img: cappuccino,
    alt: "Artisan cappuccino in a vintage cup with latte art",
  },
  {
    name: "Waffles of the Day",
    tag: "Brunch",
    note: "Golden crisp daily waffles with seasonal fresh berries & dust of powdered sugar.",
    img: waffles,
    alt: "Homemade waffle topped with berries and pure maple syrup",
  },
  {
    name: "Artisan Avocado Toast",
    tag: "Light Bites",
    note: "Smashed ripe avocado on artisan sourdough with microgreens and seasoning.",
    img: avocado,
    alt: "Fresh avocado toast on crusty country sourdough",
  },
  {
    name: "Pressed Panini & Bagel Lox",
    tag: "Savory",
    note: "Hot pressed deli paninis and toasted bagels layered with smoked lox & cream cheese.",
    img: bagel,
    alt: "Warm toasted bagel with lox alongside a crisp panini",
  },
  {
    name: "Key Lime Pie & Bakery",
    tag: "Desserts",
    note: "Authentic Florida Key lime pie with graham cracker crust and dollop of whipped cream.",
    img: pie,
    alt: "Slice of tart and sweet Florida Key lime pie",
  },
  {
    name: "Fresh Tuna & Deli Sandwiches",
    tag: "Healthy Bites",
    note: "Made-to-order light lunches on crusty sourdough or fresh brioche.",
    img: tuna,
    alt: "House-made tuna salad sandwich on artisanal bread",
  },
];

export const MENU_GROUPS = [
  {
    title: "Artisan Coffee & Tea",
    icon: "☕",
    items: [
      { name: "Single-Origin Espresso & Cappuccino", desc: "Crafted on our manual espresso bar" },
      { name: "Organic Specialty Teas", desc: "Loose-leaf floral, herbal, and iced tea blends" },
      { name: "Artisanal Kombucha", desc: "Locally brewed, crisp and effervescent" },
      { name: "Iced Lattes & Cold Brew", desc: "Smooth, slow-steeped with house syrups" },
    ],
  },
  {
    title: "Healthy Light Food & Brunch",
    icon: "🥑",
    items: [
      { name: "Waffles of the Day", desc: "Golden Belgian waffle with seasonal berries" },
      { name: "Artisan Avocado Toast", desc: "Seeded sourdough, radish & microgreens" },
      { name: "Toasted Bagel with Lox", desc: "Smoked salmon, capers, pickled red onions" },
      { name: "Warm Pressed Paninis", desc: "Melted artisan cheeses, herbs & fresh meats" },
    ],
  },
  {
    title: "Homemade Sweets & Desserts",
    icon: "🍰",
    items: [
      { name: "Florida Key Lime Pie", desc: "Tart custard on buttery graham crust" },
      { name: "Classic NY Style Cheesecake", desc: "Rich and creamy with berry coulis" },
      { name: "Fresh Baked Morning Pastries", desc: "Croissants, muffins & sweet treats" },
    ],
  },
  {
    title: "The Art & Vintage Gallery",
    icon: "🎨",
    items: [
      { name: "Curated Local Paintings & Prints", desc: "Rotating displays from South Florida artists" },
      { name: "Vintage Collectibles & Antiques", desc: "Unique curated items throughout the café" },
      { name: "Handmade Pottery & Tableware", desc: "Browse during your coffee or take one home" },
    ],
  },
];
