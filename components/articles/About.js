import React from "react";
import Image from "next/image";
const About = () => {
    return (
        <>
            <h2 className="major">About</h2>
            <span className="image main"><Image src="/static/images/pic03.jpg" height={500} width={500} alt="" /></span>
            <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
        </>
    )
}

export default About;