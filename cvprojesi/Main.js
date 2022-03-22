/*import DuzenlemeTarihi from "./DuzenlemeTarihi";*/
import "./Main.css";
import Card from "./Card";
import KisiselBilgiler from "./KisiselBilgiler";
import EgitimBilgileri from "./EgitimBilgileri";
import IsDeneyimleri from "./IsDeneyimleri";





function Main(probs) {


  return (
      <Card>
    <Card className="expense-item">
     <div>
     <div>{probs.Adi}</div>
     <div>{probs.Soadi}</div>
     <div>{probs.OgrenciNumarasi}</div>
     </div>
     </Card>

     <Card className="expense-item">
     <div>{probs.OkulAdi}</div>
     <div>{probs.BolumAdi}</div>
     <div>{probs.MezunyetTarihi}</div>
     </Card>

     <Card className="expense-item">
     <div>{probs.CalistigiKurum}</div>
     <div>{probs.Gorevi}</div>
     <div>{probs.AyrilmaTarihi}</div>
     </Card>
     </Card>
    
  );
}

export default Main;




/*
function VeyselDurum(probs) {


    return (
      <Card className="expense-item">
  
        <ExpenseDate date={probs.date} />
        <div className="expense-item__description">
          <h2>{probs.title}</h2>
          <div className="expense-item__price">{probs.amount}$</div>
        </div>
      </Card>
    );
  }
  
  export default VeyselDurum;

      <KisiselBilgiler Adi={probs.Adi}/>
      <KisiselBilgiler Soyadi={probs.Soyadi}/>
      <KisiselBilgiler OgrenciNumarasi={probs.OgrenciNumarasi}/>
      <IsDeneyimleri CalistigiKurum={probs.CalistigiKurum}/>
      <IsDeneyimleri Gorevi={probs.Gorevi}/>
      <IsDeneyimleri AyrilmaTarihi={probs.AyrilmaTarihi}/>
      <EgitimBilgileri OkulAdi={probs.OkulAdi}/>
      <EgitimBilgileri BolumAdi={probs.BolumAdi}/>
      <EgitimBilgileri MezuniyetTarihi={probs.MezuniyetTarihi}/>





  */