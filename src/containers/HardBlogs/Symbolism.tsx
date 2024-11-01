// Symbolism.tsx
import React from "react";
import Header from "../../components/organism/Header";

const Symbolism: React.FC = () => {
  return (
    <React.Fragment>
      <div style={styles.container}>
        <h1 style={styles.title}>Symbolism of Koi Fish in Feng Shui</h1>
        <p style={styles.intro}>
          In Feng Shui, koi fish symbolize various positive attributes and
          energies. The koi is admired not only for its beauty but also for its
          resilience and ability to swim against strong currents. The symbolism
          of koi fish varies based on their color, behavior, and the number of
          fish depicted. Here's a comprehensive guide on the meaning of koi fish
          in Feng Shui and their symbolic importance.
        </p>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>1. Strength and Perseverance</h2>
          <p style={styles.text}>
            Koi fish are known for their ability to swim upstream, often against
            strong currents. This characteristic represents{" "}
            <strong>strength, determination, and perseverance</strong>. In Feng
            Shui, placing a koi fish painting or statue in your home or office
            can inspire you to overcome obstacles and achieve your goals, no
            matter the challenges.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>2. Wealth and Prosperity</h2>
          <p style={styles.text}>
            Koi fish are often associated with wealth and prosperity. The
            Chinese word for fish, "yu" (鱼), sounds similar to the word for
            abundance. Therefore, koi fish symbolize{" "}
            <strong>financial success and good fortune</strong>. In Feng Shui,
            it is common to display artwork or a pond filled with koi to attract
            wealth and abundance into one's life.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>3. Love and Relationships</h2>
          <p style={styles.text}>
            A pair of koi fish, especially when depicted swimming together, is a
            popular symbol of <strong>love, fidelity, and harmony</strong>{" "}
            between partners. In Feng Shui, this symbolizes a harmonious and
            long-lasting relationship. It is common for couples to have koi
            paintings or decor items in their bedroom to enhance love and
            romantic energy.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>4. Transformation and Growth</h2>
          <p style={styles.text}>
            According to Chinese legend, koi fish that swim upstream and reach
            the Dragon Gate transform into dragons. This story symbolizes{" "}
            <strong>transformation, growth, and spiritual evolution</strong>. By
            placing koi fish symbols in areas of your home that relate to
            personal development or spiritual growth, such as meditation spaces,
            you invite energy that promotes positive changes and transformations
            in life.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>5. Success and Ambition</h2>
          <p style={styles.text}>
            The journey of the koi fish, swimming against the current to reach
            its goal, is a representation of{" "}
            <strong>success and ambition</strong>. In Feng Shui, koi fish
            encourage individuals to remain ambitious and persistent in their
            endeavors. Having koi fish imagery in your workspace or home office
            is believed to promote professional growth and success in business.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>6. Peace and Harmony</h2>
          <p style={styles.text}>
            Koi fish are also symbols of <strong>peace and tranquility</strong>.
            When depicted in calm waters, koi fish can represent serenity and
            balance. This is often used in Feng Shui to bring a sense of calm
            and relaxation to the home. Displaying artwork of koi fish swimming
            peacefully can help create a soothing atmosphere conducive to stress
            relief and meditation.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>7. Symbolism Based on Color</h2>
          <p style={styles.text}>
            Different koi fish colors also carry specific meanings in Feng Shui:
          </p>
          <ul style={styles.list}>
            <li>
              <strong>Gold (Yamabuki)</strong>: Represents wealth, prosperity,
              and success. These koi are often used to attract financial
              blessings.
            </li>
            <li>
              <strong>Red (Kohaku)</strong>: Symbolizes strength, passion, and
              energy. It is used to energize spaces and promote career growth.
            </li>
            <li>
              <strong>Black (Karasu)</strong>: Stands for overcoming adversity
              and serves as a protector against negative energies.
            </li>
            <li>
              <strong>Blue (Asagi)</strong>: Represents peace and tranquility.
              These koi are often associated with calmness and harmony in
              relationships.
            </li>
            <li>
              <strong>White (Platinum Ogon)</strong>: Symbolizes purity and
              spiritual transformation. It is ideal for spaces aimed at
              spiritual growth or meditation.
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>8. Symbolism Based on Number</h2>
          <p style={styles.text}>
            In Feng Shui, the number of koi fish displayed also holds
            significance:
          </p>
          <ul style={styles.list}>
            <li>
              <strong>One Koi Fish</strong>: Represents independence and
              strength. It is often used by those pursuing individual success or
              personal growth.
            </li>
            <li>
              <strong>Two Koi Fish</strong>: This combination is symbolic of
              love and harmonious relationships, enhancing the bond between
              partners.
            </li>
            <li>
              <strong>Nine Koi Fish</strong>: The number nine is considered
              lucky in Chinese culture. Having nine koi fish is believed to
              bring ultimate prosperity and wealth.
            </li>
            <li>
              <strong>Eight Red and One Black Koi</strong>: This specific
              combination is used to attract wealth while protecting against bad
              luck or negative energies.
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>9. Placement of Koi Fish Symbols</h2>
          <p style={styles.text}>
            Proper placement of koi fish symbols is essential in Feng Shui. They
            are often placed in areas associated with wealth, such as the
            southeast corner of a home or office. Koi fish ponds are also common
            in gardens, promoting the flow of positive energy throughout the
            space. Additionally, placing koi artwork in entryways can invite
            abundance and success into the home.
          </p>
        </section>
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
  list: {
    paddingLeft: "20px",
    lineHeight: "1.6",
  },
};

export default Symbolism;
