// Unicode transformation mappings for bold and italic
const boldMap = {
    a: '𝗮', b: '𝗯', c: '𝗰', d: '𝗱', e: '𝗲', f: '𝗳', g: '𝗴', h: '𝗵', i: '𝗶',
    j: '𝗷', k: '𝗸', l: '𝗹', m: '𝗺', n: '𝗻', o: '𝗼', p: '𝗽', q: '𝗾', r: '𝗿',
    s: '𝘀', t: '𝘁', u: '𝘂', v: '𝘃', w: '𝘄', x: '𝘅', y: '𝘆', z: '𝘇',
    A: '𝗔', B: '𝗕', C: '𝗖', D: '𝗗', E: '𝗘', F: '𝗙', G: '𝗚', H: '𝗛', I: '𝗜',
    J: '𝗝', K: '𝗞', L: '𝗟', M: '𝗠', N: '𝗡', O: '𝗢', P: '𝗣', Q: '𝗤', R: '𝗥',
    S: '𝗦', T: '𝗧', U: '𝗨', V: '𝗩', W: '𝗪', X: '𝗫', Y: '𝗬', Z: '𝗭',
    0: '𝟬', 1: '𝟭', 2: '𝟮', 3: '𝟯', 4: '𝟰', 5: '𝟱', 6: '𝟲', 7: '𝟳', 8: '𝟴', 9: '𝟵',
  };
  
  const italicMap = {
    a: '𝘢', b: '𝘣', c: '𝘤', d: '𝘥', e: '𝘦', f: '𝘧', g: '𝘨', h: '𝘩', i: '𝘪',
    j: '𝘫', k: '𝘬', l: '𝘭', m: '𝘮', n: '𝘯', o: '𝘰', p: '𝘱', q: '𝘲', r: '𝘳',
    s: '𝘴', t: '𝘵', u: '𝘶', v: '𝘷', w: '𝘸', x: '𝘹', y: '𝘺', z: '𝘻',
    A: '𝘈', B: '𝘉', C: '𝘊', D: '𝘋', E: '𝘌', F: '𝘍', G: '𝘎', H: '𝘏', I: '𝘐',
    J: '𝘑', K: '𝘒', L: '𝘓', M: '𝘔', N: '𝘕', O: '𝘖', P: '𝘗', Q: '𝘘', R: '𝘙',
    S: '𝘚', T: '𝘛', U: '𝘜', V: '𝘝', W: '𝘞', X: '𝘟', Y: '𝘠', Z: '𝘡',
    0: '𝟢', 1: '𝟣', 2: '𝟤', 3: '𝟥', 4: '𝟦', 5: '𝟧', 6: '𝟨', 7: '𝟩', 8: '𝟪', 9: '𝟫',
  };
  
  // Function to apply Unicode transformation
  const unicodeTransform = {
    bold: (text) => text.replace(/./g, (char) => boldMap[char] || char),
    italic: (text) => text.replace(/./g, (char) => italicMap[char] || char),
  };
  
  // Input field and output container
  const textInput = document.getElementById('textInput');
  const outputContainer = document.getElementById('outputContainer');
  
  // Function to generate formatted text
  function generateFormattedText() {
    const userInput = textInput.value;
    outputContainer.innerHTML = ''; // Clear previous output
  
    if (userInput.trim() === '') return;
  
    // Add formatted text for bold and italic
    addFormattedText(userInput, 'Bold', 'bold');
    addFormattedText(userInput, 'Italic', 'italic');
  }
  
  // Function to create and append formatted text
  function addFormattedText(text, label, format) {
    const div = document.createElement('div');
    div.className = 'output';
  
    const styledText =
      format === 'bold'
        ? unicodeTransform.bold(text)
        : format === 'italic'
        ? unicodeTransform.italic(text)
        : text;
  
    div.innerHTML = `
      <span>${label}: ${styledText}</span>
      <button onclick="copyToClipboard('${styledText}')">Copy</button>
    `;
  
    outputContainer.appendChild(div);
  }
  
  // Function to copy text to clipboard
  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => alert('Copied to clipboard!'))
      .catch((err) => alert('Failed to copy: ' + err));
  }
  
  // Event listener for input changes
  textInput.addEventListener('input', generateFormattedText);
  