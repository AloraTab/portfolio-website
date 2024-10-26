import HoverBlock from "./blocks/HoverBlock";

const MyBlog = () => {
    return (
        <div className="flex-col flex">
            <HoverBlock
                outlineColor={"green"}
                header={"Facial Emotion Recognition through Video"}
                desc={"Classification of human emotions through video. This project won 2nd place in the FER-May Hackathon submitted by Team FAI.CE."}
            />
            <HoverBlock
                outlineColor={"green"}
                header={"Keyword Recognition through Voice"}
                desc={"Audio classification solution for the AAICO Hackathon - the model recognizes a given set of keywords in a spoken audio and identifies where they were spoken. Won 3rd place! Submitted by Team VSTREAM Analysts"}
            />
            <HoverBlock
                outlineColor={"green"}
                header={"Keyword Recognition through Voice"}
                desc={"Audio classification solution for the AAICO Hackathon - the model recognizes a given set of keywords in a spoken audio and identifies where they were spoken. Won 3rd place! Submitted by Team VSTREAM Analysts"}
            />
        </div>
    );
}

export default MyBlog;