import Card from "../Card/Card";
import style from "../Cards/cards.module.css";

const Cards = ({ characters, onClose }) => {
  console.log(characters);
  return (
    <div className={style.character}>
      {characters.map((char) => {
        return (
          <Card
            key={char?.id}
            id={char?.id}
            name={char?.name}
            species={char?.species}
            gender={char?.gender}
            image={char?.image}
            origin={char?.origin.name}
            status={char?.status}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};

export default Cards;
