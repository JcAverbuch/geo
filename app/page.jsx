const colors = ["#df4872", "#de6a32", "#bb8b00", "#40995e", "#348cc1", "#7161c4", "#b54ab4"];

export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <h1 aria-label="everything is fine!">
          <span aria-hidden="true">
            {Array.from("everything is fine!").map((letter, index) => (
              <span key={index} style={{ color: colors[index % colors.length] }}>{letter}</span>
            ))}
          </span>
        </h1>
      </header>
      <section className="map-frame" aria-label="Garmin location map">
        <iframe
          src="https://share.garmin.com/6YKP47WHZB"
          title="Julia’s Garmin MapShare"
          allowFullScreen
        />
      </section>
    </main>
  );
}
