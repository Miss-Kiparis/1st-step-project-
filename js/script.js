const ourServicesTabs = Array.from(document.querySelector("ul.service-tabs").children);
const ourServicesTabsContent = Array.from(document.querySelector("ul.service-tabs-content").children);
let ourServicesActive = document.querySelector("li.service-tabs-item.active").dataset.services;

ourServicesTabs.forEach(function (el) {
    el.addEventListener("click", (event) => {
        ourServicesTabs.forEach(function (e) {
            if (e.dataset.services === ourServicesActive) {
                e.classList.remove("active");
            }
        });
        ourServicesTabsContent.forEach(function (e) {
            if (e.dataset.services === ourServicesActive) {
                e.classList.remove("active");
            }
        });
        ourServicesActive = event.target.dataset.services;
        ourServicesTabs.forEach(function (e) {
            if (e.dataset.services === ourServicesActive) {
                e.classList.add("active");
            }
        });
        ourServicesTabsContent.forEach(function (e) {
            if (e.dataset.services === ourServicesActive) {
                e.classList.add("active");
            }
        });
    })
});


const workTabs = Array.from(document.querySelector("ul.work-tabs").children);
let workTabsContent = Array.from(document.querySelector("ul.work-tabs-content").children);

workTabs.forEach(function (el) {
    el.addEventListener("click", (event) => {
        if (event.target.dataset.filter === "all") {
            workTabsContent.forEach(function (e) {
                if (e.classList.contains("hide-me")) {
                    e.classList.remove("hide-me")
                }
            })
        } else {
            workTabsContent.forEach(function (e) {
                if (e.classList.contains("hide-me")) {
                    if (e.dataset.filter === event.target.dataset.filter) {
                        e.classList.remove("hide-me")
                    }
                } else {
                    if (e.dataset.filter !== event.target.dataset.filter) {
                        e.classList.add("hide-me")
                    }
                }
            })
        }
    })
});


const loadMoreButton = document.querySelector("div.load-more-button");
let WorkTabsContentPictures = [
    {filter: "graphic-design", number: 1, used: true},
    {filter: "graphic-design", number: 2, used: true},
    {filter: "graphic-design", number: 3, used: true},
    {filter: "graphic-design", number: 4, used: false},
    {filter: "graphic-design", number: 5, used: false},
    {filter: "graphic-design", number: 6, used: false},
    {filter: "graphic-design", number: 7, used: false},
    {filter: "graphic-design", number: 8, used: false},
    {filter: "graphic-design", number: 9, used: false},
    {filter: "graphic-design", number: 10, used: false},
    {filter: "graphic-design", number: 11, used: false},
    {filter: "graphic-design", number: 12, used: false},
    {filter: "web-design", number: 1, used: true},
    {filter: "web-design", number: 2, used: true},
    {filter: "web-design", number: 3, used: true},
    {filter: "web-design", number: 4, used: false},
    {filter: "web-design", number: 5, used: false},
    {filter: "web-design", number: 6, used: false},
    {filter: "web-design", number: 7, used: false},
    {filter: "landing-page", number: 1, used: true},
    {filter: "landing-page", number: 2, used: true},
    {filter: "landing-page", number: 3, used: true},
    {filter: "landing-page", number: 4, used: false},
    {filter: "landing-page", number: 5, used: false},
    {filter: "landing-page", number: 6, used: false},
    {filter: "landing-page", number: 7, used: false},
    {filter: "wordpress", number: 1, used: true},
    {filter: "wordpress", number: 2, used: true},
    {filter: "wordpress", number: 3, used: true},
    {filter: "wordpress", number: 4, used: false},
    {filter: "wordpress", number: 5, used: false},
    {filter: "wordpress", number: 6, used: false},
    {filter: "wordpress", number: 7, used: false},
    {filter: "wordpress", number: 8, used: false},
    {filter: "wordpress", number: 9, used: false},
    {filter: "wordpress", number: 10, used: false}
];
let loadMoreButtonClickCount = 0;

function createWorkTabsContentItem(filter, number) {
    let item = document.createElement("li");
    item.classList.add("work-tabs-content-item");
    item.dataset.filter = filter;
    item.dataset.number = number;
    item.innerHTML = "<div class=\"work-tabs-content-item-hover-content\">\n" +
        "                        <div class=\"work-tabs-content-item-hover-content-buttons\">\n" +
        "                            <a href=\"#\"></a>\n" +
        "                            <a href=\"#\"></a>\n" +
        "                        </div>\n" +
        "                        <p class=\"work-tabs-content-item-hover-content-heading reset-margin\">creative design</p>\n" +
        "                        <p class=\"work-tabs-content-item-hover-content-text reset-margin\">Web Design</p>\n" +
        "                    </div>";
    return item;
}

function getRandomImg() {
    console.log("i called");
    let randomImg;
    do {
        randomImg = WorkTabsContentPictures[Math.floor(Math.random() * WorkTabsContentPictures.length)];
    } while (randomImg.used);
    WorkTabsContentPictures[WorkTabsContentPictures.indexOf(randomImg)].used = true;
    return randomImg;
}

function addWorkTabsContentItems() {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < 12; i++) {
        let ourPick = getRandomImg();
        fragment.append(createWorkTabsContentItem(ourPick.filter, ourPick.number));
    }
    document.querySelector(".work-tabs-content").append(fragment);
    workTabsContent = Array.from(document.querySelector("ul.work-tabs-content").children);
    loadMoreButtonClickCount++;
    if (loadMoreButtonClickCount >= 2) {
        loadMoreButton.classList.add("hide-me");
    }
}

loadMoreButton.addEventListener("click", addWorkTabsContentItems);

const carouselBlock = Array.from(document.querySelector("div.carousel-tabs").children);
let activeCarouselTab = document.querySelector("div.carousel-tab-item.active").dataset.person;

function changeActiveCarouselContent(activeCarouselTab) {
    document.querySelector("div.carousel-tab-item-content.active").classList.remove("active");
    document.querySelector(`div.carousel-tab-item-content[data-person="${activeCarouselTab}"]`).classList.add("active");
}

function changeActiveCarouselTab(event) {
    document.querySelector("div.carousel-tab-item.active").classList.remove("active");
    if (event.target.dataset.person) {
        event.target.classList.add("active");
        activeCarouselTab = event.target.dataset.person;
    } else if (event.target.classList.contains("carousel-left-arrow")) {
        (activeCarouselTab >= 2) ? activeCarouselTab = +activeCarouselTab - 1 : activeCarouselTab = 4;
        document.querySelector(`div.carousel-tab-item[data-person="${activeCarouselTab}"]`).classList.add("active");
    } else if (event.target.classList.contains("carousel-right-arrow")) {
        (activeCarouselTab <= 3) ? activeCarouselTab = +activeCarouselTab + 1 : activeCarouselTab = 1;
        document.querySelector(`div.carousel-tab-item[data-person="${activeCarouselTab}"]`).classList.add("active");
    }
    changeActiveCarouselContent (activeCarouselTab);
}

carouselBlock.forEach((el) => {
    el.addEventListener("click", changeActiveCarouselTab)
});
