import React from "react";

function article_1() {
	return {
		date: " April 2024",
		title: "Ask Senior",
		description:
			" Web Development: Optimized slow rendering by creating a pipeline and decreases the time complexity by 20% of the website using Next js and React hooks.  Problem Slow Loading web-page, Noticed Wrong Region in mongo Cluster , Solution Migrated Whole database to the another cluster , makes 90% faster then before. • ontainerization: Created a new feature for tracking user records on the website to make it more personalized and deployed it using Docker, achieving 30% faster deployment times and improved scalability. • Added a responsive blog platform with React and Tailwind CSS, achieving a 30% faster load time for blog pages. • Built a scalable backend using Express JS and MongoDB, handling up to 10,000+ users . • Re-designed Whole Web-site using React and tailwind with Magic UI to make it more appealing look . • Integrated Firebase for image storage, reducing i",
		keywords: [
			
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Dec 2023",
		title: "Code-Alpha",
		description:
			"Made 3+ frontend websites for clients using React.js and Tailwind CSS, and next UI focusing on modern and user-friendly interfaces.• Integrated QR code generation functionality seamlessly into the frontend websites, enhancing the utility and versatility by 10%.",
		style: ``,
		keywords: [
			
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
