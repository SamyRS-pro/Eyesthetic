const shifftPageStyle = () => {
  return {
    marginLeft: localStorage.getItem("sidebar") === "true" ? 40 : 270,
    //marginLeft: localStorage.getItem("sidebar") === "true" ? "0%" : "12%",
    transition: "400ms",
  };
};

export default shifftPageStyle;
