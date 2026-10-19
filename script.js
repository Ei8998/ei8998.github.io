/* ===== 1. More About Me Button ===== */

// HTML ထဲက Button နဲ့ စာပိုဒ်ကို ရှာမယ်
const moreBtn = document.getElementById("moreBtn");
const moreInfo = document.getElementById("moreInfo");

// Button နဲ့ စာပိုဒ်ရှိမှ အလုပ်လုပ်မယ်
if (moreBtn && moreInfo) {

    moreBtn.addEventListener("click", function () {

        // စာပိုဒ်ကို ဖျောက်ထားရင် ပြမယ်၊ ပြထားရင် ဖျောက်မယ်
        moreInfo.hidden = !moreInfo.hidden;

        // Button စာသားနဲ့ Accessibility အချက်အလက် ပြောင်းမယ်
        if (moreInfo.hidden) {
            moreBtn.textContent = "More About Me";
            moreBtn.setAttribute("aria-expanded", "false");
        } else {
            moreBtn.textContent = "Show Less";
            moreBtn.setAttribute("aria-expanded", "true");
        }

    });
}


/* ===== 2. Navigation Smooth Scroll ===== */

// #home, #about စတဲ့ Navigation Link တွေကို ရှာမယ်
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        // သွားမယ့် Section ရှိမှ Smooth Scroll လုပ်မယ်
        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Browser URL မှာ Section ရဲ့ ID ကို ပြမယ်
            history.replaceState(null, "", targetId);
        }

    });

});


/* ===== 3. Footer Current Year ===== */

// လက်ရှိနှစ်ကို အလိုအလျောက် ထည့်မယ်
const footerText = document.getElementById("footerText");

if (footerText) {
    footerText.textContent =
        "© " + new Date().getFullYear() +
        " Ei Nay Zar Nyo. All rights reserved.";
}


/* ===== 4. External Links Security ===== */

// Website အပြင်ကို ဖွင့်တဲ့ Link တွေကို လုံခြုံစွာ သတ်မှတ်မယ်
const externalLinks = document.querySelectorAll(
    'a[target="_blank"]'
);

externalLinks.forEach(function (link) {
    link.setAttribute("rel", "noopener noreferrer");
});


/* ===== 5. Console Message ===== */

// Browser Console မှာ Project အခြေအနေကို စစ်နိုင်မယ်
console.log("Ei Nay Zar Nyo's Portfolio loaded successfully!");