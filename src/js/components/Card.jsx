import React from "react";
import '../../styles/index.css'

const Card = () => {
  return (
    <div class="card-style">
      <div class="card">
        <img src="https://st2.depositphotos.com/4211709/7708/i/450/depositphotos_77085751-stock-photo-flower.jpg" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default Card;