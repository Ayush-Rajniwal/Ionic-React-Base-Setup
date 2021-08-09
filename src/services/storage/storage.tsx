/* eslint-disable import/no-mutable-exports */
import { useState } from "react";
import { useSQLite } from "react-sqlite-hook/dist";
// Singleton SQLite Hook
export let sqlite: any;
// Existing Connections Store
export let existingConn: any;
// Is Json Listeners used
export let isJsonListeners: any;

const useStorage: any = () => {
    const [existConn, setExistConn] = useState(false);
	existingConn = { existConn: existConn, setExistConn: setExistConn };
	const [jsonListeners, setJsonListeners] = useState(false);
	isJsonListeners = {
		jsonListeners: jsonListeners,
		setJsonListeners: setJsonListeners,
	};
	const onProgressImport = async (progress: string) => {
		if (isJsonListeners.jsonListeners) {
			console.log(progress);
		}
	};
	const onProgressExport = async (progress: string) => {
		if (isJsonListeners.jsonListeners) {
			console.log(progress);
		}
	};
	const {
		echo,
		getPlatform,
		createConnection,
		closeConnection,
		retrieveConnection,
		retrieveAllConnections,
		closeAllConnections,
		isConnection,
		addUpgradeStatement,
		importFromJson,
		isJsonValid,
		isDatabase,
		getDatabaseList,
		addSQLiteSuffix,
		deleteOldDatabases,
		copyFromAssets,
		checkConnectionsConsistency,
		isAvailable,
	} = useSQLite({
		onProgressImport,
		onProgressExport,
	});
	sqlite = {
		echo: echo,
		getPlatform: getPlatform,
		createConnection: createConnection,
		closeConnection: closeConnection,
		retrieveConnection: retrieveConnection,
		retrieveAllConnections: retrieveAllConnections,
		closeAllConnections: closeAllConnections,
		isConnection: isConnection,
		isDatabase: isDatabase,
		getDatabaseList: getDatabaseList,
		addSQLiteSuffix: addSQLiteSuffix,
		deleteOldDatabases: deleteOldDatabases,
		addUpgradeStatement: addUpgradeStatement,
		importFromJson: importFromJson,
		isJsonValid: isJsonValid,
		copyFromAssets: copyFromAssets,
		checkConnectionsConsistency: checkConnectionsConsistency,
		isAvailable: isAvailable,
	};
};

export default useStorage;
