import './App.css';

function App() {
  const myName = "Марк";

  const favSite = {
    name: "(99Spokes)",
    url: "https://99spokes.com/en-EU/bikes",
  };

  const n1 = 111;
  const n2 = 222;
  const s = n1 + n2;

  const c = ["Червоний", "Синій", "Зелений"];

  return (
    <div className="App">
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img
        src="https://i1.sndcdn.com/avatars-IYNSrprTRSvzcndM-d8fThQ-t240x240.jpg"
        alt="UwU"
        width="333"
      />
      <p>
        Мій улюблений сайт:{"99 Spokes"}
        <a href={favSite.url}>
          {favSite.name}
        </a>
      </p>

      <p>
        Сума {n1} + {n2} = {s}
      </p>

      <ul>
        {c.map((c, i) => (
          <li>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
