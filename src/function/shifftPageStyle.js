const shifftPageStyle = () => {
  return {
    marginLeft: localStorage.getItem("sidebar") === "true" ? 70 : 270,
    transition: "400ms",
  };
};

export default shifftPageStyle;
