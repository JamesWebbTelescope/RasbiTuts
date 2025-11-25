import React from "react";
import { GetExternal } from "../services/apiService";

interface TextProps {
    url: string
    tutorial: string
}

class TextRender extends React.Component<TextProps>{
    fetchData = async() => {
        let res = await GetExternal(this.props.url, this.props.tutorial);
        let data = res
        console.log(data)

    }
    render() {
        this.fetchData()
        return <div></div>
    }
}

export default TextRender;