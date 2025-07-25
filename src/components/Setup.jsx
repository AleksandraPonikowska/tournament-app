import React, { useState } from "react";

function Setup({onStart}) {
  const [contestants, setContestants] = useState("miau miau https://img.freepik.com/darmowe-zdjecie/maly-kot-siedzi-na-trawie_1150-17019.jpg?semt=ais_hybrid&w=740\nkotek https://www.pastelowelove.pl/userdata/public/gfx/5582/kotek-mruczek--naklejka.-naklejka-dla-dzieci.-dekoracje-pokoju.jpg\ntruskawka https://zielonyogrod.pl/hpeciai/0fff38b78a57407f146c11926af92cee/pol_pl_10-szt-Truskawka-Hossa-powtarza-owocowanie-Sadzonki-184779_1.jpg\nhopsa hopsa https://milavet.pl/wp-content/uploads/2024/09/MILAVET.PL-10-1.jpg");

    const handleSubmit = (e) => {
      e.preventDefault();

      const parsed = contestants
        .split("\n")
        .map((line, i) => {
          const words = line.trim().split(" ");
          const image = words.pop();
          const name = words.join(" ");

          return { name, image, id: i };
        });

      function isPowerOfTwo(n) {
        return n > 0 && (n & (n - 1)) === 0;
      }

      while (!isPowerOfTwo(parsed.length)) {
        parsed.push({
          name: "???",
          image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
          id: parsed.length
        });
      }

      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

      shuffle(parsed);


      const placeholders = parsed.map((_, i) => ({
        name: "???",
        image: null,
        id: i
      }));

      const fullList = placeholders.concat(parsed);

      onStart(fullList);
    };

  return (
    <div>
      <h2>ENTER CONTESTANTS</h2>
      <form onSubmit={handleSubmit}>
        <label>
            <textarea
                type="text"
                rows = {8}
                value={contestants}
                onChange={(e) => setContestants(e.target.value)}
                placeholder=""
            />
        </label>
        <p>
          <button type="submit">START</button>
        </p>

        </form>
    </div>
  );
}

export default Setup;
