import axios from 'axios';
import React, { useState, useEffect } from 'react'
import "../App.css"

function UserDetail({ activeUserId }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
            .then((res) => setUser(res.data)
            ).finally(() => setLoading(false));
    }, [activeUserId])

    return (
        <div>
            <h2>Detaylar</h2>
            {
                loading && <div className="loader"></div>
            }
            {!loading &&
                <pre>
                    {JSON.stringify(user, null, 4)}
                </pre>}
        </div>
    )
}

export default UserDetail