import { useContext } from "react";
import { AboutMeContext } from '../../context/AboutMeContext';
import profileImage from '../../images/profileImage.jpg';

const AboutMeBio = () => {
    const { aboutMe } = useContext(AboutMeContext);
    console.log("AboutMeBio component is rendering");
    console.log("aboutMe data:", aboutMe);

    return (
        <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                <img src={profileImage} className="rounded-lg w-96" alt="Profile" />
            </div>

            <div className="font-general-regular w-full sm:w-3/4 text-left">
                {aboutMe.map((bio) => (
                    <p
                        className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                        key={bio.id}
                    >
                        {bio.bio}
                    </p>
                ))}
            </div>
        </div>
    );
};


export default AboutMeBio;