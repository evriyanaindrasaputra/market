import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  gridContainer: {
    textAlign: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: 300,
    maxheight: 200,
  },
  cartEmpty: {
    display: "flex",
    minHeight: "60vh",
    justifyContent: "center",
    alignItems: "center",
  },
}));
