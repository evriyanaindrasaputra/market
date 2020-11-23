import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 2,
    marginBottom: "2em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1.3em",
    textTransform: "uppercase",
  },
  textLink: {
    color: "white",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));
