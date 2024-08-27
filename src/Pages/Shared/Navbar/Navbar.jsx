import { Link } from "react-router-dom";


const Navbar = () => {

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>


    </>

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <div>
                        <a className="btn btn-ghost text-3xl font-bold space-x-0">Bistro Boss</a>
                        <svg className="px-4" width='190' height="17.112061" viewBox="0 0 233.254 17.1121" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Restaurant" d="M1.91 0L-1.71e-5 0L-1.71e-5 0.24L0.31 0.24Q0.61 0.24 0.87 0.34Q1.14 0.46 1.36 0.69C1.67 0.98 1.83 1.33 1.84 1.75L1.84 15.04C1.83 15.46 1.67 15.82 1.36 16.12C1.07 16.41 0.72 16.56 0.31 16.56L-1.71e-5 16.56L-1.71e-5 16.79L7.27 16.79L7.27 16.56L6.98 16.56C6.56 16.56 6.2 16.41 5.9 16.12C5.59 15.82 5.44 15.46 5.44 15.04L5.44 1.05L6.52 1.05Q6.93 1.03 7.27 1.05C8.05 1.07 8.71 1.35 9.23 1.89C9.76 2.42 10.05 3.26 10.1 4.41C10.12 4.65 10.11 4.87 10.08 5.06C10.06 5.25 10.04 5.42 10 5.56C9.87 6.27 9.65 6.82 9.33 7.22Q8.86 7.81 8.24 8.08Q8.23 8.08 8.23 8.08C7.83 8.26 7.41 8.35 6.98 8.35L6.23 8.35L6.23 8.59C6.55 8.64 6.85 8.79 7.12 9.04C7.41 9.3 7.66 9.68 7.87 10.2C7.91 10.34 7.99 10.54 8.11 10.8C8.22 11.05 8.35 11.34 8.49 11.66C8.65 11.96 8.81 12.28 8.97 12.62C9.13 12.96 9.28 13.28 9.43 13.58C9.59 13.87 9.73 14.11 9.86 14.3Q10.46 15.24 11.28 15.79Q12.09 16.34 13.15 16.58C13.85 16.72 14.64 16.79 15.5 16.79L17.85 16.79L17.85 16.56C17.44 16.54 17.07 16.48 16.75 16.36C16.43 16.24 16.12 16.04 15.84 15.79C15.55 15.52 15.23 15.16 14.88 14.73C14.65 14.44 14.4 14.11 14.13 13.72C13.86 13.34 13.6 12.96 13.34 12.6C13.1 12.21 12.89 11.89 12.72 11.64C12.56 11.38 12.47 11.24 12.45 11.2C12.18 10.79 11.83 10.37 11.4 9.96Q10.84 9.4 10.17 9.15Q10.09 9.12 10 9.09C10.92 9 11.66 8.72 12.24 8.25Q12.87 7.72 13.26 7.05Q13.4 6.81 13.51 6.55Q13.94 5.54 13.94 4.53L13.94 4.53Q13.94 3.26 13.46 2.4C13.14 1.82 12.71 1.36 12.16 1C11.64 0.65 11.03 0.4 10.34 0.24Q10.2 0.2 10.06 0.17Q9.16 0 8.23 0L1.91 0ZM98.19 7.09L96.04 12.09L100.31 12.09L98.19 7.09ZM100.71 13.03L95.64 13.03L94.67 15.28C94.52 15.68 94.56 15.99 94.77 16.22C94.99 16.44 95.24 16.56 95.51 16.56L95.7 16.56L95.7 16.79L90.9 16.79L90.9 16.56L91.1 16.56C91.42 16.56 91.75 16.46 92.1 16.27C92.46 16.06 92.74 15.71 92.97 15.21L92.97 15.21L97.89 4.65C97.92 4.56 97.99 4.39 98.1 4.15C98.22 3.89 98.34 3.61 98.46 3.31C98.59 2.99 98.71 2.69 98.82 2.42C98.94 2.13 99 1.91 99.02 1.75L99.21 1.75L105.62 15.21L105.62 15.21C105.86 15.71 106.15 16.06 106.5 16.27Q107.03 16.56 107.51 16.56L107.7 16.56L107.7 16.79L100.65 16.79L100.65 16.56L100.84 16.56C101.11 16.56 101.36 16.44 101.58 16.22C101.77 16.02 101.82 15.76 101.73 15.44L100.71 13.03ZM173.34 7.09L171.19 12.09L175.46 12.09L173.34 7.09ZM175.86 13.03L170.79 13.03L169.82 15.28C169.67 15.68 169.7 15.99 169.92 16.22Q170.17 16.47 170.46 16.53Q170.56 16.56 170.66 16.56L170.85 16.56L170.85 16.79L166.05 16.79L166.05 16.56L166.24 16.56C166.56 16.56 166.9 16.46 167.25 16.27C167.6 16.06 167.89 15.71 168.12 15.21L168.12 15.21L173.04 4.65C173.07 4.56 173.14 4.39 173.25 4.15C173.36 3.89 173.48 3.61 173.61 3.31C173.74 2.99 173.86 2.69 173.97 2.42C174.08 2.13 174.15 1.91 174.16 1.75L174.36 1.75L180.76 15.21L180.76 15.21C181 15.71 181.3 16.06 181.65 16.27C182 16.46 182.34 16.56 182.66 16.56L182.85 16.56L182.85 16.79L175.8 16.79L175.8 16.56L175.99 16.56C176.26 16.56 176.51 16.44 176.73 16.22C176.92 16.02 176.97 15.76 176.88 15.44L175.86 13.03ZM70.4 2.16Q70 2.06 69.78 2.01L69.78 5.8L70.04 5.8L70.04 5.59C70.04 4.9 70.23 4.36 70.6 3.96C70.98 3.56 71.52 3.35 72.23 3.33L74.99 3.33L74.99 15.28C74.97 15.64 74.84 15.94 74.58 16.2C74.34 16.44 74.04 16.56 73.69 16.56L73.43 16.56L73.43 16.79L80.05 16.79L80.05 16.56L79.79 16.56C79.42 16.56 79.11 16.44 78.85 16.2C78.6 15.94 78.47 15.64 78.47 15.28L78.47 3.33L81.25 3.33C81.94 3.35 82.48 3.56 82.86 3.96Q82.98 4.08 83.08 4.21Q83.46 4.76 83.44 5.59L83.44 5.8L83.7 5.8L83.7 2.01C83.59 2.06 83.39 2.11 83.1 2.18C82.81 2.23 82.49 2.28 82.14 2.32C81.79 2.35 81.46 2.37 81.16 2.37L72.3 2.37Q71.87 2.37 71.34 2.32C71 2.28 70.69 2.22 70.4 2.16ZM219.95 2.16C219.68 2.09 219.47 2.04 219.33 2.01L219.33 5.8L219.59 5.8L219.59 5.59C219.59 4.9 219.78 4.36 220.15 3.96C220.53 3.56 221.07 3.35 221.78 3.33L224.54 3.33L224.54 15.28C224.52 15.64 224.39 15.94 224.13 16.2C223.89 16.44 223.59 16.56 223.24 16.56L222.98 16.56L222.98 16.79L229.6 16.79L229.6 16.56L229.34 16.56C228.97 16.56 228.66 16.44 228.4 16.2C228.15 15.94 228.02 15.64 228.02 15.28L228.02 3.33L230.8 3.33C231.49 3.35 232.03 3.56 232.41 3.96Q232.53 4.08 232.62 4.21Q233 4.76 232.99 5.59L232.99 5.8L233.25 5.8L233.25 2.01C233.14 2.06 232.94 2.11 232.65 2.18C232.36 2.23 232.04 2.28 231.69 2.32C231.34 2.35 231.01 2.37 230.71 2.37L221.85 2.37C221.56 2.37 221.24 2.35 220.89 2.32C220.55 2.28 220.24 2.22 219.95 2.16ZM37.44 2.4L37.44 2.04C37.25 2.1 36.9 2.18 36.39 2.28C35.88 2.35 35.39 2.4 34.92 2.4L26.5 2.4L26.5 2.64L26.81 2.64C27.16 2.64 27.46 2.76 27.7 3C27.96 3.24 28.09 3.54 28.11 3.91L28.11 15.28C28.09 15.64 27.96 15.94 27.7 16.2C27.46 16.44 27.16 16.56 26.81 16.56L26.5 16.56L26.5 16.79L37.8 16.79L38.72 12.38L38.5 12.38C38.29 13.08 38 13.7 37.61 14.23C37.23 14.74 36.76 15.14 36.22 15.43C35.69 15.7 35.08 15.84 34.4 15.84L31.56 15.84L31.56 10.15L34.3 10.15C34.86 10.16 35.3 10.35 35.62 10.7C35.96 11.05 36.12 11.49 36.12 12.02L36.12 12.21L36.36 12.21L36.36 7.12L36.12 7.12L36.12 7.29Q36.12 7.77 35.94 8.17Q35.82 8.42 35.62 8.64C35.3 8.99 34.86 9.17 34.3 9.19L31.56 9.19L31.56 3.36L35.02 3.36C35.72 3.37 36.26 3.58 36.63 3.98C37.01 4.38 37.2 4.93 37.2 5.64L37.2 5.85L37.44 5.85L37.44 2.4ZM196.76 7.41L196.76 15.33C196.78 15.68 196.91 15.98 197.17 16.22C197.43 16.44 197.73 16.56 198.08 16.56L198.49 16.56L198.49 16.79L191.77 16.79L191.77 16.56L192.15 16.56C192.52 16.56 192.83 16.44 193.09 16.22C193.35 15.98 193.47 15.68 193.47 15.33L193.47 4.8C193.47 3.98 193.43 3.32 193.35 2.83L193.23 2.06L193.45 2.06L204.47 11.74L204.47 3.86C204.45 3.51 204.31 3.22 204.06 3Q203.93 2.86 203.77 2.78Q203.5 2.64 203.15 2.64L202.74 2.64L202.74 2.4L209.48 2.4L209.48 2.64L209.07 2.64C208.72 2.64 208.41 2.76 208.14 3C207.88 3.22 207.75 3.51 207.75 3.86L207.75 14.3C207.75 14.86 207.77 15.36 207.8 15.79C207.85 16.2 207.89 16.53 207.92 16.77L207.99 17.11L207.78 17.11L196.76 7.41ZM55.21 2.13C54.77 2.1 54.38 2.08 54.06 2.08C53.26 2.08 52.55 2.23 51.93 2.52C51.3 2.8 50.8 3.22 50.41 3.76C50.05 4.31 49.82 4.96 49.74 5.73C49.65 6.55 49.77 7.3 50.13 7.99Q50.19 8.1 50.25 8.21Q50.81 9.09 51.88 9.64L55.29 11.8C55.93 12.14 56.38 12.48 56.65 12.84C56.94 13.17 57.09 13.56 57.09 13.99C57.09 14.56 56.85 15.07 56.39 15.5C55.93 15.93 55.23 16.15 54.3 16.15C53.45 16.15 52.73 15.97 52.12 15.62C51.51 15.25 51.05 14.76 50.73 14.16C50.42 13.55 50.29 12.88 50.34 12.16L50.15 12.16C49.96 12.47 49.8 12.85 49.67 13.32C49.54 13.76 49.47 14.22 49.45 14.68C49.44 15.13 49.49 15.52 49.62 15.84C49.85 16.08 50.17 16.29 50.58 16.48C51.01 16.68 51.53 16.83 52.12 16.94C52.71 17.05 53.35 17.11 54.04 17.11C55.16 17.11 56.13 16.94 56.94 16.6C57.77 16.25 58.42 15.75 58.89 15.09C59.37 14.44 59.63 13.66 59.68 12.76C59.73 11.9 59.57 11.16 59.2 10.56C58.83 9.95 58.33 9.48 57.69 9.16L53.92 6.84C53.61 6.66 53.33 6.48 53.08 6.31C52.84 6.13 52.65 5.93 52.5 5.71C52.37 5.47 52.33 5.2 52.36 4.92C52.39 4.36 52.64 3.91 53.1 3.57C53.58 3.24 54.21 3.07 54.97 3.07Q56.41 3.07 57.18 3.72C57.69 4.15 57.95 4.73 57.95 5.47L58.17 5.47L58.48 2.54C58.47 2.54 58.47 2.54 58.47 2.53L58.48 2.3L57.11 2.3C56.94 2.28 56.77 2.26 56.58 2.25C56.13 2.2 55.68 2.16 55.21 2.13ZM117.43 2.4L122.26 2.4L122.26 2.61L121.92 2.61C121.62 2.61 121.36 2.71 121.15 2.9C120.94 3.09 120.84 3.34 120.84 3.64L120.84 11.44C120.84 12.92 121.18 14.07 121.85 14.9C122.54 15.73 123.49 16.15 124.7 16.15C125.97 16.15 126.94 15.76 127.63 14.97C128.34 14.19 128.7 13.1 128.71 11.71L128.71 3.64C128.7 3.34 128.58 3.09 128.38 2.9C128.17 2.71 127.92 2.61 127.63 2.61L127.3 2.61L127.3 2.4L131.71 2.4L131.71 2.61L131.4 2.61C131.1 2.61 130.83 2.71 130.61 2.9C130.4 3.09 130.3 3.34 130.3 3.64L130.3 11.56C130.3 13.28 129.77 14.63 128.71 15.62C127.67 16.61 126.19 17.11 124.27 17.11C121.95 17.11 120.22 16.62 119.09 15.64Q118.55 15.17 118.18 14.59Q117.38 13.34 117.38 11.59L117.38 3.64C117.37 3.34 117.26 3.09 117.05 2.9C116.84 2.71 116.58 2.61 116.28 2.61L115.94 2.61L115.94 2.4L117.43 2.4ZM144.05 2.4L142.32 2.4L142.32 2.64L142.63 2.64C142.97 2.64 143.26 2.76 143.5 3C143.7 3.17 143.83 3.4 143.88 3.67L143.88 15.49C143.83 15.75 143.7 15.99 143.5 16.2C143.26 16.44 142.96 16.56 142.61 16.56L142.32 16.56L142.32 16.79L148.92 16.79L148.92 16.56L148.68 16.56C148.36 16.56 148.06 16.44 147.77 16.22C147.5 16 147.36 15.68 147.36 15.28L147.36 3.38C147.49 3.4 147.67 3.4 147.89 3.4Q148.27 3.38 148.73 3.4C148.94 3.4 149.18 3.44 149.45 3.52C149.74 3.59 150.02 3.72 150.29 3.91C150.56 4.08 150.79 4.36 150.96 4.72C151.15 5.08 151.27 5.55 151.3 6.14C151.31 6.36 151.31 6.56 151.27 6.74C151.26 6.92 151.23 7.05 151.2 7.15Q151.01 8.16 150.6 8.68C150.33 9.02 150.03 9.25 149.69 9.38C149.37 9.49 149.04 9.55 148.71 9.55L148.11 9.55L148.11 9.76C148.33 9.76 148.57 9.88 148.83 10.12C149.1 10.35 149.34 10.72 149.55 11.23C149.59 11.42 149.67 11.66 149.79 11.95C149.91 12.24 150.06 12.53 150.22 12.84L150.7 13.75C150.86 14.04 151.01 14.28 151.15 14.49C151.52 15.08 151.92 15.56 152.35 15.91C152.8 16.24 153.32 16.48 153.91 16.6C154.52 16.73 155.26 16.79 156.12 16.79L158.14 16.79L158.14 16.56C157.8 16.56 157.51 16.51 157.25 16.41Q156.87 16.27 156.51 15.93C156.27 15.69 155.99 15.36 155.67 14.92C155.39 14.54 155.13 14.17 154.87 13.82C154.63 13.45 154.43 13.13 154.27 12.86C154.11 12.57 154 12.36 153.94 12.24C153.7 11.87 153.36 11.48 152.93 11.06C152.51 10.64 152.07 10.36 151.61 10.22C152.39 10.09 153.03 9.83 153.51 9.43Q154.11 8.94 154.45 8.3Q154.52 8.16 154.59 8.01C154.83 7.45 154.95 6.89 154.95 6.33C154.95 5.58 154.79 4.96 154.49 4.46C154.2 3.95 153.81 3.55 153.31 3.26C152.82 2.96 152.26 2.74 151.63 2.61C151.01 2.47 150.37 2.4 149.71 2.4L144.05 2.4Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;