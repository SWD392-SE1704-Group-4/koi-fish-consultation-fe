// SeasonalKoiPondCare.tsx
import React from "react";
import Header from "../../components/organism/Header";

const SeasonalKoiPondCare: React.FC = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <div style={styles.container}>
        <h1 style={styles.title}>Seasonal Koi Pond Care Tips</h1>
        <p style={styles.intro}>
          Maintaining a koi pond requires attention and care throughout the
          year. Each season brings different challenges and needs for your koi
          fish and their environment. Proper care during these times ensures the
          health, vitality, and beauty of your pond and fish. Below are some
          detailed tips for each season to help you provide the best care for
          your koi pond.
        </p>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>1. Spring Care: Preparing for Growth</h2>
          <p style={styles.text}>
            Spring is the season when koi become more active as the water
            temperature rises. It is crucial to clean your pond thoroughly by
            removing any debris or dead plant material accumulated during
            winter. Check the pond equipment, such as the pump and filter, to
            ensure they are functioning properly. As koi start feeding again,
            gradually increase the amount of food, choosing high-quality options
            that promote growth and immune health.
          </p>
          <ul style={styles.list}>
            <li>Clean out debris and dead plants.</li>
            <li>Inspect and repair pond equipment.</li>
            <li>Gradually increase feeding with high-quality koi food.</li>
            <li>Monitor water quality and adjust pH levels if necessary.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>
            2. Summer Care: Maintaining Optimal Conditions
          </h2>
          <p style={styles.text}>
            During summer, koi are most active, and their growth rate increases.
            It is important to monitor the water temperature and oxygen levels,
            as warmer temperatures can reduce oxygen content. Adding aquatic
            plants can help provide shade and maintain cooler water
            temperatures. Regularly test the water for ammonia, nitrites, and pH
            levels to ensure a balanced environment. Also, consider installing
            an aerator or additional pump to increase oxygenation.
          </p>
          <ul style={styles.list}>
            <li>Monitor and regulate water temperature.</li>
            <li>Ensure sufficient oxygen levels with aeration devices.</li>
            <li>Regularly test and maintain water quality.</li>
            <li>Add aquatic plants to provide shade and cool the water.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>3. Fall Care: Preparing for Winter</h2>
          <p style={styles.text}>
            Fall is a critical time to prepare your koi pond for the winter
            months. Start by reducing feeding as temperatures drop, as koi's
            metabolism slows down. Clean the pond of fallen leaves and debris to
            prevent decaying matter from affecting water quality. Install a pond
            net to keep leaves out and perform any necessary maintenance on
            filters and pumps. Test water parameters and make adjustments to
            stabilize pH and minimize algae growth.
          </p>
          <ul style={styles.list}>
            <li>Reduce feeding as the water temperature decreases.</li>
            <li>Remove fallen leaves and debris from the pond.</li>
            <li>Install a pond net to prevent debris buildup.</li>
            <li>Test and stabilize water quality parameters.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>4. Winter Care: Keeping Koi Safe</h2>
          <p style={styles.text}>
            During winter, koi enter a state of semi-hibernation as the water
            temperature drops. Stop feeding entirely when temperatures fall
            below 50°F (10°C) as koi’s metabolism slows significantly. Install a
            pond heater or de-icer to maintain an opening in the ice, ensuring
            that harmful gases can escape and oxygen can enter. Reduce the
            operation of the filtration system if needed but ensure there is
            enough water movement to prevent freezing.
          </p>
          <ul style={styles.list}>
            <li>
              Stop feeding when water temperature drops below 50°F (10°C).
            </li>
            <li>Use a pond heater or de-icer to keep an opening in the ice.</li>
            <li>
              Reduce filtration but maintain water circulation to prevent
              freezing.
            </li>
            <li>
              Monitor koi behavior to ensure they remain healthy during
              hibernation.
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>5. General Year-Round Maintenance</h2>
          <p style={styles.text}>
            Year-round maintenance is crucial for a healthy koi pond. Regularly
            clean and maintain pond equipment to ensure optimal performance.
            Test water quality frequently to detect any changes early and make
            adjustments as needed. Keep an eye on your koi fish for signs of
            illness or distress, such as changes in behavior, appearance, or
            appetite. A balanced pond environment will help koi thrive
            throughout the year.
          </p>
          <ul style={styles.list}>
            <li>Regularly inspect and clean pond equipment.</li>
            <li>Test water quality frequently and adjust as necessary.</li>
            <li>Monitor koi health and behavior for early signs of illness.</li>
            <li>
              Maintain a balanced pond environment for consistent koi health.
            </li>
          </ul>
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

export default SeasonalKoiPondCare;
