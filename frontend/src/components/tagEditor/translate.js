import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchLocalJSONAPI } from "../../utills/fetch";
import { alertComponent } from "../tagEditor/inputToolForm";


const TranslateComponent = (props) => {
    const [translation, setTranslation] = useState();
    const [isLoading, setLoading] = useState(false);
    const [isCopied, setCopied] = useState(false);
    const jwtToken = useSelector(state => state.auth.jwtToken);

    useEffect(() => {
        setLoading(true);
        (async () => {
            await fetchLocalJSONAPI(`challenge/${props.challenge_id}/translate/?text=${props.text}`, jwtToken).then((data) => {
                setTranslation(data.translated);
                setLoading(false);
            });
        })();
    }, [props.challenge_id, jwtToken, props.text]);

    const handleCopy = (e) => {
        navigator.clipboard.writeText(e.target.innerText);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }
            , 1200);
    }

    return (
        <div>
            {isLoading ? null : (
                <div className="fs-6 mt-1 p-2">Suggestion:
                    <span
                        onClick={(e) => handleCopy(e)}
                        className="btn btn-sm btn-dark ms-1"
                    >
                        {translation}
                    </span>
                </div>
            )}
            {isCopied ? alertComponent() : null}
        </div>
    )
}

export default TranslateComponent;
