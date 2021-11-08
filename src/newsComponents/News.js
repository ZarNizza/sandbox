import { Article } from "./Article";

export function News(props) {
  // console.log("NEWS: ", props.data);
  const data1 = props.data;
  const renderNews = () => {
    let newsTemplate = null;

    if (data1.length) {
      newsTemplate = data1.map((item) => {
        console.log("ITEM= ", item);
        return <Article key={item.id} data={item} />;
      });
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>;
    }
    return newsTemplate;
  };

  return (
    <div className="news">
      {renderNews()}
      {data1.length ? (
        <strong className={"news__count"}>
          Всего записей: {data1.length}
        </strong>
      ) : null}
    </div>
  );
}
