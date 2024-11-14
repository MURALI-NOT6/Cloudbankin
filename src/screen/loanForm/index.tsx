import React, { useMemo, useState } from "react";
import LoanFields from "./borrower";
import { borrowerForm } from "../../const/borrowerForm";
import Button from "../../components/button";
import useScreenSize from "../../hooks/useScreenSize";

const LoanForm = () => {
  const [step, setStep] = useState(1);
  const formData = borrowerForm;
  const [fieldInfo, setFieldInfo] = useState(formData[0]);
  const filedList = useMemo(() => fieldInfo, [fieldInfo]);
  const screen = useScreenSize();
  const activeLineWidth =
    step === 1 ? 0 : `calc(${step * (100 / formData.length)}% - 100px)`;
  console.log(screen, "screen");
  return (
    <>
      <div className="loanForm">
        <div className="formSection">
          <div className={`stepProgress`}>
            <div
              className="activeLine"
              style={{ width: activeLineWidth }}
            ></div>
            {formData?.map((list, index) => {
              return (
                <div
                  key={`step-${index} `}
                  className={`stepInfo ${
                    screen.width > 768
                      ? step > index
                        ? "active"
                        : ""
                      : step - 1 === index
                      ? "active"
                      : ""
                  }`}
                >
                  <p
                    className="step"
                    onClick={() => {
                      setStep(index + 1);
                      setFieldInfo(list);
                    }}
                  >
                    {index + 1}
                  </p>
                  <p className="progressName">{list?.pageName}</p>
                </div>
              );
            })}
          </div>
          <div className="progressInfo">
            <div className="formField">
              <div className="fieldRow">
                {formData?.map((list, index) => {
                  return (
                    <div
                      className={`tab-section ${
                        index + 1 === step ? "active" : ""
                      }`}
                    >
                      <LoanFields fieldInfo={list} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="actionFooter">
              <Button
                name="Back"
                className="secountryBtn"
                onClick={() => {
                  if (step > 1) {
                    const newStep = step - 1;
                    setStep(newStep);
                    setFieldInfo(formData[newStep - 1]);
                  }
                }}
              />
              <Button
                name="Continue"
                onClick={() => {
                  if (step < formData?.length) {
                    setStep(step + 1);
                    setFieldInfo(formData[step]);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanForm;
