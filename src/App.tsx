/* eslint-disable import/no-mutable-exports */
import { App as capCongif } from "@capacitor/app";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

import Home from "./pages/Home";
import Notification  from "./services/notifications/notifications";
import PushNotificationService from "./services/push-notifications/push-notification";
import useStorage from "./services/storage/storage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
	useStorage();
	// Notification();
	PushNotificationService();
	capCongif.addListener("appStateChange", ({ isActive }) => {
		console.log("App state changed. Is active?", isActive);
	});

	capCongif.addListener("appRestoredResult", (data) => {
		console.log("Restored state:", data);
	});

	document.addEventListener("ionBackButton", (ev) => {
		console.log("Back button pressed");
		capCongif.exitApp();
	});
	return <IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route exact path="/home">
					<Home />
				</Route>
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
};

export default App;
