import Main from "./Main";
import "./EgitimBilgileri.css";


function EgitimBilgileri (probs){
return(
    <div className="expenses">

      <Main
        OkulAdi={probs.items[0].OkulAdi}
        BolumAdi={probs.items[0].BolumAdi}
        MezuniyetTarihi={probs.items[0].MezuniyetTarihi}
      />
    </div>



)

}

export default EgitimBilgileri;