
import "./Card.css";

function Card(probs){
    //'card ' neden bir boşluk?
    const classes='card '+ probs.className;
return <div className={classes}>{probs.children}</div>;

}
export default Card;


/*ÖDEV
component base yaklaşımla,
kişisel eğitim durumu
iş tecrübeleri
vs.
*/