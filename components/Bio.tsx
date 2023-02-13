import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";

export const Bio: NextPage = () => {
    return (
        <>
            <div>
                <div className="bio_profilepic"/>
                <h2 className="bio_username">@miftah.rzky</h2>
                <h5 className="bio_name">✧༺ Miftah Rizky Alamsyah ༻✧</h5>
            </div>
        </>
    );
}