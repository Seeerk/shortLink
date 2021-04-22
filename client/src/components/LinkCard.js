import React from 'react'

export const LinkCard = ({ link }) => {
    return (
        <>
            <h2>Link</h2>

            <p> ShortLink: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p> FromLink: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
            <p> ClicksLink: <a href={link.clicks} target="_blank" rel="noopener noreferrer">{link.clicks}</a></p>
            <p>Date Create <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    )
}