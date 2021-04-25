import React from 'react'

export const LinkCard = ({ link }) => {
    return (
        <>
            <h1>Link</h1>

            <p> ShortLink: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p> Source link: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
            <p> Clicks: <a href={link.clicks} target="_blank" rel="noopener noreferrer">{link.clicks}</a></p>
            <p>Created <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    )
}