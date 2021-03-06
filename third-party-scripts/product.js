const DISHES_ON_PAGE = 15
var currentPage = 1

dishes_list = {
    1: { "title": "Борщ", "cost": 49.99, "url": "/public/tomato_soup.png", "tags":["first course"] },
    2: { "title": "Суп", "cost": 14.99, "url": "/public/soup.png", "tags": ["first course"] },
    3: { "title": "Харчо", "cost": 99.99, "url": "/public/harcho.png", "tags":["first course"] },
    4: { "title": "Солянка", "cost": 124.99, "url": "/public/solianka.png", "tags":["first course"] },
    5: { "title": "Рассольник", "cost": 30.00, "url": "/public/rassolnik.png", "tags":["first course"] },
    6: { "title": "Сухари", "cost": 69.99, "url": "/public/suhari.png", "tags":["snacks"]},
    7: { "title": "Картошка по селянски", "cost": 79.99, "url": "/public/potato_1.png", "tags":["snacks"]},
    8: { "title": "Картошка жареная", "cost": 19.99, "url": "/public/potato_2.png", "tags":["snacks"]},
    9: { "title": "Сосики охотничьи", "cost": 24.99, "url": "/public/sousages.png", "tags":["snacks"]},
    10: { "title": "Лаваш", "cost": 49.99, "url": "/public/lavash.png", "tags":["snacks"]},
    11: { "title": "Борщ", "cost": 49.99, "url": "/public/tomato_soup.png", "tags":["first course"] },
    12: { "title": "Суп", "cost": 14.99, "url": "/public/soup.png", "tags": ["first course"] },
    13: { "title": "Харчо", "cost": 99.99, "url": "/public/harcho.png", "tags":["first course"] },
    14: { "title": "Солянка", "cost": 124.99, "url": "/public/solianka.png", "tags":["first course"] },
    15: { "title": "Рассольник", "cost": 30.00, "url": "/public/rassolnik.png", "tags":["first course"] },
    16: { "title": "Сухари", "cost": 69.99, "url": "/public/suhari.png", "tags":["snacks"]},
    17: { "title": "Картошка по селянски", "cost": 79.99, "url": "/public/potato_1.png", "tags":["snacks"]},
    18: { "title": "Картошка жареная", "cost": 19.99, "url": "/public/potato_2.png", "tags":["snacks"]},
    19: { "title": "Сосики охотничьи", "cost": 24.99, "url": "/public/sousages.png", "tags":["snacks"]},
    20: { "title": "Лаваш", "cost": 49.99, "url": "/public/lavash.png", "tags":["snacks"]}
}

function updatePagesBar()
{
    console.log("hello")
    pages_bar = document.getElementById("pages-bar");
    pages_bar.innerHTML = "";

    pagesNumber = Math.ceil(Object.keys(dishes_list).length / DISHES_ON_PAGE);

    for(var i = 1; i <= pagesNumber; i++)
    {
        mod = "";
        if(currentPage == i)
        {
            mod += "active-pagination";
        }

        pages_bar.innerHTML += 
        `
        <a href="#" onclick="changePage(${i})" class="item-pagination flex-c-m trans-0-4 ${mod}">${i}</a>
        `
    }
}

function updateDishes(page)
{
    dishes_list_html = document.getElementById("dishes-list")
    dishes_list_html.innerHTML = ""
    startDish = (page - 1) * DISHES_ON_PAGE;
    keys = Object.keys(dishes_list)

    for(var i = 0; i < DISHES_ON_PAGE && i + startDish < keys.length; i++)
    {
        dish = dishes_list[keys[i + startDish]]
        dishes_list_html.innerHTML += 
        `
        <div class="col-sm-12 col-md-6 col-lg-4 p-b-50">
            <!-- Block2 -->
            <div class="block2">
                <div class="block2-img wrap-pic-w of-hidden pos-relative">
                    <img src="http://api.torianik.online:5000${dish.url}" alt="IMG-PRODUCT">

                    <div class="block2-overlay trans-0-4">
                        <a href="#" class="block2-btn-addwishlist hov-pointer trans-0-4">
                            <i class="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                            <i class="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                        </a>

                        <div class="block2-btn-addcart w-size1 trans-0-4">
                            <!-- Button -->
                            <button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                <div class="block2-txt p-t-20">
                    <a href="product-detail.html" class="block2-name dis-block s-text3 p-b-5">
                        ${dish.title}
                    </a>

                    <span class="block2-price m-text6 p-r-5">
                        ₴${dish.cost}
                    </span>
                </div>
            </div>
        </div>
        `
    }
}

function changePage(newPage)
{
    currentPage = newPage;
    updatePagesBar();
    updateDishes(currentPage);
}

window.onload = function()
{
    updatePagesBar();
    updateDishes(currentPage);
}
