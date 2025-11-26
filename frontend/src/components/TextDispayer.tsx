import React from "react";
import { GetExternal } from "../services/apiService";

interface TextProps {
    url: string
    tutorial: string
}

class TextRender extends React.Component<TextProps>{
    
    fetchData = async() => {
        let res = await GetExternal(this.props.url, this.props.tutorial)
        // Example: Extract all text from the body
        return {res}

    }

    render() {
        const htmlString: any = this.fetchData().then((result) => {return result;}).catch((error) => {console.log(error); return null;});
        console.log("Getting text from websites")
        console.log(htmlString)
        return <div dangerouslySetInnerHTML={{ __html: htmlString}}></div>
    }
}

export default TextRender;