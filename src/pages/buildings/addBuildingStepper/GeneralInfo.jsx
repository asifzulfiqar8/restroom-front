import React, { useState } from "react";
import Button from "../../../components/shared/button/Button";
import UploadModel from "./UploadModel";
import Input from "../../../components/shared/input/Input";

const GeneralInfo = ({ setCurrentStep }) => {
  const [buildingInfo, setBuildingInfo] = useState({
    buildingName: "",
    buildingType: "",
    location: "",
    area: "",
    totalFloors: "",
    totalRestrooms: "",
    buildingManager: "",
    phone: "",
  });

  const buildingInfoChangeHandler = (e) => {
    const { name, value } = e.target;
    setBuildingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log("buildinginof", buildingInfo);

  const nextBtnHandler = () => setCurrentStep((prevStep) => prevStep + 1);
  return (
    <div>
      <h6 className="text-base text-primary font-medium">
        General Information
      </h6>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-3">
          <UploadModel />
        </div>
        <Input
          type="text"
          name="buildingName"
          label="Building Name"
          placeholder="Building Name"
          value={buildingInfo.buildingName}
          onChange={buildingInfoChangeHandler}
        />
        <Input
          type="text"
          name="buildingType"
          label="Building Type"
          placeholder="Building Type"
          value={buildingInfo.buildingType}
          onChange={buildingInfoChangeHandler}
        />
        <Input
          type="text"
          name="location"
          label="Location"
          placeholder="Warehouse 01, UK"
          value={buildingInfo.location}
          onChange={buildingInfoChangeHandler}
        />
        <Input
          type="text"
          name="area"
          label="Area"
          placeholder="Sq Ft"
          value={buildingInfo.area}
          onChange={buildingInfoChangeHandler}
        />
        <Input
          type="number"
          name="totalFloors"
          label="Total Floors"
          placeholder="45"
          value={buildingInfo.totalFloors}
          onChange={buildingInfoChangeHandler}
        />
        <Input
          type="text"
          name="totalRestrooms"
          label="Total Restrooms"
          placeholder="3"
          value={buildingInfo.totalRestrooms}
          onChange={buildingInfoChangeHandler}
        />
        <div className="lg:col-span-2">
          <Input
            type="text"
            name="buildingManager"
            label="Building Manager"
            placeholder="MKS"
            value={buildingInfo.buildingManager}
            onChange={buildingInfoChangeHandler}
          />
        </div>
        <Input
          type="tel"
          name="phone"
          label="Phone Number"
          placeholder="(123) 456-8034"
          value={buildingInfo.phone}
          onChange={buildingInfoChangeHandler}
        />
        <div className="lg:col-span-3 flex justify-end">
          <Button text="Next" onClick={nextBtnHandler} />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
