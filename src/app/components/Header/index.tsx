import Header from "./Header";
import { cookies } from "next/headers";

function Index() {

    const num: any = cookies().get("Count");
    const count = num ? parseInt(num.value) : 0;

    return (
        <Header count={count} />
    )
}

export default Index;