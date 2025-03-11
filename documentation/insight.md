# Insights

## Account Balance

Retrieves the balance on your Termii account.

```javascript
const getBalance = async () => {
  try {
    const response = await termii.Insight.balance();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

### Sample Response

```json
{
  "user": "Tayo Joel",
  "balance": 0,
  "currency": "NGN"
}
```

---

## History

```javascript
const listHistory = async () => {
  try {
    const response = await termii.Insight.history();

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

### Sample Response

```json
[
  {
    "sender": "N-Alert",
    "receiver": "233257883990",
    "message": "New year in a bit",
    "amount": 1,
    "reroute": 0,
    "status": "DND Active on Phone Number",
    "sms_type": "plain",
    "send_by": "sender",
    "media_url": null,
    "message_id": "5508751839629937023",
    "notify_url": null,
    "notify_id": null,
    "created_at": "2020-08-15 12:36:42"
  },
  {
    "sender": "N-Alert",
    "receiver": "233222883380",
    "message": "New year in a bit",
    "amount": 1,
    "reroute": 0,
    "status": "DND Active on Phone Number",
    "sms_type": "plain",
    "send_by": "sender",
    "media_url": null,
    "message_id": "5508755559629937033",
    "notify_url": null,
    "notify_id": null,
    "created_at": "2020-08-15 12:36:42"
  }
]
```

---

## Message Details

| Options    | Required | Type   | Description                                                                              |
| ---------- | -------- | ------ | ---------------------------------------------------------------------------------------- |
| message_id | yes      | string | Represents the message id returned in the response of send message or send bulk message. |

```javascript
const getMessageDetails = async () => {
  try {
    const response = await termii.Insight.history({
      message_id: "5508751839629937023",
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

### Sample Response

```json
[
  {
    "sender": "N-Alert",
    "receiver": "233257883990",
    "message": "New year in a bit",
    "amount": 1,
    "reroute": 0,
    "status": "DND Active on Phone Number",
    "sms_type": "plain",
    "send_by": "sender",
    "media_url": null,
    "message_id": "5508751839629937023",
    "notify_url": null,
    "notify_id": null,
    "created_at": "2020-08-15 12:36:42"
  }
]
```

---

## Status

Detect if a number is fake or has ported to a new network.

| Options      | Required | Type   | Description                                                                                                              |
| ------------ | -------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |
| phone_number | yes      | string | Represents the phone number to be verified. Phone number must be in the international format (Example: `2348753243651`). |
| country_code | yes      | string | Represents short alphabetic codes developed to represent countries (Example: `NG`).                                      |

```javascript
const getPhoneNumberStatus = async () => {
  try {
    const response = await termii.Insight.status({
      phone_number: "2348753243651",
      country_code: "NG",
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

### Sample Response

```json
{
  "result": [
    {
      "routeDetail": {
        "number": "2348753243651",
        "ported": 0
      },
      "countryDetail": {
        "countryCode": "234",
        "mobileCountryCode": "621",
        "iso": "NG"
      },
      "operatorDetail": {
        "operatorCode": "ANG",
        "operatorName": "Airtel Nigeria",
        "mobileNumberCode": "20",
        "mobileRoutingCode": "41",
        "carrierIdentificationCode": "23433",
        "lineType": "Mobile"
      },
      "status": 200
    }
  ]
}
```

## Search

Verify phone numbers and automatically detect their status as well as current network.

| Options      | Required | Type   | Description                                                                                                            |
| ------------ | -------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| phone_number | yes      | string | Represents the phone number to be verified. Phone number must be in the international format (Example: `23490126727`). |

```javascript
const searchPhoneNumber = async () => {
  try {
    const response = await termii.Insight.search({
      phone_number: "2347089509657",
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

### Sample Response

```json
{
  "number": "2347089509657",
  "status": "DND blacklisted",
  "network": "Airtel Nigeria",
  "network_code": "62120"
}
```

---
