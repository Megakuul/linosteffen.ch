<script lang="ts">
  export let text;
  let contentArray = [];

  const texts = text.split('');

  function getRandomAsciiLetter() {
    const randomNumber = Math.random();
    let charCode;

    if (randomNumber < 0.5) {
      charCode = 65 + Math.floor(randomNumber * 26);
    } else {
      charCode = 97 + Math.floor((randomNumber - 0.5) * 26);
    }

    return String.fromCharCode(charCode);
  }

  for (let i = 0; i < texts.length; i++) {
    contentArray.push("&nbsp;");
  }

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const animate = async (preCharCount, writeDelay, writeCharDelay) => {
    for (let i = 0; i < texts.length; i++) {
      await delay(writeDelay);
      if (texts[i]==' ') {
        contentArray[i] = "&nbsp;";
        continue;
      }
      for (let j = 0; j < preCharCount; j++) {
        await delay(writeCharDelay);
        if (preCharCount - 1 != j) {
          contentArray[i] = getRandomAsciiLetter();
        } else {
          contentArray[i] = texts[i];
        }
      }
    }
  };

  animate(8, 50, 30);
</script>

<div class="title">
  {#each contentArray as char}
    <span class="title-char">{@html char}</span>
  {/each}
</div>

<style>
  .title-char:hover {
    display: inline-block;
    animation: animateChar ease 1s;
  }

  .title {
    text-align: center;
    color: #f5f5f5;
    text-shadow: 1px 1px 1px black,
        1px 2px 1px black,
        1px 3px 1px black,
        1px 4px 1px black,
        1px 5px 1px black,
        1px 6px 1px black,
        1px 7px 1px black,
        1px 8px 1px black,
        1px 9px 1px black,
        1px 10px 1px black,
    1px 18px 6px rgba(16,16,16,0.4),
    1px 22px 10px rgba(16,16,16,0.2),
    1px 25px 35px rgba(16,16,16,0.2),
    1px 30px 60px rgba(16,16,16,0.4);
  }

  @keyframes animateChar {
    30% {
      transform: scaleY(0.8);
    }
    40% {
      transform: scaleY(1);
    }
    70% {
      transform: scaleY(1.4);
    }
    90% {
      transform: scaleY(1.2);
    }
    100% {
      transform: scaleY(1);
    }

  }
</style>
