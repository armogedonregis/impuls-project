import { HomeScreen } from '@/components/screens/homeScreen'
import { HeadLayout } from '@/layout/headLayout'
import PageLayout from '@/layout/pageLayout'


export default function Home() {
    return (
        <HeadLayout>
            <PageLayout>
                <HomeScreen />
            </PageLayout>
        </HeadLayout>
    )
}
