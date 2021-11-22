import toast from "../util/toast.js";

const sentence_text = document.querySelector('.sentence-box>.sentence-text span'),
  sentence_author = document.querySelector('.sentence-box>.from span>i'),
  newSentenceBtn = document.querySelector('button.new-sentence'),
  loadDiv = document.querySelector('.sentence-box .loading'),
  root = document.querySelector(':root')

const SENTENCE_API = 'https://v1.hitokoto.cn/',
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
  let response = await fetch('https://v1.hitokoto.cn/').catch(e => {
    toast.fail(e)
  });
  if (response.ok) {
    // toast.success('okokok');
    let json = await response.json();
    setTimeout(() => {loadDiv.style.visibility = 'hidden'}, 300)
    root.style.setProperty("--theme", THEME_COLORS[sample()]);
    return json
  } else {
    toast.fail("HTTP-Error: " + response.status);
  }
}


newSentenceBtn.addEventListener('click', () => {
  loadDiv.style.visibility = 'visible';
  getSentence().then(res => {
    sentence_text.textContent = res.hitokoto;
    sentence_author.textContent = res.from
  })
})



newSentenceBtn.click()