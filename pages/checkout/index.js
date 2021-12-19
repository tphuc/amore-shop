import React from "react";
import { Button, Input, Radio, Spacer, Text } from "@geist-ui/react";
import './index.css'
import CustomInput from "./CustomInput";
import { Edit3, X } from "@geist-ui/react-icons";
import CustomField from "./CustomField";
import ErrorMessage from "./ErrorMessage";

const CheckOut = () => {
  const customerData = {
    //to-do: thay thế giá trị * get data from database
    firstName: "Thai Quynh",
    lastName: "Mai",
    email: "quynhmaithai@gmail.com",
    phone: "09390329323",
    streetAddress: "43/42, Ward 10, District 6",
    streetAddressLine2: null,
    city: "Ho Chi Minh",
    stateProvinceRegion: "Ho Chi Minh",
    country: "Vietnam",
    zip: "70000"
  };
  const shippingData = [
    //to-do: thay thế giá trị * get data from database
    {
      name: "Standard",
      minDay: 10,
      maxDay: 20,
      order: 5,
      fee: 40,
      isChecked: true
    },
    {
      name: "Express",
      minDay: 3,
      maxDay: 5,
      order: 1,
      fee: 150,
      isChecked: true
    }
  ];
  const productData = [
    //to-do: thay thế giá trị * get data from database or the previous step (shopping cart)
    //price đã áp dụng discount của sản phẩm đó
    {
      name: "Denim Shorts High Waist",
      quantity: 2,
      color: "Red",
      size: "XS",
      price: 29.5,
      total: 59,
      image: "image.jpg"
    },
    {
      name: "Rib-knit Turtleneck Sweater",
      quantity: 3,
      color: "Red",
      size: "XS",
      price: 45.5,
      total: 136.5,
      image: "image.jpg"
    },
    {
      name: "Draped Camisole Top",
      quantity: 1,
      color: "Red",
      size: "XS",
      price: 186.45,
      total: 186.45,
      image: "image.jpg"
    }
  ];

  // ------------------------ state - ui ------------------------ //
  const [current, setCurrent] = React.useState(0);
  const [currentError, setCurrentError] = React.useState(false);
  const [havingData, setHavingData] = React.useState([false, false, false]);
  // const [clientWindowHeight, setClientWindowHeight] = React.useState("");
  // const [fixedBill, setFixedBill] = React.useState(false);
  // React.useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });
  // const handleScroll = () => {
  //   setClientWindowHeight(window.scrollY);
  // };
  // React.useEffect(() => {
  //   setFixedBill(clientWindowHeight < 50 ? true : false); //50 = top height to div
  // }, [clientWindowHeight]);

  // ------------------------ state - data ------------------------ //
  const [tempInformation, setTempInformation] = React.useState({
    firstName: customerData.firstName,
    lastName: customerData.lastName,
    email: customerData.email,
    phone: customerData.phone
  });
  const [information, setInformation] = React.useState(tempInformation);
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
  const [tempShippingIdx, setTempShippingIdx] = React.useState(0);
  const [shippingIdx, setShippingIdx] = React.useState(tempShippingIdx);

  const [voucherCode, setVoucherCode] = React.useState(null);
  const [isApplied, setIsApplied] = React.useState(0);
  const [billDiscount, setBillDiscount] = React.useState(0);

  const [billSubTotal] = React.useState(() => {
    let res = 0;
    for (let i = 0; i < productData.length; i++) res += productData[i].price;
    return res;
  });

  // ------------------------ support func ------------------------ //
  const getShippingDay = (numberOfDay) => {
    let d = new Date();
    d.setDate(d.getDate() + numberOfDay);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return months[d.getMonth()] + " " + d.getDate();
  };
  const getTotal = () => {
    let res = billSubTotal - billDiscount;
    return res > 0
      ? res + shippingData[shippingIdx].fee
      : shippingData[shippingIdx].fee;
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

  // ------------------------ handle input ------------------------ //
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
  const onChangeEmail = (val) => {
    var tempInformationCopy = { ...tempInformation };
    tempInformationCopy.email = val;
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
  const onChangeShipping = (val) => {
    setTempShippingIdx(val);
  };
  const onChangeVoucher = (val) => {
    setVoucherCode(val);
  };

  // ------------------------ handle click ------------------------ //
  const handleAfterSave = () => {
    setCurrentError(false);
    let havingDataCopy = havingData.slice();
    havingDataCopy[current] = true;
    setHavingData(havingDataCopy);
    setCurrent(current + 1);
  };
  const handleAfterClose = () => {
    setCurrentError(false);
    for (let i = 1; i < havingData.length; i++) {
      if (havingData[i] === false) {
        setCurrent(i);
        return;
      }
    }
    setCurrent(-1);
  };
  const onClickCancelInformation = () => {
    setTempInformation(information);
    handleAfterClose();
  };
  const onClickSaveInformation = () => {
    if (
      isNotNullText(tempInformation.firstName) &&
      isNotNullText(tempInformation.lastName) &&
      isNotNullPhoneNumber(tempInformation.phone) &&
      isNotNullEmail(tempInformation.email)
    ) {
      setInformation(tempInformation);
      handleAfterSave();
    } else {
      setCurrentError(true);
    }
  };
  const onClickCancelBillingAddress = () => {
    setTempBillingAddress(billingAddress);
    handleAfterClose();
  };
  const onClickSaveBillingAddress = () => {
    if (
      isNotNullPlace(tempBillingAddress.streetAddress) &&
      isNotNullPlace(tempBillingAddress.stateProvinceRegion) &&
      isNotNullText(tempBillingAddress.city) &&
      isNotNullCode(tempBillingAddress.zip)
    ) {
      setBillingAddress(tempBillingAddress);
      handleAfterSave();
    } else {
      setCurrentError(true);
    }
  };
  const onClickCancelShipping = () => {
    setTempShippingIdx(shippingIdx);
    handleAfterClose();
  };
  const onClickSaveShipping = () => {
    setShippingIdx(tempShippingIdx);
    handleAfterSave();
  };
  const onClickApplyVoucher = () => {
    // to-do: query những voucher
    // đúng code (code) + ko hết hạn (expDate) + thõa đk tối thiểu (minCond) + chưa sử dụng (isUsed)
    if (voucherCode === "123") {
      var voucherData = {
        type: 1,
        value: 0.25,
        maxDc: 100
      };
    } else {
      voucherData = null;
    }
    if (voucherData) {
      let res =
        voucherData.type === 1
          ? billSubTotal * voucherData.value
          : voucherData.value;
      res = res > voucherData.maxDc ? voucherData.maxDc : res;
      setBillDiscount(res);
      setIsApplied(1);
    } else {
      setIsApplied(-1);
    }
  };
  const onClickRemoveVoucher = () => {
    setVoucherCode("");
    setBillDiscount(0);
    setIsApplied(0);
  };

  return (
    <div className="checkout">
      <div className="checkout-left">
        {current === 0 ? (
          <div className="checkout-card">
            <div className="checkout-card-title">
              <Text h4 style={{ cursor: "default" }}>
                Information
              </Text>
              {havingData[0] && (
                <X
                  className="checkout-card-title-btn"
                  size={20}
                  onClick={onClickCancelInformation}
                />
              )}
            </div>
            <div
              onClick={() => {
                setCurrentError(false);
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
                label="Email"
                initialValue={information.email}
                required
                onChange={(e) => {
                  onChangeEmail(e);
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
              {currentError && (
                <ErrorMessage message="Some fields are missing or invalid!" />
              )}

              <Button
                auto
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
          <div className="checkout-card">
            <div className="checkout-card-title">
              <Text h4 style={{ cursor: "default" }}>
                Information
              </Text>
              {havingData[0] && (
                <Edit3
                  className="checkout-card-title-btn"
                  size={20}
                  onClick={() => {
                    setCurrent(0);
                  }}
                />
              )}
            </div>
            {havingData[0] && (
              <>
                <CustomField label="First name" value={information.firstName} />
                <CustomField label="Last name" value={information.lastName} />
                <CustomField label="Email" value={information.email} />
                <CustomField label="Phone number" value={information.phone} />
              </>
            )}
          </div>
        )}

        {current === 1 ? (
          <div className="checkout-card">
            <div className="checkout-card-title">
              <Text h4 style={{ cursor: "default" }}>
                Billing address
              </Text>
              {havingData[1] && (
                <X
                  className="checkout-card-title-btn"
                  size={20}
                  onClick={onClickCancelBillingAddress}
                />
              )}
            </div>
            <div
              onClick={() => {
                setCurrentError(false);
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
              {currentError && (
                <ErrorMessage message="Some fields are missing or invalid!" />
              )}
              <Button
                auto
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
          <div className="checkout-card">
            <div className="checkout-card-title">
              <Text h4 style={{ cursor: "default" }}>
                Billing address
              </Text>
              {havingData[1] && (
                <Edit3
                  className="checkout-card-title-btn"
                  size={20}
                  onClick={() => {
                    setCurrent(1);
                  }}
                />
              )}
            </div>
            {havingData[1] && (
              <>
                <CustomField
                  label="Street address"
                  value={billingAddress.streetAddress}
                />
                <CustomField
                  label="Street address line 2"
                  value={billingAddress.streetAddressLine2}
                />
                <CustomField
                  label="City"
                  value={billingAddress.city}
                  required
                />
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
              </>
            )}
          </div>
        )}
        {current === 2 ? (
          <div className="checkout-card">
            <div
              className="checkout-card-title"
              style={{
                marginBottom: 12
              }}
            >
              <Text h4 style={{ cursor: "default" }}>
                Shipping
              </Text>
              {havingData[2] && (
                <X
                  className="checkout-card-title-btn"
                  size={20}
                  onClick={onClickCancelShipping}
                />
              )}
            </div>
            <Radio.Group value={tempShippingIdx} onChange={onChangeShipping}>
              {shippingData.map((item, index) => (
                <div
                  className={
                    tempShippingIdx === index
                      ? "checkout-shipping-focus"
                      : "checkout-shipping"
                  }
                  onClick={() => onChangeShipping(index)}
                >
                  <Radio scale={4 / 3} value={index}>
                    <Spacer w={2} />
                    <div className="checkout-shipping-detail">
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: "gray"
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          marginTop: -10
                        }}
                      >
                        ${item.fee.toFixed(2)}
                        {" · "}
                        {item.minDay}
                        {"-"}
                        {item.maxDay}
                        {" days"}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          marginTop: -10,
                          color: "gray"
                        }}
                      >
                        Order by {getShippingDay(item.order)}
                        {", "} receive by {getShippingDay(item.maxDay)}
                      </Text>
                    </div>
                  </Radio>
                </div>
              ))}
            </Radio.Group>
            <div className="checkout-button">
              <Button
                auto
                style={{
                  width: "50%",
                  maxWidth: 200,
                  marginTop: 15,
                  borderRadius: 0,
                  backgroundColor: "white",
                  border: "1px solid #eaeaea",
                  color: "black"
                }}
                onClick={onClickSaveShipping}
              >
                Save
              </Button>
            </div>
          </div>
        ) : (
          <div className="checkout-card">
            <div className="checkout-card-title">
              <Text h4 style={{ cursor: "default" }}>
                Shipping
              </Text>
              {havingData[2] && (
                <Edit3
                  className="checkout-card-title-btn"
                  size={20}
                  onClick={() => {
                    setCurrent(2);
                  }}
                />
              )}
            </div>
            {havingData[2] && (
              <div className="checkout-shipping-detail">
                <CustomField
                  label={
                    shippingData[shippingIdx].name +
                    " · " +
                    shippingData[shippingIdx].minDay +
                    "-" +
                    shippingData[shippingIdx].maxDay +
                    " days"
                  }
                  value={
                    "Order by " +
                    getShippingDay(shippingData[shippingIdx].order) +
                    ", receive by " +
                    getShippingDay(shippingData[shippingIdx].maxDay)
                  }
                  required
                />
              </div>
            )}
          </div>
        )}
      </div>
      {/* <div className={fixedBill ? "checkout-right" : "checkout-right-fixed"}> */}
      <div className="checkout-right">
        <div className="checkout-card">
          <div className="checkout-voucher">
            {isApplied > 0 ? (
              <>
                <Input
                  scale={4 / 3}
                  width="100%"
                  readOnly
                  style={{ cursor: "default", pointerEvents: "none" }}
                  initialValue={voucherCode}
                />

                <Spacer w={1} />
                <Button
                  auto
                  style={{
                    borderRadius: 0,
                    textTransform: "none",
                    width: "225px",
                    color: "black",
                    border: "1px solid #eaeaea"
                  }}
                  onClick={onClickRemoveVoucher}
                >
                  Remove voucher
                </Button>
              </>
            ) : (
              <>
                <Input
                  scale={4 / 3}
                  width="100%"
                  type={isApplied < 0 ? "error" : null}
                  value={voucherCode}
                  placeholder="Enter code"
                  style={{ cursor: "default" }}
                  onClick={() => setIsApplied(0)}
                  onChange={(e) => onChangeVoucher(e.target.value)}
                />
                <Spacer w={1} />
                <Button
                  auto
                  style={{
                    borderRadius: 0,
                    textTransform: "none",
                    width: "225px",
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid #eaeaea"
                  }}
                  onClick={onClickApplyVoucher}
                >
                  Apply voucher
                </Button>
              </>
            )}
          </div>
          <div className="checkout-bill-divider" />
          <div className="checkout-bill-detail">
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "gray",
                cursor: "default"
              }}
            >
              Sub total
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                cursor: "default"
              }}
            >
              ${billSubTotal.toFixed(2)}
            </Text>
          </div>
          <div className="checkout-bill-detail">
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "gray",
                cursor: "default"
              }}
            >
              Discount
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                cursor: "default",
                color: "red"
              }}
            >
              - ${billDiscount.toFixed(2)}
            </Text>
          </div>
          <div className="checkout-bill-detail">
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "gray",
                cursor: "default"
              }}
            >
              Shipping
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                cursor: "default"
              }}
            >
              {havingData[2]
                ? "$" + shippingData[shippingIdx].fee.toFixed(2)
                : "TBD"}
            </Text>
          </div>
          <div className="checkout-bill-divider" />
          <div className="checkout-bill-detail">
            <Text
              style={{
                fontSize: 16,
                fontWeight: 500,
                cursor: "default"
              }}
            >
              Total
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 500,
                cursor: "default"
              }}
            >
              {havingData[2] ? "$" + getTotal().toFixed(2) : "TBD"}
            </Text>
          </div>
          <div className="checkout-bill-detail">
            <Button
              className="checkout-btn"
              style={{
                borderRadius: 0,
                textTransform: "none",

                marginTop: 15,
                width: "100%",
                height: "50px",
                backgroundColor: "black",
                color: "white",
                border: 0
              }}
            >
              Complete your purchase
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
