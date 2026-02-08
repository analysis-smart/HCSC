# 使用助记词导入测试账户到本地钱包

sui keytool import --alias my_test "助记词" ed25519

# 切换活动账户
sui client switch --address my_test

# sdk调用配置
// \HCSC\frontend_next\src\components\providers.tsx
```
'use client';

import { WalletProvider } from '@suiet/wallet-kit';
import { SuiTestnetChain } from '@suiet/wallet-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SuiClientProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';

import type { Chain } from '@suiet/wallet-kit';

interface ProvidersProps {
  children: React.ReactNode;
}

// 设置支持的链
const SupportedChains: Chain[] = [SuiTestnetChain];

// 配置 QueryClient（react-query）
const queryClient = new QueryClient();

// 配置 SuiClientProvider
const networks = {
  devnet: { url: getFullnodeUrl('devnet') },
  testnet: { url: getFullnodeUrl('testnet') },
  mainnet: { url: getFullnodeUrl('mainnet') },
};

export function Providers({ children }: ProvidersProps) {
  //用什么网，默认里面就填什么
  return (
    <QueryClientProvider client={queryClient}>
      
      <SuiClientProvider networks={networks} defaultNetwork="testnet">
        <WalletProvider chains={SupportedChains}>
          {children}
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}
```

# sdk调用
```
// \frontend_next\src\hooks\MyComponent.tsx
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

```