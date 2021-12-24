import { Text, Input, Select } from "@geist-ui/react";
import React from "react";

const CustomInput = ({
  initialValue,
  label,
  secondaryLabel,
  placeholder,
  required,
  isPassword,
  isSelect,
  onChange,
  clearable,
  readOnly
}) => {
  const handleChangeSelect = (val) => {
    onChange && onChange(val);
  };

  return (
    <div
      style={{
        marginBottom: 15
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          cursor: "default"
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: 500,
            marginBottom: 5,
            color: "gray"
          }}
        >
          {label}
        </Text>
        {required && (
          <Text
            style={{
              fontSize: 12,
              fontWeight: 500,
              marginBottom: 5,
              color: "red"
            }}
          >
            &ensp;*
          </Text>
        )}
      </div>
      {isSelect ? (
        
        <Select

          scale={4/3}
          width="100%"
          style={{maxWidth: "calc(100% - 1.25em)"}}
          value={initialValue ? initialValue : "Australia"}
          onChange={handleChangeSelect}
          type= "default"
        >
          <Select.Option style = {{fontSize: 'calc(49 / 48 * 16px)'}} value="Australia">Australia</Select.Option>
          <Select.Option style = {{fontSize: 'calc(49 / 48 * 16px)'}} value="Canada">Canada</Select.Option>
          <Select.Option style = {{fontSize: 'calc(49 / 48 * 16px)'}} value="China">China</Select.Option>
          <Select.Option style = {{fontSize: 'calc(49 / 48 * 16px)'}} value="France">France</Select.Option>
          <Select.Option style = {{fontSize: 'calc(49 / 48 * 16px)'}} value="Japan">Japan</Select.Option>
          <Select.Option style = {{fontSize: 'calc(49 / 48 * 16px)'}} value="Korea South">Korea South</Select.Option>
          <Select.Option style = {{fontSize: 'calc(49 / 48 * 16px)'}} value="Singapore">Singapore</Select.Option>
          <Select.Option style = {{fontSize: 'calc(49 / 48 * 16px)'}} value="Thailand">Thailand</Select.Option>
          <Select.Option style = {{fontSize: 'calc(49 / 48 * 16px)'}} value="United Kingdom">United Kingdom</Select.Option>
          <Select.Option style = {{fontSize: 'calc(49 / 48 * 16px)'}} value="United States of America">
            United States of America
          </Select.Option>
          <Select.Option style = {{fontSize: 'calc(49 / 48 * 16px)'}} value="Vietnam">Vietnam</Select.Option>
        </Select>
     
      ) : isPassword ? (
        <Input.Password
          scale={4 / 3}
          width="100%"
          initialValue={initialValue}
          clearable={clearable}
          required={required}
          placeholder={placeholder}
          onChange={(e) => {
            onChange && onChange(e.target.value);
          }}
        />
      ) : (
        <Input
          scale={4 / 3}
          width="100%"
          initialValue={initialValue}
          clearable={clearable}
          required={required}
          placeholder={placeholder}
          onChange={(e) => {
            onChange && onChange(e.target.value.trim());
          }}
          readOnly={readOnly}
        />
      )}
      {secondaryLabel && (
        <Text
          style={{
            fontSize: 12,
            marginTop: 5,
            color: "gray",
            fontStyle: "italic"
          }}
        >
          {secondaryLabel}
        </Text>
      )}
    </div>
  );
};

export default CustomInput;
