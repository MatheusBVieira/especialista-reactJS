import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default"

export default function Home () {
  usePageTitle('Home')
  return <DefaultLayout>
    <h1>Home</h1>
  </DefaultLayout>
}