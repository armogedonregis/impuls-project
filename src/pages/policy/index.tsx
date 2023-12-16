import { socialsData } from "@/components/data/socialsData"
import { PolicyScreen } from "@/components/screens/staticPages/policy"
import { HeadLayout } from "@/layout/headLayout"
import PageLayout from "@/layout/pageLayout"
import { categoryType } from "@/types/categoriesType"
import { isServer } from "@/utils/server"
import { NextPageContext } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useState } from "react"

type aboutPage = {
    categories: categoryType[]
    lang: string
}

export default function Policy(props: aboutPage) {

    const [isNavBarOpen, openNavBar] = useState<Boolean>(false)
    const { t, i18n } = useTranslation('locale')
    
    return (
        <HeadLayout
            title={t('head.policy.title')}
            description={t('head.policy.description')}
            author={t('head.policy.keywords')}
            keywords={t('head.policy.author')}
        >
            <PageLayout
                categories={props.categories}
                socials={socialsData}
                lang={props.lang}
                isNavBarOpen={isNavBarOpen}
                openNavBar={openNavBar}
            >
                <PolicyScreen />
            </PageLayout>
        </HeadLayout>
    )
}

export const getStaticProps = async (ctx: NextPageContext) => {
    // Определяем локализацию
    const lang = ctx.locale

    // Вытягиваем категории
    const categories_ = await fetch(`${isServer}/categories/${lang}`)

    // Сериализуем в джейсона
    const categories = await categories_.json()

    return {
        props: {
            ...(await serverSideTranslations(lang ?? 'es', [
                'common',
                'locale',
                'policy'
            ])),
            categories, lang
        },
        revalidate: 60
    }
}