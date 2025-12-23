import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Designed to keep information clear and connected</h1>
      </section>
      <section className="spotlight">
        <div className="row">
          <div className="img">
            <img src="./img1.jpg" alt="A random image" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <h2>A cleaner way to handle incoming updates</h2>
              <p>
                Instead of showing every message or notufication instantly, the
                app groups related items and presents them in an organied panel.
                It keeps your workspace calm, even when activity spikes
              </p>
            </div>
          </div>
          <div className="col">
            <div className="img">
              <img src="./img-2.jpg" alt="Another random image" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="img">
              <img src="./img-3.jpg" alt="Just another random image" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <h2>Built for increasing information demand.</h2>
              <p>
                Whether it is files, notes, or incoming messages, the app sorts
                and priorotises items automatically. It prevents clutter and
                helps maintain clarity during busy periods.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="img">
            <img src="./img1.jpg" alt="A random image" />
          </div>
        </div>
        <div className="svg-path">
          <svg
            width="1284"
            height="2616"
            viewBox="0 0 1284 2616"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M624.546 46.4264C624.546 46.4264 240.115 2.56225 146.083 401.327C52.0503 800.091 690.924 939.659 690.924 939.659C690.924 939.659 2026.74 1394.25 524.984 1438.11C-976.771 1481.98 1570.4 2775.97 1075.35 2068.16C580.298 1360.36 253.949 2604.5 253.949 2604.5"
              stroke="#FF5FDA"
              stroke-width="90"
            />
          </svg>
        </div>
      </section>
      <section className="outro">
        <h1>Clearer organization ready for whatever comes next</h1>
      </section>
    </>
  );
}
