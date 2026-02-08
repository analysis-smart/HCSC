import { useSuiClientQuery } from '@mysten/dapp-kit';
 

//hook，用来获取数据
export function MyComponent() {
	const { data, isPending, isError, error, refetch } = useSuiClientQuery(
		'getObject',
		{ id: '0x43730530a28dc51baabc5911e30cf50d231b7eb020d4a2edc6a4c491be022fde', options: {
			showType: false,
			showOwner: false,
			showPreviousTransaction: false,
			showContent: true,
			showStorageRebate: false,
		}, },
		
		{
			gcTime: 10000,
		},
	);
 
	if (isPending) {
		return <div>Loading...</div>;
	}
 
	if (isError) {
		return <div>Error: {error.message}</div>;
	}
 
	return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
