// Prevent mobile browsers from restoring a mid-page scroll position on load/back-forward navigation.
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

function forceScrollToTop() {
    window.scrollTo(0, 0);
}

if (!window.location.hash) {
    forceScrollToTop();
    requestAnimationFrame(forceScrollToTop);
    window.addEventListener("load", forceScrollToTop);
}

window.addEventListener("pageshow", (event) => {
    if (event.persisted && !window.location.hash) {
        forceScrollToTop();
    }
});

const menuItems = [
    { category: "WOK", number: "1", name: "Wok su krevetėmis ir austrių padažu", price: "10.50 €", desc: "Udon makaronai, krevetės, kiaušiniai, morka, cukinija, brokoliai, paprika, porai, kopūstai, austrių padažas, sezamų sėklos.", image: "https://www.sushiout.lt/storage/734/conversions/01KPASKENVKXEKV22JS10T7ZSE-thumb.webp" },
    { category: "WOK", number: "2", name: "Wok su krevetėmis ir kreminiu kokosų padažu", price: "10.50 €", desc: "Kiaušiniai makaronai, krevetės, kiaušiniai, morka, cukinija, brokoliai, paprika, porai, kopūstai, kreminis kokosų padažas, kepinti svogūnai.", image: "https://www.sushiout.lt/storage/712/conversions/01KP2N4JDBA8MTK0XEECRDVYTY-thumb.webp" },
    { category: "WOK", number: "3", name: "Wok su krevetėmis ir hot goreng padažu", price: "10.50 €", desc: "Kiaušiniai makaronai, krevetės, kiaušiniai, morka, cukinija, brokoliai, paprika, porai, kopūstai, hot goreng padažas, sezamų sėklos, čili pipirai.", image: "https://www.sushiout.lt/storage/713/conversions/01KP2NN4Z3EYF927XB3RBWN7V4-thumb.webp" },
    { category: "WOK", number: "4", name: "Wok su lašiša ir austrių padažu", price: "12.00 €", desc: "Kiaušiniai makaronai, lašiša, kiaušiniai, morka, cukinija, brokoliai, paprika, porai, kopūstai, austrių padažas, kepinti svogūnai.", image: "https://www.sushiout.lt/storage/717/conversions/01KP2QS3BDJCNBVVQM9DT6ZDTD-thumb.webp" },
    { category: "WOK", number: "5", name: "Wok lašiša ir sweet chili padažu", price: "12.00 €", desc: "Kiaušiniai makaronai, lašiša, kiaušiniai, morka, cukinija, brokoliai, paprika, porai, kopūstai, sweet chili padažas, sezamų sėklos.", image: "https://www.sushiout.lt/storage/718/conversions/01KP2R3YXXS1G5R1QGH3GCRSGE-thumb.webp" },
    { category: "WOK", number: "6", name: "Wok su vištiena ir hot goreng padažu", price: "9.50 €", desc: "Kiaušiniai makaronai, vištiena, kiaušiniai, morka, cukinija, brokoliai, paprika, porai, kopūstai, hot goreng padažas, čili pipirai.", image: "https://www.sushiout.lt/storage/714/conversions/01KP2PCDN9HZFB4NYPD8NGJC6X-thumb.webp" },
    { category: "WOK", number: "7", name: "Wok su vištiena ir kreminiu kokosų padažu", price: "9.50 €", desc: "Kiaušiniai makaronai, vištiena, kiaušiniai, morka, cukinija, brokoliai, paprika, porai, kopūstai, kreminis kokosų padažas, kepinti svogūnai.", image: "https://www.sushiout.lt/storage/715/conversions/01KP2PY4DHAMT8TYJJYSYAPVKN-thumb.webp" },
    { category: "WOK", number: "8", name: "Wok su vištiena ir teriyaki padažu", price: "9.50 €", desc: "Kiaušiniai makaronai, vištiena, kiaušiniai, morka, cukinija, brokoliai, paprika, porai, kopūstai, teriyaki padažas, sezamai.", image: "https://www.sushiout.lt/storage/716/conversions/01KP2QD2YKZQV0D3PKYVZBRSZC-thumb.webp" },
    { category: "WOK", number: "9", name: "Vegetariškas wok su teriyaki padažu", price: "8.00 €", desc: "Makaronai, morka, cukinija, brokoliai, paprika, porai, kopūstai, teriyaki padažas, sezamų sėklos.", image: "https://www.sushiout.lt/storage/719/conversions/01KP2RM63XECTB1F8K7ZBM29YH-thumb.webp" },
    { category: "WOK", number: "10", name: "Vegetariškas wok su kreminiu kokosų padažu", price: "8.00 €", desc: "Makaronai, morka, cukinija, brokoliai, paprika, porai, kopūstai, kreminis kokosų padažas, kepinti svogūnai.", image: "https://www.sushiout.lt/storage/720/conversions/01KP2S3RV8Q2J2THSFYGAQ3N6H-thumb.webp" },
    { category: "OUT", number: "33", name: "OUT 1", price: "14.00 €", desc: "Šviežia lašiša, ryžiai, avokadas, kreminis sūris, masago ikrai, išskirtinis Sushi Out padažas.", image: "https://www.sushiout.lt/storage/198/conversions/01JVH9G4SFBDKMXA6FE84WN2P3-thumb.webp" },
    { category: "OUT", number: "34", name: "OUT 2", price: "14.00 €", desc: "Tunas, krevetės, ryžiai, agurkas, kreminis sūris, unagi padažas, kepinti sezamai.", image: "https://www.sushiout.lt/storage/106/conversions/34.-OUT-2-thumb.webp" },
    { category: "OUT", number: "35", name: "OUT 3", price: "14.00 €", desc: "Kepta lašiša, agurkas, avokadas, kreminis sūris, spaiši padažas, panko traškučiai.", image: "https://www.sushiout.lt/storage/199/conversions/01JVH9HB0C8B1P0STEC3DGT2FY-thumb.webp" },
    { category: "OUT", number: "36", name: "OUT 4", price: "14.00 €", desc: "Rūkyta lašiša, krevetės, agurkas, kreminis sūris, tobiko ikrai, sweet chili padažas.", image: "https://www.sushiout.lt/storage/108/conversions/36.-OUT-4-thumb.webp" },
    { category: "XXL", number: "", name: "XXL TORO", price: "11.50 €", desc: "Didelė porcija: tunas, lašiša, avokadas, agurkas, kreminis sūris, masago ikrai.", image: "https://www.sushiout.lt/storage/583/conversions/01JXHA7Z1DKKZWEYPRAYG3HK0V-thumb.webp" },
    { category: "XXL", number: "", name: "XXL SAKE EBI", price: "11.50 €", desc: "Didelė porcija: šviežia lašiša, krevetės, avokadas, kreminis sūris, unagi padažas.", image: "https://www.sushiout.lt/storage/584/conversions/01JXHA8FADRPJ7NAZ4D3ZNAZYN-thumb.webp" },
    { category: "XXL", number: "", name: "XXL CALIFORNIA", price: "10.40 €", desc: "Didelė porcija: krabų lazdeles, avokadas, agurkas, masago ikrai, majonezas.", image: "https://www.sushiout.lt/storage/579/conversions/01JXHA0G7QD0W0FNS7KRYK7MXV-thumb.webp" },
    { category: "XXL", number: "", name: "XXL PHILADELPHIA", price: "10.40 €", desc: "Didelė porcija: lašiša, kreminis sūris, agurkas, avokadas, ryžiai.", image: "https://www.sushiout.lt/storage/580/conversions/01JXHA14S1HD7T8XRX7AD5GJYM-thumb.webp" },
    { category: "XXL", number: "", name: "XXL CRISPY SALMON", price: "11.90 €", desc: "Didelė porcija: kepta lašiša, panko traškučiai, kreminis sūris, unagi padažas.", image: "https://www.sushiout.lt/storage/581/conversions/01JXHA1S5YBSVFBG55FQPSRVM8-thumb.webp" },
    { category: "XXL", number: "", name: "XXL SAKE PANKO", price: "11.90 €", desc: "Didelė porcija: panko džiūvėsėliuose kepti rollai su lašiša, sūriu ir spaiši padažu.", image: "https://www.sushiout.lt/storage/582/conversions/01JXHA2ECBTWHK0GJ22N7TXM7W-thumb.webp" },
    { category: "MAKI", number: "47", name: "SAKE AVOCADO MAKI", price: "6.80 €", desc: "Lašiša, avokadas, ryžiai, nori dumbliai.", image: "https://www.sushiout.lt/storage/546/conversions/01JXCN3295VZH4QJC82G4XQBMZ-thumb.webp" },
    { category: "MAKI", number: "48", name: "SIMPLE CALIFORNIA", price: "6.80 €", desc: "Krabų lazdelės, agurkas, avokadas, masago ikrai.", image: "https://www.sushiout.lt/storage/547/conversions/01JXCN3N2HA0HXHAAJ4XDQNXMA-thumb.webp" },
    { category: "MAKI", number: "49", name: "ALASKA", price: "6.90 €", desc: "Lašiša, agurkas, kreminis sūris, sezamų sėklos.", image: "https://www.sushiout.lt/storage/548/conversions/01JXCN4GJ9T1SS1890B9TGAA9E-thumb.webp" },
    { category: "MAKI", number: "50", name: "RAINBOW", price: "9.90 €", desc: "Lašiša, tunas, avokadas, agurkas, kreminis sūris.", image: "https://www.sushiout.lt/storage/549/conversions/01JXCN5F1FZEQWG1TAXQ7JT4BK-thumb.webp" },
    { category: "MAKI", number: "51", name: "RIO", price: "12.00 €", desc: "Krevetės, lašiša, avokadas, masago ikrai, kreminis sūris.", image: "https://www.sushiout.lt/storage/204/conversions/01JVHAG562WHYG26RXEXW58474-thumb.webp" },
    { category: "MAKI", number: "52", name: "TORO", price: "10.50 €", desc: "Tunas, avokadas, spaiši padažas, masago ikrai.", image: "https://www.sushiout.lt/storage/550/conversions/01JXCN6BZWJKMD00ZMGB5DESWV-thumb.webp" },
    { category: "MAKI", number: "53", name: "TOKYO", price: "9.40 €", desc: "Lašiša, krevetės, agurkas, unagi padažas, sezamas.", image: "https://www.sushiout.lt/storage/551/conversions/01JXCN6YADC0ZS08SR5N9NWKQA-thumb.webp" },
    { category: "MAKI", number: "54", name: "SAKE KAPA MAKI", price: "6.90 €", desc: "Lašiša, agurkas, ryžiai, nori dumbliai.", image: "https://www.sushiout.lt/storage/552/conversions/01JXCN7E1SBHAFASGTFETX8R42-thumb.webp" },
    { category: "MAKI", number: "55", name: "SAKE TEMPURA", price: "9.90 €", desc: "Tempura tešloje kepta lašiša, agurkas, sūris, unagi padažas.", image: "https://www.sushiout.lt/storage/553/conversions/01JXCN7ZNDGZ8002MYAXQTXRXB-thumb.webp" },
    { category: "MAKI", number: "56", name: "SPICY EBITEN", price: "8.50 €", desc: "Keptos krevetės tempuroje, spaiši padažas, agurkas.", image: "https://www.sushiout.lt/storage/554/conversions/01JXCN9RX25VNTDPJQYSJ79DD4-thumb.webp" },
    { category: "MAKI", number: "57", name: "PHILADELPHIA", price: "8.00 €", desc: "Lašiša, Philadelphia kreminis sūris, agurkas.", image: "https://www.sushiout.lt/storage/555/conversions/01JXCNASPRY8AZQYTZYAX1TV2A-thumb.webp" },
    { category: "MAKI", number: "58", name: "DUBAI GOLD", price: "12.00 €", desc: "Išskirtinis sushi rinkinys su lašiša, krevetėmis ir auksine masago danga.", image: "https://www.sushiout.lt/storage/209/conversions/01JVHAN4RR0WS79JD9PGXD1821-thumb.webp" },
    { category: "MAKI", number: "59", name: "HOT ALASKA", price: "6.80 €", desc: "Karštas maki su lašiša, sūriu ir traškia plutele.", image: "https://www.sushiout.lt/storage/556/conversions/01JXCNBBAFG9BCTZCR47SSYZT3-thumb.webp" },
    { category: "MAKI", number: "60", name: "SAKE MAGURO", price: "9.90 €", desc: "Lašiša, tunas, avokadas, kreminis sūris.", image: "https://www.sushiout.lt/storage/557/conversions/01JXCNBYF3Y4A7QPXQ4PG820P8-thumb.webp" },
    { category: "MAKI", number: "61", name: "SAKE MASAGO", price: "8.50 €", desc: "Lašiša, masago ikrai, agurkas, kreminis sūris.", image: "https://www.sushiout.lt/storage/558/conversions/01JXCNCG3Q0VGRSY033FSTSM58-thumb.webp" },
    { category: "MAKI", number: "62", name: "BROOKLYN", price: "12.00 €", desc: "Tunas, lašiša, panko traškučiai, spaiši ir unagi padažai.", image: "https://www.sushiout.lt/storage/212/conversions/01JVHARMF8735YGFY5M1MWTD8W-thumb.webp" },
    { category: "MAKI", number: "63", name: "EBITEN", price: "8.50 €", desc: "Krevetės tempuroje, kreminis sūris, agurkas, unagi padažas.", image: "https://www.sushiout.lt/storage/559/conversions/01JXCND58MP51BM8JN1RV2KNR6-thumb.webp" },
    { category: "MAKI", number: "64", name: "GOLD PHILADELPHIA", price: "9.50 €", desc: "Lašiša, avokadas, kreminis sūris, masago ikrai.", image: "https://www.sushiout.lt/storage/560/conversions/01JXCNDNQWXXA4P9C5PPK7F0P1-thumb.webp" },
    { category: "MAKI", number: "65", name: "SAKE EBITEN", price: "9.50 €", desc: "Lašiša, krevetės tempuroje, agurkas, kreminis sūris.", image: "https://www.sushiout.lt/storage/561/conversions/01JXCNE7P85KRHSXVPG7CC9RAH-thumb.webp" },
    { category: "MAKI", number: "66", name: "CALIFORNIA", price: "8.50 €", desc: "Krabų lazdeles, avokadas, agurkas, masago ikrai, majonezas.", image: "https://www.sushiout.lt/storage/562/conversions/01JXCNEPYFT7H3G3Q4Z0J8T5XS-thumb.webp" },
    { category: "HOSOMAKI", number: "37", name: "EBI CHEESE MAKI", price: "5.50 €", desc: "Krevetės, kreminis sūris, ryžiai, nori.", image: "https://www.sushiout.lt/storage/202/conversions/01JVH9N6XYHY0KQW0QXVTQT76D-thumb.webp" },
    { category: "HOSOMAKI", number: "38", name: "SAKE MAKI", price: "5.50 €", desc: "Šviežia lašiša, ryžiai, nori dumbliai.", image: "https://www.sushiout.lt/storage/110/conversions/38.-SAKE-MAKI-thumb.webp" },
    { category: "HOSOMAKI", number: "39", name: "EBI MAKI", price: "5.50 €", desc: "Krevetės, ryžiai, nori dumbliai.", image: "https://www.sushiout.lt/storage/111/conversions/39.-EBI-MAKI-thumb.webp" },
    { category: "HOSOMAKI", number: "40", name: "MAGURO MAKI", price: "5.50 €", desc: "Tunas, ryžiai, nori dumbliai.", image: "https://www.sushiout.lt/storage/183/conversions/01JVA4N4XK1BYXPSD4YF406AJH-thumb.webp" },
    { category: "HOSOMAKI", number: "41", name: "UNAGI MAKI", price: "5.50 €", desc: "Keptas ungurys, unagi padažas, sezamas, ryžiai.", image: "https://www.sushiout.lt/storage/113/conversions/41.-UNAGI-MAKI-thumb.webp" },
    { category: "HOSOMAKI", number: "42", name: "SAKE KARAI MAKI", price: "5.50 €", desc: "Aštri lašiša, spaiši padažas, ryžiai, nori.", image: "https://www.sushiout.lt/storage/203/conversions/01JVH9P6C78J72MTSYV95A1DWW-thumb.webp" },
    { category: "VEGETARIŠKI", number: "43", name: "KAPA MAKI", price: "5.00 €", desc: "Šviežias agurkas, sezamas, ryžiai, nori.", image: "https://www.sushiout.lt/storage/115/conversions/43.-KAPA-MAKI-thumb.webp" },
    { category: "VEGETARIŠKI", number: "44", name: "AVOCADO MAKI", price: "5.00 €", desc: "Avokadas, ryžiai, nori dumbliai.", image: "https://www.sushiout.lt/storage/116/conversions/44.-AVOCADO-MAKI-thumb.webp" },
    { category: "VEGETARIŠKI", number: "45", name: "YASAI", price: "6.80 €", desc: "Avokadas, agurkas, paprika, salotų lapai, kreminis sūris.", image: "https://www.sushiout.lt/storage/200/conversions/01JVH9JM4AJNT6JJA2RS2WECXE-thumb.webp" },
    { category: "VEGETARIŠKI", number: "46", name: "SHITAKE TEN", price: "7.80 €", desc: "Kepti shiitake grybai, tempura, unagi padažas, agurkas.", image: "https://www.sushiout.lt/storage/201/conversions/01JVH9KP1BJ9B7XQ10ZPHYTFP8-thumb.webp" },
    { category: "KARŠTI SUSHI", number: "83", name: "EBI TEMPURA", price: "9.90 €", desc: "Karšti panko džiūvėsėliuose kepti maki su krevetėmis ir sūriu.", image: "https://www.sushiout.lt/storage/156/conversions/83.-EBI-TEMPURA-thumb.webp" },
    { category: "KARŠTI SUSHI", number: "84", name: "SAKE PANKO", price: "9.90 €", desc: "Karšti panko maki su lašiša, kreminiu sūriu ir teriyaki padažu.", image: "https://www.sushiout.lt/storage/157/conversions/84.-SAKE-PANKO-thumb.webp" },
    { category: "KARŠTI SUSHI", number: "85", name: "YASAI PANKO", price: "8.90 €", desc: "Karšti vegetariški maki su panko traškučiais ir daržovėmis.", image: "https://www.sushiout.lt/storage/158/conversions/85.-YASAI-PANKO-thumb.webp" },
    { category: "RINKINIAI", number: "93", name: "1 asm. rinkinys", price: "10.50 €", desc: "Tobulas sushi rinkinys vienam: maki su lašiša, agurku ir avokadu.", image: "https://www.sushiout.lt/storage/385/conversions/01JVQA1E87FC8FQKMJHHPE79WQ-thumb.webp" },
    { category: "RINKINIAI", number: "94", name: "1 asm. rinkinys", price: "9.90 €", desc: "Sotus vieno asmens rinkinys su įvairiais karštais ir šaltais rollais.", image: "https://www.sushiout.lt/storage/386/conversions/01JVQA2A66SQBAZ7RCPS1K0AF1-thumb.webp" },
    { category: "RINKINIAI", number: "95", name: "1–2 asm. rinkinys", price: "14.50 €", desc: "Rinkinys dviems: Philadelphia, California ir tempura rollai.", image: "https://www.sushiout.lt/storage/246/conversions/01JVKVGYETAHDSP7EEPRSMVXSC-thumb.webp" },
    { category: "RINKINIAI", number: "96", name: "1–2 asm. rinkinys", price: "15.50 €", desc: "Didelis rinkinys: lašiša, krevetės, krabų lazdelės, masago ikrai.", image: "https://www.sushiout.lt/storage/247/conversions/01JVKVRGYHZ8K711ZMZAX84HQW-thumb.webp" },
    { category: "SRIUBOS", number: "1", name: "RAMEN", price: "6.00 €", desc: "Tradiciškai verdama sodri azijietiška ramen sriuba su makaronais ir žalumynais.", image: "https://www.sushiout.lt/storage/84/conversions/1.-RAMEN-thumb.webp" },
    { category: "UŽKANDŽIAI", number: "15", name: "ŠIAURINĖS KREVETĖS", price: "6.00 €", desc: "Šiaurinės krevetės su citrina ir firminiu azijietišku padažu.", image: "https://www.sushiout.lt/storage/92/conversions/15.-S%CC%8CIAURINE%CC%87S-KREVETE%CC%87S-thumb.webp" },
    { category: "UŽKANDŽIAI", number: "16", name: "SPRING ROLLS SU DARŽOVĖMIS", price: "5.00 €", desc: "Traškūs daržovių suktinukai, patiekiami su sweet chili padažu.", image: "https://www.sushiout.lt/storage/682/conversions/01KC7MDYKBC72RYCF8WK9QGRZS-thumb.webp" },
    { category: "UŽKANDŽIAI", number: "17", name: "KALMARŲ ŽIEDAI", price: "5.00 €", desc: "Traškioje plutelėje kepti kalmarų žiedai.", image: "https://www.sushiout.lt/storage/177/conversions/01JVA4J365XQ9RGARARMV1CF76-thumb.webp" },
    { category: "UŽKANDŽIAI", number: "18", name: "KEPTŲ SŪRIŲ RINKINYS", price: "7.00 €", desc: "Kepto mozzarella ir čederio sūrių užkandis.", image: "https://www.sushiout.lt/storage/93/conversions/18.-KEPTU%CC%A8-SU%CC%84RIU%CC%A8-RINKINYS-thumb.webp" },
    { category: "UŽKANDŽIAI", number: "19", name: "YAKI EBI", price: "8.00 €", desc: "Keptos krevetės ant iešmelių su teriyaki padažu ir sezamais.", image: "https://www.sushiout.lt/storage/94/conversions/19.-YAKI-EBI-thumb.webp" },
    { category: "UŽKANDŽIAI", number: "20", name: "ČEDERIO KEPSNELIAI SU JELAPENU", price: "6.50 €", desc: "Aštrūs čederio kepsneliai su jelapenu traškioje džiūvėsėlių plutelėje.", image: "https://www.sushiout.lt/storage/683/conversions/01KC7MF1D8XM858S82V1RBK5P8-thumb.webp" },
    { category: "DIENOS PIETŪS", number: "", name: "Sriuba", price: "2.00 €", desc: "Šviežia dienos sriuba greitiems pietums.", image: "https://www.sushiout.lt/storage/607/conversions/01K42GN2QTFYBV43HWQ922R67M-thumb.webp" },
    { category: "DIENOS PIETŪS", number: "", name: "Wakame", price: "2.00 €", desc: "Tradicinės wakame jūrų dumblių salotos su sezamu.", image: "https://www.sushiout.lt/storage/604/conversions/01K420KA8DJPSNDPKAE723YEYH-thumb.webp" },
    { category: "GĖRIMAI", number: "", name: "Coca Cola 0.5L", price: "2.40 €", desc: "Atvėsintas gaivusis gėrimas Coca Cola 0.5L.", image: "https://www.sushiout.lt/storage/617/conversions/01K6J66D8G754E7CNT4THDWCXB-thumb.webp" },
    { category: "GĖRIMAI", number: "", name: "Coca Cola 0.33L", price: "1.90 €", desc: "Atvėsintas gaivusis gėrimas Coca Cola 0.33L skardinėje.", image: "https://www.sushiout.lt/storage/618/conversions/01K6J6B7EWDB6VY1M6QPESKVH6-thumb.webp" }
];

const schedule = [
    { day: "Monday", hours: "11:00 - 22:00" },
    { day: "Tuesday", hours: "11:00 - 22:00" },
    { day: "Wednesday", hours: "11:00 - 22:00" },
    { day: "Thursday", hours: "11:00 - 22:00" },
    { day: "Friday", hours: "11:00 - 22:00" },
    { day: "Saturday", hours: "11:00 - 22:00" },
    { day: "Sunday", hours: "11:00 - 22:00" }
];

const i18n = {
    lt: {
        allCategories: "Visi patiekalai",
        noResultsTitle: "Nieko nerasta",
        noResultsBody: "Pakeiskite paiešką arba pasirinkite kitą kategoriją.",
        resultsSingular: "patiekalas",
        resultsPlural: "patiekalai",
        allCategoriesLabel: "visos kategorijos",
        viewItem: "Peržiūrėti",
        statusOpen: "Dabar atidaryta",
        statusClosed: "Šiuo metu uždaryta",
        weekdaySuffix: "11:00-22:00",
        days: {
            Monday: "Pirmadienis",
            Tuesday: "Antradienis",
            Wednesday: "Trečiadienis",
            Thursday: "Ketvirtadienis",
            Friday: "Penktadienis",
            Saturday: "Šeštadienis",
            Sunday: "Sekmadienis"
        }
    },
    en: {
        allCategories: "All dishes",
        noResultsTitle: "Nothing found",
        noResultsBody: "Try a different search term or category.",
        resultsSingular: "dish",
        resultsPlural: "dishes",
        allCategoriesLabel: "all categories",
        viewItem: "View",
        statusOpen: "Open now",
        statusClosed: "Currently closed",
        weekdaySuffix: "11:00-22:00",
        days: {
            Monday: "Monday",
            Tuesday: "Tuesday",
            Wednesday: "Wednesday",
            Thursday: "Thursday",
            Friday: "Friday",
            Saturday: "Saturday",
            Sunday: "Sunday"
        }
    }
};

const state = {
    activeCategory: "ALL",
    searchTerm: "",
    lang: localStorage.getItem("sushiout-lang") || "lt"
};

const menuGrid = document.querySelector("#menu-grid");
const filterGroup = document.querySelector("#category-filters");
const searchInput = document.querySelector("#menu-search");
const resultsLabel = document.querySelector("#menu-results");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const siteHeader = document.querySelector(".site-header");
const openStatus = document.querySelector("#open-status .status-text");
const openStatusPill = document.querySelector("#open-status");
const weekdayStatus = document.querySelector("#weekday-status");
const hoursList = document.querySelector("#hours-list");
const tickerTrack = document.querySelector("#ticker-track");
const statItems = document.querySelector("#stat-items");
const statCategories = document.querySelector("#stat-categories");
const langButtons = document.querySelectorAll(".lang-btn");
const modal = document.querySelector("#item-modal");
const modalImage = document.querySelector("#modal-image");
const modalCategory = document.querySelector("#modal-category");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");

const categories = ["ALL", ...new Set(menuItems.map((item) => item.category))];
let lastFocusedElement = null;

const categoryIcons = {
    ALL: "✨",
    WOK: "🥢",
    OUT: "🍱",
    XXL: "🍣",
    MAKI: "🍙",
    HOSOMAKI: "🍘",
    "VEGETARIŠKI": "🥦",
    "KARŠTI SUSHI": "🔥",
    RINKINIAI: "🍽️",
    SRIUBOS: "🍜",
    "UŽKANDŽIAI": "🥟",
    "DIENOS PIETŪS": "🍲",
    "GĖRIMAI": "🥤"
};

function t() {
    return i18n[state.lang];
}

function normalize(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function createFilterButtons() {
    filterGroup.innerHTML = "";
    const fragment = document.createDocumentFragment();

    categories.forEach((category) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `filter-button${category === state.activeCategory ? " is-active" : ""}`;
        button.dataset.category = category;
        const icon = categoryIcons[category] || "🍴";
        const label = category === "ALL" ? t().allCategories : category;
        button.innerHTML = `<span class="filter-icon" aria-hidden="true">${icon}</span><span>${label}</span>`;
        button.addEventListener("click", () => {
            state.activeCategory = category;
            updateActiveFilter();
            renderMenu();
        });
        fragment.append(button);
    });

    filterGroup.append(fragment);
}

function updateActiveFilter() {
    const buttons = filterGroup.querySelectorAll(".filter-button");

    buttons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.category === state.activeCategory);
    });
}

function filterMenuItems() {
    const searchTerm = normalize(state.searchTerm.trim());

    return menuItems.filter((item) => {
        const categoryMatch = state.activeCategory === "ALL" || item.category === state.activeCategory;
        const haystack = normalize(`${item.name} ${item.category} ${item.number} ${item.price}`);
        const searchMatch = !searchTerm || haystack.includes(searchTerm);

        return categoryMatch && searchMatch;
    });
}

function renderMenu() {
    const filteredItems = filterMenuItems();

    menuGrid.innerHTML = "";

    if (!filteredItems.length) {
        menuGrid.innerHTML = `
            <article class="menu-card empty-card">
                <div class="menu-body">
                    <h3 class="menu-title"><strong>${t().noResultsTitle}</strong></h3>
                    <p>${t().noResultsBody}</p>
                </div>
            </article>
        `;
        resultsLabel.textContent = `${t().noResultsTitle}.`;
        return;
    }

    const fragment = document.createDocumentFragment();

    filteredItems.forEach((item, index) => {
        const originalIndex = menuItems.indexOf(item);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "menu-card reveal is-visible";
        button.style.setProperty("--d", Math.min(index, 6));
        button.dataset.index = String(originalIndex);

        const isSpicy = item.name.toLowerCase().includes("spicy") || item.name.toLowerCase().includes("karai") || item.desc.toLowerCase().includes("aštrūs") || item.desc.toLowerCase().includes("čili");

        button.innerHTML = `
            <div class="menu-media">
                <div class="card-badges">
                    <span class="badge-tag">Naujiena</span>
                    ${isSpicy ? `<span class="badge-icon" title="Aštru">🌶️</span>` : ""}
                </div>
                ${item.number ? `<span class="menu-number">#${item.number}</span>` : ""}
                <div class="dish-plate">
                    <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async">
                </div>
            </div>
            <div class="menu-body">
                <span class="menu-category-tag">${item.category}</span>
                <h3 class="menu-title"><strong>${item.name}</strong></h3>
                <p class="menu-desc">${item.desc || ""}</p>
                <div class="menu-bottom">
                    <span class="menu-price">${item.price}</span>
                    <span class="menu-btn">${t().viewItem} ↗</span>
                </div>
            </div>
        `;

        const image = button.querySelector("img");
        const media = button.querySelector(".menu-media");

        image.addEventListener("error", () => {
            image.remove();
            media.classList.add("is-fallback");
        }, { once: true });

        if (image.complete) {
            image.classList.add("is-loaded");
        } else {
            image.addEventListener("load", () => image.classList.add("is-loaded"), { once: true });
        }

        button.addEventListener("click", () => openModal(originalIndex, button));

        fragment.append(button);
    });

    menuGrid.append(fragment);

    const categoryLabel = state.activeCategory === "ALL" ? t().allCategoriesLabel : state.activeCategory;
    const itemWord = filteredItems.length === 1 ? t().resultsSingular : t().resultsPlural;
    resultsLabel.textContent = state.lang === "en"
        ? `Showing ${filteredItems.length} ${itemWord}: ${categoryLabel}.`
        : `Rodoma ${filteredItems.length} ${itemWord}: ${categoryLabel}.`;
}

function setupSearch() {
    searchInput.addEventListener("input", (event) => {
        state.searchTerm = event.target.value;
        renderMenu();
    });
}

function toggleNavigation(forceState) {
    const shouldOpen = typeof forceState === "boolean" ? forceState : navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(shouldOpen));
    siteNav.classList.toggle("is-open", shouldOpen);
    document.body.classList.toggle("menu-open", shouldOpen);
}

function setupNavigation() {
    navToggle.addEventListener("click", () => toggleNavigation());

    siteNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => toggleNavigation(false));
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 820) {
            toggleNavigation(false);
        }
    });
}

function setupHeaderState() {
    const syncHeader = () => {
        siteHeader.classList.toggle("is-scrolled", window.scrollY > 20);
    };

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
}

function setupRevealAnimations() {
    const revealItems = document.querySelectorAll(".reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        revealItems.forEach((item) => item.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px"
    });

    revealItems.forEach((item) => observer.observe(item));
}

function getVilniusTimeParts() {
    const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Vilnius",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23"
    });

    const parts = formatter.formatToParts(new Date());
    const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));

    return {
        weekday: values.weekday,
        hour: Number(values.hour),
        minute: Number(values.minute)
    };
}

function renderHoursList(todayKey) {
    hoursList.innerHTML = "";
    const fragment = document.createDocumentFragment();

    schedule.forEach((entry) => {
        const li = document.createElement("li");
        li.className = entry.day === todayKey ? "is-today" : "";
        li.innerHTML = `<span>${t().days[entry.day]}</span><strong>${entry.hours}</strong>`;
        fragment.append(li);
    });

    hoursList.append(fragment);
}

function setupScheduleStatus() {
    const { weekday, hour, minute } = getVilniusTimeParts();
    const currentMinutes = hour * 60 + minute;
    const openMinutes = 11 * 60;
    const closeMinutes = 22 * 60;
    const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

    openStatus.textContent = isOpen ? t().statusOpen : t().statusClosed;
    openStatusPill.classList.remove("is-open", "is-closed");
    openStatusPill.classList.add(isOpen ? "is-open" : "is-closed");

    weekdayStatus.textContent = `${t().days[weekday]} • ${t().weekdaySuffix}`;

    renderHoursList(weekday);
}

function setupTicker() {
    const label = categories.filter((category) => category !== "ALL");
    const doubled = [...label, ...label];
    tickerTrack.innerHTML = doubled.map((category) => `<span>${category}</span>`).join("");
}

function setupStats() {
    statItems.textContent = String(menuItems.length);
    statCategories.textContent = String(categories.length - 1);
}

function openModal(index, triggerEl) {
    const item = menuItems[index];
    if (!item) return;

    lastFocusedElement = triggerEl || document.activeElement;

    modalImage.classList.remove("is-loaded");
    modalImage.src = item.image;
    modalImage.alt = item.name;
    if (modalImage.complete) {
        modalImage.classList.add("is-loaded");
    } else {
        modalImage.addEventListener("load", () => modalImage.classList.add("is-loaded"), { once: true });
    }
    modalCategory.textContent = item.category;
    modalTitle.textContent = item.name;
    modalPrice.textContent = item.price;
    if (modalDescription) {
        modalDescription.textContent = item.desc || "Descryption here.";
    }

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    const closeButton = modal.querySelector(".modal-close");
    closeButton?.focus();
}

function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

function setupModal() {
    modal.querySelectorAll("[data-close]").forEach((el) => {
        el.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("is-open")) {
            closeModal();
        }
    });
}

function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem("sushiout-lang", lang);
    document.documentElement.lang = lang;

    langButtons.forEach((button) => {
        const isActive = button.dataset.lang === lang;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll("[data-lt][data-en]").forEach((el) => {
        el.textContent = lang === "en" ? el.dataset.en : el.dataset.lt;
    });

    document.querySelectorAll("[data-lt-ph][data-en-ph]").forEach((el) => {
        el.setAttribute("placeholder", lang === "en" ? el.dataset.enPh : el.dataset.ltPh);
    });

    createFilterButtons();
    updateActiveFilter();
    renderMenu();
    setupScheduleStatus();
}

function setupLanguageSwitch() {
    langButtons.forEach((button) => {
        button.addEventListener("click", () => applyLanguage(button.dataset.lang));
    });
}

createFilterButtons();
setupSearch();
setupNavigation();
setupHeaderState();
setupRevealAnimations();
setupTicker();
setupStats();
setupModal();
setupLanguageSwitch();
applyLanguage(state.lang);
