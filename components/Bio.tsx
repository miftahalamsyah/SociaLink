import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";

export const Bio: NextPage = () => {
    return (
        <>
            <div className="content">
                <div className="profile">
                    <div className="profilepic">
                        <Image
                            src="/profilePic.webp"
                            alt="profilepic"
                            width={100}
                            height={24}
                            priority
                        />
                    </div>
                </div>
            </div>
        </>
    );
}