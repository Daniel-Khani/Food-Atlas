const foodData = {
  Iran: [
    ["Ghormeh Sabzi", "Main Course", "A beloved Persian herb stew with kidney beans, dried lime, and tender meat."],
    ["Fesenjan", "Main Course", "A rich sweet-and-sour stew made with walnuts and pomegranate molasses."],
    ["Chelo Kebab", "Main Course", "Grilled kebab served with saffron rice, grilled tomatoes, and butter."],
    ["Tahchin", "Main Course", "Golden saffron rice cake layered with chicken and yogurt."],
    ["Zereshk Polo", "Main Course", "Fragrant saffron rice topped with tart barberries, often served with chicken."],
    ["Dizi", "Traditional", "A hearty slow-cooked lamb, chickpea, and potato stew."],
    ["Gheimeh", "Main Course", "A tomato-based split-pea stew traditionally served with crispy potatoes."],
    ["Baghali Polo", "Main Course", "Dill and broad bean rice, commonly paired with tender lamb."],
    ["Ash Reshteh", "Soup", "A thick noodle, bean, and herb soup topped with kashk and fried onions."],
    ["Kashk-e Bademjan", "Appetizer", "Smoky mashed eggplant topped with whey, mint, and fried onions."],
    ["Mirza Ghasemi", "Appetizer", "Smoky eggplant with tomatoes, garlic, and eggs from northern Iran."],
    ["Joojeh Kebab", "Grill", "Juicy chicken pieces marinated with saffron, lemon, and yogurt."]
  ],

  Italy: [
    ["Margherita Pizza", "Main Course", "Classic Neapolitan pizza with tomato, mozzarella, basil, and olive oil."],
    ["Carbonara", "Pasta", "Roman pasta with eggs, pecorino cheese, black pepper, and guanciale."],
    ["Lasagna", "Pasta", "Layers of pasta, rich meat sauce, béchamel, and melted cheese."],
    ["Risotto alla Milanese", "Rice", "Creamy saffron risotto from Milan."],
    ["Tagliatelle al Ragù", "Pasta", "Fresh ribbon pasta served with slow-cooked meat sauce."],
    ["Gnocchi", "Pasta", "Soft potato dumplings served with a variety of Italian sauces."],
    ["Ravioli", "Pasta", "Pasta parcels filled with cheese, meat, or vegetables."],
    ["Arancini", "Street Food", "Crispy fried rice balls, often filled with ragù and mozzarella."],
    ["Bruschetta", "Appetizer", "Toasted bread topped with tomatoes, garlic, basil, and olive oil."],
    ["Caprese Salad", "Salad", "Fresh mozzarella, ripe tomatoes, basil, and olive oil."],
    ["Tiramisu", "Dessert", "Coffee-soaked ladyfingers layered with mascarpone cream and cocoa."],
    ["Cannoli", "Dessert", "Crisp pastry shells filled with sweet ricotta cream."]
  ],

  Japan: [
    ["Sushi", "Main Course", "Vinegared rice paired with seafood, vegetables, or other toppings."],
    ["Ramen", "Noodles", "Wheat noodles served in a flavorful broth with toppings."],
    ["Tonkatsu", "Main Course", "Crispy breaded pork cutlet served with cabbage and sauce."],
    ["Tempura", "Appetizer", "Seafood and vegetables coated in a light batter and fried."],
    ["Okonomiyaki", "Street Food", "Savory Japanese pancake with cabbage and a variety of toppings."],
    ["Takoyaki", "Street Food", "Bite-sized batter balls filled with octopus and savory toppings."],
    ["Udon", "Noodles", "Thick wheat noodles served in broth or with dipping sauce."],
    ["Soba", "Noodles", "Nutty buckwheat noodles served hot or cold."],
    ["Onigiri", "Snack", "Seasoned rice balls commonly wrapped in nori."],
    ["Yakitori", "Grill", "Charcoal-grilled chicken skewers brushed with sauce or salt."],
    ["Katsu Curry", "Main Course", "Japanese curry and rice served with a crispy cutlet."],
    ["Mochi", "Dessert", "Chewy rice cakes that can be filled with sweet bean paste or ice cream."]
  ],

  Mexico: [
    ["Tacos al Pastor", "Street Food", "Marinated pork tacos with pineapple, onion, and cilantro."],
    ["Guacamole", "Appetizer", "Creamy avocado dip with lime, onion, cilantro, and chili."],
    ["Enchiladas", "Main Course", "Tortillas filled with meat or cheese and covered in chili sauce."],
    ["Chilaquiles", "Breakfast", "Crispy tortilla pieces simmered in salsa and topped with cheese."],
    ["Tamales", "Traditional", "Corn dough filled with savory or sweet ingredients and steamed in husks."],
    ["Pozole", "Soup", "A traditional hominy soup with meat, garnishes, and chili."],
    ["Quesadillas", "Street Food", "Tortillas folded around melted cheese and optional fillings."],
    ["Elote", "Street Food", "Grilled corn topped with mayonnaise, cheese, chili, and lime."],
    ["Mole Poblano", "Main Course", "Complex sauce featuring chilies, spices, and a touch of chocolate."],
    ["Chiles Rellenos", "Main Course", "Poblano peppers stuffed with cheese or meat and cooked in batter or sauce."],
    ["Ceviche", "Seafood", "Seafood cured with citrus and mixed with vegetables and herbs."],
    ["Churros", "Dessert", "Fried dough pastries rolled in cinnamon sugar, often served with chocolate."]
  ],

  India: [
    ["Butter Chicken", "Main Course", "Tender chicken in a creamy tomato sauce with warming spices."],
    ["Chicken Biryani", "Rice", "Fragrant layered rice cooked with chicken, herbs, and spices."],
    ["Masala Dosa", "Street Food", "Crispy fermented rice crepe filled with spiced potato."],
    ["Palak Paneer", "Vegetarian", "Indian cheese cubes in a creamy spinach gravy."],
    ["Chole Bhature", "Street Food", "Spiced chickpea curry served with fluffy fried bread."],
    ["Rogan Josh", "Main Course", "Aromatic Kashmiri lamb curry with a rich, spiced gravy."],
    ["Dal Makhani", "Vegetarian", "Slow-cooked black lentils with butter and cream."],
    ["Samosa", "Snack", "Crispy pastry filled with spiced potatoes and peas."],
    ["Tandoori Chicken", "Grill", "Yogurt-marinated chicken roasted with fragrant spices."],
    ["Pani Puri", "Street Food", "Crisp hollow shells filled with potatoes, chickpeas, and tangy water."],
    ["Idli", "Breakfast", "Soft steamed rice and lentil cakes served with chutney."],
    ["Gulab Jamun", "Dessert", "Soft milk-based dumplings soaked in fragrant sugar syrup."]
  ],

  France: [
    ["Croissant", "Breakfast", "Flaky, buttery pastry with delicate layers."],
    ["Ratatouille", "Vegetarian", "A Provençal vegetable dish featuring tomatoes, zucchini, and eggplant."],
    ["Coq au Vin", "Main Course", "Chicken braised slowly with wine, mushrooms, and aromatics."],
    ["Beef Bourguignon", "Main Course", "Tender beef braised in red wine with vegetables."],
    ["French Onion Soup", "Soup", "Caramelized onion soup topped with bread and melted cheese."],
    ["Quiche Lorraine", "Brunch", "Savory pastry filled with eggs, cream, and bacon."],
    ["Steak Frites", "Main Course", "Steak served with golden French fries."],
    ["Crêpes", "Street Food", "Thin pancakes served with sweet or savory fillings."],
    ["Escargots", "Appetizer", "Snails traditionally prepared with garlic and parsley butter."],
    ["Bouillabaisse", "Seafood", "A Provençal fish stew with herbs and a rich broth."],
    ["Crème Brûlée", "Dessert", "Silky vanilla custard finished with a crisp caramelized sugar top."],
    ["Macarons", "Dessert", "Colorful almond meringue cookies with a delicate filling."]
  ],

  Turkey: [
    ["Adana Kebab", "Grill", "Spicy minced lamb grilled on wide metal skewers."],
    ["Iskender Kebab", "Main Course", "Sliced döner over bread with tomato sauce, yogurt, and melted butter."],
    ["Lahmacun", "Street Food", "Thin, crispy flatbread topped with seasoned minced meat."],
    ["Pide", "Bakery", "Boat-shaped flatbread filled with cheese, meat, or vegetables."],
    ["Manti", "Main Course", "Small dumplings served with yogurt and a spiced butter sauce."],
    ["Menemen", "Breakfast", "Eggs gently cooked with tomatoes, peppers, and spices."],
    ["Mercimek Çorbası", "Soup", "Comforting red lentil soup with lemon."],
    ["Dolma", "Traditional", "Vegetables or grape leaves filled with seasoned rice or meat."],
    ["Börek", "Bakery", "Layers of flaky pastry filled with cheese, spinach, or meat."],
    ["Köfte", "Grill", "Seasoned meatballs or patties served with bread or rice."],
    ["Baklava", "Dessert", "Thin pastry layers filled with nuts and sweet syrup."],
    ["Künefe", "Dessert", "Crispy shredded pastry with melted cheese and sweet syrup."]
  ],

  "South Korea": [
    ["Bibimbap", "Rice", "Rice topped with vegetables, meat, egg, and gochujang."],
    ["Kimchi", "Side Dish", "Fermented vegetables, commonly napa cabbage, seasoned with chili and garlic."],
    ["Bulgogi", "Main Course", "Thinly sliced marinated beef grilled or stir-fried."],
    ["Korean Fried Chicken", "Street Food", "Extra-crispy chicken coated in savory, spicy, or sweet sauce."],
    ["Tteokbokki", "Street Food", "Chewy rice cakes simmered in a spicy-sweet chili sauce."],
    ["Japchae", "Noodles", "Glass noodles stir-fried with vegetables and often beef."],
    ["Kimchi Jjigae", "Soup", "A warming stew made with kimchi, tofu, and often pork."],
    ["Samgyeopsal", "Grill", "Grilled pork belly served with lettuce, garlic, and dipping sauces."],
    ["Kimbap", "Snack", "Rice and fillings rolled in seaweed and sliced into bite-sized pieces."],
    ["Haemul Pajeon", "Appetizer", "Savory scallion pancake filled with seafood."],
    ["Jajangmyeon", "Noodles", "Noodles topped with a thick black bean sauce."],
    ["Hotteok", "Dessert", "Pan-fried pancakes filled with a sweet cinnamon and nut mixture."]
  ]
};

const countryInfo = {
  iran: {
    key: "Iran",
    name: "Iran",
    flag: "🇮🇷",
    description: "Fragrant herbs, saffron rice, slow-cooked stews, and centuries of Persian hospitality."
  },
  italy: {
    key: "Italy",
    name: "Italy",
    flag: "🇮🇹",
    description: "Regional recipes, fresh pasta, bright tomatoes, and timeless Italian comfort food."
  },
  japan: {
    key: "Japan",
    name: "Japan",
    flag: "🇯🇵",
    description: "Carefully balanced flavors, seasonal ingredients, noodles, rice, and delicate sweets."
  },
  mexico: {
    key: "Mexico",
    name: "Mexico",
    flag: "🇲🇽",
    description: "Bold chilies, corn, fresh herbs, lively street food, and rich traditional sauces."
  },
  india: {
    key: "India",
    name: "India",
    flag: "🇮🇳",
    description: "A colorful world of spices, regional curries, rice dishes, snacks, and desserts."
  },
  france: {
    key: "France",
    name: "France",
    flag: "🇫🇷",
    description: "Classic pastries, rustic regional cooking, rich sauces, and elegant desserts."
  },
  turkey: {
    key: "Turkey",
    name: "Turkey",
    flag: "🇹🇷",
    description: "A meeting of culinary traditions, from grilled kebabs to flaky pastries and sweets."
  },
  korea: {
    key: "South Korea",
    name: "South Korea",
    flag: "🇰🇷",
    description: "Fermented flavors, sizzling grills, comforting stews, noodles, and popular street food."
  }
};

const countrySelect = document.querySelector("#countrySelect");
const results = document.querySelector("#results");
const emptyState = document.querySelector("#emptyState");

let selectedSlug = "";
let searchQuery = "";
let renderVersion = 0;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

// Add only direct image sources that have been manually checked.
const verifiedFoodImages = {
  menemen:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Sahanda_menemen.jpg?width=800"
};

const foodImageCache = new Map();

function getFoodPlaceholder(name) {
  const safeName = escapeHTML(name);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg"
      width="800" height="600" viewBox="0 0 800 600">
      <rect width="800" height="600" fill="#f5e9d8"/>
      <circle cx="400" cy="250" r="135" fill="#fffaf3"/>
      <circle cx="400" cy="250" r="105" fill="#e8d1b0"/>
      <text x="400" y="445"
        font-family="Arial,sans-serif"
        font-size="30"
        font-weight="700"
        text-anchor="middle"
        fill="#743d2b">${safeName}</text>
      <text x="400" y="485"
        font-family="Arial,sans-serif"
        font-size="18"
        text-anchor="middle"
        fill="#8a6a55">Verified photo unavailable</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

async function findFoodImage(name, country) {
  const normalizedName = normalizeText(name);
  const cacheKey = `${country}:${normalizedName}`;

  if (foodImageCache.has(cacheKey)) {
    return foodImageCache.get(cacheKey);
  }

  const request = (async () => {
    // 1. Use a manually selected image if one exists.
    if (verifiedFoodImages[normalizedName]) {
      return verifiedFoodImages[normalizedName];
    }

    // 2. Try TheMealDB, accepting only an exact dish-name match.
    try {
      const mealResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(name)}`
      );

      if (mealResponse.ok) {
        const mealData = await mealResponse.json();
        const meals = Array.isArray(mealData.meals)
          ? mealData.meals
          : [];

        const exactMeal = meals.find(meal =>
          normalizeText(meal.strMeal) === normalizedName &&
          /^https?:\/\//i.test(meal.strMealThumb || "")
        );

        if (exactMeal) {
          return exactMeal.strMealThumb;
        }
      }
    } catch (error) {
      console.warn(`MealDB lookup failed for ${name}:`, error);
    }

    // 3. Search Wikimedia Commons for a likely matching dish photograph.
    const dishWords = normalizedName
      .split(/\s+/)
      .filter(word => word.length > 2);

    if (!dishWords.length) {
      return null;
    }

    const params = new URLSearchParams({
      action: "query",
      generator: "search",
      gsrsearch: `"${name}" (food OR dish OR cuisine OR recipe)`,
      gsrnamespace: "6",
      gsrlimit: "40",
      prop: "imageinfo",
      iiprop: "url|mime|extmetadata",
      iiurlwidth: "800",
      format: "json",
      origin: "*"
    });

    try {
      const response = await fetch(
        `https://commons.wikimedia.org/w/api.php?${params}`
      );

      if (!response.ok) {
        throw new Error(`Wikimedia error: ${response.status}`);
      }

      const data = await response.json();
      const pages = Object.values(data.query?.pages || {});

      const blockedTitle =
        /\b(landscape|cityscape|street|building|church|mosque|mountain|river|map|logo|icon|flag|diagram|illustration|poster|menu|book cover|panorama|skyline)\b/i;

      const candidates = pages.map(page => {
        const title = (page.title || "").replace(/^File:/i, "");
        const normalizedTitle = normalizeText(title);
        const info = page.imageinfo?.[0] || {};
        const url = info.thumburl || info.url || "";
        const metadata = info.extmetadata || {};

        const description = normalizeText(
          `${metadata.ImageDescription?.value || ""} ${
            metadata.ObjectName?.value || ""
          }`.replace(/<[^>]*>/g, " ")
        );

        const titleWords = normalizedTitle.split(/\s+/);

        const titleMatches = dishWords.filter(word =>
          titleWords.includes(word)
        ).length;

        const descriptionMatches = dishWords.filter(word =>
          description.includes(word)
        ).length;

        const titleHasAllWords =
          titleMatches === dishWords.length;

        const isPhoto =
          /^image\/(jpeg|png|webp)$/i.test(info.mime || "") ||
          /\.(jpe?g|png|webp)(?:[?#].*)?$/i.test(url);

        let score = titleMatches * 3 + descriptionMatches;

        if (normalizedTitle.includes(normalizedName)) {
          score += 5;
        }

        if (titleHasAllWords) {
          score += 4;
        }

        return {
          title,
          url,
          isPhoto,
          score,
          titleHasAllWords,
          blocked: blockedTitle.test(title)
        };
      });

      const filteredCandidates = candidates
        .filter(item =>
          item.url &&
          item.isPhoto &&
          !item.blocked &&
          item.titleHasAllWords
        )
        .sort((a, b) => b.score - a.score);

      // Prefer a labeled placeholder over an uncertain or unrelated image.
      if (
        !filteredCandidates.length ||
        filteredCandidates[0].score < dishWords.length * 3 + 4
      ) {
        return null;
      }

      return filteredCandidates[0].url;
    } catch (error) {
      console.warn(
        `Could not find a reliable photo for ${name}:`,
        error
      );

      return null;
    }
  })();

  foodImageCache.set(cacheKey, request);

  return request;
}

async function loadFoodImages(version) {
  const images = [
    ...results.querySelectorAll(".food-photo img[data-dish]")
  ];

  await Promise.all(images.map(async img => {
    const dishName = img.dataset.dish;
    const imageUrl = await findFoodImage(dishName, selectedSlug);

    // Ignore results belonging to an older render.
    if (version !== renderVersion || !img.isConnected) {
      return;
    }

    if (!imageUrl) {
      img.src = getFoodPlaceholder(dishName);
      return;
    }

    img.onerror = () => {
      img.onerror = null;
      img.src = getFoodPlaceholder(dishName);
    };

    img.src = imageUrl;
  }));
}

function renderFoods() {
  renderVersion++;

  const currentVersion = renderVersion;
  const info = countryInfo[selectedSlug];

  if (!info) {
    if (results) {
      results.hidden = true;
      results.innerHTML = "";
    }

    if (emptyState) {
      emptyState.hidden = false;
    }

    return;
  }

  if (emptyState) {
    emptyState.hidden = true;
  }

  if (!results) {
    return;
  }

  results.hidden = false;

  const query = searchQuery.trim().toLowerCase();
  const allFoods = foodData[info.key] || [];

  const foods = allFoods.filter(([name, category, description]) =>
    `${name} ${category} ${description}`
      .toLowerCase()
      .includes(query)
  );

  results.innerHTML = `
    <div class="country-header">
      <div class="country-flag">${info.flag}</div>

      <div class="country-copy">
        <span class="country-kicker">NOW EXPLORING</span>
        <h3>${escapeHTML(info.name)} Cuisine</h3>
        <p>${escapeHTML(info.description)}</p>
      </div>

      <div class="dish-count">
        <strong>${foods.length}</strong>
        <small>${foods.length === 1 ? "dish found" : "dishes found"}</small>
      </div>
    </div>

    <div class="food-heading">
      <div>
        <h3>Signature dishes</h3>
        <p>Traditional favorites and local treasures</p>
      </div>

      <label class="search-box">
        <span>⌕</span>
        <input
          id="foodSearch"
          type="search"
          placeholder="Search dishes..."
          value="${escapeHTML(searchQuery)}"
          aria-label="Search dishes">
      </label>
    </div>

    <div class="food-list">
      ${
        foods.length
          ? foods.map(([name, category, description], index) => `
            <article class="food-card">
              <div class="food-photo">
                <img
                  src="${getFoodPlaceholder(name)}"
                  data-dish="${escapeHTML(name)}"
                  alt="${escapeHTML(name)}"
                  loading="lazy">

                <span class="food-index">
                  ${String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div class="food-info">
                <span class="food-tag">
                  <span></span>${escapeHTML(category)}
                </span>

                <h4>${escapeHTML(name)}</h4>
                <p>${escapeHTML(description)}</p>

                <div class="food-origin">
                  <span>✦</span> A taste of ${escapeHTML(info.name)}
                </div>
              </div>
            </article>
          `).join("")
          : `<div class="no-results">No dishes match your search. Try another word.</div>`
      }
    </div>

    <p class="image-note">
      Images are loaded from online food-image sources. If a reliable match
      cannot be found, a labeled placeholder is shown instead of an unrelated photo.
    </p>
  `;

  loadFoodImages(currentVersion);

  const input = results.querySelector("#foodSearch");

  if (input) {
    input.addEventListener("input", event => {
      const cursor = event.target.selectionStart;

      searchQuery = event.target.value;

      renderFoods();

      const newInput = results.querySelector("#foodSearch");

      if (newInput) {
        newInput.focus();

        try {
          newInput.setSelectionRange(cursor, cursor);
        } catch (_) {}
      }
    });
  }
}

function selectCountry(slug) {
  if (!countryInfo[slug]) {
    return;
  }

  selectedSlug = slug;
  searchQuery = "";

  if (countrySelect) {
    countrySelect.value = slug;
  }

  renderFoods();

  const explorer = document.querySelector("#explorer");

  if (explorer) {
    explorer.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

if (countrySelect) {
  countrySelect.addEventListener("change", event => {
    selectedSlug = event.target.value;
    searchQuery = "";
    renderFoods();
  });
}

document.querySelectorAll("[data-country]").forEach(button => {
  button.addEventListener("click", () => {
    selectCountry(button.dataset.country);
  });
});

renderFoods();