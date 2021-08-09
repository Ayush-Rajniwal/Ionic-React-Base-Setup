import type { PermissionStatus } from "@capacitor/local-notifications";
import { LocalNotifications } from "@capacitor/local-notifications";

const isPermission =  async () => {
	// Request/ check permissions
	if (!(await LocalNotifications.requestPermissions()).display) return;

	// Clear old notifications in prep for refresh (OPTIONAL)
    const pending = await LocalNotifications.getPending();

	if (pending.notifications.length > 0)
        await LocalNotifications.cancel(pending);

    await LocalNotifications.schedule({
		notifications: [
			{
				title: "Triumph30",
				body: "My message",
                id: 1,
                schedule: {
                    // Schedule the notification to be displayed at 5 sec from now
					at: new Date(Date.now() + 5000),
                }
			},
		],
	});
};


const Notification = (): void => {
    isPermission();
}

export default Notification;
