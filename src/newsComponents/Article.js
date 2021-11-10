
export function Article(key, data) {
console.log("ARTICLE:", data);
  const { author, text, bigText } = data;
  return (
    <li key={key} className="article">
      <p className="news__author">Auth: {author}</p>
      <p className="news__text">Text: {text}</p>
      <p className="news__big-text">bTxt: {bigText}</p>
      <p>_______________________</p>
    </li>
  );
}
