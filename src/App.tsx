import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './screens/Home';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing>
      <Home />
    </QueryClientProvider>
  );
}
