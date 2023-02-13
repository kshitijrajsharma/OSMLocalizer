import React from "react";

import { Input } from "../input";
import { DrawPolygon } from "./drawPolygon";

export const OverpassQuery = (props) => {
    return (
        <div className="p-2 pb-4">
            <label className="form-label fw-bold text-secondary">Overpass query</label>
            <textarea
                className="form-control"
                name="overpass_query"
                type="text"
                placeholder="Overpass query"
                defaultValue={props.defaultValue}
                onChange={(e)=>props.onChange(e)}
                rows="5"
            />
            <div className="d-block m-2 text-body fst-italic">
                <span 
                    className="bg-warning ps-2 rounded">
                        {"Please include {{bbox}} in your query inplace of bounding box "} &nbsp;
                </span>
            </div>
            <button 
                className="btn btn-sm btn-info"
                onClick={props.onQueryTest}
            >
                Test query
            </button>
        </div>
    )
}


export const TasksForm = (props)=>{

    const onInputChange = (e) => {
        props.setChallengeInfo({
            ...props.challengeInfo,
            [e.target.name]: e.target.value
        })
    }

    const onQueryTest = (e) => {
        e.preventDefault();
        console.log(props.challengeInfo.overpass_query);
    }
    const onDrawPolygon = (box) => {
        props.setChallengeInfo({
            ...props.challengeInfo,
            bbox: box,
        })
    }
    
    return (
        <div>
            <DrawPolygon
                box={props.challengeInfo.bbox}
                onChange={onDrawPolygon} 
            />
            <Input
                name="bbox"
                label="Bounding Box"
                type="text"
                placeholder="bbox"
                onChange={onInputChange}
                defaultValue={props.challengeInfo.bbox}
            />
            <OverpassQuery
                onChange={onInputChange}
                onQueryTest={onQueryTest}
                defaultValue={props.challengeInfo.overpass_query}
            />
            <Input
                name="language_tags"
                label="Language Tags"
                type="text"
                placeholder="tags"
                onChange={onInputChange}
                defaultValue={props.challengeInfo.languageTags}
            />
        </div>

    )

}
