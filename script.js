const wines = [
    {
      name: "Արենի",
      origin: "Վայոց Ձոր",
      grape: "Արենի Նուիր",
      pairing: "տավարի միս, պանիր",
      profile: "մրգային"
    },
    {
      name: "Կաղնուտ",
      origin: "Արմավիր",
      grape: "Հաղթանակ",
      pairing: "հավի միս, աղցաններ",
      profile: "փափուկ"
    },
    {
      name: "Խնդողնի",
      origin: "Տավուշ",
      grape: "Խնդողնի",
      pairing: "խորոված",
      profile: "փրփրուն"
    }
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
  