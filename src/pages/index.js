import React, { Component } from "react";
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';

import Layout from "../components/layout";
import jollof from "../images/jollof.jpg";
import SEO from "../components/seo";

class IndexPage extends Component {

  classifyImg = () => {
    // the link to your model provided by Teachable Machine export panel
    const URL = "https://teachablemachine.withgoogle.com/models/AzxCd4Lmv/";
    let model, labelContainer, maxPredictions;

    // Load the image model and setup the webcam
    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        console.log(modelURL);

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // append elements to the DOM
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < 3; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }

        await predict();
    }

    // run the webcam image through the image model
    async function predict() {
        // predict can take in an image, video or canvas html element
        let jollof = document.getElementById("image");
        console.log(jollof);
        const prediction = await model.predict(jollof);
        for (let i = 0; i < 3; i++) {
            const classPrediction = prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }
    }

    init();
  
  };

  componentDidMount(){
    // once the component has mount, start the classification
    this.classifyImg();
  }

  render() {

    return (
      <Layout>
        <SEO title="Home" />
        <div className="left">
          <h1>Hey, Daiquan is an on going research project that aims to use machine learning to create a library that understands black culture*. It aims to serve as a framework for creatives and artists to make work with.</h1>
          <h1>It'll cover areas such as Image Recognition,  Natural Language Processing, and Facial Recognition.</h1>
        </div>
        <div className="right">
          <div className="daiquan">
            <img src={ jollof } id="image" width="300" alt="Daiquan Food" />
            <div id="label-container"></div>
          </div>
          <span className="source"></span>
        </div>
        
      </Layout>
    )
  }
}

export default IndexPage
