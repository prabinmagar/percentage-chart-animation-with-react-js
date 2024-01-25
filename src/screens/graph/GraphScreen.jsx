import { GraphTitle } from "../../components";
import "./GraphScreen.scss";
import { DATA } from "../../data/data";
import { useEffect, useRef, useState } from "react";
import { PropTypes } from "prop-types";
import { FaCirclePlay } from "react-icons/fa6";

const AnimatedBar = ({ percentValue, startAnimation }) => {
  const progressWrapRef = useRef(null);

  useEffect(() => {
    if (startAnimation) {
      const moveBarFill = () => {
        const getProgressWrapWidth = progressWrapRef.current.offsetWidth;
        const barFill = progressWrapRef.current.querySelector(".bar-fill");
        const barValue = progressWrapRef.current.querySelector(".bar-value");
        const finalWidth = (percentValue / 100) * getProgressWrapWidth;
        const duration = 20000;
        const frames = 60;
        const increment = (finalWidth / duration) * (1000 / frames);
        let currentWidth = 0;
        let currentValue = 0;

        const interval = setInterval(() => {
          currentWidth += increment;
          currentValue = (currentWidth / getProgressWrapWidth) * 100;
          barFill.style.width = `${currentWidth}px`;
          barValue.innerText = `${currentValue.toFixed(1)}%`;

          if (currentWidth >= 80) {
            barValue.style.right = `12px`;
            barValue.style.transform = `translateY(-50%) translateX(0)`;
          }

          if (currentWidth >= finalWidth) {
            clearInterval(interval);
          }
        }, 1000 / frames);
      };

      moveBarFill();
    }
  }, [percentValue, startAnimation]);

  return (
    <div className="bar-wrapper" ref={progressWrapRef}>
      <div className="bar-fill">
        <div className="bar-value">0%</div>
      </div>
    </div>
  );
};

AnimatedBar.propTypes = {
  percentValue: PropTypes.number,
  startAnimation: PropTypes.bool,
};

const GraphScreen = () => {
  const [totalValue, setTotalValue] = useState(0);
  const totalValueRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    if (startAnimation) {
      setTotalValue(DATA.total);
      const incrementValue = () => {
        const duration = 20000;
        const frames = 60;
        const increment = (totalValue / duration) * (1000 / frames);
        let currentValue = 0;

        const interval = setInterval(() => {
          currentValue += increment;
          totalValueRef.current.innerText = numberWithCommas(
            Math.floor(currentValue)
          );

          if (currentValue >= totalValue) {
            totalValueRef.current.innerText = numberWithCommas(totalValue);
            clearInterval(interval);
          }
        }, 1000 / frames);
      };

      incrementValue();
    }
  }, [totalValue, startAnimation]);

  const handleAnimationButton = () => {
    console.log("clicked");
    setStartAnimation(true);
  };

  return (
    <div className="pg-graph">
      <div className="container">
        <div className="graph-top">
          <GraphTitle />
          <button
            type="button"
            className="start-btn"
            onClick={() => handleAnimationButton()}
          >
            <FaCirclePlay size={24} />
          </button>
        </div>
        <div className="graph-view">
          <div className="graph-grid">
            <div className="y-axis">
              <div className="axis-text">Continents</div>
            </div>
            <div>
              <div className="graph-bar-list">
                {DATA.items.map((item) => {
                  return (
                    <div className="bar-item" key={item.id}>
                      <div className="label-wrapper">
                        <div className="bar-label">
                          <div className="label-info">
                            <div className="label-name">{item.name}</div>
                            <div className="label-text">{item.text}</div>
                          </div>
                          <div className="label-img">
                            <img src={item.labelImg} alt="" />
                          </div>
                        </div>
                      </div>
                      <AnimatedBar
                        percentValue={item.percentValue}
                        startAnimation={startAnimation}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="graph-foot">
                <div className="graph-total">
                  <h4>
                    Total: <span ref={totalValueRef}> {totalValue}</span> people
                  </h4>
                </div>
                <div className="x-axis">
                  <div className="axis-division">
                    <div className="division-list">
                      {Array.from({ length: 11 }).map((_, index) => (
                        <span className="division-item" key={index}>
                          <span className="item-text">{index * 10}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="axis-text">{DATA.xAxis} (%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphScreen;
