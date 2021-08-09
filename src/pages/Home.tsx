import type { SQLiteDBConnection } from "@capacitor-community/sqlite";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { useEffect } from "react";

import ExploreContainer from "../components/ExploreContainer";
import { sqlite } from "../services/storage/storage";

import "./Home.css";

const Home: React.FC = () => {
	useEffect(() => {
		const testDB = async () => {
			const db: SQLiteDBConnection = await sqlite.createConnection("myDB");
			await db.open();
			await sqlite.closeConnection("myDB");
		}
		testDB();
	})

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Blank</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer />
			</IonContent>
		</IonPage>
	);
};

export default Home;
