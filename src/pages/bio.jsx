import { useEffect, useState } from "react";

function Bio(){
    let [ followers, setFollowers ] = useState([]);
    let [ following, setFollowing ] = useState([]);
   
    useEffect(() =>{
        // fetch to github api
        document.title = '[Bio] - NonLnwza';
        fetch("https://api.github.com/users/imjustnon/followers").then(res => res.json()).then(result => setFollowers(result));
        fetch("https://api.github.com/users/imjustnon/following").then(res => res.json()).then(result => setFollowing(result));
    }, []);
    return (
        <div className="wrapper">
            <div className="profile-card js-profile-card">
                <div className="profile-card__img">
                <img
                    src="https://me.nonlnwza.xyz/assets/images/profile_images/my_face_4.jpg"
                    alt="profile_img"
                />
                </div>

                <div className="profile-card__cnt js-profile-cnt">
                    <div className="profile-card__name">Non Kanakorn</div>
                    <div className="profile-card__txt">ก็เเค่ Dev. คนนึงที่สามารถสร้างบักได้ภายใน Code 2 บรรทัด</div>
                    <div className="profile-card-loc">
                        <span className="profile-card-loc__icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </span>

                        <span className="profile-card-loc__txt"> Samut Prakan, Thailand </span>
                    </div>

                    <div className="profile-card-inf">
                        <div className="profile-card-inf__item">
                        <div className="profile-card-inf__title">{followers.length}</div>
                        <div className="profile-card-inf__txt">Followers</div>
                        </div>

                        <div className="profile-card-inf__item">
                        <div className="profile-card-inf__title">{following.length}</div>
                        <div className="profile-card-inf__txt">Following</div>
                        </div>

                        
                    </div>

                    <div className="profile-card-social">
                        <a href="https://github.com/ImJustNon" className="profile-card-social__item github" target="_blank">
                            <span className="icon-font">
                                <i className="fa-brands fa-github"></i>
                            </span>
                        </a>

                        <a href="https://www.youtube.com/channel/UCCAlDdKswolIsOERlt0QWbw" className="profile-card-social__item link" target="_blank">
                            <span className="icon-font">
                                <i class="fa-brands fa-youtube"></i>
                            </span>
                        </a>

                        <a href="https://www.facebook.com/imjustnon" className="profile-card-social__item facebook" target="_blank">
                            <span className="icon-font">
                                <i class="fa-brands fa-facebook-f"></i>
                            </span>
                        </a>

                        <a href="https://twitter.com/NoNnYhA55" className="profile-card-social__item twitter" target="_blank">
                            <span className="icon-font">
                                <i class="fa-brands fa-twitter"></i>
                            </span>
                        </a>
                    </div>

                    <br />
                    <img src="https://lanyard.cnrad.dev/api/708965153131200594" style={{width: "20rem"}} alt="discord_activity" />

                    <div className="profile-card-ctr">
                        <a href="https://me.nonlnwza.xyz" target="_blank" className="profile-card__button button--blue">Website</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bio;