import Image from "next/image";
import Navigation from "../components/Navigation";
import Carousel from "../components/carousel";

export default function Home() {
	const stacks = ["solidity", "front-end", "back-end"];
	return (
		<main>
			<div className="page-container">
				<Navigation />
				<div className="hero">
					<h1 className="main-heading">
						Expand Your{" "}
						<span>
							<br />
							Dev Journey
						</span>
					</h1>
					<p>
						<i>
							There are only 10 types of people in this
							<br /> world: those who know binary and <br />
							those who {`don't`}
						</i>
					</p>
					<h3
						style={{
							fontFamily: "D3 Euronism",
							letterSpacing: "8px",
						}}>
						Stacks
					</h3>
				</div>
				<Carousel items={stacks} />
			</div>
		</main>
	);
}
