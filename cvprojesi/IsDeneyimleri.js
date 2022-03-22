import Main from "./Main";
import "./IsDeneyimleri.css";


function IsDeneyimleri (probs){
return(
    <div className="expenses">

      <Main
        CalistigiKurum={probs.items[0].CalistigiKurum}
        Gorevi={probs.items[0].Gorevi}
        AyrilmaTarihi={probs.items[0].AyrilmaTarihi}
      />
    </div>



)

}

export default IsDeneyimleri;