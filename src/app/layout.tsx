import './globals.css'
import {ClusterProvider} from '@/components/cluster/cluster-data-access'
import {SolanaProvider} from '@/components/solana/solana-provider'
import {UiLayout} from '@/components/ui/ui-layout'
import {ReactQueryProvider} from './react-query-provider'

export const metadata = {
  title: 'Department of Corrections Dashboard',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ClusterProvider>
            <SolanaProvider>
              <UiLayout>{children}</UiLayout>
            </SolanaProvider>
          </ClusterProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
