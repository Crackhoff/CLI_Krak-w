import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  const { formSlug, showSpinner = "1" } = {
    formSlug: "your-form-slug",
    showSpinner: "1"
  };
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://forms.office.com/e/477jvjDXLD?origin=lprLink";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
    <iframe width="800px" height="720px" src="https://forms.office.com/e/477jvjDXLD?embed=true" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
      </header>
    </div>
  );
}

export default App;
