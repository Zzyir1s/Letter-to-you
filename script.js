const page1 = `Hi bibii,

This letter is for you, from your boyfriend. I just want you to know how deeply loved you are. I love you more and more every day, and I cherish every moment I get to spend with you. I can't help but fall in love with you all over again every time you smile. I love every word that comes from you, and I love everything about you.


`;

const page2 = `You make my days brighter just by being in them. The way you laugh, the way you care, the way you understand me it all means more to me than I can ever fully put into words. 

I'm so grateful to have you in my life, and I promise to always stand by you, support you, and love you with all my heart.
`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < page1.length) {
        typedText.innerHTML += page1.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      } else {
        // Show next button when first page is done
        document.getElementById("nextBtn").style.display = "block";
      }
    }

    typeWriter();
  }, 600);
}

function showPage2() {
  const letterBox = document.getElementById("letterBox");
  const letterBox2 = document.getElementById("letterBox2");
  const nextBtn = document.getElementById("nextBtn");
  
  letterBox.style.display = "none";
  letterBox2.style.display = "block";
  nextBtn.style.display = "none";
  
  const typedText2 = document.getElementById("typedText2");
  let i = 0;

  function typeWriter() {
    if (i < page2.length) {
      typedText2.innerHTML += page2.charAt(i);
      i++;
      setTimeout(typeWriter, 30);
    }
  }

  typeWriter();
}
