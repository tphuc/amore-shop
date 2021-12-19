import React from "react";
import { Button, Text } from "@geist-ui/react";
import { Edit3, X } from "@geist-ui/react-icons";

import "./index.css";
import CustomInput from "./CustomInput";
import CustomField from "./CustomField";
import ErrorMessage from "./ErrorMessage";

const Profile = () => {
  const customerData = {
    // to-do: thay thế giá trị * từ db vào biến này
    firstName: "Thai Quynh",
    lastName: "Mai",
    phone: "09390329323",

    streetAddress: "43/42, Ward 10, District 6",
    streetAddressLine2: null,
    city: "Ho Chi Minh",
    stateProvinceRegion: "Ho Chi Minh",
    country: "Vietnam",
    zip: "70000",

    email: "quynhmaithai@gmail.com",
    password: "123"
  };

  // ---------------- State ---------------- //
  const [editInformation, setEditInformation] = React.useState(0);
  const [tempInformation, setTempInformation] = React.useState({
    firstName: customerData.firstName,
    lastName: customerData.lastName,
    phone: customerData.phone
  });
  const [information, setInformation] = React.useState(tempInformation);

  const [editBillingAddress, setEditBillingAddress] = React.useState(0);
  const [tempBillingAddress, setTempBillingAddress] = React.useState({
    streetAddress: customerData.streetAddress,
    streetAddressLine2: customerData.streetAddressLine2,
    city: customerData.city,
    stateProvinceRegion: customerData.stateProvinceRegion,
    country: customerData.country,
    zip: customerData.zip
  });
  const [billingAddress, setBillingAddress] = React.useState(
    tempBillingAddress
  );

  const [editAccount, setEditAccount] = React.useState(0);
  const [tempAccount, setTempAccount] = React.useState({
    email: customerData.email,
    password: customerData.password,
    currentPassword: null,
    newPassword: null
  });
  const [account, setAccount] = React.useState({
    email: tempAccount.email,
    password: tempAccount.password
  });

  // ------------------- support function ------------------- //
  const hashPassword = (val) => {
    return val; // to-do: thay thế * hash function
  };
  const isNotNullText = (val) => {
    return val !== null && /^[a-zA-Z .'-]+$/i.test(val);
  };
  const isNotNullEmail = (val) => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val);
  };
  const isNotNullPhoneNumber = (val) => {
    return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g.test(val);
  };
  const isNotNullCode = (val) => {
    return val !== null && /^[a-zA-Z0-9]{3,}$/.test(val);
  };
  const isNotNullPlace = (val) => {
    return val !== null && /^[a-zA-Z0-9 .'-/(),;]+$/i.test(val);
  };
  const isValidPassword = (val) => {
    return val.length > 7;
  };

  // ---------------------------- Handle input ---------------------------- //
  const onChangeFirstName = (val) => {
    var tempInformationCopy = { ...tempInformation };
    tempInformationCopy.firstName = val;
    setTempInformation(tempInformationCopy);
  };
  const onChangeLastName = (val) => {
    var tempInformationCopy = { ...tempInformation };
    tempInformationCopy.lastName = val;
    setTempInformation(tempInformationCopy);
  };
  const onChangePhone = (val) => {
    var tempInformationCopy = { ...tempInformation };
    tempInformationCopy.phone = val;
    setTempInformation(tempInformationCopy);
  };
  const onChangeStreetAddress = (val) => {
    var tempBillingAddressCopy = { ...tempBillingAddress };
    tempBillingAddressCopy.streetAddress = val;
    setTempBillingAddress(tempBillingAddressCopy);
  };
  const onChangeStreetAddressLine2 = (val) => {
    var tempBillingAddressCopy = { ...tempBillingAddress };
    tempBillingAddressCopy.streetAddressLine2 = val;
    setTempBillingAddress(tempBillingAddressCopy);
  };
  const onChangeCity = (val) => {
    var tempBillingAddressCopy = { ...tempBillingAddress };
    tempBillingAddressCopy.city = val;
    setTempBillingAddress(tempBillingAddressCopy);
  };
  const onChangeCountry = (val) => {
    var tempBillingAddressCopy = { ...tempBillingAddress };
    tempBillingAddressCopy.country = val;
    setTempBillingAddress(tempBillingAddressCopy);
  };
  const onChangeStateProvinceRegion = (val) => {
    var tempBillingAddressCopy = { ...tempBillingAddress };
    tempBillingAddressCopy.stateProvinceRegion = val;
    setTempBillingAddress(tempBillingAddressCopy);
  };
  const onChangeZip = (val) => {
    var tempBillingAddressCopy = { ...tempBillingAddress };
    tempBillingAddressCopy.zip = val;
    setTempBillingAddress(tempBillingAddressCopy);
  };
  const onChangeEmail = (val) => {
    var tempAccountCopy = { ...tempAccount };
    tempAccountCopy.email = val;
    setTempAccount(tempAccountCopy);
  };
  const onChangeCurrentPassword = (val) => {
    var tempAccountCopy = { ...tempAccount };
    tempAccountCopy.currentPassword = val;
    setTempAccount(tempAccountCopy);
  };
  const onChangeNewPassword = (val) => {
    var tempAccountCopy = { ...tempAccount };
    tempAccountCopy.newPassword = val;
    setTempAccount(tempAccountCopy);
  };

  // ---------------------------- Handle click ---------------------------- //
  const onClickCancelInformation = () => {
    setTempInformation(information);
    setEditInformation(0);
  };
  const onClickSaveInformation = () => {
    if (
      isNotNullText(tempInformation.firstName) &&
      isNotNullText(tempInformation.lastName) &&
      isNotNullPhoneNumber(tempInformation.phone)
    ) {
      setInformation(tempInformation);
      setEditInformation(0);
      // to-do: thêm * ghi data (information) vào db
    } else {
      setEditInformation(2);
    }
  };
  const onClickCancelBillingAddress = () => {
    setTempBillingAddress(billingAddress);
    setEditBillingAddress(0);
  };
  const onClickSaveBillingAddress = () => {
    if (
      isNotNullPlace(tempBillingAddress.streetAddress) &&
      isNotNullPlace(tempBillingAddress.stateProvinceRegion) &&
      isNotNullText(tempBillingAddress.city) &&
      isNotNullCode(tempBillingAddress.zip)
    ) {
      setBillingAddress(tempBillingAddress);
      setEditBillingAddress(0);
      // to-do: thêm * ghi data (billing address) vào db
    } else {
      setEditBillingAddress(2);
    }
  };
  const onClickCancelAccount = () => {
    setTempAccount({
      email: account.email,
      password: account.password,
      currentPassword: null,
      newPassword: null
    });
    setEditAccount(0);
  };

  const onClickSaveAccount = () => {
    if (isNotNullEmail(tempAccount.email) && tempAccount.currentPassword) {
      if (hashPassword(tempAccount.currentPassword) === tempAccount.password) {
        if (!tempAccount.newPassword) {
          setAccount({
            email: tempAccount.email,
            password: tempAccount.password
          });
          onClickCancelAccount();
          // to-do: thêm * ghi data vào db - change email
          return;
        } else if (isValidPassword(tempAccount.newPassword)) {
          setAccount({
            email: tempAccount.email,
            password: hashPassword(tempAccount.newPassword)
          });
          onClickCancelAccount();
          // to-do: thêm * ghi data vào db - change password
          return;
        }
      }
    }
    setEditAccount(2);
  };

  return (
    <div className="profile">
      {editInformation > 0 ? (
        <div className="profile-card">
          <div className="checkout-card-title">
            <Text h4 style={{ cursor: "default" }}>
              Information
            </Text>
            <X
              className="checkout-card-title-btn"
              size={20}
              onClick={onClickCancelInformation}
            />
          </div>
          <div
            onClick={() => {
              setEditInformation(1);
            }}
          >
            <CustomInput
              label="First name"
              initialValue={information.firstName}
              required
              onChange={(e) => {
                onChangeFirstName(e);
              }}
            />
            <CustomInput
              label="Last name"
              initialValue={information.lastName}
              required
              onChange={(e) => {
                onChangeLastName(e);
              }}
            />
            <CustomInput
              label="Phone number"
              initialValue={information.phone}
              required
              onChange={(e) => {
                onChangePhone(e);
              }}
            />
          </div>
          <div className="checkout-button">
            {editInformation === 2 && (
              <ErrorMessage message="Some fields are missing or invalid!" />
            )}
            <Button
              auto
              type="secondary"
              style={{
                width: "50%",
                maxWidth: 200,
                marginTop: 15,
                borderRadius: 0,
                backgroundColor: "white",
                border: "1px solid #eaeaea",
                color: "black"
              }}
              onClick={onClickSaveInformation}
            >
              Save
            </Button>
          </div>
        </div>
      ) : (
        <div className="profile-card">
          <div className="checkout-card-title">
            <Text h4 style={{ cursor: "default" }}>
              Information
            </Text>
            <Edit3
              className="checkout-card-title-btn"
              size={20}
              onClick={() => {
                setEditInformation(1);
              }}
            />
          </div>
          <CustomField label="First name" value={information.firstName} />
          <CustomField label="Last name" value={information.lastName} />
          <CustomField label="Phone number" value={information.phone} />
        </div>
      )}
      {editBillingAddress > 0 ? (
        <div className="profile-card">
          <div className="checkout-card-title">
            <Text h4 style={{ cursor: "default" }}>
              Billing address
            </Text>
            <X
              className="checkout-card-title-btn"
              size={20}
              onClick={onClickCancelBillingAddress}
            />
          </div>
          <div
            onClick={() => {
              setEditBillingAddress(1);
            }}
          >
            <CustomInput
              label="Street address"
              initialValue={billingAddress.streetAddress}
              required
              secondaryLabel="Street address, P.O box, company name, c/o"
              onChange={(e) => {
                onChangeStreetAddress(e);
              }}
            />
            <CustomInput
              label="Street address line 2"
              initialValue={billingAddress.streetAddressLine2}
              required={false}
              secondaryLabel="Building, floor, apartment, suite, unit, etc."
              onChange={(e) => {
                onChangeStreetAddressLine2(e);
              }}
            />
            <CustomInput
              label="City"
              initialValue={billingAddress.city}
              required
              onChange={(e) => {
                onChangeCity(e);
              }}
            />
            <CustomInput
              label="State/Province/Region"
              initialValue={billingAddress.stateProvinceRegion}
              required
              onChange={(e) => {
                onChangeStateProvinceRegion(e);
              }}
            />
            <CustomInput
              label="Country"
              initialValue={billingAddress.country}
              required
              isSelect
              onChange={(e) => {
                onChangeCountry(e);
              }}
            />
            <CustomInput
              label="Postal code"
              initialValue={billingAddress.zip}
              required
              onChange={(e) => {
                onChangeZip(e);
              }}
            />
          </div>
          <div className="checkout-button">
            {editBillingAddress === 2 && (
              <ErrorMessage message="Some fields are missing or invalid!" />
            )}
            <Button
              auto
              type="secondary"
              style={{
                width: "50%",
                maxWidth: 200,
                marginTop: 15,
                borderRadius: 0,
                backgroundColor: "white",
                border: "1px solid #eaeaea",
                color: "black"
              }}
              onClick={onClickSaveBillingAddress}
            >
              Save
            </Button>
          </div>
        </div>
      ) : (
        <div className="profile-card">
          <div className="checkout-card-title">
            <Text h4 style={{ cursor: "default" }}>
              Billing address
            </Text>
            <Edit3
              className="checkout-card-title-btn"
              size={20}
              onClick={() => {
                setEditBillingAddress(1);
              }}
            />
          </div>
          <CustomField
            label="Street address"
            value={billingAddress.streetAddress}
          />
          <CustomField
            label="Street address line 2"
            value={billingAddress.streetAddressLine2}
          />
          <CustomField label="City" value={billingAddress.city} required />
          <CustomField
            label="State/Province/Region"
            value={billingAddress.stateProvinceRegion}
          />
          <CustomField label="Country" value={billingAddress.country} />
          <CustomField
            label="Postal code"
            value={billingAddress.zip}
            required
          />
        </div>
      )}

      {editAccount > 0 ? (
        <div className="profile-card">
          <div className="checkout-card-title">
            <Text h4 style={{ cursor: "default" }}>
              Account
            </Text>
            <X
              className="checkout-card-title-btn"
              size={20}
              onClick={onClickCancelAccount}
            />
          </div>
          <div
            onClick={() => {
              setEditAccount(1);
            }}
          >
            <CustomInput
              label="Email"
              required
              initialValue={account.email}
              onChange={(e) => {
                onChangeEmail(e);
              }}
            />
            <CustomInput
              label="Current password"
              isPassword
              required
              onChange={(e) => {
                onChangeCurrentPassword(e);
              }}
            />
            <CustomInput
              label="New password"
              isPassword
              secondaryLabel="At least 8 characters long"
              onChange={(e) => {
                onChangeNewPassword(e);
              }}
            />
          </div>
          <div className="checkout-button">
            {editAccount === 2 && (
              <ErrorMessage message="Some fields are missing or invalid!" />
            )}
            <Button
              auto
              type="secondary"
              style={{
                width: "50%",
                maxWidth: 200,
                marginTop: 15,
                borderRadius: 0,
                backgroundColor: "white",
                border: "1px solid #eaeaea",
                color: "black"
              }}
              onClick={onClickSaveAccount}
            >
              Save
            </Button>
          </div>
        </div>
      ) : (
        <div className="profile-card">
          <div className="checkout-card-title">
            <Text h4 style={{ cursor: "default" }}>
              Account
            </Text>
            <Edit3
              className="checkout-card-title-btn"
              size={20}
              onClick={() => {
                setEditAccount(1);
              }}
            />
          </div>
          <CustomField label="Email" value={account.email} />
        </div>
      )}
    </div>
  );
};

export default Profile;
