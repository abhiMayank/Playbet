import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const quotes = [
  {
    image:
      "https://economictimes.indiatimes.com/thumb/height-450,width-600,imgsize-37478,msid-86712570/football.jpg?from=mdr",
  },
  {
    image:
      "https://media.istockphoto.com/photos/closeup-of-red-cricket-ball-and-bat-sitting-on-grass-picture-id177427917?k=20&m=177427917&s=612x612&w=0&h=kr-FOxME8KOnnhYsuR6WFAfB-Hv_ch20Fz5xnzeSU10=",
  },
  {
    image:
      "https://media.gettyimages.com/photos/ball-and-basketball-court-picture-id183256716?s=612x612",
  },
];

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        borderStyle: "dotted",
        // height: "100%",
        minHeight: "100%",
      }}
    >
      <Header />
      {/* <div
        style={{
          marginTop: 100,
          width: "50%",
          alignSelf: "center",
        }}
      >
        <Carousel
          dynamicHeight
          autoPlay={true}
          centerMode
          stopOnHover
          infiniteLoop
        >
          <div>
            <img src={quotes[0].image} />
          </div>
          <div>
            <img src={quotes[1].image} />
          </div>
          <div>
            <img src={quotes[2].image} />
          </div>
        </Carousel>
      </div> */}
    </div>
  );
}

export default App;
