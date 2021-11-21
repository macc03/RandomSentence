const sentence_text = document.querySelector('.sentence-box>.sentence-text span'),
  sentence_author = document.querySelector('.sentence-box>.from span>i'),
  newSentenceBtn = document.querySelector('button.new-sentence'),
  root = document.querySelector(':root')


console.log(sentence_author, newSentenceBtn);

const SENTENCE_API = 'https://v1.hitokoto.cn/';
THEME_COLORS = [
      '#99CC99',
      '#CCFF99',
      '#FFCCCC',
      '#FFCC99',
      '#99CCCC',
      '#99CC66',
      '#666699',
      '#0066CC'
]

let sample = () =>{
  let current_color = root.style.getPropertyValue('--theme'); 
  let random = Math.floor(Math.random() * THEME_COLORS.length);
  return THEME_COLORS[random] === current_color ? sample() : random
}

let getSentence = async () => {
  let response = await fetch('https://v1.hitokoto.cn/');
  if (response.ok) {
    json = await response.json();
    root.style.setProperty("--theme", THEME_COLORS[sample()]);
    return json
  } else {
    alert("HTTP-Error: " + response.status);
  }
}


newSentenceBtn.addEventListener('click', () => {
  getSentence().then(res => {
    console.log(res)
    sentence_text.textContent = res.hitokoto;
    sentence_author.textContent = res.from
  })
})



newSentenceBtn.click()