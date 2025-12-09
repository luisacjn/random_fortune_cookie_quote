    const fortunes = [
      "Believe in yourself — you are capable of more than you think.",
      "Every small step is progress.",
      "New opportunities are closer than they appear.",
      "Patience will bring its rewards.",
      "Your creativity will lead to success."
    ];

    const randomIndex = Math.floor(Math.random() * fortunes.length);

    document.getElementById("index").textContent =
      "#" + (randomIndex + 1);

    document.getElementById("fortune").textContent =
      fortunes[randomIndex];