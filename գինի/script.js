const wines = [
    {
      name: "Արենի",
      origin: "Վայոց Ձոր",
      grape: "Արենի Նուար",
      pairing: "տավարի միս, պանիր",
      profile: "մրգային"
    },
    {
      name: "Կաղնուտ",
      origin: "Արմավիր",
      grape: "Հաղթանակ",
      pairing: "հավի միս, աղցան",
      profile: "կարմիր, չոր"
    },
    {
      name: "Խնդողնի",
      origin: "Տավուշ",
      grape: "Խնդողնի",
      pairing: "խորոված",
      profile: "փրփրուն"
    },
    {
      name: "Տակառ",
      origin: "Վայոց Ձոր",
      grape: "Արենի",
      pairing: "բրինձ, պաստա, աղցան",
      profile: "rose´"
    },
    {
      name: "Տակառ",
      origin: "Վայոց Ձոր",
      grape: "Կանգուն",
      pairing: "ձուկ, հավի միս",
      profile: "սպիտակ, կիսաքաղցր"
    },
    {
      name: "Արազ",
      origin: "Վայոց Ձոր",
      grape: "Կանգուն, Մսխալի",
      pairing: "ձուկ, հավի միս",
      profile: "սպիտակ, կիսաչոր"
    },
    {
      name: "Կուր",
      origin: "Վայոց Ձոր",
      grape: "Արենի",
      pairing: "սթեյք, տավարի միս, խորոված",
      profile: "կարմիր, կիսաքաղցր"
    },
    {
      name: "Քյոշ",
      origin: "Վայոց Ձոր",
      grape: "Ոսկեհատ, Խաթունի",
      pairing: "աղանդեր, պանիր, պանրի տեսականի",
      profile: "փրփրուն"
    },
    {
      name: "ՄՈՒՆՔ",
      origin: "Վայոց Ձոր",
      grape: "Սև Արենի, Խնդողնի, Նռնենի",
      pairing: "սթեյք, խորոված, տավարի միս",
      profile: "կարմիր, չոր"
    },
    {
      name: "Ոսկեվազ Նուռ",
      pairing: "հավի միս, տավարի միս, աղցան",
      profile: "մրգային"
    },
    {
      name: "Ծիրանի",
      pairing: "աղանդեր, պանիր, պանրի տեսականի",
      profile: "մրգային"
    },

  ];
  
  document.getElementById("wineForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const taste = document.getElementById("taste").value;
    const food = document.getElementById("food").value;
  
    const match = wines.find(wine => wine.profile === taste || wine.pairing.includes(food));
  
    const resultDiv = document.getElementById("result");
    if (match) {
      resultDiv.innerHTML = `<strong>Խորհուրդ ենք տալիս՝</strong> ${match.name} (${match.grape}, ${match.origin}) 🍷<br>
      Լավ համադրվում է՝ ${match.pairing}`;
    } else {
      resultDiv.innerHTML = "Ցավում ենք, համապատասխան գինի չգտնվեց։ Փորձիր այլ համադրություն։";
    }
  });
  