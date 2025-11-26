import React from "react";
import { GetExternal } from "../services/apiService";

interface TextProps {
    url: string
    tutorial: string
}

class TextRender extends React.Component<TextProps>{

    
    fetchData = async() => {
        const res = await GetExternal(this.props.url, this.props.tutorial)
        // Example: Extract all text from the body
        return res

    }

    render() {
        let htmlString = this.fetchData()
        console.log("Getting text from websites")
        console.log(htmlString)
        return <div dangerouslySetInnerHTML={{ __html: this.fetchData()}}></div>
    }
}

export default TextRender;