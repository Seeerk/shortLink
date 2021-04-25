import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "../components/Loader";
import {LinkCard} from "../components/LinkCard";

export const DetailPage = () => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [link, setLink] = useState(null)
    const linkId = useParams().id

    const getLink = useCallback(async () => {
        try {
            const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLink(fetched)
            console.log('blah');
        } catch (e) {
            console.log("Durak?")
        }
    }, [token, linkId, request])

    useEffect(() => {
        console.log(linkId)
        getLink()
    }, [getLink, linkId])

    if (loading) {
        return <Loader />
    }

    return (

                <div>
                <>
                    { !loading && link && <LinkCard link={link} /> }
                </>
            </div>
    )
}
