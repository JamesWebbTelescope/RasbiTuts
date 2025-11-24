import React from "react";

interface TextProps {
    url: string
}

class TextRender extends React.Component<TextProps>{
    render(): React.ReactNode {
        let website = fetch(this.props.url).then(response => {(response.text);
            return response.text
        });
        //let website = fetch(this.props.url)

        console.log(website)
        return <div></div>
    }
}

export default TextRender;