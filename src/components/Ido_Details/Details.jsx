import React from "react";
import "./Details.scss";
     import 'antd/dist/antd.css';
     import { Progress } from 'antd';
 const Details = () => {
  return (
    <div className="card">
      <p className="element">DETAILS</p>
       <div className="itemup" >
      <div className="mb-3">
        <div className="text">
          <div className="roror">
          <span>Round 1</span></div>
          <Progress strokeWidth={15} percent={0} size="small" />

        </div>
      </div>
      <div className="mb-3">
        <div className="text">
          <div className="roror">
          <span>Round 2</span>
           </div>
          <Progress strokeWidth={15}  percent={0} size="small" />

        </div>
      </div>
      <div className="mb-3">
        <div className="text">
        <div className="roror">

          <span>Round 3</span></div>
          <Progress strokeWidth={15} percent={0} size="small"  />

        </div>
      </div>
      </div>
      <div className="">
      <div className="mb-4">
        <div className="title">
          <span>Round 1</span>
          <div className="block">
            We have completed round 1 and successfully raised $2.5 million from
            major investment funds
          </div>
          <div className="block">
            More information <a href="">here</a>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="title">
          <span>Round 2</span>
          <div className="block">January 1 - February 15</div>
          <div className="block">Sold and burned: 1,000,000,000 FLAG</div>
          <div className="block">Unit Price: $0.001</div>
        </div>
      </div>
      <div className="mb-4">
        <div className="title">
          <span>Round 3</span>
          <div className="block">February 16 - March 26</div>
          <div className="block">Amount: 1,266,666,660 FLAG</div>
          <div className="block">Unit Price: $0.15</div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Details;
