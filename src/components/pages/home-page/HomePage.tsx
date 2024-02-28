import {Hero} from "@/components";
import {MainSlider} from "@/components/common/products";

interface Props {
    
}
export function HomePage({}: Props) {
    return (
        <>
            <Hero/>
            <MainSlider/>
        </>
    );
}