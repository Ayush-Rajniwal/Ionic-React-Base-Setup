import {
	PushNotifications
} from "@capacitor/push-notifications";

const PushNotificationService = (): void => {
    PushNotifications.requestPermissions();
	// Register with Apple / Google to receive push via APNS/FCM
	PushNotifications.register();

	// On succcess, we should be able to receive notifications
	PushNotifications.addListener(
		"registration",
		(token: any) => {
			console.log("Push registration success, token: " + token.value);
		}
	);

	// Some issue with your setup and push will not work
	PushNotifications.addListener("registrationError", (error: any) => {
		console.log("Error on registration: " + JSON.stringify(error));
	});

	// Show us the notification payload if the app is open on our device
	PushNotifications.addListener(
		"pushNotificationReceived",
		(notification: any) => {
			console.log(notification);
		}
	);

	// Method called when tapping on a notification
	PushNotifications.addListener(
		"pushNotificationActionPerformed",
		(notification: any) => {
			console.log(notification);
		}
	);
};

export default PushNotificationService;
