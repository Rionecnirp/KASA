import React, { useEffect, useState } from 'react'

/** Ce composant retourne :
 * 3 useState et un useEffect.
 * Dans le useEffect, on récupère :
 * les informations spécifiques des logements, que l'on place dans le premier useState.
 * Si on as une erreur, on modifie le second useState.
 * Dès qu'on a toutes les informations récupérées depuis l'API, on modifie le 3ème useState
 */

export default function UseEffectProperties(id) {
    const [infoProperties, setInfoProperties] = useState(null)
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        if (!id) return

        fetch(`http://localhost:8080/api/properties/${id}`)
        .then((res) => {
            if (!res.ok) {
            throw new Error('Not found')
            }
            return res.json()
        })
        .then((data) => {
            setInfoProperties(data)
            setHasError(false)
        })
        .catch((err) => {
            console.error(err)
            setHasError(true)
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [id])

    return { infoProperties, hasError, isLoading }
}