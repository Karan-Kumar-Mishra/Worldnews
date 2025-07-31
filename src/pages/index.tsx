import DefaultLayout from "@/layouts/default";
import NewNavbar from "@/components/NewNavbar";
import CardSection from "@/components/CardSection";

export default function IndexPage() {
  return (
    <DefaultLayout>
        <NewNavbar />
        <CardSection/>
    </DefaultLayout>
  );
}
