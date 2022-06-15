import React from "react";
import { GiHouse, GiWhiteBook } from "react-icons/gi";
import { FaMoneyCheckAlt, FaHotel, FaIndustry } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";
import { RiBuildingFill, RiGovernmentFill } from "react-icons/ri";
import GovernmentIcon from "../../assets/images/government_icon.svg";

function OurClients() {
	return (
		<div className="home__our-clients">
			<div className="home__our-clients__header">OUR WORKING AREAS</div>
			<div className="underline-separator">
				<div className="line"></div>
				<div className="mid"></div>
				<div className="line2"></div>
			</div>
			<div className="home__our-clients__clients">
				<div className="home__our-clients__clients__client">
					<div className="home__our-clients__clients__client__top">
						<GiHouse />
					</div>
					<div className="home__our-clients__clients__client__bottom">Residental</div>
				</div>
				<div className="home__our-clients__clients__client">
					<div className="home__our-clients__clients__client__top">
						<FaMoneyCheckAlt />
					</div>
					<div className="home__our-clients__clients__client__bottom">Commercial</div>
				</div>
				<div className="home__our-clients__clients__client">
					<div className="home__our-clients__clients__client__top">
						<FaHotel />
					</div>
					<div className="home__our-clients__clients__client__bottom">Hotel & Tourism</div>
				</div>
				<div className="home__our-clients__clients__client">
					<div className="home__our-clients__clients__client__top">
						<svg width="38" height="38" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 103.09 122.88">
							<path
								className="st0"
								d="M11.76,63.87l3.72-0.23c0.08,0.6,0.24,1.06,0.49,1.38c0.4,0.51,0.98,0.77,1.73,0.77 c0.56,0,0.99-0.13,1.29-0.39c0.3-0.26,0.45-0.57,0.45-0.91c0-0.33-0.14-0.62-0.43-0.88c-0.29-0.26-0.95-0.5-2-0.74 c-1.72-0.38-2.94-0.9-3.67-1.54c-0.74-0.64-1.11-1.45-1.11-2.44c0-0.65,0.19-1.26,0.57-1.84c0.38-0.58,0.94-1.04,1.7-1.37 c0.76-0.33,1.8-0.5,3.12-0.5c1.62,0,2.86,0.3,3.71,0.91c0.85,0.6,1.36,1.56,1.52,2.88l-3.69,0.22c-0.1-0.58-0.3-0.99-0.62-1.25 c-0.32-0.26-0.75-0.39-1.3-0.39c-0.45,0-0.8,0.1-1.03,0.29c-0.23,0.19-0.35,0.43-0.35,0.71c0,0.2,0.09,0.38,0.28,0.54 c0.18,0.17,0.62,0.32,1.31,0.47c1.71,0.37,2.94,0.74,3.68,1.12c0.74,0.38,1.28,0.84,1.62,1.41c0.34,0.56,0.51,1.18,0.51,1.88 c0,0.81-0.22,1.56-0.67,2.25c-0.45,0.68-1.08,1.21-1.89,1.56c-0.81,0.35-1.82,0.53-3.05,0.53c-2.16,0-3.65-0.42-4.48-1.25 C12.34,66.2,11.87,65.15,11.76,63.87L11.76,63.87z M53.64,84.95v32.45h11.52V84.95H53.64L53.64,84.95z M49.46,117.41V84.95H38.04 v32.45H49.46L49.46,117.41z M51.75,3.33c8.76-6.06,9.42,5.93,18.02-1.55v12.22c-8.21,7.38-9.98-4.54-18.02,1.52V3.33L51.75,3.33z M49.59,0c0.92,0,1.67,0.75,1.67,1.67c0,0.61-0.33,1.15-0.82,1.44l0.08,0v19.06h25.43v17.32h27.15v83.36 c-34.36,0-68.72,0.03-103.09,0.03V39.49h27.18V22.18h21.48V3.11h0.08c-0.49-0.29-0.82-0.83-0.82-1.44C47.92,0.75,48.66,0,49.59,0 L49.59,0z M50.15,30.52c0-0.59,0.48-1.07,1.07-1.07c0.59,0,1.07,0.48,1.07,1.07v4.13h3.06c0.59,0,1.07,0.48,1.07,1.07 c0,0.59-0.48,1.07-1.07,1.07h-4.13c-0.59,0-1.07-0.48-1.07-1.07V30.52L50.15,30.52z M51.55,27.66c4.02,0,7.28,3.26,7.28,7.28 c0,4.02-3.26,7.28-7.28,7.28c-4.02,0-7.28-3.26-7.28-7.28C44.27,30.92,47.53,27.66,51.55,27.66L51.55,27.66z M5.73,48.49h92.32 v24.86H5.73V48.49L5.73,48.49z M11.07,94.59h13.59V110H11.07V94.59L11.07,94.59z M78.43,94.59h13.59V110H78.43V94.59L78.43,94.59z M81.97,55.38h3.92v9.57h6.13v3.12H81.97V55.38L81.97,55.38z M66.98,61.73c0-2.07,0.58-3.68,1.73-4.83 c1.15-1.15,2.76-1.73,4.82-1.73c2.11,0,3.74,0.57,4.88,1.7c1.14,1.13,1.71,2.72,1.71,4.76c0,1.48-0.25,2.7-0.75,3.64 c-0.5,0.95-1.22,1.69-2.16,2.21c-0.94,0.53-2.12,0.79-3.53,0.79c-1.43,0-2.61-0.23-3.55-0.68c-0.94-0.46-1.7-1.18-2.28-2.16 C67.27,64.45,66.98,63.21,66.98,61.73L66.98,61.73z M70.89,61.74c0,1.28,0.24,2.2,0.71,2.76c0.48,0.56,1.13,0.84,1.95,0.84 c0.84,0,1.5-0.27,1.96-0.82c0.46-0.55,0.69-1.53,0.69-2.95c0-1.19-0.24-2.06-0.72-2.61c-0.48-0.55-1.14-0.83-1.96-0.83 c-0.79,0-1.43,0.28-1.91,0.84C71.13,59.52,70.89,60.45,70.89,61.74L70.89,61.74z M52.48,61.73c0-2.07,0.58-3.68,1.73-4.83 c1.15-1.15,2.76-1.73,4.82-1.73c2.11,0,3.74,0.57,4.88,1.7c1.14,1.13,1.71,2.72,1.71,4.76c0,1.48-0.25,2.7-0.75,3.64 c-0.5,0.95-1.22,1.69-2.16,2.21c-0.95,0.53-2.12,0.79-3.53,0.79c-1.43,0-2.61-0.23-3.55-0.68c-0.94-0.46-1.7-1.18-2.28-2.16 C52.77,64.45,52.48,63.21,52.48,61.73L52.48,61.73z M56.4,61.74c0,1.28,0.24,2.2,0.71,2.76c0.48,0.56,1.13,0.84,1.95,0.84 c0.84,0,1.5-0.27,1.96-0.82c0.46-0.55,0.69-1.53,0.69-2.95c0-1.19-0.24-2.06-0.72-2.61c-0.48-0.55-1.14-0.83-1.96-0.83 c-0.79,0-1.43,0.28-1.91,0.84C56.64,59.52,56.4,60.45,56.4,61.74L56.4,61.74z M38.5,55.38h3.92v4.43h4.29v-4.43h3.93v12.68H46.7 v-5.14h-4.29v5.14H38.5V55.38L38.5,55.38z M33.42,62.87l3.44,1.04c-0.23,0.96-0.59,1.77-1.09,2.41c-0.5,0.65-1.11,1.13-1.85,1.46 c-0.74,0.33-1.67,0.49-2.81,0.49c-1.38,0-2.51-0.2-3.38-0.6c-0.87-0.4-1.63-1.11-2.26-2.11c-0.63-1.01-0.95-2.3-0.95-3.87 c0-2.1,0.56-3.71,1.67-4.84c1.12-1.13,2.7-1.69,4.74-1.69c1.6,0,2.86,0.32,3.77,0.97c0.91,0.65,1.59,1.64,2.04,2.98l-3.45,0.76 c-0.12-0.38-0.25-0.66-0.38-0.84c-0.22-0.3-0.49-0.53-0.81-0.69c-0.32-0.16-0.67-0.24-1.07-0.24c-0.89,0-1.57,0.36-2.05,1.07 c-0.36,0.53-0.54,1.36-0.54,2.49c0,1.41,0.21,2.37,0.64,2.89c0.43,0.52,1.03,0.78,1.8,0.78c0.75,0,1.32-0.21,1.7-0.63 C32.97,64.28,33.24,63.67,33.42,62.87L33.42,62.87z"
							/>
						</svg>
					</div>
					<div className="home__our-clients__clients__client__bottom">Education</div>
				</div>
				<div className="home__our-clients__clients__client">
					<div className="home__our-clients__clients__client__top">
						<FaIndustry />
					</div>
					<div className="home__our-clients__clients__client__bottom">Industrial</div>
				</div>
				<div className="home__our-clients__clients__client">
					<div className="home__our-clients__clients__client__top">
						<MdRealEstateAgent />
					</div>
					<div className="home__our-clients__clients__client__bottom">Real estate</div>
				</div>
				<div className="home__our-clients__clients__client">
					<div className="home__our-clients__clients__client__top">
						<RiBuildingFill />
					</div>
					<div className="home__our-clients__clients__client__bottom">Rental Retails</div>
				</div>
				<div className="home__our-clients__clients__client">
					<div className="home__our-clients__clients__client__top">
						<svg
							height="100px"
							width="100px"
							fill="#000000"
							xmlns="http://www.w3.org/2000/svg"
							xlink="http://www.w3.org/1999/xlink"
							version="1.1"
							x="0px"
							y="0px"
							width="40"
							height="40"
							viewBox="0 0 100 100"
							enable-background="new 0 0 100 100"
							space="preserve"
						>
							<g>
								<polygon points="26.389,50.643 50,44.347 73.611,50.643 73.611,52.777 79.167,52.777 79.167,41.667 20.833,41.667 20.833,52.777    26.389,52.777  "></polygon>
								<path d="M70.833,91.667V59.724v-2.778v-0.001v-4.167L50,47.223l-20.833,5.555v4.167v0.001v2.778v31.943H37.5V59.724h8.333v31.943   h8.334V59.724H62.5v31.943H70.833z"></path>
								<path d="M66.667,36.111c0-0.001,0-0.001,0-0.001c0-8.256-6.009-15.092-13.89-16.417v-3.721c0-0.384-0.311-0.694-0.694-0.694h-0.694   v-3.594c4.894,2.449,8.925-1.771,15.278,0.768V2.778C60.313,0.239,56.282,4.459,51.389,2.01V1.389C51.389,0.621,50.768,0,50,0   s-1.389,0.621-1.389,1.389v13.889h-0.694c-0.384,0-0.694,0.311-0.694,0.694v3.721c-7.881,1.325-13.89,8.161-13.89,16.417   c0,0,0,0,0,0.001v2.777h33.334V36.111z"></path>
								<polygon points="26.389,94.444 20.833,100 79.167,100 73.611,94.444  "></polygon>
								<path d="M73.611,55.556v36.111h1.15l0.813,0.813l5.556,5.556L83.095,100H100V55.556H73.611z M84.723,84.723h-5.556v-8.334h5.556   V84.723z M84.723,70.833h-5.556V62.5h5.556V70.833z M94.444,84.723h-5.556v-8.334h5.556V84.723z M94.444,70.833h-5.556V62.5h5.556   V70.833z"></path>
								<path d="M25.238,91.667h1.15V55.556H0V100h16.905l1.964-1.964l5.556-5.556L25.238,91.667z M11.111,84.723H5.556v-8.334h5.556   V84.723z M11.111,70.833H5.556V62.5h5.556V70.833z M20.833,84.723h-5.556v-8.334h5.556V84.723z M20.833,70.833h-5.556V62.5h5.556   V70.833z"></path>
							</g>
						</svg>
					</div>
					<div className="home__our-clients__clients__client__bottom">Governmental</div>
				</div>
			</div>
		</div>
	);
}

export default OurClients;
