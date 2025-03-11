# Messaging

## List Sender IDs

Retrieves a list of all sender IDs associated with your account.

```javascript
const listSenderIds = async () => {
  try {
    const response = await termii.Messaging.senderId();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

### Sample Response

```json
  {
      "current_page": 1,
      "data": [
          {
              "sender_id": "ACME Key",
              "status": "unblock",
              "company": ACME,
              "usecase": null,
              "country": null,
              "created_at": "2021-03-29 16:51:53"
          },
          {
              "sender_id": "ACME Alert",
              "status": "unblock",
              "company": ACME,
              "usecase": null,
              "country": null,
              "created_at": "2021-03-29 16:51:09"
          },
          {
              "sender_id": "ACME Wall",
              "status": "unblock",
              "company": ACME,
              "usecase": null,
              "country": null,
              "created_at": "2021-03-29 16:50:38"
          },
          {
              "sender_id": "Hooli",
              "status": "unblock",
              "company": Hooli,
              "usecase": null,
              "country": null,
              "created_at": "2021-03-26 13:19:16"
          },
          {
              "sender_id": "Google",
              "status": "unblock",
              "company": null,
              "usecase": null,
              "country": null,
              "created_at": "2021-01-19 17:41:30"
          },
          {
              "sender_id": "Facebook",
              "status": "unblock",
              "company": null,
              "usecase": null,
              "country": null,
              "created_at": "2021-01-19 17:41:14"
          },

      ],
      "first_page_url": "https://BASE_URL/api/sender-id?page=1",
      "from": 1,
      "last_page": 47,
      "last_page_url": "https://BASE_URL/api/sender-id?page=47",
      "next_page_url": "https://BASE_URL/api/sender-id?page=2",
      "path": "https://BASE_URL/api/sender-id",
      "per_page": 10,
      "prev_page_url": null,
      "to": 15,
      "total": 704
  }
```

---

## Request Sender ID

Request a new sender ID for your account.

| Options   | Required | Type   | Description                                                                                                                                                        |
| --------- | -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| sender_id | yes      | string | Represents the ID of the sender, which can be alphanumeric or numeric. Alphanumeric sender ID length should be between 3 and 11 characters (Example: CompanyName). |
| usecase   | yes      | string | A sample of the type of message sent.                                                                                                                              |
| company   | yes      | string | Represents the name of the company with the sender ID.                                                                                                             |

```javascript
const requestSenderId = async () => {
  try {
    const response = await termii.Messaging.requestId({
      sender_id: "Acme",
      usecase: "Your OTP code is zxsds",
      company: "Acme Corp",
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
  "code": "ok",
  "message": "Sender Id requested. You will be contacted by your account manager."
}
```

---

## Send a Message

Sends an SMS message to a recipient.

#### Messaging Channels/Routes

| Channel  | Description                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| generic  | This channel is used to send promotional messages and messages to phone numbers not on DND.                     |
| dnd      | On this channel, all your messages are delivered whether there is a DND restriction or not on the phone number. |
| whatsapp | This channel sends messages via WhatsApp.                                                                       |

#### Params

| Options       | Required | Type   | Description                                                                                                                                                                                                                                                                                          |     |
| ------------- | -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| to            | yes      | string | Represents the destination phone number. Phone number must be in the international format (Example: 23490126727). You can also send to multiple numbers by putting numbers in an array (Example:`["23490555546", "23423490126999"]`). Please note: the array takes only 100 phone numbers at a time. |     |
| from          | yes      | string | Represents a sender ID for SMS, which can be Alphanumeric or a Device name for WhatsApp. Alphanumeric sender ID length should be between 3 and 11 characters (Example: CompanyName).                                                                                                                 |     |
| sms           | yes      | string | Text of a message that would be sent to the destination phone number.                                                                                                                                                                                                                                |     |
| type          | yes      | string | The kind of message that is sent, which is a plain message.                                                                                                                                                                                                                                          |     |
| channel       | yes      | string | This is the route through which the message is sent. It is either `dnd`, `whatsapp`, or `generic`.                                                                                                                                                                                                   |     |
| media         | no       | object | This is a media object, available only for High Volume WhatsApp. When using the media parameter, ensure you are not using the `sms` parameter.                                                                                                                                                       |     |
| media.url     | no       | string | The URL to the file resource.                                                                                                                                                                                                                                                                        |     |
| media.caption | no       | string | The caption that should be added to the image.                                                                                                                                                                                                                                                       |     |

#### Media Type

| File      | Supported Format                                                         |
| --------- | ------------------------------------------------------------------------ |
| Image     | JPG, JPEG, PNG                                                           |
| Audio     | MP3, OGG, AMR                                                            |
| Documents | PDF                                                                      |
| Video     | MP4 (Note: WhatsApp currently does not support MP4 files without audio.) |

```javascript
const sendMessage = async () => {
  try {
    const response = await termii.Messaging.send({
      to: "+2348160381840",
      from: "N-Alert",
      sms: "Hi there, testing Termii",
      type: "plain",
      channel: "dnd",
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
  "message_id": "9122821270554876574",
  "message": "Successfully Sent",
  "balance": 9,
  "user": "Peter Mcleish"
}
```

---

## Send Bulk Message

Sends an SMS message to multiple recipients.

| Options | Required | Type   | Description                                                                                                                                                                                                                                               |
| ------- | -------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| to      | yes      | string | Represents the array of phone numbers you are sending to (Example:`["23490555546", "23423490126999","23490555546"]`). Phone numbers must be in international format (Example: `23490126727`). Please note: the array can take up to 10,000 phone numbers. |
| from    | yes      | string | Represents a sender ID for SMS, which can be Alphanumeric or a Device name for WhatsApp. Alphanumeric sender ID length should be between 3 and 11 characters (Example: CompanyName).                                                                      |
| sms     | yes      | string | Text of a message that would be sent to the destination phone number.                                                                                                                                                                                     |
| type    | yes      | string | The type of message that is sent, which is a plain message.                                                                                                                                                                                               |
| channel | yes      | string | This is the channel through which the message is sent. It is either `dnd`, `whatsapp`, or `generic`.                                                                                                                                                      |

```javascript
const sendBulkMessage = async () => {
  try {
    const response = await termii.Messaging.sendBulk({
      to: ["+2348160381840", "+2348168643908"],
      from: "N-Alert",
      sms: "Hi there, testing Termii",
      type: "plain",
      channel: "dnd",
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
  "code": "ok",
  "message_id": "9122821270554876574",
  "message": "Successfully Sent",
  "balance": 9,
  "user": "Peter Mcleish"
}
```
