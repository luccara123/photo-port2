// app.js is the center of the application.
// You need to import React in every component file.
// import any images or CSS you want to use at the top.

import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";
// app
function App() {
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [contactSelected, setContactSelected] = useState(false);

  const [currentCategory, setCurrentategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
//New props also cause components to re-render. 

// if(!contactSelected) {
 // <>
 // <Gallery currentCategory={currentCategory}></Gallery>
 // <About></About>
//</> 
//} else {
//  <ContactForm></ContactForm>
//}

 // same as React.createElement("div", {}, [
      // React.createElement("h1", {}, "Hello!")
    //])

