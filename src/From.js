import { useState } from "react";

const From = () => {
  const [type, setType] = useState("yes");
  const [gender, setGender] = useState("male");
  const changeState = () => {
    setType("Noo");
  };

  function handleClick(e) {
    return new Promise((resolve) => {
      setTimeout(() => {
        setGender(e.target.getAttribute(`data-gender`));
        resolve();
      }, 1000);
    });
    // setGender(e.target.getAttribute(`data-gender`));
  }
  return (
    <>
      <div>
        <p>{type}</p>
        <button className="changeBtn" onClick={changeState}>
          Change
        </button>
        <button data-gender="male" onClick={handleClick}>
          male
        </button>
        <button data-gender="female" onClick={handleClick}>
          female
        </button>

        <div className={`box ${gender}`}>select {gender}</div>
      </div>
    </>
  );
};
export default From;
