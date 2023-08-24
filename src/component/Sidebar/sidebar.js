import { useState } from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
    const [isActiveShow, setIsActiveShow] = useState(true)

    return (
        <div className={isActiveShow === true ? "side-bar active-show" : "side-bar"}>
            <div class="header-menu d-flex align-items-center justify-content-center">
                <img class="mobile" src="./images/icons/logo-mobile.svg" alt="" />
                <img id="menu-sidebar" onClick={() => setIsActiveShow(!isActiveShow)} class="pc" style={{ width: "20px" }} src="./images/icons/menu-icon.svg"
                    alt="header-logo" />
                <span>Menu</span>
                <div class="line-yblue"></div>
            </div>
            <div class="sidebar-content">
                <div class="event d-flex flex-column align-items-center">
                    <div class="wrap-box d-flex align-items-center justify-content-center">
                        EVENT
                    </div>
                    <div class="d-flex feature-event">
                        <img src="./images/icons/quest.svg" alt="quest" />
                        <img src="./images/icons/spin.svg" alt="spin" />
                    </div>
                </div>
                <div class="sidebar__list-item">
                    <div class="sidebar-item tag-icon d-flex align-items-center">
                        <img style={{ width: "24px" }} src="./images/icons/tagicon.svg" alt="" class="item-icon" />
                    </div>
                    <div class="sidebar-item quest-icon d-flex align-items-center">
                        <img style={{ width: "24px" }} src="./images/icons/quest.png" alt="" class="item-icon" />
                    </div>
                    <div class="sidebar-item spin-icon d-flex align-items-center">
                        <img style={{ width: "24px" }} src="./images/icons/spin-small.svg" alt="" class="item-icon" />
                    </div>
                    <div class="sidebar-item refer-feature d-flex align-items-center">
                        <img style={{ width: "46px" }} src="./images/icons/treasure.png" alt="" class="item-icon" />
                        <div class="item-content">REFER</div>
                    </div>
                    <div class="card">
                        <div class="card-header sidebar-item " id="gacha-sidebar">
                            <h5 class="mb-0">
                                <button
                                    class="btn btn-link btn__sidebar-item d-flex justify-content-between align-items-center"
                                    data-toggle="collapse" data-target="#gacha" aria-expanded="false"
                                    aria-controls="gacha">
                                    <div class="card-btn d-flex align-items-center">
                                        <img style={{ width: "24px" }} src="./images/icons/gacha.png" alt=""
                                            class="item-icon" />
                                        <div class="item-content">Gacha</div>
                                    </div>
                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                            fill="white" />
                                    </svg>
                                </button>
                            </h5>
                        </div>
                        <div id="gacha" class="collapse" aria-labelledby="gacha-sidebar">
                            <div class="card-body">
                                <ul>
                                    <li>
                                        <a class="d-flex align-items-center" href="">
                                            <img src="./images/icons/com-gaga.png" alt="" />Complete Gacha
                                        </a>
                                    </li>
                                    <li>
                                        <a class="d-flex align-items-center" href="">
                                            <img src="./images/icons/box-gacha.png" alt="" />Box Gacha
                                        </a>
                                    </li>
                                    <li>
                                        <a class="d-flex align-items-center" href="">
                                            <img src="./images/icons/reroll.png" alt="" />Re-roll Gacha
                                        </a>
                                    </li>
                                    <li>
                                        <a class="d-flex align-items-center" href="" >
                                            <img src="./images/icons/upgrade-gacha.png" alt="" />Upgrade Gacha
                                        </a>
                                    </li>
                                    <li>
                                        <a class="d-flex align-items-center" href="" >
                                            <img src="./images/icons/icon-mystery.png" alt="" />Mystery Gacha
                                        </a>
                                    </li>
                                    <li>
                                        <a class="d-flex align-items-center" href="" >
                                            <img src="./images/icons/sugoroku.png" alt="" />Sugoroku Gacha
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header sidebar-item " id="lucky-number-sidebar">
                            <h5 class="mb-0">
                                <button
                                    class="btn btn-link btn__sidebar-item d-flex justify-content-between align-items-center"
                                    data-toggle="collapse" data-target="#lucky-number" aria-expanded="false"
                                    aria-controls="lucky-number">
                                    <div class="card-btn d-flex align-items-center">
                                        <img style={{ width: "24px" }} src="./images/icons/lucky-number.png" alt=""
                                            class="item-icon" />
                                        <div class="item-content">Lucky Number</div>
                                    </div>
                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                            fill="white" />
                                    </svg>
                                </button>
                            </h5>
                        </div>
                        <div id="lucky-number" class="collapse" aria-labelledby="lucky-number-sidebar">
                            <div class="card-body">
                                <ul>
                                    <li>
                                        <Link class="d-flex align-items-center" to={"/fournumber"}>
                                            <img src="./images/icons/com-gaga.png" alt="" />4 Số
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="d-flex align-items-center" to={"/jackpot"}>
                                            <img src="./images/icons/box-gacha.png" alt="" />Jackpot
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header sidebar-item " id="qgc-sidebar">
                            <h5 class="mb-0">
                                <button
                                    class="btn btn-link btn__sidebar-item d-flex justify-content-between align-items-center"
                                    data-toggle="collapse" data-target="#qgc" aria-expanded="false"
                                    aria-controls="qgc">
                                    <div class="card-btn d-flex align-items-center">
                                        <img style={{ width: "24px" }} src="./images/icons/coin-gold.svg" alt=""
                                            class="item-icon" />
                                        <div class="item-content">QGC <span>(Upcoming)</span></div>
                                    </div>
                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                            fill="white" />
                                    </svg>
                                </button>
                            </h5>
                        </div>
                        <div id="qgc" class="collapse" aria-labelledby="qgc-sidebar">
                            <div class="card-body">
                                <ul>
                                    <li>
                                        <a class="d-flex align-items-center" href="">
                                            <img src="./images/icons/coin-gold.svg" alt="" />Up comming
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-item d-flex align-items-center">
                        <img style={{ width: "24px" }} src="./images/baka.png" alt="" class="item-icon" />
                        <div class="item-content">BAKA <span>(Upcoming)</span></div>
                    </div>
                    <div class="sidebar-item d-flex align-items-center">
                        <img style={{ width: "24px" }} src="./images/icons/icon-pvp.png" alt="" class="item-icon" />
                        <div class="item-content">PVP <span>(Upcoming)</span></div>
                    </div>
                    <div class="sidebar-item d-flex align-items-center">
                        <img style={{ width: "24px" }} src="./images/icons/upgrade-gacha.png" alt="" class="item-icon" />
                        <div class="item-content">Upgrade <span>(Upcoming)</span></div>
                    </div>
                    <div class="sidebar-item d-flex align-items-center">
                        <img style={{ width: "24px" }} src="./images/icons/tournament.png" alt="" class="item-icon" />
                        <div class="item-content">Tournament</div>
                    </div>
                    <div class="sidebar-item vip-small d-flex align-items-center">
                        <img style={{ width: "40px" }} src="./images/icons/vipsmallicon.png" alt="" class="item-icon" />
                    </div>
                    <div class="sidebar-vipclub">
                        <img style={{ width: "287px" }} src="./images/vipclub-wrap.svg" alt="" class="item-icon" />
                        <div class="vipclub-content d-flex text-center align-items-center flex-column">
                            <img style={{ width: "34px" }} src="./images/icons/vipclub.png" alt="" />
                            <div><strong>VIP Club</strong> (Upcoming)</div>
                        </div>
                    </div>
                    <div class="sidebar-item d-flex align-items-center">
                        <img style={{ width: "24px" }} src="./images/icons/top-member.png" alt="" class="item-icon" />
                        <div class="item-content">Top Member <span>(Upcoming)</span></div>
                    </div>
                    <div class="sidebar-item d-flex align-items-center">
                        <img style={{ width: "24px" }} src="./images/icons/physic-gacha.png" alt="" class="item-icon" />
                        <div class="item-content">Physical Gacha Machine <span>(Upcoming)</span></div>
                    </div>
                    <Link to={"/affiliate"}>
                        <div class="sidebar-item d-flex align-items-center">
                            <img style={{ width: "24px" }} src="./images/icons/affiliate.png" alt="" class="item-icon" />
                            <div class="item-content">Affiliate</div>
                        </div>
                    </Link>

                    <div class="sidebar-item d-flex align-items-center">
                        <img style={{ width: "24px" }} src="./images/icons/forum.png" alt="" class="item-icon" />
                        <div class="item-content">Forum <span>(Upcoming)</span></div>
                    </div>
                    <div class="sidebar-item d-flex align-items-center">
                        <img style={{ width: "24px" }} src="./images/icons/blog.png" alt="" class="item-icon" />
                        <div class="item-content">Blog <span>(Upcoming)</span></div>
                    </div>
                    <div class="sidebar-item live-support d-flex align-items-center">
                        <img style={{ width: "24px" }} src="./images/icons/livesupport.png" alt="" class="item-icon" />
                        <div class="item-content">Live Support</div>
                    </div>
                </div >
            </div >
        </div >


    );
}

export default Sidebar;