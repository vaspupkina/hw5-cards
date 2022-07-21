import React from 'react'
import PropTypes from 'prop-types'

// Функциональный компонент карточки
function Card({title, text, link, linkText, ...props}) {
    // Функциональный компонент тела карточки
    const CardBody = () => {
                            return (
                            <div className="card-body">
                                { title && <h5 className="card-title">{title}</h5> }
                                { text && <p className="card-text">{text}</p> }
                                { link && <a className="btn btn-primary" href={link}>{linkText ?? "Go"}</a> }    
                            </div>);
    }
    return (
        <div className="card" style={{width: "18rem"}}>
            {props.children}
            <CardBody {...props} />
        </div>
    )
}

Card.propTypes = {
    title : PropTypes.string,
    text : PropTypes.string,
    link : PropTypes.string,
    linkText : PropTypes.string
}

export default Card
