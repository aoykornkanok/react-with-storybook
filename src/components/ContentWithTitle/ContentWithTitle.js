import React from 'react'

const ContentWithTitle = ({ text }) => {
    return (
        <div className="content-with-title">
            <div className="text">{text}Add something</div>
            <div>
                children
            </div>
        </div>
    )
}

export default ContentWithTitle
