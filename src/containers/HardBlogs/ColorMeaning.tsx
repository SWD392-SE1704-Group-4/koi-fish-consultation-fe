// ColorMeaning.tsx
import React from "react";
import Header from "../../components/organism/Header";

const ColorMeaning: React.FC = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <div style={styles.container}>
        <h1 style={styles.title}>
          The Meaning of Koi Fish Colors in Feng Shui
        </h1>
        <p style={styles.intro}>
          Feng Shui, an ancient Chinese practice of harmonizing energies, often
          incorporates symbols of koi fish to enhance prosperity, luck, and
          balance in one's environment. The color of koi fish holds significant
          meaning, each representing different aspects of life and luck. Here's
          an in-depth look at the meanings associated with various koi fish
          colors.
        </p>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>1. Kohaku (Red and White)</h2>
          <p style={styles.text}>
            Kohaku koi are among the most popular and classic varieties. They
            have white bodies with red patterns. In Feng Shui, these koi
            symbolize <strong>career success and prosperity</strong>. The red
            represents strength, passion, and vitality, while the white
            signifies purity and clarity of purpose. Together, they create a
            balance, promoting <strong>ambition and perseverance</strong>,
            especially for those seeking advancement in their professional life.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>2. Kumonryu (Black)</h2>
          <p style={styles.text}>
            Kumonryu koi are entirely black or have white patterns, resembling
            swirling clouds. These koi are symbolic of life transformations and
            adaptability. They reflect the ability to embrace change and to flow
            smoothly through difficult periods. In Feng Shui, black also
            symbolizes protection and mystery, adding an aura of power and
            resilience. Placement Tips: Positioning Kumonryu koi representations
            in the north-west area of your home can strengthen adaptability and
            provide stability during times of uncertainty.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>3. Ogon (Gold)</h2>
          <p style={styles.text}>
            Ogon koi, with their solid metallic gold color, are associated with
            wealth and prosperity. The golden hue symbolizes abundance, success,
            and opportunities. In Feng Shui, gold is the element of metal, which
            is closely linked to financial gain and achievement. Displaying
            images of Ogon koi in your space can attract prosperity and improve
            financial stability. Placement Tips: The best place for Ogon koi
            depictions is the southeast corner of your home or office, known as
            the wealth sector in Feng Shui.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>4. Asagi (Blue)</h2>
          <p style={styles.text}>
            Asagi koi have blue scales with red accents along their bellies and
            fins. This color combination represents calmness and serenity,
            promoting harmony in relationships and tranquility in one’s life.
            Blue is also tied to health and stability. In Feng Shui, blue koi
            are believed to balance emotional energies and to foster clear
            communication. Placement Tips: Place Asagi koi images in the east or
            southeast areas of your space to enhance family health and harmony.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>5. Shiro Utsuri (White and Black)</h2>
          <p style={styles.text}>
            Shiro Utsuri koi are white with black patches, symbolizing balance
            and harmony. The contrast between black and white reflects the
            concept of Yin and Yang, where opposite forces coexist to create
            harmony. These koi are ideal for promoting peace, spiritual balance,
            and introspection. Placement Tips: A Shiro Utsuri koi placed in the
            center of your home or meditation space can help balance energies
            and bring a sense of calm.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>6. Yamabuki (Yellow)</h2>
          <p style={styles.text}>
            Yamabuki koi, with their bright yellow hue, are associated with
            fortune and new beginnings. Yellow is considered an auspicious color
            in Feng Shui, symbolizing optimism, happiness, and creativity.
            Yamabuki koi are believed to attract positive energy and good luck,
            making them ideal for starting new ventures or seeking fresh
            opportunities. Placement Tips: Position Yamabuki koi symbols in the
            south area of your living space to attract recognition and good
            fortune.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>7. Benigoi (Solid Red)</h2>
          <p style={styles.text}>
            The Benigoi, a solid red koi, symbolizes power, passion, and
            courage. Red is a strong and vibrant color in Feng Shui,
            representing the fire element, which brings energy and motivation.
            Benigoi koi are ideal for those needing a boost in energy,
            confidence, or motivation. Placement Tips: To ignite passion
          </p>
        </section>
        {/* You can add more sections here for other koi fish colors */}
      </div>
    </React.Fragment>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
  },
  intro: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#444",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#555",
  },
};

export default ColorMeaning;
