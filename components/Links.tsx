import type { NextPage } from "next";
import { useState } from "react";

export const Links: NextPage = () => {
    return (
        <>
            <div className="links_center">

                <button className="raise" onClick={() => window.open("#", "_blank")}>Blog</button>
                <button className="raise" onClick={() => window.open("https://github.com/miftahalamsyah", "_blank")}>Github</button>
                <button className="raise" onClick={() => window.open("https://instagram.com/miftah.rzky", "_blank")}>Instagram</button>
                <button className="raise" onClick={() => window.open("https://www.linkedin.com/in/miftah-rzky/", "_blank")}>LinkedIn</button>
                <button className="raise" onClick={() => window.open("https://miftahalamsyah.my.id", "_blank")}>Portfolio</button>
            </div>
        </>
    );
}