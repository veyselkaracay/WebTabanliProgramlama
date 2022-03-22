

function App() {
  
  const KisiselBilgiler = [
    {
      isim: "VEYSEL",
      soyisim: "KARAÇAY",
      ogrencinumarasi: "1201602812",
    }
  ];

  const EgitimBilgileri = [
    {
      okuladi: "TRAKYA üNİVERSİTESİ",
      bolumadi: "BİLGİSAYAR MÜHENDİSLİĞİ",
      mezuniyettarihi: "01/07/2022",
    }
  ];

  const IsDeneyimleri = [
    {
      calistigikurum: "X TELEKOM",
      gorevi: "MÜHENDİS",
      ayrilmatarihi: "1/3/2022",
    }
  ];

  return (
    <div>
    <KisiselBilgiler items={KisiselBilgiler} />
    <EgitimBilgileri items={EgitimBilgileri} />
    <IsDeneyimleri items={IsDeneyimleri} />
    
</div>
  );
}

export default App;
