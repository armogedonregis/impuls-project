import { HeadMain } from "./headMain"

type LayoutProps = {
    children: React.ReactNode
}

export const HeadLayout = ({children}: LayoutProps) => {
    return (
        <>
        <HeadMain
          title="Impuls PLUS"
          description="Portal en español, inglés y ruso sobre la actualidad en los ámbitos de turismo, cultura, moda, tendencias, finanzas, salud, deportes, educación, inversiones"
          author="Impuls PLUS"
          keywords=""
        />
          {children}
        </>
      )
}