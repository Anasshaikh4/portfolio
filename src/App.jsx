import React from "react";
import { motion } from "framer-motion";
import ColorPaletteNav from "./components/ColorPaletteNav";
import AboutPage from "./components/aboutPage/aboutPage"
import "./App.css";
import { p } from "framer-motion/client";

const sections = ["about", "projects", "experience", "contact"];

function App() {
  return (
    <div className="App">
      <ColorPaletteNav />

      <main>
        {sections.map((sec) => (
          <motion.section
            key={sec}
            id={sec}
            className="section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2>{sec[0].toUpperCase() + sec.slice(1)}</h2>
            {sec === "about" && (
              <> 
              <p>This is About section.</p>
              <AboutPage />
              </>
            )}
            {sec === "projects" && (
              <> 
              <p>This is projects section.</p>
              </>
            )}
            {sec === "experience" && (
              <> 
              <p>This is experience section.</p>
              </>
            )}
            {sec === "contact" && (
              <> 
              <p>This is contact section.</p>
              </>
            )}
                 
            
            
          </motion.section>
        ))}
      </main>
    </div>
  );
}

export default App;
