
export function Article(props) {
console.log("ARTICLE:", props.data);
  const { author, text, bigText } = props.data;
  return (
    <li key={props.key} className="article">
      <p className="news__author">Auth: {author}</p>
      <p className="news__text">Text: {text}</p>
      <p className="news__big-text">bTxt: {bigText}</p>
      <p>_______________________</p>
    </li>
  );
}
