// ================= INTRO → MENYU KEÇİDİ =================

document.addEventListener("DOMContentLoaded", function () {

    const intro = document.getElementById("intro");
    const menu = document.getElementById("menu");

    // Əgər ID tapılmazsa səhv atmasın deyə yoxlayırıq
    if (!intro) {
        console.error("ERROR: #intro tapılmadı! HTML-də id='intro' olmalıdır.");
        return;
    }

    if (!menu) {
        console.error("ERROR: #menu tapılmadı! HTML-də id='menu' olmalıdır.");
        return;
    }

    // 1.5 saniyə sonra intro gizlənir, menyu göstərilir
    setTimeout(function () {
        intro.classList.add("hidden");
        menu.classList.add("visible");
    }, 1500);

    // Menyu funksiyalarını işə salırıq
    initMenu();
});


// ================= MENYU DATA (şəkillərlə) =================

const menuItems = [
    {
        cat: "pizza",
        name: "Margherita",
        price: "14 ₼",
        img: "https://images.pexels.com/photos/4109083/pexels-photo-4109083.jpeg",
        desc: "Pomidor sousu, mozzarella, təzə reyhan."
    },
    {
        cat: "pizza",
        name: "Diavola",
        price: "18 ₼",
        img: "https://images.pexels.com/photos/5908240/pexels-photo-5908240.jpeg",
        desc: "Acılı kolbasa, mozzarella, pomidor sousu."
    },

    {
        cat: "pasta",
        name: "Carbonara",
        price: "19 ₼",
        img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
        desc: "Guanciale, yumurta, pecorino romano, qara istiot."
    },
    {
        cat: "pasta",
        name: "Bolognese",
        price: "17 ₼",
        img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
        desc: "Yavaş bişmiş dana qiyməsi, pomidor sousu, parmesan."
    },
    {
        cat: "dessert",
        name: "Tiramisu",
        price: "12 ₼",
        img: "https://images.pexels.com/photos/4109990/pexels-photo-4109990.jpeg",
        desc: "Espresso ilə isladılmış peçenye, mascarpone kremi."
    },
    {
        cat: "dessert",
        name: "Panna Cotta",
        price: "11 ₼",
        img: "https://images.pexels.com/photos/4109992/pexels-photo-4109992.jpeg",
        desc: "Vanilli krema, giləmeyvə sousu."
    },

    {
        cat: "drinks",
        name: "Aperol Spritz",
        price: "15 ₼",
        img: "https://images.pexels.com/photos/3323683/pexels-photo-3323683.jpeg",
        desc: "Aperol, prosecco, soda, portağal."
    },
    {
        cat: "drinks",
        name: "Italian Espresso",
        price: "6 ₼",
        img: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg",
        desc: "Tünd qovrulmuş italyan qəhvəsi."
    }
];



// ================= MENYU FUNKSİYALARI =================

function initMenu() {
    const container = document.getElementById("menu-items");
    if (!container) return;

    // İlk dəfə hamısını göstəririk
    renderMenu("all");

    // Kateqoriya düymələrinə klik hadisəsi
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.addEventListener("click", () => {

            // Aktiv classı silirik
            document
                .querySelectorAll(".category-btn")
                .forEach(b => b.classList.remove("active"));

            // Aktiv olanı əlavə edirik
            btn.classList.add("active");

            // Filter kateqoriyanı götürür
            const cat = btn.dataset.category || "all";

            // Menyunu yenidən çəkirik
            renderMenu(cat);
        });
    });
}



function renderMenu(filter) {
    const container = document.getElementById("menu-items");
    if (!container) return;

    container.innerHTML = "";

    menuItems
        .filter(i => filter === "all" || i.cat === filter)
        .forEach(item => {
            container.innerHTML += `
                <article class="menu-card">
                    <div class="menu-img-wrap">
                        <img src="${item.img}" alt="${item.name}" class="menu-img">
                    </div>

                    <div class="menu-card-body">
                        <div class="menu-card-header">
                            <span class="menu-name">${item.name}</span>
                            <span class="menu-price">${item.price}</span>
                        </div>

                        <div class="menu-category-label">${item.cat.toUpperCase()}</div>
                        <p class="menu-description">${item.desc}</p>
                    </div>
                </article>
            `;
        });
}
