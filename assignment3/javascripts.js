function revealForm() {
      document.getElementById("formElements").classList.remove("hidden");
    }

    function applyUpdates() {
      const newGreeting = document.getElementById("greetingInput").value;
      const newParagraph = document.getElementById("paragraphInput").value;
      const newBgColor = document.getElementById("bgColorSelect").value;

      if (newGreeting) {
        document.getElementById("greeting").textContent = newGreeting;
      }

      if (newParagraph) {
        document.getElementById("first-paragraph").textContent = newParagraph;
      }

      document.body.style.backgroundColor = newBgColor;
    }