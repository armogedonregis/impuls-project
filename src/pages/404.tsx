import { socialsData } from '@/components/data/socialsData'
import { NotFound } from '@/components/screens/notFound/notFound'
import { HeadLayout } from '@/layout/headLayout'
import PageLayout from '@/layout/pageLayout'
import { categoryType } from '@/types/categoriesType'
import { isServer } from '@/utils/server'
import { NextPageContext } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'

type not_found = {
    categories: categoryType[]
    lang: string
}

export default function NotFound404(props: not_found) {
    
    const [isNavBarOpen, openNavBar] = useState<Boolean>(false)
    const { t, i18n } = useTranslation('locale')

    return (
        <HeadLayout
            title={t('head.notFound_404.title')}
            description={t('head.notFound_404.description')}
            author={t('head.notFound_404.author')}
            keywords={t('head.notFound_404.keywords')}
        >
            <PageLayout
                categories={props.categories}
                socials={socialsData}
                lang={props.lang}
                isNavBarOpen={isNavBarOpen}
                openNavBar={openNavBar}
            >
                <NotFound
                    openNavBar={openNavBar}
                />
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
                'locale'
            ])),
            categories, lang
        },
        revalidate: 60
    }
}