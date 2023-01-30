import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="https://m.media-amazon.com/images/I/61VY4C9qXDL.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://preview.redd.it/0pdtr3rgasv81.png?width=955&format=png&auto=webp&s=664e8eb919962529ee2c02d122b211099d0ffee7" />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
    );
  }
}

ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));

export default DemoCarousel;
