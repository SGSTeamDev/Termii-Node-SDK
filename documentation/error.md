# Error

Termii uses HTTP response codes to indicate the success or failure of requests. In general:

- Codes in the 2xx range indicate success.
- Codes in the 4xx range indicate an error that failed given the information provided.
- Codes in the 5xx range indicate an error from Termii's end (these are rare).

## HTTP Status Code Summary

| Code | Description                                                                                                                                                                                                       |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200  | **OK**: Request was successful.                                                                                                                                                                                   |
| 400  | **Bad Request**: Indicates that the server cannot or will not process the request due to something that is perceived to be a client error.                                                                        |
| 401  | **Unauthorized**: No valid API key provided.                                                                                                                                                                      |
| 403  | **Forbidden**: The API key doesn't have permissions to perform the request.                                                                                                                                       |
| 404  | **Not Found**: The requested resource doesn't exist.                                                                                                                                                              |
| 405  | **Method Not Allowed**: The selected HTTP method is not allowed.                                                                                                                                                  |
| 422  | **Unprocessable Entity**: Indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions. |
| 429  | **Too Many Requests**: Indicates the user has sent too many requests in a given amount of time.                                                                                                                   |
| 5xx  | **Server Errors**: Something went wrong on Termii's end.                                                                                                                                                          |

## Common Errors

**Unauthorized:**

Getting Unauthorized and you are passing the right key? Check your API endpoint. This could also occur when you use HTTP instead of HTTPS.

**Your account is not active:**

Account has either been deactivated or disabled by the administrators. Kindly contact the administrator for more information to reactivate.

**You are not set up on this route:**

In this instance, that particular country route or intended destination is not set up for the user. Do contact your account manager to activate the route.

**Your device has reached the daily limit:**

The message volume activated on your device has reached the daily message limit.

**Invalid Sender ID:**

This prompt is received when the inputted sender ID is not registered or misspelled. Kindly confirm your sender ID on the [dashboard](https://accounts.termii.com/#/sms/sender-id-management) or via [API](https://developers.termii.com/sender-id).

**Device not found:**

This occurs when your device is not registered or recognised by our system. Visit your dashboard to [register](https://accounts.termii.com/#/devices) your device.

**Insufficient balance:**

Wallet balance is not sufficient to perform that particular transaction. Kindly visit your dashboard to [top-up](https://accounts.termii.com/#/billing/fund) your account or request an invoice.

**No active subscription on your device:**

Your device subscription has expired. Visit your [dashboard](https://accounts.termii.com/#/devices) to renew the subscription.

**Service temporarily unavailable:**

In this rare instance, Termii is experiencing downtime. [Kindly contact the administrator]().

**This service is currently not active on your account:**

The service in question is not active on your account. [Kindly contact your account manager]().

**Device not active:**

Rescan device barcode to the web server and ensure the device is connected to an active internet.

**This WhatsApp 'destination' is not in a free-form window and no template matched with your content:**

This happens when you are trying to send a free-form window message without your customer initiating the conversation or none of the registered approved templates matches the message content you are trying to send. In cases like this, your customer must have initiated the conversation by sending a WhatsApp message to your business registered WhatsApp number.
