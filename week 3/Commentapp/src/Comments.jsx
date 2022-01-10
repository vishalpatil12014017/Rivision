import { nanoid } from "nanoid";
import React, { useState } from "react";

export default function Comments({
    points,
    timestamp,
    body,
    author,
    replies
}) {
    const hasChildren = replies && replies.length;
    const [flag, setflag] = useState(false);
    const [flag2, setflag2] = useState(false);
    const [inpt, setinpt] = useState("");
    return (
        <>
            <div
                className="container p-4 m-4 mx-auto bg-dark text-white"
                style={flag ? { borderLeft: "3px solid black" } : { border: "none" }}
            >
                <div>
                    {hasChildren ? (
                        <p
                            onClick={() => {
                                setflag(!flag);
                            }}
                            style={{ float: "left", margin: "30px 6px", fontWeight: "1000" }}
                        >
                          <span><h1>+</h1></span>  
                        </p>
                    ) : (
                        ""
                    )}
                </div>
                <div className="info">
                    <p>
                        {author} {points}
                    </p>
                    <h3>{body}</h3>
                    <p>{timestamp}</p>
                    <p></p>
                    <div style={{ display: "flex" }}>
                        {flag2 ? (
                            <div style={{ display: "flex" }}>
                                <input
                                    className="bg-dark text-white"
                                    type="text"
                                    value={inpt}
                                    onChange={(e) => {
                                        setinpt(e.target.value);
                                    }}
                                />
                                <p
                                    onClick={() => {
                                        if (inpt != "") {
                                            replies.push({
                                                id: `${nanoid(4)}`,
                                                author: "Vishal",
                                                body: `${inpt}`,
                                                timestamp: "Sun Aug 08 1999 16:35:35 GMT+0530",
                                                points: "3",
                                                replies: []
                                            });
                                            setinpt("");
                                        }
                                        setflag2(!flag2);
                                    }}
                                >
                                    add
                                </p>
                            </div>
                        ) : (
                            <div style={{ display: "flex" }}>
                                <p
                                    className="m-3"
                                    onClick={() => {
                                        setflag2(!flag2);
                                    }}
                                >
                                    replay
                                </p>
                                <p className="m-3">Give Award</p>
                                <p className="m-3">Share</p>
                                <p className="m-3">Report</p>
                                <p className="m-3">Save</p>
                            </div>
                        )}
                    </div>
                </div>
                {flag &&
                    hasChildren &&
                    replies.map((item) => <Comments key={item.id} {...item} />)}
            </div>
        </>
    );
}
