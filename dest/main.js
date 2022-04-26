// Global Variables
let headerSearch = document.querySelector('header .search');
let modalProductImage = document.querySelectorAll('.main360__package .main360__item');
// Page
let productDetailPage = document.querySelector('.prodcutdetailpage');
let homePage = document.querySelector('.homepage');
let productPage = document.querySelector('.productspage');
let registerPage = document.querySelector('.registerpage');
let newsPage = document.querySelector('.newspage');
let storePage = document.querySelector('.storepage');
let servicePage = document.querySelector('.servicespage');
let articlePage = document.querySelector('.articlepage');
// Home
// handleSearchClick
// Header
headerSearch.onclick = (e) => {
    headerSearch.classList.toggle('active');
    let headerOptions = document.querySelector('header .options');
    headerOptions.classList.toggle('active');
    let inputItem = document.querySelector('header .inputPackage .search__info');
    inputItem.onclick = (e) => {
        e.stopPropagation();
    }
}
const handleEarthHome = () => {
    let imgEarth = document.querySelector('.network .image');
    window.addEventListener('mousemove', function (e) {
        let x = (e.clientX / window.innerWidth) * 10;
        imgEarth.style.transform = `rotate(${x}deg)`
    })
}

const handleMobile = () => {
    let moreOptions = document.querySelector('header .more');
    let menuIcon = document.querySelector('header .more__icon');
    let menuMobile = document.querySelector('.menu__mobile');
    moreOptions.onclick = () => {
        menuIcon.classList.toggle('active');
        menuMobile.classList.toggle('active')
    }
    window.addEventListener('resize', () => {

        if (window.innerWidth >= 768) {
            menuIcon.classList.remove('active');
            menuMobile.classList.remove('active');
        }
    })
}

//  Handle Header
const handleHeader = () => {
    let header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= header.clientHeight) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    })
}
// slider Home
function handleSliderHome() {
    let sliderList = document.querySelector('.slider .top');
    var flkty = new Flickity(sliderList, {
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        autoPlay: 2000,
    });
    flkty.on('change', function (index) {
        let currentPage = document.querySelector('.current__number');
        let page = index + 1;
        currentPage.innerText = page.toString().padStart(2, 0);
    });
}

function handleSliderMissionHome() {

    let missionSlide = document.querySelector('.mission .image__package');
    let nextBtn = document.querySelector('.mission .btn.--next');
    let prevBtn = document.querySelector('.mission .btn.--prev');

    var flktyMission = new Flickity(missionSlide, {
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
    });
    if (nextBtn && prevBtn) {
        nextBtn.onclick = (e) => {
            e.preventDefault();
            flktyMission.next();
        }
        prevBtn.onclick = (e) => {
            e.preventDefault();
            flktyMission.previous();
        }
    }
    let textList = document.querySelectorAll('.mission .text__item');
    textList && flktyMission.on('change', function (index) {
        let textActive = document.querySelector('.mission .text__item.active');
        if (textActive) {
            textActive.classList.remove('active');
        }
        textList[index].classList.add('active');
    })
}

function hotProductCarousel() {
    const flickityOptions = {
        contain: true,
        cellAlign: 'center',
        // watchCSS: true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        lazyLoad: true
    }
    let crsl;
    if (window.innerWidth < 768) {
        crsl = $('.hot__products .products__list').flickity({ ...flickityOptions })
    }
    $(window).on("resize", function () {
        if (window.innerWidth >= 768) {
            crsl.flickity('destroy')
        } else {
            crsl = $('.hot__products .products__list').flickity({ ...flickityOptions })
        }
    })
}
// End Slider Home


// Products Page
function handleProductPage() {
    let sliderProductsList = document.querySelector('.products__slider .products__slider-list');
    let sliderProductflkty = new Flickity(sliderProductsList, {
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: 2000,
    });
}

function handleSubProduct() {
    let sliderSubProductsList = document.querySelector('.products__featured .products__sublist.slide');
    let sliderSubProductflkty = new Flickity(sliderSubProductsList, {
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: true,
        pageDots: false,
        percentPosition: true,
        lazyLoad: true,
        groupCells: 3
    });
}

function handleTabsProduct() {
    let optionsList = document.querySelectorAll('.products__featured .tabs__option');
    let pageList = document.querySelectorAll('.products__featured .products__options-page');
    optionsList.length > 0 && optionsList.forEach((item, index) => {
        item.onclick = () => {
            let activeOption = document.querySelector('.tabs__option.active');
            let activePage = document.querySelector('.products__options-page.active');
            if (activeOption && activePage) {
                activeOption.classList.remove('active');
                activePage.classList.remove('active');
                item.classList.add('active');
                pageList[index].classList.add('active');
            }

        }
    })
}

function handleTabs(domElement) {
    let typeList = document.querySelectorAll(domElement);
    typeList.forEach((item, index) => {
        item.onclick = () => {
            let itemActive = document.querySelector(`${domElement}.active`);
            if (itemActive) {
                itemActive.classList.remove('active');
            }
            item.classList.add('active');
        }
    })
}
// End
// DetailProduct
function handleSliderProductDetail() {
    let featuredSlide = document.querySelector('.specialfeatured .image__package')
    let nextBtn = document.querySelector('.specialfeatured .btn.--next');
    let prevBtn = document.querySelector('.specialfeatured .btn.--prev');
    let pageMain = document.querySelector('.specialfeatured .mainPage');
    let totalPage = document.querySelector('.specialfeatured .subnumber');
    var flktyFeatured = new Flickity(featuredSlide, {
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
    });
    if (nextBtn && prevBtn) {
        nextBtn.onclick = (e) => {
            e.preventDefault();
            flktyFeatured.next();
        }
        prevBtn.onclick = (e) => {
            e.preventDefault();
            flktyFeatured.previous();
        }
    }
    let textList = document.querySelectorAll('.specialfeatured .text__item');
    totalPage.innerHTML = textList.length.toString().padStart(2, 0);
    textList && flktyFeatured.on('change', function (index) {
        let textActive = document.querySelector('.specialfeatured .text__item.active');
        if (textActive) {
            textActive.classList.remove('active');
        }
        textList[index].classList.add('active');
        pageMain.innerHTML = `${(index + 1).toString().padStart(2, 0)} /`;
    })
}
const handleProductDetailInfo = () => {
    let accodionProductBottom = document.querySelectorAll('.specifications__item .bottom');
    let accodionProductBtn = document.querySelectorAll('.specifications__item .top');

    accodionProductBtn.forEach((item, index) => {
        item.onclick = () => {
            item.classList.toggle('active');
            let panel = accodionProductBottom[index];
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    })
}
const loadImage360 = (index) => {

    let activeImage = document.querySelector('.main360__item.active');
    if (activeImage) {
        activeImage.classList.remove('active');
    }
    modalProductImage[index].classList.add('active');
}
const handleModal360 = () => {

    let currentIndex = 0;
    let nextBtn = document.querySelector('.modal360 .next');
    let prevBtn = document.querySelector('.modal360 .prev');
    let closeBtn = document.querySelector('.modal360 .close__btn');
    let mainModal = document.querySelector('.modal360');
    let openBtn = document.querySelector('.main__product .main__product-btn');

    nextBtn.onclick = () => {
        if (currentIndex >= modalProductImage.length - 1) {
            currentIndex = 0
        } else {
            currentIndex++;
        }
        loadImage360(currentIndex);
    }
    prevBtn.onclick = () => {
        if (currentIndex <= 0) {
            currentIndex = modalProductImage.length;
        }
        currentIndex--;
        loadImage360(currentIndex);
    }
    closeBtn.onclick = () => {
        mainModal.style.display = 'none';
    }
    openBtn.onclick = () => {
        mainModal.style.display = 'block';
    }
}
// End
// Service
const handleServiceAccordion = () => {
    let accodionServiceBottom = document.querySelectorAll('.services__tab-content .panel__bottom');
    let accodionServiceBtn = document.querySelectorAll('.services__tab-content .accordion');
    accodionServiceBtn.forEach((item, index) => {
        item.onclick = () => {
            item.classList.toggle('active');
            let panel = accodionServiceBottom[index];
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    })
}

const handleTabServices = () => {
    let serviceSelections = document.querySelectorAll('.services__tab-select li a');
    let serviceContents = document.querySelectorAll('.services__tab-content .item');
    serviceSelections.forEach((item, index) => {
        item.onclick = (e) => {
            e.preventDefault();
            let activeSelect = document.querySelector('.services__tab-select li a.active');
            let activeContent = document.querySelector('.services__tab-content .item.active');
            if (activeSelect) {
                activeSelect.classList.remove('active');
            }
            if (activeContent) {
                activeContent.classList.remove('active');
            }
            item.classList.add('active');
            serviceContents[index].classList.add('active');
        }
    })
}

const handleTabStore = () => {
    let storeSelects = document.querySelectorAll('.agent .option__item');
    let agentContents = document.querySelectorAll('.agent .agent__list');
    storeSelects.forEach((item, index) => {
        item.onclick = () => {
            let storeActive = document.querySelector('.agent .option__item.active');
            let agentActive = document.querySelector('.agent .agent__list.active');
            if (storeActive && agentActive) {
                storeActive.classList.remove('active');
                agentActive.classList.remove('active');
            }
            item.classList.add('active');
            agentContents[index].classList.add('active');
        }
    })
}
const handleSearchStore = () => {
    let selectList = document.querySelectorAll('.agent .selection__bottom .selected');
    selectList.forEach((item, index) => {
        item.onclick = (e) => {
            e.stopPropagation();
            item.classList.toggle('active');
            handleSelectCity(item.querySelector('.selected__name'));
            window.onclick = () => {
                item.classList.remove('active');
            }
        }

    })
}
const handleSelectCity = (dom) => {
    let cityList = document.querySelectorAll('.agent .selection .options li');
    cityList.forEach((item) => {
        item.onclick = () => {
            dom.innerText = item.innerHTML;
        }
    })
}

// Register
const handleSelectRegister = () => {
    let selectBtn = document.querySelector('.newregister .form .selected');
    let type = document.querySelector('.newregister .form .selected .type');
    let listItem = document.querySelectorAll('.newregister .form .listtype li');

    selectBtn.onclick = (e) => {
        e.stopPropagation();
        selectBtn.classList.toggle('active');
        window.onclick = () => {
            selectBtn.classList.remove('active');
        }
    }
    listItem.forEach((item) => {
        item.onclick = () => {
            type.innerText = item.innerText;
        }

    })
}

function handleRange() {
    let firstRange = document.getElementById('slider-1');
    let secondRange = document.getElementById('slider-2');
    let minPrice = document.querySelector('.range .min .price');
    let maxPrice = document.querySelector('.range .max .price');

    firstRange.oninput = (e) => {

        let value = e.target.value;

        value = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(value);

        minPrice.innerHTML = `${value}`
    }
    secondRange.oninput = (e) => {

        let value = e.target.value;
        value = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(value);
        maxPrice.innerHTML = `${value}`
    }
}

window.addEventListener('load', function () {
    handleMobile();
    handleHeader();
    if (homePage) {
        handleEarthHome();
        handleSliderHome();
        handleSliderMissionHome();
        hotProductCarousel();
    }
    if (productPage) {
        handleTabsProduct();
        handleProductPage();
        handleSubProduct();
        handleTabs('.bike__category-engine .bike__engine-item');
        handleTabs('.bike__category .bike__category-item');
        handleTabs('.vehicle__style-options .vehicle__style-item');
        handleRange();
    }
    if (productDetailPage) {
        handleSliderProductDetail();
        handleProductDetailInfo();
        handleModal360();
    }
    if (servicePage) {
        handleServiceAccordion();
        handleTabServices();
    }
    if (storePage) {
        handleSelectCity();
        handleSearchStore();
        handleTabStore();
    }
    if (registerPage) {
        handleSelectRegister();
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    let loading = document.querySelector('.loading');
    setTimeout(() => loading.classList.remove('active'), 1500);
});

