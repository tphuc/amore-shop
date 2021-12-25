import { Text } from "@geist-ui/react";

const ErrorMessage = ({ message }) => {
  return (
    <Text
      style={{
        fontSize: 12,
        fontStyle: "italic",
        margin: 0,
        color: "red",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {message}
    </Text>
  );
};

export default ErrorMessage;
