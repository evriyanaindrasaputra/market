import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 2,
    marginBottom: "2em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.3em",
    textTransform: "uppercase",
  },
  textLink: {
    position: "relative",
    color: "white",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
    },
  },
  badge: {
    right: -3,
    top: 13,
    padding: "0 4px",
    color: "white",
  },
  iconButton: {
    top: -10,
  },
}));
