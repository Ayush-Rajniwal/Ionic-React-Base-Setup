import type { SQLiteDBConnection } from "@capacitor-community/sqlite";
import { Plugin } from "@capacitor/core";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { star } from 'ionicons/icons';
import { useEffect } from "react";

import { sqlite } from "../services/storage/storage";
import { Button } from "../widgets/Button";
import { Card } from "../widgets/Card";
import { Container } from "../widgets/Container";
import "./Home.css";

const Home: React.FC = () => {
	console.log(Plugin, "SMSReceive");

	// useEffect(() => {
	// 	const testDB = async () => {
	// 		const db: SQLiteDBConnection = await sqlite.createConnection("myDB");
	// 		await db.open();
	// 		await sqlite.closeConnection("myDB");
	// 	}
	// 	testDB();
	// })

	return (
		<Container>
			{/* <IonHeader>
				<IonToolbar>
					<IonTitle>Blank</IonTitle>
				</IonToolbar>
			</IonHeader> */}
			<IonContent className="ion-padding" fullscreen>
				<h1>Home</h1>
				<div className="card__holder">
					<Card amount="67000" digits="1234" name="Ayush" onClick={() => console.log("Card clicked")} />
				</div>
			</IonContent>
		</Container>
	);
};

export default Home;
