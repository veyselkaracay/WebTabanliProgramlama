import Main from "./Main.js";
import "./KisiselBilgiler.css";


function KisiselBilgiler (probs){
return(
    <div className="expenses">

      <Main
        Adi={probs.items[0].Adi}
        Soyadi={probs.items[0].Soyadi}
        OgrenciNumarasi={probs.items[0].OgrenciNumarasi}
      />
    </div>



)

}

export default KisiselBilgiler;




