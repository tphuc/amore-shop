import { Text } from "@geist-ui/react";

const CustomField = ({ value, label }) => {
  return (
    <>
      {value && (
        <div
          style={{
            marginBottom: 15
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: 500,
              marginBottom: 5,
              color: "gray",
              cursor: "default"
            }}
          >
            {label}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "black",
              width: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              cursor: "default"
            }}
          >
            {value}
          </Text>
        </div>
      )}
    </>
  );
};

export default CustomField;
