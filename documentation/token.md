# Token

## Send Token

Sends a one-time password (OTP) to a recipient.

| Options          | Required | Type                            | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------------- | -------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message_type     | yes      | Enum: "NUMERIC", "ALPHANUMERIC" | Type of message that will be generated and sent as part of the OTP message. You can set message type to numeric or alphanumeric.                                                                                                                                                                                                                   |
| to               | yes      | string                          | Represents the email address if the channel is set to email (Example: `testshola@termii.com`). It represents the destination phone number if other channels are selected. Phone number must be in the international format (Example: `23490126727`).                                                                                               |
| from             | yes      | string                          | Represents the configuration ID if the channel is set to email (Example: `0a53c416-uocj-95af-ab3c306aellc`). It can be found on your Termii dashboard. If other channels are selected, it represents a sender ID which can be alphanumeric or numeric. Alphanumeric sender ID length should be between 3 and 11 characters (Example: CompanyName). |
| channel          | yes      | string                          | This is the route through which the message is sent. It is either `dnd`, `WhatsApp`, `generic`, or `email`.                                                                                                                                                                                                                                        |
| pin_attempts     | yes      | integer                         | Example: `3`. Represents the number of times the PIN can be attempted before expiration. It has a minimum of one attempt.                                                                                                                                                                                                                          |
| pin_time_to_live | yes      | integer                         | Example: `1`. Represents how long the PIN is valid before expiration. The time is in minutes. The minimum time value is `0` and the maximum time value is `60`.                                                                                                                                                                                    |
| pin_length       | yes      | integer                         | Example: `4`. The length of the PIN code. It has a minimum of `4` and maximum of `8`.                                                                                                                                                                                                                                                              |
| pin_placeholder  | yes      | string                          | Example: `"< 1234 >"`. PIN placeholder. Right before sending the message, the PIN code placeholder will be replaced with the generated PIN code.                                                                                                                                                                                                   |
| message_text     | yes      | string                          | Text of a message that would be sent to the destination phone number.                                                                                                                                                                                                                                                                              |

```javascript
const sendToken = async () => {
  try {
    const response = await termii.Token.send({
      message_type: "NUMERIC",
      to: "+2348160381840",
      from: "N-Alert",
      channel: "dnd",
      pin_type: "NUMERIC",
      pin_attempts: "3",
      pin_time_to_live: "5",
      pin_length: "4",
      pin_placeholder: "< 1234 >",
      message_text: "Your pin is < 1234 >",
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
  "pinId": "29ae67c2-c8e1-4165-8a51-8d3d7c298081",
  "to": "+2348160381840",
  "smsStatus": "Message Sent"
}
```

---

## Verify Token

Verifies a one-time password (OTP).

| Options | Required | Type   | Description                                                           |
| ------- | -------- | ------ | --------------------------------------------------------------------- |
| pin_id  | yes      | string | ID of the PIN sent (Example: `"c8dcd048-5e7f-4347-8c89-4470c3af0b"`). |
| pin     | yes      | string | The PIN code (Example: `"195558"`).                                   |

```javascript
const verifyToken = async () => {
  try {
    const response = await termii.Token.verify({
      pin_id: "1a9fb3d8-8836-4346-a5c6-ee890c144cb7",
      pin: "4411",
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
  "pinId": "c8dcd048-5e7f-4347-8c89-4470c3af0b",
  "verified": "True",
  "msisdn": "+2348160381840"
}
```

---

## In-App Token

Generate tokens which can be used within any web or mobile app. e.g. to authenticate login requests and verify customer transactions.

| Options          | Required | Type                            | Description                                                                                                                                                     |
| ---------------- | -------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pin_type         | yes      | Enum: "NUMERIC", "ALPHANUMERIC" | Type of PIN code that will be generated and sent as part of the OTP message. You can set PIN type to numeric or alphanumeric.                                   |
| phone_number     | yes      | string                          | Represents the destination phone number. Phone number must be in the international format (Example: `23490126727`).                                             |
| pin_attempts     | yes      | integer                         | Example: `3`. Represents the number of times the PIN can be attempted before expiration. It has a minimum of one attempt.                                       |
| pin_time_to_live | yes      | integer                         | Example: `1`. Represents how long the PIN is valid before expiration. The time is in minutes. The minimum time value is `0` and the maximum time value is `60`. |
| pin_length       | yes      | integer                         | Example: `4`. The length of the PIN code. It has a minimum of `4` and maximum of `8`.                                                                           |

```javascript
const generateInAppToken = async () => {
  try {
    const response = await termii.Token.inApp({
      pin_type: "NUMERIC",
      phone_number: "+2348160381840",
      pin_attempts: "3",
      pin_time_to_live: "5",
      pin_length: "4",
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
  "status": "success",
  "data": {
    "pin_id": "db34d5ce-9bd4-4f10-b8ec-8ee402ccd0",
    "otp": "522726",
    "phone_number": "+2348160381840",
    "phone_number_other": "Termii"
  }
}
```
