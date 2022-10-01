import React from "react";
import "./Faqs.css";

const Faqs = () => {
  return (
    <div className="faqs-area">
      <h3 className="text-center faqs-title  pb-3 border-1 border-bottom">
        FAQs
      </h3>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              How does React work?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              React creates a virtual DOM as a soft copy of the original DOM, if
              something changes in the UI or if it is interactive, it compares
              the virtual DOM with the original DOM and updates the original
              DOM.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              What are the differences between props and state?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Props are used to pass data from one component to another. The
              state is a local data storage that is local to the component only
              and cannot be passed to other components. The this setState
              property is used to update the state values in the component.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              What is the use of useEffect other than fetch?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              React is mainly used to build ui. Other than creating ui, the
              tasks that are done are called side effects of React. And the work
              of this side effect is done with useEffect. fetch / data loading a
              side effect of React. <br />
              useEffect is used other than fetch:
              <br />
              1. Set time <br />
              2. Direct DOM manipulation <br />
              etc
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
